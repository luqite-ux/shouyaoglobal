import type { ReactNode } from "react"
import { Reveal } from "@/components/motion/reveal"

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-ink py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold uppercase tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">{description}</p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
