import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/lib/products"
import { resolveLocalizedText } from "@/lib/i18n"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="control-feedback group flex h-full flex-col border border-border bg-card"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-white to-secondary p-6">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={resolveLocalizedText(product.imageAlt)}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-6"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 border-t border-border p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {product.category === "transformer" ? "Distribution Transformer" : "Compact Substation"}
        </p>
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
          {resolveLocalizedText(product.shortName)}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground">{resolveLocalizedText(product.summary)}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-brand">
          View Details
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
