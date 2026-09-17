import { products as fallbackProducts, type Product } from "@/lib/products"
import { getSupabaseClient, getTenantId } from "@/lib/supabase"

type Row = {
  slug: string | null
  category_slug: string | null
  name_i18n: Record<string, string> | null
  description_i18n: Record<string, string> | null
  overview_i18n: Record<string, string> | null
  applications_i18n: Record<string, string[]> | null
  image_url: string | null
  specs: Record<string, string> | null
}

const select = "slug,category_slug,name_i18n,description_i18n,overview_i18n,applications_i18n,image_url,specs"
const localized = (value: Record<string, string> | null, fallback = "") => value?.en || value?.zh || Object.values(value || {}).find(Boolean) || fallback

function mapRow(row: Row): Product {
  const fallback = fallbackProducts.find((item) => item.slug === row.slug)
  if (!fallback) throw new Error(`Unknown product slug: ${row.slug}`)
  return {
    ...fallback,
    category: row.category_slug === "compact-substations" ? "compact-substation" : "transformer",
    name: { en: localized(row.name_i18n, fallback.name.en) },
    shortName: { en: localized(row.name_i18n, fallback.shortName.en) },
    summary: { en: localized(row.description_i18n, fallback.summary.en) },
    description: { en: localized(row.overview_i18n, fallback.description.en) },
    image: row.image_url || fallback.image,
    specs: Object.entries(row.specs || {}).map(([label, value]) => ({ label: { en: label }, value: { en: value } })),
    applications: (row.applications_i18n?.en || fallback.applications.map((item) => item.en)).map((value) => ({ en: value })),
  }
}

export async function fetchProductsData(): Promise<Product[]> {
  const client = getSupabaseClient()
  const tenantId = getTenantId()
  if (!client || !tenantId) return fallbackProducts
  const { data, error } = await client.from("products").select(select).eq("tenant_id", tenantId).eq("is_active", true).order("sort_order")
  if (error || !data) return fallbackProducts
  try { return (data as Row[]).map(mapRow) } catch { return fallbackProducts }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const products = await fetchProductsData()
  return products.find((product) => product.slug === slug) || null
}
