import { Link } from 'react-router-dom'
import { useLang } from '../i18n/useLang'

export default function PageBanner({ title, subtitle, crumb }) {
  const { t, withLang } = useLang()
  return (
    <section className="relative overflow-hidden bg-pa-ink text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-pa-green-dark via-pa-ink to-pa-ink opacity-95" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <nav className="mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-200/80">
          <Link to={withLang('/')} className="text-white/70 hover:text-white">
            {t.common.home}
          </Link>
          <span className="px-2 text-white/40">/</span>
          <span className="text-white/90">{crumb || title}</span>
        </nav>
        <h1 className="max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
