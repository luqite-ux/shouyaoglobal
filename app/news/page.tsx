import type { Metadata } from "next"
import Link from "next/link"
import { Newspaper } from "lucide-react"
import { PageHero } from "@/components/layout/page-hero"
import { Reveal } from "@/components/motion/reveal"
import { getPublishedArticles } from "@/lib/articles-db"

export const revalidate = 60

export const metadata: Metadata = {
  title: "News | TIANYU ELECTRIC",
  description: "Company news and updates from TIANYU ELECTRIC.",
}

export default async function NewsPage() {
  const articles = await getPublishedArticles()

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Company News"
        description="Updates on TIANYU ELECTRIC products, capability and delivery projects."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <Reveal className="flex flex-col items-center border border-dashed border-border bg-secondary/40 px-6 py-16 text-center">
              <Newspaper className="size-8 text-muted-foreground" aria-hidden="true" />
              <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">No News Published Yet</h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                TIANYU ELECTRIC has not published any news articles on this site yet. Published updates will appear
                here as they become available.
              </p>
            </Reveal>
          ) : (
            <ul className="divide-y divide-border border border-border">
              {articles.map((article, i) => (
                <li key={article.slug}>
                  <Reveal delay={i * 70}>
                    <Link
                      href={`/news/${article.slug}`}
                      className="control-feedback block p-6 hover:bg-secondary/40"
                    >
                      <p className="text-xs text-muted-foreground">{article.publishedAt}</p>
                      <h2 className="mt-1 font-heading text-lg font-semibold text-foreground">
                        {article.title}
                      </h2>
                      <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  )
}
