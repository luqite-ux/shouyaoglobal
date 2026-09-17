import { Gauge, Volume2, ShieldCheck, Layers } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"

const advantages = [
  {
    icon: Gauge,
    title: "Up to 4000 kVA",
    description: "Maximum designed production capacity for the S(B)20(22) series distribution transformer.",
  },
  {
    icon: Layers,
    title: "GB20052 Grade 1",
    description: "Energy-efficiency rating engineered into the S(B)20(22) series core and winding design.",
  },
  {
    icon: Volume2,
    title: "Up to 50 dB",
    description: "Operating noise level rated for installation near occupied and sensitive areas.",
  },
  {
    icon: ShieldCheck,
    title: "Oil-Immersed Construction",
    description: "Consistent, low-loss operation for utility and industrial power distribution networks.",
  },
]

export function TransformerAdvantages() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Transformer Engineering"
            title="S(B)20(22) Series Design Advantages"
            description="Engineering characteristics stated in customer product materials for the S(B)20(22) series distribution transformer."
          />
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} variant="lamination" delay={i * 70} className="bg-card p-6">
                <Icon className="size-6 text-brand" aria-hidden="true" />
                <p className="mt-4 font-heading text-xl font-semibold text-foreground">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
