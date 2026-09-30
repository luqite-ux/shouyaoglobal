import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

export function CertificationsPreview() {
  return (
    <section className="border-t border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Quality System"
              title="Quality Management & Inspection"
              description="Shouyao Power's company materials describe production lines, inspection equipment and quality, environmental, occupational health and safety, and energy management systems. Technical data sheets and inspection reports can be requested for specific products."
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
