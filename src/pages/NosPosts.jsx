import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { SOCIALS } from '../i18n/translations'
import { useLang } from '../i18n/useLang'

export default function NosPosts() {
  const { t, withLang } = useLang()
  return (
    <>
      <PageBanner
        title={t.nav.posts}
        crumb={t.nav.posts}
        subtitle={t.postsPage.subtitle}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <p className="max-w-3xl leading-relaxed text-pa-gray">
              {t.postsPage.intro}
            </p>
            <Link
              to={withLang('/nos-ouvrages')}
              className="shrink-0 rounded-md border border-pa-green px-5 py-2.5 text-sm font-semibold text-pa-green transition-colors hover:bg-pa-green hover:text-white"
            >
              {t.postsPage.allBooks}
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {t.postsPage.items.map((p) => (
              <Link
                key={p.img}
                to={withLang('/nos-ouvrages')}
                className="group flex gap-5 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="h-32 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-100 shadow-md ring-1 ring-black/5">
                  <img
                    src={`/images/${p.img}`}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-semibold uppercase tracking-wider text-pa-green">
                    {p.tag}
                  </p>
                  <h3 className="mt-1 font-bold leading-snug group-hover:text-pa-green">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-pa-gray">
                    {p.date}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-pa-gray">
                    {p.excerpt}
                  </p>
                  <span className="mt-3 text-sm font-semibold text-pa-green">
                    {t.postsPage.readBook} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-8 py-10 text-center">
            <h2 className="text-xl font-extrabold">{t.postsPage.followTitle}</h2>
            <p className="max-w-xl text-sm text-pa-gray">{t.postsPage.followText}</p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.name}
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-pa-gray transition-colors hover:border-pa-green hover:bg-pa-green hover:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
