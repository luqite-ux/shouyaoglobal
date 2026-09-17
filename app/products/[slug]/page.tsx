import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { ProductCard } from "@/components/products/product-card"
import { Button } from "@/components/ui/button"
import { resolveLocalizedText } from "@/lib/i18n"
import { products as fallbackProducts } from "@/lib/products"
import { fetchProductBySlug, fetchProductsData } from "@/lib/products-db"
import { siteConfig } from "@/lib/site-config"

export const revalidate = 60
export const dynamicParams = true

export function generateStaticParams() {
  return fallbackProducts.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await fetchProductBySlug(slug)
  if (!product) return {}
  return {
    title: resolveLocalizedText(product.name),
    description: resolveLocalizedText(product.summary),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: resolveLocalizedText(product.name), description: resolveLocalizedText(product.summary), url: `/products/${product.slug}`, type: "website", images: [{ url: product.image, alt: resolveLocalizedText(product.imageAlt) }] },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await fetchProductBySlug(slug)
  if (!product) notFound()

  const related = (await fetchProductsData()).filter((p) => p.slug !== product.slug).slice(0, 3)
  const productUrl = `${siteConfig.url}/products/${product.slug}`
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Product", "@id": `${productUrl}#product`, name: resolveLocalizedText(product.name), description: resolveLocalizedText(product.summary), image: [new URL(product.image, siteConfig.url).toString()], manufacturer: { "@id": `${siteConfig.url}/#organization` }, url: productUrl },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "Products", item: `${siteConfig.url}/products` }, { "@type": "ListItem", position: 3, name: resolveLocalizedText(product.shortName), item: productUrl }] },
  ] }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="border-b border-border bg-secondary/40 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs">
            <Link href="/products" className="control-feedback text-muted-foreground hover:text-brand">
              Products
            </Link>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-foreground">{resolveLocalizedText(product.shortName)}</span>
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal className="relative aspect-[4/3] overflow-hidden border border-border bg-gradient-to-b from-white to-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={resolveLocalizedText(product.imageAlt)}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain p-8"
                priority
              />
            </Reveal>

            <Reveal delay={90}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                {product.category === "transformer" ? "Distribution Transformer" : "Compact Substation"}
              </p>
              <h1 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-tight text-foreground sm:text-3xl">
                {resolveLocalizedText(product.name)}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {resolveLocalizedText(product.description)}
              </p>

              <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {product.specs.map((spec) => (
                  <div key={resolveLocalizedText(spec.label)} className="bg-card p-4">
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {resolveLocalizedText(spec.label)}
                    </dt>
                    <dd className="mt-1 font-heading text-lg font-semibold text-foreground">
                      {resolveLocalizedText(spec.value)}
                    </dd>
                  </div>
                ))}
              </dl>

              {product.applications.length > 0 && (
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Applications</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={resolveLocalizedText(app)}
                        className="border border-border bg-card px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {resolveLocalizedText(app)}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.standardsNote && (
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {resolveLocalizedText(product.standardsNote)}
                </p>
              )}

              <div className="mt-8">
                <Button asChild size="lg" className="control-feedback bg-brand text-brand-foreground hover:bg-brand-dark">
                  <Link href={`/contact?product=${product.slug}`}>
                    Request a Quote for This Product
                    <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="font-heading text-xl font-semibold uppercase tracking-tight text-foreground">
                Other Product Families
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((product, i) => (
                <Reveal key={product.slug} variant="lamination" delay={i * 70}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
