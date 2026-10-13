import fs from "node:fs"
import path from "node:path"

const sourcePath =
  process.argv[2] ??
  "C:\\Users\\Tom Miller\\Downloads\\petra-backups_db_backup_20250513011135.sql"
const outputPath =
  process.argv[3] ??
  path.join(process.cwd(), "migration", "eazyhq", "petra-content.eazydb.json")

const sql = fs.readFileSync(sourcePath, "utf8")

function decodeCopyValue(value) {
  if (value === "\\N") return null

  return value.replace(/\\([\\tnrbfv])/g, (_, escaped) => {
    const replacements = {
      "\\": "\\",
      t: "\t",
      n: "\n",
      r: "\r",
      b: "\b",
      f: "\f",
      v: "\v",
    }
    return replacements[escaped] ?? escaped
  })
}

function copyRows(tableName) {
  const escapedName = tableName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const pattern = new RegExp(
    `COPY public\\."${escapedName}" \\(([^)]+)\\) FROM stdin;\\r?\\n([\\s\\S]*?)\\r?\\n\\\\\\.`,
    "m"
  )
  const match = sql.match(pattern)
  if (!match) throw new Error(`COPY block not found for ${tableName}`)

  const columns = [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1])
  return match[2]
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const values = line.split("\t").map(decodeCopyValue)
      return Object.fromEntries(
        columns.map((column, index) => [column, values[index]])
      )
    })
    .filter((row) => row.DeletedAt == null)
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function applicationUrl(name) {
  const subdomain = name.replace(/[^a-zA-Z]/g, "").toLowerCase()
  return subdomain ? `https://${subdomain}.zipforhome.com` : ""
}

function headshotUrl(name, legacyUrl) {
  const localPortraits = {
    "jason-o-quinn": "/images/jo.jpg",
    "kyle-kisselburg": "/images/kk.jpg",
    "kevin-russell": "/images/kr.jpg",
    "mary-russell": "/images/mr.jpg",
    "joshua-hernandez": "/images/jh.jpg",
  }

  return localPortraits[slugify(name)] ?? legacyUrl ?? ""
}

function field(
  name,
  slug,
  fieldType,
  sortOrder,
  {
    required = false,
    primary = false,
    interfaceKind,
    displayKind,
    settings = {},
  } = {}
) {
  return {
    name,
    slug,
    field_type: fieldType,
    is_required: required,
    is_primary_key: primary,
    foreign_field: "",
    default_value: {},
    settings,
    interfaces: interfaceKind ? { kind: interfaceKind } : {},
    displays: displayKind ? { kind: displayKind } : {},
    sort_order: sortOrder,
  }
}

function table(name, slug, description, fields, records) {
  return {
    schema_version: 1,
    exported_at: new Date().toISOString(),
    table: {
      name,
      slug,
      description,
      status: "active",
      primary_key_name: "legacy_id",
      settings: { source: "petra-legacy-sql", public_read: true },
      interfaces: {},
      displays: {},
    },
    fields,
    records: records.map((values) => ({ values })),
  }
}

const faqRows = copyRows("FAQS")
const resourceRows = copyRows("Resources")
const teamRows = copyRows("TeamMembers")

const faqs = table(
  "FAQs",
  "faqs",
  "Published Petra Lending website questions and answers.",
  [
    field("Legacy ID", "legacy_id", "text", 10, {
      required: true,
      primary: true,
    }),
    field("Question", "question", "text", 20, { required: true }),
    field("Slug", "slug", "text", 30, { required: true }),
    field("Answer", "answer", "markdown", 40, {
      required: true,
      interfaceKind: "markdown_wysiwyg",
      displayKind: "markdown",
    }),
    field("Category", "category", "select", 50, {
      interfaceKind: "dropdown_select",
      displayKind: "badge",
      settings: { options: ["General", "Applications", "Loans", "Payments"] },
    }),
    field("Published", "published", "boolean", 60, {
      interfaceKind: "toggle",
      displayKind: "badge",
    }),
    field("Featured", "featured", "boolean", 70, {
      interfaceKind: "toggle",
      displayKind: "badge",
    }),
    field("Sort Order", "sort_order", "number", 80, {
      interfaceKind: "number",
    }),
  ],
  faqRows.map((row, index) => ({
    legacy_id: row.ID,
    question: row.Question ?? "",
    slug: `${slugify(row.Question ?? "question")}-${index + 1}`,
    answer: row.Answer ?? "",
    category: "General",
    published: true,
    featured: false,
    sort_order: index + 1,
  }))
)

