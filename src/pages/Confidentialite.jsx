import PageBanner from '../components/PageBanner'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'
import { CONTACT_EMAIL } from '../i18n/translations'

export default function Confidentialite() {
  const { t } = useLang()
  const p = t.privacy
  usePageMeta()
  return (
    <>
      <PageBanner title={t.nav.privacy} crumb={t.nav.privacy} subtitle={p.subtitle} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-10 px-4 leading-relaxed text-pa-gray">
          <p className="text-sm">{p.updated}</p>
          {p.sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-xl font-extrabold text-pa-ink">{s.title}</h2>
              {s.text.map((para) => (
                <p key={para} className="mt-3">
                  {para}
                </p>
              ))}
            </div>
          ))}
          <p className="rounded-2xl bg-gray-50 p-5">
            {p.contact}{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-pa-green underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
