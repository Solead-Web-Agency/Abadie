import { Link } from 'react-router-dom'
import Icon from '../Icon'
import VideoEmbed from '../VideoEmbed'
import { useLang } from '../../i18n/useLang'

export default function About() {
  const { t, withLang } = useLang()
  const about = t.about
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-pa-green">
            {about.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{about.heading}</h2>
          <p className="mt-5 text-lg text-pa-ink">{about.intro}</p>
        </div>

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2">
          {/* Left — video + founder card */}
          <div className="space-y-6">
            <div className="relative">
              <VideoEmbed id={about.videoId} title={about.heading} />
              <div className="absolute -bottom-5 -left-4 hidden rounded-xl bg-pa-green px-5 py-4 text-white shadow-lg sm:block">
                <p className="font-display text-2xl font-extrabold leading-none">1998</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/80">
                  {about.badge}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <p className="font-semibold text-pa-ink">{about.founderLead}</p>
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {about.founderTitles.map((title) => (
                  <li key={title} className="flex items-center gap-2 text-sm text-pa-gray">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-pa-green" />
                    {title}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-black/5 pt-4 text-sm italic text-pa-gray">
                {about.honor}
              </p>
            </div>
          </div>

          {/* Right — full text */}
          <div>
            <p className="leading-relaxed text-pa-gray">{about.body}</p>
            <ul className="mt-4 space-y-2">
              {about.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-pa-ink">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-pa-green" />
                  {f}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-lg font-bold">{about.strengthsLead}</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {about.strengths.map((s) => (
                <li
                  key={s}
                  className="rounded-xl border border-black/5 bg-white p-4 text-sm text-pa-gray"
                >
                  {s}
                </li>
              ))}
            </ul>

            <Link
              to={withLang('/qui-sommes-nous')}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
            >
              {about.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
