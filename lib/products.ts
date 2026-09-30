import type { LocalizedText } from "@/lib/i18n"

export interface ProductSpec {
  label: LocalizedText
  value: LocalizedText
}

export interface Product {
  slug: string
  category: "transformer" | "compact-substation"
  name: LocalizedText
  shortName: LocalizedText
  summary: LocalizedText
  description: LocalizedText
  image: string
  imageAlt: LocalizedText
  specs: ProductSpec[]
  applications: LocalizedText[]
  standardsNote?: LocalizedText
}

export const products: Product[] = [
  {
    slug: "sb20-22-distribution-transformer",
    category: "transformer",
    name: { en: "S(B)20(22) Series Distribution Transformer" },
    shortName: { en: "S(B)20(22) Distribution Transformer" },
    summary: {
      en: "Oil-immersed distribution transformer engineered for utility and industrial power distribution networks.",
    },
    description: {
      en: "The S(B)20(22) series distribution transformer has a maximum designed production capacity of 4000 kVA and meets GB20052 Grade 1 energy-efficiency requirements. Its stated operating noise level is 50 dB or below. The design limits contact between transformer oil and ambient air as temperature changes, helping reduce oil oxidation and moisture ingress. It is suitable for industrial power distribution, transmission networks and noise-sensitive installations such as offices and residential areas.",
    },
    image: "/images/products/distribution-transformer.png",
    imageAlt: { en: "S(B)20(22) series oil-immersed distribution transformer with copper winding leads" },
    specs: [
      { label: { en: "Maximum designed production capacity" }, value: { en: "4000 kVA" } },
      { label: { en: "Energy efficiency grade" }, value: { en: "GB20052 Grade 1" } },
      { label: { en: "Operating noise level" }, value: { en: "Up to 50 dB" } },
      { label: { en: "Cooling type" }, value: { en: "Oil-immersed" } },
    ],
    applications: [
      { en: "Utility power distribution networks" },
      { en: "Industrial facility power supply" },
    ],
    standardsNote: { en: "Rated to GB20052 Grade 1 energy-efficiency requirements." },
  },
  {
    slug: "european-style-compact-substation",
    category: "compact-substation",
    name: { en: "European-style Compact Substation for 35 kV and Below" },
    shortName: { en: "European-style Compact Substation" },
    summary: {
      en: "Prefabricated compact substation for wind, photovoltaic, storage and urban distribution applications up to 35 kV.",
    },
    description: {
      en: "This European-style compact substation for 35 kV and below supports primary voltages of 6, 12 and 35 kV and secondary voltages of 400, 690, 800 and 1140 V. Its maximum capacity is 12500 kVA. The design combines step-up or step-down transformation, protection, condition monitoring, data acquisition and remote operation. Configuration options support wind power, photovoltaic, energy storage and urban distribution projects. A dry-type transformer configuration avoids oil leakage. The product materials cite use in the Huaneng Leting 125 MW wind power project.",
    },
    image: "/images/products/european-compact-substation.png",
    imageAlt: { en: "European-style compact substation enclosure mounted on a wind turbine platform" },
    specs: [
      { label: { en: "Primary voltage" }, value: { en: "6 / 12 / 35 kV" } },
      { label: { en: "Secondary voltage" }, value: { en: "400 / 690 / 800 / 1140 V" } },
      { label: { en: "Maximum capacity" }, value: { en: "12500 kVA" } },
    ],
    applications: [
      { en: "Wind power" },
      { en: "Photovoltaic" },
      { en: "Energy storage" },
      { en: "Urban distribution" },
    ],
  },
  {
    slug: "hua-style-compact-substation",
    category: "compact-substation",
    name: { en: "Hua-style Compact Substation for 35 kV and Below" },
    shortName: { en: "Hua-style Compact Substation" },
    summary: {
      en: "Compact substation platform used in the Three Gorges Dongshan Xingchen 180 MW offshore photovoltaic project.",
    },
    description: {
      en: "The Hua-style compact substation for 35 kV and below is an outdoor prefabricated unit for accessible power distribution sites. It supports primary voltages of 6, 12 and 35 kV and secondary voltages of 400, 540, 690, 800, 950 and 1140 V, with capacity up to 15000 kVA. The system combines transformation, protection, condition monitoring, data collection and remote operation in a compact footprint. Product materials cite use in the Three Gorges Dongshan Xingchen 180 MW offshore photovoltaic project, where the equipment operates in a coastal environment with wind, humidity and salt spray.",
    },
    image: "/images/products/hua-style-compact-substation.png",
    imageAlt: { en: "Hua-style compact substation enclosure at the base of a wind turbine tower" },
    specs: [
      { label: { en: "Primary voltage" }, value: { en: "6 / 12 / 35 kV" } },
      { label: { en: "Secondary voltage" }, value: { en: "400 / 540 / 690 / 800 / 950 / 1140 V" } },
      { label: { en: "Maximum capacity" }, value: { en: "15000 kVA" } },
    ],
    applications: [
      { en: "Offshore photovoltaic" },
      { en: "Wind power" },
      { en: "Urban distribution" },
    ],
    standardsNote: { en: "Applied in the Three Gorges Dongshan Xingchen 180 MW offshore photovoltaic project." },
  },
  {
    slug: "american-type-compact-substation",
    category: "compact-substation",
    name: { en: "American-type Compact Substation" },
    shortName: { en: "American-type Compact Substation" },
    summary: {
      en: "IP54 compact substation with 31.5 kA high-voltage breaking capacity, applied in the Xinglongzhuang Phase I 250 MW floating photovoltaic project.",
    },
    description: {
      en: "The American-type compact substation integrates the transformer, high-voltage load switch and fuses within the transformer oil tank. Its insulated, sealed design provides a compact footprint for photovoltaic and distribution applications. Rated capacity is up to 4500 kVA, ingress protection is IP54, high-voltage breaking capacity is 31.5 kA and the stated operating altitude is below 5000 m. Product materials cite use in the Xinglongzhuang Phase I 250 MW floating photovoltaic project in Yanzhou District, Jining, where the installation faces high humidity and limited platform loading.",
    },
    image: "/images/products/american-compact-substation.png",
    imageAlt: { en: "American-type compact substation enclosure with high-voltage hazard signage" },
    specs: [
      { label: { en: "Maximum capacity" }, value: { en: "4500 kVA" } },
      { label: { en: "Ingress protection" }, value: { en: "IP54" } },
      { label: { en: "High-voltage breaking capacity" }, value: { en: "31.5 kA" } },
      { label: { en: "Maximum altitude" }, value: { en: "Below 5000 m" } },
    ],
    applications: [
      { en: "Floating photovoltaic" },
      { en: "Urban distribution" },
    ],
    standardsNote: {
      en: "Applied in the Xinglongzhuang Phase I 250 MW floating photovoltaic project in Yanzhou, Jining.",
    },
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}
