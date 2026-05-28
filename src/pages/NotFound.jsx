import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'

export default function NotFound() {
  const { t, withLang } = useLang()
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-24 text-center">
      <div>
        <p className="font-display text-7xl font-extrabold text-pa-green">404</p>
        <h1 className="mt-4 text-2xl font-bold">{t.notfound.title}</h1>
        <p className="mt-2 text-pa-gray">{t.notfound.text}</p>
        <Link
          to={withLang('/')}
          className="mt-6 inline-block rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
        >
          {t.notfound.back}
        </Link>
      </div>
    </section>
  )
}
