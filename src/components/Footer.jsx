import { Link } from 'react-router-dom'
import Icon from './Icon'
import {
  SOCIALS,
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MAPS_SEARCH_HREF,
  WHATSAPP_HREF,
} from '../i18n/translations'
import { useLang } from '../i18n/useLang'

const footerNav = [
  { id: 'qui', to: '/qui-sommes-nous' },
  { id: 'fiscal', to: '/conseil-fiscal' },
  { id: 'social', to: '/conseiller-droit-social' },
  { id: 'compta', to: '/expertise-comptable' },
  { id: 'ouvrages', to: '/nos-ouvrages' },
  { id: 'presse', to: '/nos-actions-presse-et-tv' },
  { id: 'posts', to: '/nos-posts' },
]

const linkClass = 'text-gray-300 transition-colors hover:text-white hover:underline'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t, withLang } = useLang()

  return (
    <footer className="focus-light bg-pa-ink text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src="/images/logo-cabinet.webp"
            alt="Cabinet Pierre Abadie"
            width="207"
            height="48"
            className="h-12 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-300">{t.footer.tagline}</p>
          <ul className="mt-5 flex gap-3" aria-label={t.header.socials}>
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.name} ${t.common.newTab}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-gray-200 transition-colors hover:border-pa-green hover:bg-pa-green hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-labelledby="footer-nav-title">
          <h2 id="footer-nav-title" className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.navTitle}
          </h2>
          <ul className="space-y-2 text-sm">
            {footerNav.map((i) => (
              <li key={i.to}>
                <Link to={withLang(i.to)} className={linkClass}>
                  {t.nav[i.id]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
            {t.footer.contactTitle}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={MAPS_SEARCH_HREF} target="_blank" rel="noreferrer" className={linkClass}>
                {CONTACT_ADDRESS}
                <span className="sr-only"> {t.common.newTab}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT_PHONE_HREF}`} className={linkClass}>
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className={linkClass}>
                {t.footer.whatsapp} : {CONTACT_PHONE}
                <span className="sr-only"> {t.common.newTab}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="pt-2">
              <Link to={withLang('/nos-coordonnees')} className={linkClass}>
                {t.footer.coord}
              </Link>
            </li>
            <li>
              <Link to={withLang('/nous-ecrire')} className={linkClass}>
                {t.footer.ecrire}
              </Link>
            </li>
            <li>
              <Link to={withLang('/nous-rejoindre')} className={linkClass}>
                {t.footer.rejoindre}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-gray-400 sm:flex-row">
          <p>
            © {year} Cabinet Pierre Abadie. {t.footer.rights}
          </p>
          <ul className="flex gap-4">
            <li>
              <Link to={withLang('/mentions-legales')} className={linkClass}>
                {t.nav.legal}
              </Link>
            </li>
            <li>
              <Link to={withLang('/politique-de-confidentialite')} className={linkClass}>
                {t.nav.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
