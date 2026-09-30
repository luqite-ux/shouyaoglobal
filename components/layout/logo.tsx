import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label="Shouyao Power home">
      <Image
        src="/images/logo.png"
        alt="Shouyao Power logo"
        width={1536}
        height={1024}
        priority
        className="h-14 w-auto object-contain sm:h-16"
      />
    </Link>
  )
}
