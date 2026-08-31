import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import NotFound from './NotFound'
import { useLang } from '../i18n/useLang'

export default function Article() {
  const { slug } = useParams()
  const { t, withLang } = useLang()
  const post = t.actualites.posts.find((p) => p.slug === slug)

  if (!post) return <NotFound />

  const others = t.actualites.posts.filter((p) => p.slug !== slug)

  return (
    <>
      <PageBanner title={post.title} crumb={t.nav.actu} />

      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider">
            <span className="rounded-full bg-pa-green/10 px-3 py-1 text-pa-green">
              {post.tag}
            </span>
            <span className="text-pa-gray">
              {t.actualites.publishedOn} {post.date}
            </span>
          </div>

          <p className="mt-6 text-lg font-medium leading-relaxed text-pa-ink">
            {post.excerpt}
          </p>

          <div className="mt-6 space-y-5 leading-relaxed text-pa-gray">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <Link
            to={withLang('/actualites')}
            className="mt-10 inline-block text-sm font-semibold text-pa-green hover:underline"
          >
            ← {t.actualites.back}
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-extrabold">{t.actualites.moreTitle}</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={withLang(`/actualites/${p.slug}`)}
                  className="block rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-pa-gray">
                    {p.date}
                  </p>
                  <h3 className="mt-2 text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm text-pa-gray">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-pa-green">
                    {t.actualites.readMore} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
