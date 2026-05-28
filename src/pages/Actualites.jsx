import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import { useLang } from '../i18n/useLang'

export default function Actualites() {
  const { t } = useLang()
  return (
    <>
      <PageBanner
        title={t.nav.actu}
        crumb={t.nav.actu}
        subtitle={t.actualites.subtitle}
      />
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-3">
          {t.actualites.posts.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-pa-green to-pa-green-dark">
                <span className="rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-pa-gray">
                  {p.date}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm text-pa-gray">{p.excerpt}</p>
                <span className="mt-4 text-sm font-semibold text-pa-green">
                  {t.actualites.readMore} →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