function resourceCategory(title, link) {
  const searchable = `${title} ${link}`.toLowerCase()
  if (/privacy|terms|recovery fund|nmls/.test(searchable)) return "Compliance"
  if (/calculator|eligibility|tool/.test(searchable)) return "Tools"
  return "Documents"
}

const resources = table(
  "Resources",
  "resources",
  "Published Petra Lending downloads, calculators, compliance documents, and external tools.",
  [
    field("Legacy ID", "legacy_id", "text", 10, {
      required: true,
      primary: true,
    }),
    field("Title", "title", "text", 20, { required: true }),
    field("Slug", "slug", "text", 30, { required: true }),
    field("Description", "description", "markdown", 40, {
      interfaceKind: "markdown_wysiwyg",
      displayKind: "markdown",
    }),
    field("Destination URL", "destination_url", "text", 50, { required: true }),
    field("Icon URL", "icon_url", "text", 60),
    field("Category", "category", "select", 70, {
      interfaceKind: "dropdown_select",
      displayKind: "badge",
      settings: { options: ["Documents", "Tools", "Compliance"] },
    }),
    field("Open in New Tab", "open_in_new_tab", "boolean", 80, {
      interfaceKind: "toggle",
    }),
    field("Published", "published", "boolean", 90, {
      interfaceKind: "toggle",
      displayKind: "badge",
    }),
    field("Sort Order", "sort_order", "number", 100, {
      interfaceKind: "number",
    }),
  ],
  resourceRows.map((row) => ({
    legacy_id: row.ID,
    title: row.Title?.trim() ?? "",
    slug: slugify(row.Title ?? "resource"),
    description: row.Description?.trim() ?? "",
    destination_url: row.Link ?? "",
    icon_url: row.IconLink ?? "",
    category: resourceCategory(row.Title ?? "", row.Link ?? ""),
    open_in_new_tab: true,
    published: true,
    sort_order: Number(row.Order) || 0,
  }))
)

const teamMembers = table(
  "Team Members",
  "team-members",
  "Petra Lending public team directory and loan officer application routing.",
  [
    field("Legacy ID", "legacy_id", "text", 10, {
      required: true,
      primary: true,
    }),
    field("Name", "name", "text", 20, { required: true }),
    field("Slug", "slug", "text", 30, { required: true }),
    field("Title", "title", "text", 40),
    field("Biography", "biography", "markdown", 50, {
      interfaceKind: "markdown_wysiwyg",
      displayKind: "markdown",
    }),
    field("Headshot URL", "headshot_url", "text", 60),
    field("NMLS Number", "nmls_number", "text", 70),
    field("Phone", "phone", "text", 80),
    field("Email", "email", "text", 90),
    field("Quote", "quote_text", "markdown", 100, {
      interfaceKind: "markdown_wysiwyg",
      displayKind: "markdown",
    }),
    field("Application URL", "application_url", "text", 110),
    field("Published", "published", "boolean", 120, {
      interfaceKind: "toggle",
      displayKind: "badge",
    }),
    field("Sort Order", "sort_order", "number", 130, {
      interfaceKind: "number",
    }),
  ],
  teamRows.map((row, index) => ({
    legacy_id: row.ID,
    name: row.Name?.trim() ?? "",
    slug: slugify(row.Name ?? "team-member"),
    title: row.Title?.trim() ?? "",
    biography: row.Biography ?? "",
    headshot_url: headshotUrl(row.Name ?? "", row.Image),
    nmls_number: row.RNumber ?? "",
    phone: row.Phone ?? "",
    email: row.Email ?? "",
    quote_text: row.QuoteText ?? "",
    application_url: applicationUrl(row.Name ?? ""),
    published: row.Published === "t",
    sort_order: index + 1,
  }))
)

const workspacePackage = {
  schema_version: 1,
  exported_at: new Date().toISOString(),
  tables: [faqs, resources, teamMembers],
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, `${JSON.stringify(workspacePackage, null, 2)}\n`)

console.log(
  `Created ${outputPath} with ${faqRows.length} FAQs, ${resourceRows.length} resources, and ${teamRows.length} team members.`
)
