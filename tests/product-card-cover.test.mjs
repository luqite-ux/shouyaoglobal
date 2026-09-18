import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

const componentUrl = new URL("../components/products/product-card.tsx", import.meta.url)

test("product cards use dedicated full-bleed covers without inset padding", async () => {
  const source = await readFile(componentUrl, "utf8")

  assert.match(source, /const productCardCovers/)
  assert.match(source, /className="object-cover"/)
  assert.doesNotMatch(source, /object-contain/)
  assert.doesNotMatch(source, /bg-gradient-to-b/)
  assert.doesNotMatch(source, /className="[^"]*\bp-6\b[^"]*"/)
})
