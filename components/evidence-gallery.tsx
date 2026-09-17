import Image from "next/image"
import gallery from "@/lib/evidence-gallery.json"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

export function EvidenceGallery() {
  return (
    <section className="border-t border-border bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        {gallery.map((group) => (
          <div key={group.title}>
            <Reveal><SectionHeading eyebrow="Customer-supplied evidence" title={group.title} /></Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.images.map((src, index) => (
                <Reveal key={src} delay={(index % 4) * 45} className="relative aspect-[4/3] overflow-hidden border border-border bg-white">
                  <Image src={src} alt={`${group.title} — customer-supplied image ${index + 1}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" className="object-contain" />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
