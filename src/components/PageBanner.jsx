import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'

// `parent` ({ to, label }) adds an intermediate breadcrumb level, e.g. for
// press articles and posts.
export default function PageBanner({ title, subtitle, crumb, parent }) {
  const { t, withLang } = useLang()
  return (
    <section className="focus-light relative overflow-hidden bg-pa-ink text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-pa-green-dark via-pa-ink to-pa-ink opacity-95" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <nav aria-label={t.common.breadcrumb} className="mb-3 text-xs font-semibold uppercase tracking-wider">
          <ol className="flex flex-wrap items-center">
            <li>
              <Link to={withLang('/')} className="text-white/80 hover:text-white hover:underline">
                {t.common.home}
              </Link>
            </li>
            {parent && (
              <li className="flex items-center">
                <span className="px-2 text-white/50" aria-hidden="true">/</span>
                <Link to={withLang(parent.to)} className="text-white/80 hover:text-white hover:underline">
                  {parent.label}
                </Link>
              </li>
            )}
            <li className="flex items-center">
              <span className="px-2 text-white/50" aria-hidden="true">/</span>
              <span aria-current="page" className="text-white">
                {crumb || title}
              </span>
            </li>
          </ol>
        </nav>
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
