import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ProductCard } from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

export function ProductFamilies() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Product Range"
            title="Four Verified Product Families"
            description="Distribution transformers and compact substation platforms engineered for utility, industrial and renewable-energy power networks."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal key={product.slug} variant="lamination" delay={i * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80} className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="control-feedback">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
