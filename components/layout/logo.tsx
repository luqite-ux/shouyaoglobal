import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className || ""}`} aria-label="Shouyao Power home">
      <Image
        src="/images/logo.png"
        alt="Shouyao Power logo"
        width={1254}
        height={1254}
        priority
        className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
      />
      <span className="hidden font-heading text-sm font-semibold tracking-wide text-foreground sm:block">{siteConfig.brandName}</span>
    </Link>
  )
}
