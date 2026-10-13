import "server-only"
import TeamMember from "@/components/interfaces/TeamMember.interface"

export interface PetraResource {
  ID?: string
  Title: string
  Description: string
  Link: string
  IconLink?: string
  Order?: number
  Published?: boolean
}

export interface PetraFAQ {
  ID?: string
  Question: string
  Answer: string
  Order?: number
  Published?: boolean
}

type JsonObject = Record<string, unknown>

const apiBase = (process.env.EAZYHQ_API_URL || "https://app.baas.dev").replace(
  /\/$/,
  ""
)
const workspace = process.env.EAZYHQ_WORKSPACE_SLUG || "petra"
const siteFlow = process.env.EAZYHQ_SITE_FLOW_SLUG || "petra-site-api"

function flowUrl(flow: string, path: string) {
  return `${apiBase}/api/workspaces/${encodeURIComponent(
    workspace
  )}/flows/${encodeURIComponent(flow)}/${path.replace(/^\//, "")}`
}

function objectValue(source: JsonObject, ...keys: string[]) {
  for (const key of keys) {
    if (source[key] !== undefined && source[key] !== null) return source[key]
  }
  return undefined
}

function stringValue(source: JsonObject, ...keys: string[]) {
  const value = objectValue(source, ...keys)
  return value === undefined ? "" : String(value)
}

function booleanValue(source: JsonObject, ...keys: string[]) {
  const value = objectValue(source, ...keys)
  return value === true || value === 1 || String(value).toLowerCase() === "true"
}

function numberValue(source: JsonObject, ...keys: string[]) {
  const value = Number(objectValue(source, ...keys))
  return Number.isFinite(value) ? value : 0
}

function recordsFrom(payload: unknown): JsonObject[] {
  let value: unknown = payload
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const object = value as JsonObject
    value =
      object.data ??
      object.records ??
      object.items ??
      object.data_records ??
      object.result
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const object = value as JsonObject
    value = object.data ?? object.records ?? object.items ?? value
  }
  if (!Array.isArray(value)) return []

  return value.map((record) => {
    const object = (record || {}) as JsonObject
    const values =
      object.values && typeof object.values === "object"
        ? (object.values as JsonObject)
        : object
    return { ...values, _record_id: object.id }
  })
}

async function getContent(path: string): Promise<JsonObject[]> {
  const response = await fetch(`${flowUrl(siteFlow, path)}?per_page=23`, {
    headers: { Accept: "application/json" },
    next: { revalidate: 60 },
  })
  if (!response.ok) {
    throw new Error(`Petra content request failed (${response.status})`)
  }
  return recordsFrom(await response.json())
}

export async function getPetraTeam(): Promise<TeamMember[]> {
  const records = await getContent("team-members")
  return records
    .map((record) => ({
      ID: stringValue(record, "legacy-id", "legacy_id", "_record_id"),
      Name: stringValue(record, "name", "Name"),
      Phone: stringValue(record, "phone", "Phone"),
      Email: stringValue(record, "email", "Email"),
      Image: stringValue(record, "headshot-url", "headshot_url", "Image"),
      Biography: stringValue(record, "biography", "Biography"),
      RNumber: numberValue(record, "nmls-number", "nmls_number", "RNumber"),
      Title: stringValue(record, "title", "Title"),
      ApplicationURL: stringValue(
        record,
        "application-url",
        "application_url",
        "ApplicationURL"
      ),
      Published: booleanValue(record, "published", "Published"),
      Order: numberValue(record, "sort-order", "sort_order", "Order"),
    }))
    .filter((item) => item.Published)
    .sort((a, b) => a.Order - b.Order)
}

export async function getPetraResources(): Promise<PetraResource[]> {
  const records = await getContent("resources")
  return records
    .map((record) => ({
      ID: stringValue(record, "legacy-id", "legacy_id", "_record_id"),
      Title: stringValue(record, "title", "Title"),
      Description: stringValue(record, "description", "Description"),
      Link: stringValue(record, "destination-url", "destination_url", "Link"),
      IconLink: stringValue(record, "icon-url", "icon_url", "IconLink"),
      Order: numberValue(record, "sort-order", "sort_order", "Order"),
      Published: booleanValue(record, "published", "Published"),
    }))
    .filter((item) => item.Published)
    .sort((a, b) => (a.Order || 0) - (b.Order || 0))
}

export async function getPetraFAQs(): Promise<PetraFAQ[]> {
  const records = await getContent("faqs")
  return records
    .map((record) => ({
      ID: stringValue(record, "legacy-id", "legacy_id", "_record_id"),
      Question: stringValue(record, "question", "Question"),
      Answer: stringValue(record, "answer", "Answer"),
      Order: numberValue(record, "sort-order", "sort_order", "Order"),
      Published: booleanValue(record, "published", "Published"),
    }))
    .filter((item) => item.Published)
    .sort((a, b) => (a.Order || 0) - (b.Order || 0))
}

export async function submitPetraForm(
  form: "contact" | "prequalification",
  values: JsonObject
) {
  const response = await fetch(
    `${apiBase}/api/forms/${encodeURIComponent(workspace)}/${form}/submit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        values,
        metadata: { source: "petralending.com" },
      }),
      cache: "no-store",
    }
  )

  const payload = await response.json().catch(() => ({}))
  if (!response.ok) {
    const message =
      payload && typeof payload === "object" && "error" in payload
        ? String(payload.error)
        : `Form submission failed (${response.status})`
    throw new Error(message)
  }
  return payload
}
