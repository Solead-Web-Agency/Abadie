import { Link } from 'react-router-dom'
import { nav } from '../data/nav'
import { useLang } from '../i18n/useLang'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t, withLang } = useLang()
  const flat = nav.flatMap((i) => (i.children ? i.children : [i]))

  return (
    <footer className="bg-pa-ink text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/images/header-sf.png"
              alt="Cabinet Pierre Abadie"
              className="h-12 w-auto brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="font-display text-xl font-extrabold text-white">
              Cabinet Pierre Abadie
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
            {t.footer.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            {['LinkedIn', 'Facebook', 'X'].map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-gray-400"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.navTitle}
          </h4>
          <ul className="space-y-2 text-sm">
            {flat.slice(0, 7).map((i) => (
              <li key={i.to}>
                <Link to={withLang(i.to)} className="text-gray-400 transition-colors hover:text-pa-green">
                  {t.nav[i.id]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.contactTitle}
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>{t.footer.location}</li>
            <li>
              <Link to={withLang('/nos-coordonnees')} className="transition-colors hover:text-pa-green">
                {t.footer.coord}
              </Link>
            </li>
            <li>
              <Link to={withLang('/nous-ecrire')} className="transition-colors hover:text-pa-green">
                {t.footer.ecrire}
              </Link>
            </li>
            <li>
              <Link to={withLang('/nous-rejoindre')} className="transition-colors hover:text-pa-green">
                {t.footer.rejoindre}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-gray-500 sm:flex-row">
          <p>© {year} Cabinet Pierre Abadie. {t.footer.rights}</p>
          <p>{t.footer.note}</p>
        </div>
      </div>
    </footer>
  )
}
