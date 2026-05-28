import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'

export default function CTA({ title, text }) {
  const { t, withLang } = useLang()
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-pa-ink px-8 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-white md:text-3xl">
              {title || t.cta.title}
            </h2>
            <p className="mt-2 text-white/75">{text || t.cta.text}</p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              to={withLang('/nous-ecrire')}
              className="rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
            >
              {t.cta.ecrire}
            </Link>
            <Link
              to={withLang('/nos-coordonnees')}
              className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.cta.coord}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
