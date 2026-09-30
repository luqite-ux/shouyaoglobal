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
        <span className="relative block h-[34px] w-[135px] shrink-0 translate-y-[3px] overflow-hidden sm:h-10 sm:w-[162px]" aria-hidden="true">
          <Image
            src="/images/logo.png"
            alt=""
            width={1254}
            height={1254}
            priority
            className="absolute -left-[19px] -top-[109px] h-[170px] w-[170px] max-w-none sm:-left-[23px] sm:-top-[131px] sm:h-[205px] sm:w-[205px]"
          />
        </span>
      ) : (
        <span className="font-heading text-base font-semibold tracking-wide text-foreground sm:text-lg">{siteConfig.brandName}</span>
      )}
    </Link>
  )
}
