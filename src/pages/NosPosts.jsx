import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import { useLang } from '../i18n/useLang'

export default function NosPosts() {
  const { t } = useLang()
  return (
    <>
      <PageBanner
        title={t.nav.posts}
        crumb={t.nav.posts}
        subtitle={t.postsPage.subtitle}
      />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-4">
            {t.postsPage.items.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pa-green/10 font-bold text-pa-green">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="pt-1.5 text-pa-ink">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
