import { FileSearch, Cog, FlaskConical, Truck } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  { icon: FileSearch, title: "Requirement Review", description: "Voltage, capacity and application requirements are reviewed against product specifications." },
  { icon: Cog, title: "Engineering & Production", description: "Units are engineered and manufactured on the factory production lines." },
  { icon: FlaskConical, title: "High-Voltage Testing", description: "Completed units are verified in the high-voltage test hall before release." },
  { icon: Truck, title: "Delivery Coordination", description: "Shipment is coordinated with the buyer for export delivery." },
]

export function DeliveryProcess() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Project Delivery"
            title="How a Project Moves From Inquiry to Delivery"
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <Reveal key={step.title} variant="lamination" delay={i * 70} className="relative pl-14 sm:pl-0 sm:text-center">
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                  <span className="absolute left-0 top-0 flex size-10 items-center justify-center border border-brand text-sm font-semibold text-brand sm:relative sm:size-12">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="hidden size-6 text-brand sm:block" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-heading text-base font-semibold text-foreground sm:mt-4">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
