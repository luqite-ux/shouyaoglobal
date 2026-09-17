import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">Error 404</span>

        <h1 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>

        <div className="mt-6 h-px w-16 bg-brand" aria-hidden="true" />

        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or may have been moved. Explore our product families or get
          in touch with our team for a project-specific quote.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="control-feedback bg-brand text-brand-foreground hover:bg-brand-dark">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="control-feedback">
            <Link href="/products">View Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="control-feedback">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
