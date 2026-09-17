"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroSlides } from "@/lib/hero-slides"
import { cn } from "@/lib/utils"

const AUTOPLAY_MS = 6500

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mql.matches)
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mql.addEventListener("change", listener)
    return () => mql.removeEventListener("change", listener)
  }, [])

  const goTo = useCallback((next: number) => {
    setIndex(((next % heroSlides.length) + heroSlides.length) % heroSlides.length)
  }, [])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion) return
    const timer = setInterval(() => goTo(index + 1), AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [isPlaying, prefersReducedMotion, index, goTo])

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 40) {
      delta < 0 ? next() : prev()
    }
    touchStartX.current = null
  }

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured product and capability highlights"
      className="relative overflow-hidden bg-ink"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next()
        if (e.key === "ArrowLeft") prev()
      }}
    >
      <div className="relative h-[560px] sm:h-[620px] lg:h-[680px]">
        {heroSlides.map((slide, i) => {
          const isActive = i === index
          const Heading = i === 0 ? "h1" : "h2"
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${heroSlides.length}`}
              className={cn(
                "absolute inset-0 transition-opacity duration-500 ease-out",
                isActive ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.imageAlt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className={cn("object-cover", slide.focalMobile, slide.focalDesktop)}
                />
                {!prefersReducedMotion && (
                  <div
                    key={`sweep-${slide.id}-${isActive}`}
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand/40 to-transparent",
                      isActive && "animate-field-sweep",
                    )}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent sm:from-ink/80 sm:via-ink/20" />
              </div>

              <div className="relative flex h-full max-w-7xl flex-col justify-center px-4 pb-16 pt-10 sm:px-6 sm:pb-24 lg:mx-auto lg:px-8">
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{slide.eyebrow}</p>
                  <Heading className="mt-3 font-heading text-3xl font-semibold uppercase leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {slide.headline}
                  </Heading>
                  <ul className="mt-5 flex flex-col gap-1.5 text-sm text-white/85 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    {slide.proofPoints.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <span className="size-1.5 shrink-0 bg-brand" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Button
                      asChild
                      size="lg"
                      className="control-feedback bg-brand text-brand-foreground hover:bg-brand-dark"
                    >
                      <Link href={slide.primaryCta.href} tabIndex={isActive ? 0 : -1}>
                        {slide.primaryCta.label}
                      </Link>
                    </Button>
                    {slide.secondaryCta && (
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="control-feedback border-white/70 bg-transparent text-white hover:bg-white hover:text-ink"
                      >
                        <Link href={slide.secondaryCta.href} tabIndex={isActive ? 0 : -1}>
                          {slide.secondaryCta.label}
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="control-feedback flex size-10 items-center justify-center border border-white/40 bg-black/30 text-white hover:bg-black/50"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="control-feedback flex size-10 items-center justify-center border border-white/40 bg-black/30 text-white hover:bg-black/50"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2" role="tablist" aria-label="Select slide">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1}: ${slide.headline}`}
                onClick={() => goTo(i)}
                className={cn(
                  "control-feedback h-2 w-6 border border-white/60",
                  i === index ? "bg-brand" : "bg-transparent",
                )}
              />
            ))}
          </div>
          {!prefersReducedMotion && (
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              aria-pressed={!isPlaying}
              className="control-feedback flex size-10 items-center justify-center border border-white/40 bg-black/30 text-white hover:bg-black/50"
            >
              {isPlaying ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
