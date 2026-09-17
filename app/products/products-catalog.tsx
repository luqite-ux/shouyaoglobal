"use client"

import { useMemo, useState } from "react"
import { Reveal } from "@/components/motion/reveal"
import { ProductCard } from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { cn } from "@/lib/utils"

const filters: { value: "all" | Product["category"]; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "transformer", label: "Distribution Transformers" },
  { value: "compact-substation", label: "Compact Substations" },
]

export function ProductsCatalog({ products }: { products: Product[] }) {
  const [active, setActive] = useState<"all" | Product["category"]>("all")

  const visible = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active, products],
  )

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-2 border-b border-border pb-6"
      >
        {filters.map((filter) => (
          <Button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active === filter.value}
            variant={active === filter.value ? "default" : "outline"}
            onClick={() => setActive(filter.value)}
            className={cn(
              "control-feedback",
              active === filter.value && "bg-brand text-brand-foreground hover:bg-brand-dark",
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product, i) => (
          <Reveal key={product.slug} variant="lamination" delay={(i % 3) * 70}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
