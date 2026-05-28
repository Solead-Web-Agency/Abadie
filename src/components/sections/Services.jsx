import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { useLang } from '../../i18n/useLang'

const meta = [
  { key: 'fiscal', icon: 'scale', to: '/conseil-fiscal' },
  { key: 'social', icon: 'users', to: '/conseiller-droit-social' },
  { key: 'compta', icon: 'chart', to: '/expertise-comptable' },
]

export default function Services() {
  const { t, withLang } = useLang()
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pa-green">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
            {t.services.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-pa-green" />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {meta.map((s) => {
            const item = t.services.items[s.key]
            return (
              <div
                key={s.key}
                className="group flex flex-col rounded-2xl border border-black/5 bg-gray-50 p-8 transition-all hover:-translate-y-1 hover:border-pa-green/30 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pa-green/10 text-pa-green transition-colors group-hover:bg-pa-green group-hover:text-white">
                  <Icon name={s.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-pa-gray">
                  {item.text}
                </p>
                <Link
                  to={withLang(s.to)}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-pa-green hover:gap-2"
                >
                  {t.services.more}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
