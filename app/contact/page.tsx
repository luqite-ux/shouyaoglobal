import type { Metadata } from "next"
import { Suspense } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/layout/page-hero"
import { InquiryForm } from "@/components/contact/inquiry-form"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact & Request a Quote",
  description:
    "Contact TIANYU ELECTRIC or submit a product-specific request for quote for distribution transformers and compact substations.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us & Request a Quote"
        description="Tell us about your project and target product. Our team will follow up using the contact details you provide."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <Reveal>
            <h2 className="font-heading text-lg font-semibold text-foreground">Company Details</h2>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="control-feedback hover:text-brand">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneHref}`} className="control-feedback hover:text-brand">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              {siteConfig.legalNameEn} ({siteConfig.legalNameZh})
            </p>
          </Reveal>

          <Reveal delay={90}>
            <Suspense>
              <InquiryForm />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  )
}
