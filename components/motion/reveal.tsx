"use client"

import type { ReactNode } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "li" | "section" | "article"
  variant?: "default" | "lamination"
}

export function Reveal({ children, className, delay = 0, as = "div", variant = "default" }: RevealProps) {
  const { ref, isVisible } = useReveal()
  const Component = as as any

  if (variant === "lamination") {
    return (
      <Component ref={ref} className={className}>
        <div
          className={cn("reveal-lamination h-full", isVisible && "is-visible")}
          style={{ "--reveal-delay": delay } as React.CSSProperties}
        >
          {children}
        </div>
      </Component>
    )
  }

  return (
    <Component
      ref={ref}
      className={cn("reveal", isVisible && "is-visible", className)}
      style={{ "--reveal-delay": delay } as React.CSSProperties}
    >
      {children}
    </Component>
  )
}
