import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Reveal } from "@/components/motion/reveal"
import { getArticleBySlug } from "@/lib/articles-db"

export const revalidate = 60
export const dynamicParams = true

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: `${article.title} | TIANYU ELECTRIC`,
    description: article.excerpt,
  }
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs">
          <Link href="/news" className="control-feedback text-muted-foreground hover:text-brand">
            News
          </Link>
        </p>
        <Reveal className="mt-4">
          <p className="text-xs text-muted-foreground">{article.publishedAt}</p>
          <h1 className="mt-1 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
            {article.title}
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div className="article-prose" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
