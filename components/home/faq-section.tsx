import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What product families does Shouyao Power manufacture?",
    answer:
      "Shouyao Power offers S(B)20(22) series distribution transformers and European-style, Hua-style and American-type compact substations for 35 kV and below applications.",
  },
  {
    question: "Can products be customized?",
    answer:
      "Yes. Share your voltage, capacity, configuration and application requirements when requesting a quote.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "The minimum order quantity is one set.",
  },
  {
    question: "What is the typical production lead time?",
    answer:
      "The indicated production lead time is 45–60 days after ordering. Confirm the schedule for your configuration with our team.",
  },
  {
    question: "Are technical data sheets, test reports and third-party inspections available?",
    answer:
      "Technical data sheets and inspection reports are available, and third-party inspection is supported. Request the applicable documents for your product configuration.",
  },
  {
    question: "Do you offer samples or OEM/ODM services?",
    answer:
      "Samples and OEM/ODM services are not offered. Custom product configurations can be discussed before production.",
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
