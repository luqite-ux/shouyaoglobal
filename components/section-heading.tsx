import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  className?: string
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
      <h2 className="mt-2 font-heading text-2xl font-semibold uppercase tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>}
    </div>
  )
}
