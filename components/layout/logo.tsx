import Image from "next/image"
import Link from "next/link"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className} aria-label="TIANYU ELECTRIC home">
      <Image
        src="/images/logo.png"
        alt="TIANYU ELECTRIC logo"
        width={220}
        height={64}
        priority
        className="h-10 w-auto object-contain sm:h-12"
      />
    </Link>
  )
}
