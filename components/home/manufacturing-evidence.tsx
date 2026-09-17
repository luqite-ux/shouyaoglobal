import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const evidence = [
  {
    image: "/images/capabilities/automated-storage-line.png",
    alt: "Automated raw-material storage and handling line inside the manufacturing facility",
    title: "Automated Production Handling",
    description: "Automated storage and material-handling systems supporting the manufacturing process.",
  },
  {
    image: "/images/capabilities/impulse-test-towers.jpg",
    alt: "High-voltage impulse test towers inside the test hall",
    title: "High-Voltage Impulse Testing",
    description: "Impulse test towers used to verify equipment performance before delivery.",
  },
]

export function ManufacturingEvidence() {
  return (
    <section className="border-t border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Manufacturing & Testing"
            title="Evidence Behind Every Delivery"
            description="A representative view of the manufacturing and high-voltage testing capability supporting TIANYU ELECTRIC production."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {evidence.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="group border border-border bg-card">
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

        <Reveal delay={100} className="mt-10 flex justify-center">
          <Button asChild variant="outline" className="control-feedback">
            <Link href="/capabilities">
              Explore Our Capabilities
              <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
