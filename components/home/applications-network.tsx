import { Wind, Sun, Battery, Building2, Factory } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const nodes = [
  { icon: Factory, label: "Generation & Industrial Supply" },
  { icon: Wind, label: "Wind Power" },
  { icon: Sun, label: "Photovoltaic" },
  { icon: Battery, label: "Energy Storage" },
  { icon: Building2, label: "Urban Distribution" },
]

/**
 * MOT-TY-03: a simplified, non-factual decorative single-line network.
 * IntersectionObserver-driven Reveal is the authoritative once-in-view
 * trigger; the ::before connector rule is a CSS view-timeline progressive
 * enhancement layered on top, never the sole mechanism.
 */
export function ApplicationsNetwork() {
  return (
    <section className="border-t border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="System Relationship"
            title="From Distribution to Point of Use"
            description="TIANYU ELECTRIC transformers and compact substations sit inside the same power-delivery chain, serving renewable-generation and distribution applications alike."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
          {nodes.map((node, i) => {
            const Icon = node.icon
            return (
              <Reveal key={node.label} delay={i * 90} className="relative flex flex-1 flex-col items-center gap-3 text-center">
                {i < nodes.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-7 hidden h-px w-full bg-border sm:block"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-14 items-center justify-center border border-border bg-background text-brand"
                >
                  <Icon className="size-6" />
                </span>
                <p className="text-xs font-medium leading-snug text-foreground sm:text-sm">{node.label}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
