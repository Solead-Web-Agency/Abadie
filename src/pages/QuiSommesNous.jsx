import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import VideoEmbed from '../components/VideoEmbed'
import { useLang } from '../i18n/useLang'

export default function QuiSommesNous() {
  const { t } = useLang()
  const about = t.about
  return (
    <>
      <PageBanner
        title={t.about.heading}
        crumb={t.nav.qui}
        subtitle={t.qui.subtitle}
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold md:text-3xl">{t.qui.lead}</h2>
            <p className="mt-5 text-lg text-pa-ink">{about.intro}</p>
            <p className="mt-4 leading-relaxed text-pa-gray">{about.body}</p>

            <ul className="mt-6 space-y-2">
              {about.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-pa-ink">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-pa-green" />
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold">{t.qui.strengthsTitle}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {about.strengths.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-black/5 bg-gray-50 p-4 text-sm text-pa-gray"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <VideoEmbed id={about.videoId} title={t.about.heading} />
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="font-bold text-pa-ink">{about.founderLead}</p>
              <ul className="mt-3 space-y-2">
                {about.founderTitles.map((title) => (
                  <li key={title} className="flex items-center gap-2 text-sm text-pa-gray">
                    <Icon name="check" className="h-4 w-4 text-pa-green" />
                    {title}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-black/5 pt-4 text-sm italic text-pa-gray">
                {about.honor}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CTA />
    </>
  )
}
