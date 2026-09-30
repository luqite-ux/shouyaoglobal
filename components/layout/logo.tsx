import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 ${className || ""}`} aria-label="Shouyao Power home">
      <Image
        src="/images/shouyao-mark.png"
        alt="Shouyao Power logo"
        width={1254}
        height={1254}
        priority
        className="h-[68px] w-[68px] shrink-0 object-contain sm:h-20 sm:w-20"
      />
      <span className="font-heading text-base font-semibold tracking-wide text-foreground sm:text-lg">{siteConfig.brandName}</span>
    </Link>
  )
}
