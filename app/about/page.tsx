import type { Metadata } from "next"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Learn about Shouyao Power Technology (Jiangsu) Co., Ltd., its distribution transformers and compact substations.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Shouyao Power"
        description="Shouyao Power Technology (Jiangsu) Co., Ltd. — 首耀电力科技（江苏）有限公司"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Company Background" title="About Shouyao Power" />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Shouyao Power Technology (Jiangsu) Co., Ltd. (首耀电力科技（江苏）有限公司) was established in February 2026.
                The company operates in the power and electrical equipment sector with registered capital of RMB 100 million.
              </p>
              <p>
                Its business scope includes the manufacture and sale of power transmission and distribution equipment,
                switchgear, transformers, photovoltaic equipment and power electronic components. It also covers
                technical services, energy storage technology and new-energy research and development.
              </p>
              <p>
                Shouyao Power offers distribution transformers, high- and low-voltage switchgear, and compact
                substations for utility, industrial and renewable-energy applications. Its company materials describe
                production lines and inspection equipment supporting these product families.
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
