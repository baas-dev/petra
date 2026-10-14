import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const outputDir = path.resolve(".open-next", "server-functions", "default")
const manifestPath = path.join(
  outputDir,
  ".next",
  "server",
  "middleware-manifest.json"
)
const handlerPath = path.join(outputDir, "handler.mjs")

const manifest = JSON.parse(await readFile(manifestPath, "utf8"))
const hasMiddleware =
  Object.keys(manifest.middleware ?? {}).length > 0 ||
  Object.keys(manifest.functions ?? {}).length > 0

if (hasMiddleware) {
  throw new Error(
    "Refusing to patch OpenNext: the application now has middleware functions."
  )
}

const original =
  "getMiddlewareManifest(){return this.minimalMode?null:require(this.middlewareManifestPath)}"
const replacement = "getMiddlewareManifest(){return null}"
const handler = await readFile(handlerPath, "utf8")
const occurrences = handler.split(original).length - 1

if (occurrences === 0 && handler.includes(replacement)) {
  console.log("OpenNext Next.js 14 middleware patch is already applied.")
  process.exit(0)
}

if (occurrences !== 1) {
  throw new Error(
    `Expected one OpenNext middleware lookup, found ${occurrences}.`
  )
}

await writeFile(handlerPath, handler.replace(original, replacement))
console.log("Patched the unused Next.js 14 middleware lookup for Cloudflare.")
