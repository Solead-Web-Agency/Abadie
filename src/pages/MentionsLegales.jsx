import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  LEGAL,
} from '../i18n/translations'

export default function MentionsLegales() {
  const { t, withLang } = useLang()
  const l = t.legal
  usePageMeta()

  const rows = [
    ['name', LEGAL.name],
    ['form', LEGAL.form],
    ['address', CONTACT_ADDRESS],
    ['phone', <a key="p" href={`tel:${CONTACT_PHONE_HREF}`} className="text-pa-green underline">{CONTACT_PHONE}</a>],
    ['email', <a key="e" href={`mailto:${CONTACT_EMAIL}`} className="text-pa-green underline">{CONTACT_EMAIL}</a>],
    ['rccm', LEGAL.rccm],
    ['ifu', LEGAL.ifu],
    ['publicationDirector', LEGAL.publicationDirector],
  ].filter(([, v]) => v)

  return (
    <>
      <PageBanner title={t.nav.legal} crumb={t.nav.legal} subtitle={l.subtitle} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 leading-relaxed text-pa-gray">
          <div>
            <h2 className="text-xl font-extrabold text-pa-ink">{l.publisherTitle}</h2>
            <dl className="mt-4 divide-y divide-black/5 rounded-2xl border border-black/10">
              {rows.map(([k, v]) => (
                <div key={k} className="grid gap-1 px-5 py-3 sm:grid-cols-3">
                  <dt className="font-semibold text-pa-ink">{l.fields[k]}</dt>
                  <dd className="sm:col-span-2">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-pa-ink">{l.hostTitle}</h2>
            <p className="mt-3">{l.host}</p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-pa-ink">{l.ipTitle}</h2>
            <p className="mt-3">{l.ip}</p>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-pa-ink">{l.dataTitle}</h2>
            <p className="mt-3">
              {l.dataText}{' '}
              <Link to={withLang('/politique-de-confidentialite')} className="font-semibold text-pa-green underline">
                {t.nav.privacy.toLowerCase()}
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
