import assert from "node:assert/strict"
import test from "node:test"
import { pathToFileURL } from "node:url"
import path from "node:path"

const root = path.resolve(import.meta.dirname, "..")
const moduleUrl = pathToFileURL(path.join(root, "lib", "product-rich-text.ts")).href

test("product rich text keeps safe formatting and removes unsafe markup", async () => {
  const { sanitizeProductRichText } = await import(moduleUrl)
  const input = '<p><span style="font-size: 11pt; color: red">Transformer details</span></p><script>alert(1)</script><a href="javascript:alert(2)">bad link</a>'

  const output = sanitizeProductRichText(input)

  assert.match(output, /<p><span>Transformer details<\/span><\/p>/)
  assert.doesNotMatch(output, /font-size|color|script|javascript/i)
})

test("plain product descriptions remain readable", async () => {
  const { sanitizeProductRichText } = await import(moduleUrl)

  assert.equal(sanitizeProductRichText("Plain transformer description."), "Plain transformer description.")
})
