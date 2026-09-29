import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

const suggestions = [
  { id: 'qui', to: '/qui-sommes-nous' },
  { id: 'fiscal', to: '/conseil-fiscal' },
  { id: 'ouvrages', to: '/nos-ouvrages' },
  { id: 'coord', to: '/nos-coordonnees' },
]

export default function NotFound() {
  const { t, withLang } = useLang()
  usePageMeta({ title: t.seo.notFound, noindex: true })
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center">
      <div className="max-w-xl">
        <img
          src="/images/logo-cabinet.webp"
          alt="Cabinet Pierre Abadie"
          width="207"
          height="48"
          className="mx-auto h-12 w-auto"
        />
        <p className="mt-8 font-display text-7xl font-extrabold text-pa-green" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold">{t.notfound.title}</h1>
        <p className="mt-2 text-pa-gray">{t.notfound.text}</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          {suggestions.map((s) => (
            <li key={s.to}>
              <Link to={withLang(s.to)} className="text-pa-green underline-offset-4 hover:underline">
                {t.nav[s.id]}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to={withLang('/')}
          className="mt-8 inline-block rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
        >
          {t.notfound.back}
        </Link>
      </div>
    </section>
  )
}
