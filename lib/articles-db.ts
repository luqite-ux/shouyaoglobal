import { getSupabaseClient, getTenantId } from "@/lib/supabase"

export type ArticleSummary = { slug: string; title: string; excerpt: string; publishedAt: string | null; featuredImage: string | null }
export type ArticleDetail = ArticleSummary & { content: string }
const pick = (value: Record<string, string> | null, fallback = "") => value?.en || value?.zh || Object.values(value || {}).find(Boolean) || fallback

export async function getPublishedArticles(): Promise<ArticleSummary[]> {
  const client = getSupabaseClient(); const tenantId = getTenantId()
  if (!client || !tenantId) return []
  const { data, error } = await client.from("articles").select("slug,title,title_i18n,excerpt,excerpt_i18n,published_at,featured_image").eq("tenant_id", tenantId).eq("is_published", true).order("published_at", { ascending: false })
  if (error || !data) return []
  return data.map((row) => ({ slug: row.slug || "", title: pick(row.title_i18n, row.title || ""), excerpt: pick(row.excerpt_i18n, row.excerpt || ""), publishedAt: row.published_at, featuredImage: row.featured_image }))
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail | null> {
  const client = getSupabaseClient(); const tenantId = getTenantId()
  if (!client || !tenantId) return null
  const { data, error } = await client.from("articles").select("slug,title,title_i18n,excerpt,excerpt_i18n,content,content_i18n,published_at,featured_image").eq("tenant_id", tenantId).eq("slug", slug).eq("is_published", true).maybeSingle()
  if (error || !data) return null
  return { slug: data.slug || "", title: pick(data.title_i18n, data.title || ""), excerpt: pick(data.excerpt_i18n, data.excerpt || ""), content: pick(data.content_i18n, data.content || ""), publishedAt: data.published_at, featuredImage: data.featured_image }
}
