"use client"

import { useEffect, useRef, useState } from "react"

/**
 * True viewport-lifecycle reveal for MOT-TY-01 / MOT-TY-02 / MOT-TY-03.
 * Uses IntersectionObserver, fires once, and disconnects immediately.
 * No timers are used to force a "played" state for off-screen content.
 * Base DOM content is always visible; this only toggles the `is-visible`
 * class consumed by the `.reveal` / `.reveal-lamination` CSS in globals.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number
  rootMargin?: string
}) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? "0px 0px -40px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options?.threshold, options?.rootMargin])

  return { ref, isVisible }
}
