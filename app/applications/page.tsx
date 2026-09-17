import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Wind, Sun, Battery, Building2 } from "lucide-react"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  alternates: { canonical: "/applications" },
  title: "Applications | TIANYU ELECTRIC",
  description:
    "TIANYU ELECTRIC compact substations and distribution transformers are applied in wind power, photovoltaic, energy storage and urban distribution networks.",
}

const applications = [
  {
    icon: Wind,
    title: "Wind Power",
    description:
      "European-style and Hua-style compact substations are installed inside wind turbine tower platforms to step down power for grid connection.",
    image: "/images/capabilities/wind-application-field.jpg",
    alt: "European-style compact substation installed at the base of a wind turbine tower with a wind farm in the background",
  },
  {
    icon: Sun,
    title: "Photovoltaic",
    description:
      "The Hua-style compact substation platform has been applied in the Three Gorges Dongshan Xingchen 180 MW offshore photovoltaic project, and the American-type compact substation has been applied in the Xinglongzhuang Phase I 250 MW floating photovoltaic project in Yanzhou, Jining.",
    image: "/images/products/hua-style-compact-substation.png",
    alt: "Hua-style compact substation enclosure used in photovoltaic project installations",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description:
      "European-style compact substations support energy storage installations requiring a prefabricated, factory-tested power package.",
    image: "/images/products/european-compact-substation.png",
    alt: "European-style compact substation enclosure for energy storage applications",
  },
  {
    icon: Building2,
    title: "Urban Distribution",
    description:
      "S(B)20(22) series distribution transformers and compact substations serve utility and industrial power distribution networks in urban settings.",
    image: "/images/products/distribution-transformer.png",
    alt: "S(B)20(22) series oil-immersed distribution transformer for urban distribution networks",
  },
]

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Applications Across Power Networks"
        description="Verified application scenarios for TIANYU ELECTRIC distribution transformers and compact substation platforms, drawn from customer product materials."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Overview" title="Where Our Equipment Is Applied" />

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {applications.map((app, i) => {
              const Icon = app.icon
              return (
                <Reveal key={app.title} delay={i * 90} className="border border-border bg-card">
                  <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                    <Image
                      src={app.image || "/placeholder.svg"}
                      alt={app.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-contain bg-white p-6"
                    />
                  </div>
                  <div className="border-t border-border p-6">
                    <Icon className="size-6 text-brand" aria-hidden="true" />
                    <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{app.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{app.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={90} className="mt-12 flex justify-center">
            <Button asChild size="lg" className="control-feedback bg-brand text-brand-foreground hover:bg-brand-dark">
              <Link href="/contact">
                Discuss Your Application
                <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
