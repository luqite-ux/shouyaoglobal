import Link from "next/link"
import { Newspaper } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getPublishedArticles } from "@/lib/articles-db"

export async function NewsPreview() {
  const articles = await getPublishedArticles()

  return (
    <section className="border-t border-border bg-secondary/40 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="News" title="Company News" />
        </Reveal>

        {articles.length === 0 ? (
          <Reveal delay={80} className="mt-10 flex flex-col items-center gap-3 border border-dashed border-border bg-card px-6 py-16 text-center">
            <Newspaper className="size-8 text-muted-foreground" aria-hidden="true" />
            <p className="font-heading text-base font-semibold text-foreground">No News Articles Published Yet</p>
            <p className="max-w-md text-sm text-muted-foreground">
              This section is ready to display verified company updates once they are published. Check back later
              or contact us directly for current information.
            </p>
            <Link href="/contact" className="control-feedback mt-2 text-sm font-medium text-brand underline underline-offset-4">
              Contact Us
            </Link>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <Reveal key={article.slug} className="h-full">
                <Link href={`/news/${article.slug}`} className="control-feedback flex h-full flex-col border border-border bg-card p-6 hover:border-brand">
                  <p className="text-xs text-muted-foreground">{article.publishedAt}</p>
                  <h3 className="mt-2 line-clamp-2 font-heading text-lg font-semibold text-foreground">{article.title}</h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted-foreground">{article.excerpt}</p>
                  <span className="mt-5 text-sm font-medium text-brand">Read article</span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
