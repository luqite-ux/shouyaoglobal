export interface HeroSlide {
  id: string
  image: string
  imageAlt: string
  focalDesktop: string
  focalMobile: string
  eyebrow: string
  headline: string
  proofPoints: string[]
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export const heroSlides: HeroSlide[] = [
  {
    id: "distribution-transformer",
    image: "/images/heroes/hero-distribution-transformer.jpg",
    imageAlt: "Oil-immersed distribution transformer with copper leads staged before an electrical grid skyline",
    focalDesktop: "sm:object-[68%_50%]",
    focalMobile: "max-sm:object-[75%_35%]",
    eyebrow: "S(B)20(22) Series",
    headline: "Power Distribution, Engineered for Demanding Networks",
    proofPoints: ["Up to 4000 kVA", "GB20052 Grade 1 efficiency", "Operating noise up to 50 dB"],
    primaryCta: { label: "Explore Transformers", href: "/products/sb20-22-distribution-transformer" },
    secondaryCta: { label: "Request a Quote", href: "/contact" },
  },
  {
    id: "renewable-substation",
    image: "/images/heroes/hero-renewable-substation.jpg",
    imageAlt: "Compact substation enclosure mounted on an offshore wind turbine platform",
    focalDesktop: "sm:object-[50%_60%]",
    focalMobile: "max-sm:object-[50%_55%]",
    eyebrow: "Compact Substations",
    headline: "Compact Substations for Renewable-Energy Applications",
    proofPoints: ["Wind, photovoltaic and storage ready", "Capacities up to 15000 kVA"],
    primaryCta: { label: "View Compact Substations", href: "/products?category=compact-substation" },
  },
  {
    id: "high-voltage-testing",
    image: "/images/heroes/hero-high-voltage-testing.jpg",
    imageAlt: "High-voltage impulse test towers inside a testing hall",
    focalDesktop: "sm:object-[50%_45%]",
    focalMobile: "max-sm:object-[50%_40%]",
    eyebrow: "Testing Capability",
    headline: "Testing Capability Behind Every Delivery",
    proofPoints: ["In-house high-voltage test facility", "IP54 and altitude-rated enclosures"],
    primaryCta: { label: "Explore Our Capabilities", href: "/capabilities" },
  },
]
