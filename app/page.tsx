import type { Metadata } from "next"
import { HeroCarousel } from "@/components/home/hero-carousel"
import { ProductFamilies } from "@/components/home/product-families"
import { ApplicationsNetwork } from "@/components/home/applications-network"
import { TransformerAdvantages } from "@/components/home/transformer-advantages"
import { ManufacturingEvidence } from "@/components/home/manufacturing-evidence"
import { DeliveryProcess } from "@/components/home/delivery-process"
import { CertificationsPreview } from "@/components/home/certifications-preview"
import { FaqSection } from "@/components/home/faq-section"
import { NewsPreview } from "@/components/home/news-preview"
import { RfqCta } from "@/components/home/rfq-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "TIANYU ELECTRIC | Distribution Transformers & Compact Substations",
  description:
    "TIANYU ELECTRIC (Fuzhou Tianyu Electric Co., Ltd.) manufactures S(B)20(22) series distribution transformers and European-style, Hua-style and American-type compact substations for global B2B power infrastructure buyers.",
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <ProductFamilies />
      <ApplicationsNetwork />
      <TransformerAdvantages />
      <ManufacturingEvidence />
      <DeliveryProcess />
      <CertificationsPreview />
      <FaqSection />
      <NewsPreview />
      <RfqCta />
    </>
  )
}
