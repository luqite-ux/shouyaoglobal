import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { fetchProductsData } from "@/lib/products-db"
import { ProductsCatalog } from "./products-catalog"

export const metadata: Metadata = {
  alternates: { canonical: "/products" },
  title: "Products",
  description:
    "Browse the S(B)20(22) series distribution transformer and European-style, Hua-style and American-type compact substation product families from TIANYU ELECTRIC.",
}

export const revalidate = 60

export default async function ProductsPage() {
  const products = await fetchProductsData()

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Distribution Transformers & Compact Substations"
        description="Four verified product families engineered for utility, industrial and renewable-energy power networks. Select a category to filter, then open a product for full specifications and a product-specific quote request."
      />
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductsCatalog products={products} />
        </div>
      </section>
    </>
  )
}
