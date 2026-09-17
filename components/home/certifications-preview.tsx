import Image from "next/image"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

export function CertificationsPreview() {
  return (
    <section className="border-t border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Quality System"
              title="Certified Quality Management"
              description="Fuzhou Tianyu Electric Co., Ltd. holds a GB/T 19001-2016 / ISO 9001:2015 quality management system certification covering the design, production and service of gas-insulated switchgear, high-voltage switches, switchgear cabinets, combined transformers, prefabricated substations, low-loss oil-immersed transformers, offshore wind-power transformers and low-loss dry-type transformers within the certified voltage scope."
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
  )
}
