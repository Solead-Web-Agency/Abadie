import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

export default function NousRejoindre() {
  const { t, withLang } = useLang()
  usePageMeta()
  return (
    <>
      <PageBanner
        title={t.nav.rejoindre}
        crumb={t.nav.rejoindre}
        subtitle={t.rejoindre.subtitle}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {t.rejoindre.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-black/5 bg-gray-50 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pa-green/10 text-pa-green">
                  <Icon name="users" className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-pa-gray">{v.text}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-extrabold">{t.rejoindre.openingsTitle}</h2>
          <div className="mt-6 divide-y divide-black/5 overflow-hidden rounded-2xl border border-black/5 bg-white">
            {t.rejoindre.openings.map((o) => (
              <div
                key={o.role}
                className="flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-pa-ink">{o.role}</p>
                  <p className="text-sm text-pa-gray">{o.type}</p>
                </div>
                <Link
                  to={withLang('/nous-ecrire')}
                  className="self-start rounded-md bg-pa-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark sm:self-auto"
                >
                  {t.rejoindre.apply}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA title={t.rejoindre.ctaTitle} text={t.rejoindre.ctaText} />
    </>
  )
}
