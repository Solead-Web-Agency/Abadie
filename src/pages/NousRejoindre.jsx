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

          <section
            aria-labelledby="spont-title"
            className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-pa-green/20 bg-pa-green/5 p-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-2xl">
              <h2 id="spont-title" className="text-2xl font-extrabold">
                {t.rejoindre.spontTitle}
              </h2>
              <p className="mt-3 leading-relaxed text-pa-gray">{t.rejoindre.spontText}</p>
            </div>
            <Link
              to={`${withLang('/nous-ecrire')}?objet=recrutement`}
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
            >
              <Icon name="mail" className="h-4 w-4" />
              {t.rejoindre.spontCta}
            </Link>
          </section>
        </div>
      </section>
      <CTA />
    </>
  )
}
