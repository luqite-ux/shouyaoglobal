import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { siteConfig } from "@/lib/site-config"
import { JsonLd } from "@/components/jsonld"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | Distribution Transformers & Compact Substations`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: `${siteConfig.brandName} | Distribution Transformers & Compact Substations`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.brandName,
    type: "website",
    images: [{ url: "/images/heroes/hero-distribution-transformer.jpg", alt: "TIANYU ELECTRIC distribution transformer" }],
  },
  twitter: { card: "summary_large_image", title: siteConfig.brandName, description: siteConfig.description, images: ["/images/heroes/hero-distribution-transformer.jpg"] },
  alternates: { canonical: "/" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

// Synchronous, dependency-free bootstrap: only after this runs do the
// .reveal / .reveal-lamination CSS hidden states apply. If this script
// is blocked, or the user prefers reduced motion, content stays fully
// visible with no animation.
const motionBootstrapScript = `
(function () {
  try {
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      document.documentElement.classList.add('motion-enabled');
    }
    document.documentElement.setAttribute('data-motion-ready', 'true');
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrapScript }} />
      </head>
      <body className="font-sans antialiased">
        <JsonLd />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
