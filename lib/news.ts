import type { LocalizedText } from "@/lib/i18n"

export interface NewsArticle {
  slug: string
  title: LocalizedText
  excerpt: LocalizedText
  body: LocalizedText
  publishedAt: string
}

/**
 * No verified news articles have been provided by the customer.
 * This backend-ready store intentionally starts empty; routes render
 * a truthful empty state rather than fabricated content.
 */
export const newsArticles: NewsArticle[] = []

export function getAllNews(): NewsArticle[] {
  return newsArticles
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}
