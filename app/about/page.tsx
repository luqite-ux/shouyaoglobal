import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us | TIANYU ELECTRIC",
  description:
    "TIANYU ELECTRIC (Fuzhou Tianyu Electric Co., Ltd.) was formed from the combination of the Fuzhou First Switch Factory, Fuzhou Second Switch Factory and Fuzhou Transformer Factory.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="TIANYU ELECTRIC"
        description="Fuzhou Tianyu Electric Co., Ltd. — 福州天宇电气股份有限公司"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Company Background" title="Our History" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                TIANYU ELECTRIC, the brand of Fuzhou Tianyu Electric Co., Ltd. (福州天宇电气股份有限公司), was formed from
                the combination of the Fuzhou First Switch Factory, the Fuzhou Second Switch Factory and the Fuzhou
                Transformer Factory.
              </p>
              <p>
                Company materials trace the roots of these predecessor factories to 1958, with the current company
                formed in 1995.
              </p>
              <p>
                Today, TIANYU ELECTRIC manufactures distribution transformers and compact substation platforms for
                utility, industrial and renewable-energy power networks, supported by manufacturing and high-voltage
                testing capability at its Fuzhou facility.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90} className="mt-12 border border-border bg-card p-6 sm:p-8">
            <h2 className="font-heading text-lg font-semibold text-foreground">Company Information</h2>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Legal Entity</dt>
                <dd className="mt-1 text-sm text-foreground">{siteConfig.legalNameEn}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Chinese Name</dt>
                <dd className="mt-1 text-sm text-foreground">{siteConfig.legalNameZh}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Address</dt>
                <dd className="mt-1 text-sm text-foreground">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Email</dt>
                <dd className="mt-1 text-sm text-foreground">{siteConfig.email}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Phone</dt>
                <dd className="mt-1 text-sm text-foreground">{siteConfig.phone}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </>
  )
}
