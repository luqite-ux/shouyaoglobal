import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What product families does TIANYU ELECTRIC manufacture?",
    answer:
      "TIANYU ELECTRIC manufactures the S(B)20(22) series distribution transformer and European-style, Hua-style and American-type compact substation platforms for 35 kV and below applications.",
  },
  {
    question: "How do I request pricing for a specific product?",
    answer:
      "Pricing is not published online. Submit a product-specific inquiry through the Request a Quote form and our team will respond with details based on your requirements.",
  },
  {
    question: "Can compact substations be configured for renewable-energy projects?",
    answer:
      "Yes. The European-style, Hua-style and American-type compact substation platforms are applied in wind power, photovoltaic, energy storage and urban distribution scenarios, with voltage and capacity options listed on each product page.",
  },
  {
    question: "Is high-voltage testing performed before delivery?",
    answer:
      "Completed units are verified in the high-voltage test hall as part of the production and delivery process described on the Capabilities page.",
  },
]

export function FaqSection() {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Frequently Asked" title="Common Questions" align="center" className="mx-auto" />
        </Reveal>

        <Reveal delay={80} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left font-heading text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
