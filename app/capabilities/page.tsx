import type { Metadata } from "next"
import Image from "next/image"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { EvidenceGallery } from "@/components/evidence-gallery"

export const metadata: Metadata = {
  alternates: { canonical: "/capabilities" },
  title: "Capabilities | TIANYU ELECTRIC",
  description:
    "Manufacturing, high-voltage testing and quality management capability evidence for TIANYU ELECTRIC (Fuzhou Tianyu Electric Co., Ltd.).",
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
        description="A representative view of the production and verification capability behind TIANYU ELECTRIC deliveries."
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
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Quality System"
                title="Certified Quality Management"
                description="Fuzhou Tianyu Electric Co., Ltd. holds a GB/T 19001-2016 / ISO 9001:2015 quality management system certification, registration number 01424Q10028R8M, issued by China United Certification Center (Beijing) Co., Ltd. The certified scope covers the design, production and service of gas-insulated switchgear (72.5 kV and below), high-voltage switches (40.5 kV and below), high- and low-voltage switchgear cabinets, combined transformers and prefabricated substations (35 kV and below), low-loss oil-immersed transformers (220 kV and below), offshore wind-power transformers (66 kV and below) and low-loss dry-type transformers (35 kV and below)."
              />
            </Reveal>
            <Reveal delay={90} className="relative aspect-[4/5] max-w-xs justify-self-center overflow-hidden border border-border bg-card sm:max-w-sm">
              <Image
                src="/images/certifications/iso-9001-certificate.jpg"
                alt="GB/T 19001-2016 / ISO 9001:2015 quality management system certificate issued to Fuzhou Tianyu Electric Co., Ltd."
                fill
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-contain p-4"
              />
            </Reveal>
          </div>
        </div>
      </section>
      <EvidenceGallery />
    </>
  )
}
