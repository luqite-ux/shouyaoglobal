import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { navLinks, siteConfig } from "@/lib/site-config"
import { products } from "@/lib/products"

export function SiteFooter() {
  const year = new Date().getFullYear()
  const copyrightOwner = siteConfig.legalNameEn.replace(/[.;:!?；：！？。\s]+$/u, "")

  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
          <div>
            <Image
              src="/images/logo.png"
              alt="TIANYU ELECTRIC logo"
              width={200}
              height={58}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="control-feedback inline-flex min-h-[36px] items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Products</h3>
            <ul className="mt-4 space-y-2">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="control-feedback inline-flex min-h-[36px] items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {product.shortName.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneHref}`} className="control-feedback hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="control-feedback hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {copyrightOwner}. All rights reserved.
          </p>
          <p className="text-muted-foreground/80">{siteConfig.domain}</p>
        </div>
      </div>
    </footer>
  )
}
