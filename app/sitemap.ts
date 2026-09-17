import type { MetadataRoute } from "next"
import { getPublishedArticles } from "@/lib/articles-db"
import { fetchProductsData } from "@/lib/products-db"
import { siteConfig } from "@/lib/site-config"

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, articles] = await Promise.all([fetchProductsData(), getPublishedArticles()])
  const now = new Date()
  const staticPaths = ["", "/products", "/applications", "/capabilities", "/about", "/news", "/contact"]
  return [
    ...staticPaths.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now, changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.7 })),
    ...products.map((product) => ({ url: `${siteConfig.url}/products/${product.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteConfig.url}/news/${article.slug}`, lastModified: article.publishedAt ? new Date(article.publishedAt) : now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ]
}
