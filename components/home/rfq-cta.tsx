import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"

export function RfqCta() {
  return (
    <section className="border-t border-border bg-ink py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-heading text-2xl font-semibold uppercase tracking-tight sm:text-3xl">
            Ready to Discuss Your Power Distribution Requirements?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
            Send us your voltage, capacity and application requirements and our team will follow up with a
            product-specific response.
          </p>
        </Reveal>
        <Reveal delay={90} className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="control-feedback bg-brand text-brand-foreground hover:bg-brand-dark">
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-1.5 size-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="control-feedback border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
          >
            <Link href="/products">View Products</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
