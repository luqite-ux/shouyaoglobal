import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

export const metadata: Metadata = {
  alternates: { canonical: "/capabilities" },
  title: "Capabilities",
  description:
    "Manufacturing, testing and quality management capabilities described in Shouyao Power company materials.",
}

const manufacturing = [
  {
    image: "/images/capabilities/automated-storage-line.png",
    alt: "Automated raw-material storage and handling system with a robotic loading arm inside the manufacturing facility",
    title: "Automated Storage & Handling",
    description:
      "An automated storage and material-handling system supports raw-material flow into the production lines.",
  },
]

const testing = [
  {
    image: "/images/capabilities/impulse-test-towers.jpg",
    alt: "Rows of high-voltage impulse test towers with red and blue insulated columns inside the test hall",
    title: "High-Voltage Impulse Test Hall",
    description:
      "Impulse test towers verify equipment withstand performance under high-voltage impulse conditions before units are released for delivery.",
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Manufacturing, Testing & Quality Evidence"
        description="A representative view of the production and verification capability behind Shouyao Power products."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Manufacturing" title="Production Capability" />
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {manufacturing.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Testing" title="High-Voltage Testing Capability" />
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {testing.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-border p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="Quality System"
                title="Quality Management & Inspection"
                description="Shouyao Power's company materials describe quality, environmental, occupational health and safety, and energy management systems, together with inspection and testing equipment. Product-specific technical data sheets and inspection reports are available on request."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
