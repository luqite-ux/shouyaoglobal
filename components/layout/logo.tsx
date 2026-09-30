import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Logo({ className, showWordmark = false }: { className?: string; showWordmark?: boolean }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 sm:gap-3 ${className || ""}`} aria-label="Shouyao Power home">
      <Image
        src="/images/shouyao-mark.png"
        alt=""
        width={1254}
        height={1254}
        priority
        className="h-[68px] w-[68px] shrink-0 object-contain sm:h-20 sm:w-20"
      />
      {showWordmark ? (
        <span className="relative block h-10 w-[155px] shrink-0 overflow-hidden sm:h-12 sm:w-[190px]" aria-hidden="true">
          <Image
            src="/images/logo.png"
            alt=""
            width={1254}
            height={1254}
            priority
            className="absolute -left-[21px] -top-[124px] h-[195px] w-[195px] max-w-none sm:-left-[27px] sm:-top-[153px] sm:h-[240px] sm:w-[240px]"
          />
        </span>
      ) : (
        <span className="font-heading text-base font-semibold tracking-wide text-foreground sm:text-lg">{siteConfig.brandName}</span>
      )}
    </Link>
  )
}
