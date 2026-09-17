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
      en: "The S(B)20(22) series distribution transformer is built for utility and industrial power distribution networks that require consistent, low-loss operation. The series covers capacities up to a maximum designed production capacity of 4000 kVA, with each unit engineered to GB20052 Grade 1 energy-efficiency requirements and rated for an operating noise level up to 50 dB.",
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
      en: "The European-style compact substation integrates transformation and switching equipment for 35 kV and below primary networks. It is applied in wind power, photovoltaic, energy storage and urban distribution scenarios where a prefabricated, factory-tested package is required for capacities up to 12500 kVA.",
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
      en: "The Hua-style compact substation for 35 kV and below serves renewable-energy and distribution applications requiring capacities up to 15000 kVA. This platform has been applied in the Three Gorges Dongshan Xingchen 180 MW offshore photovoltaic project.",
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
      en: "The American-type compact substation is rated to IP54 with a high-voltage breaking capacity of 31.5 kA and capacities up to 4500 kVA, suitable for operation at altitudes below 5000 m. It has been applied in the Xinglongzhuang Phase I 250 MW floating photovoltaic project in Yanzhou, Jining.",
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
