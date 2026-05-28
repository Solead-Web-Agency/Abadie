import { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { nav } from '../data/nav'
import { useLang } from '../i18n/useLang'
import Icon from './Icon'
import {
  SOCIALS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_ADDRESS,
} from '../i18n/translations'

function TopLink({ item, onNavigate }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { t, withLang } = useLang()

  if (!item.children) {
    return (
      <NavLink
        to={withLang(item.to)}
        end={item.to === '/'}
        onClick={onNavigate}
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
            isActive ? 'text-pa-green' : 'text-pa-ink hover:text-pa-green'
          }`
        }
      >
        {t.nav[item.id]}
      </NavLink>
    )
  }

  const childActive = item.children.some((c) => withLang(c.to) === location.pathname)

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
          childActive ? 'text-pa-green' : 'text-pa-ink hover:text-pa-green'
        }`}
      >
        {t.nav[item.id]}
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-30 min-w-60 rounded-b-md border-t-2 border-pa-green bg-white py-2 shadow-xl">
          {item.children.map((c) => (
            <NavLink
              key={c.to}
              to={withLang(c.to)}
              onClick={() => {
                setOpen(false)
                onNavigate?.()
              }}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-pa-green/10 text-pa-green'
                    : 'text-pa-gray hover:bg-pa-green/5 hover:text-pa-green'
                }`
              }
            >
              {t.nav[c.id]}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, t, withLang, pathInLang } = useLang()
  const navigate = useNavigate()

  const switchLang = (l) => {
    navigate(pathInLang(l))
    setMobileOpen(false)
  }

  return (
    <header className="relative z-40 shadow-sm">
      {/* Tier 1 — red contact bar */}
      <div className="bg-pa-red text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-xs sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-1.5">
              <Icon name="pin" className="h-3.5 w-3.5" />
              {CONTACT_ADDRESS}
            </span>
            <a href={`tel:${CONTACT_PHONE_HREF}`} className="flex items-center gap-1.5 hover:text-white/80">
              <Icon name="phone" className="h-3.5 w-3.5" />
              Tél.: {CONTACT_PHONE}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1.5 hover:text-white/80">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="opacity-90 transition-opacity hover:opacity-100"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <span className="h-3 w-px bg-white/30" />
            <div className="flex items-center gap-1 font-semibold">
              {['fr', 'en'].map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => switchLang(l)}
                  className={`rounded px-1.5 py-0.5 uppercase transition-colors ${
                    lang === l ? 'bg-white text-pa-red' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2 — logo + menu */}
      <div className="bg-pa-yellow">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
          <Link to={withLang('/')} className="flex items-center" onClick={() => setMobileOpen(false)}>
            <img
              src="/images/header-sf.png"
              alt="Cabinet Pierre Abadie"
              className="h-11 w-auto"
            />
          </Link>

          <nav className="hidden items-center lg:flex">
            {nav.map((item) => (
              <TopLink key={item.id} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to={withLang('/nous-ecrire')}
              className="hidden rounded-md bg-pa-green px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark md:inline-block"
            >
              {t.header.ecrire}
            </Link>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-md p-2 text-pa-ink lg:hidden"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Tier 3 — green announcement banner */}
      <div className="bg-pa-green text-center text-white">
        <p className="mx-auto max-w-7xl px-4 py-2 font-serif text-sm italic md:text-base">
          {t.header.banner}
        </p>
      </div>

      {mobileOpen && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3">
            {nav.map((item) =>
              item.children ? (
                <div key={item.id} className="py-1">
                  <p className="px-1 pt-2 text-xs font-bold uppercase tracking-wider text-pa-green">
                    {t.nav[item.id]}
                  </p>
                  {item.children.map((c) => (
                    <NavLink
                      key={c.to}
                      to={withLang(c.to)}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-pa-gray"
                    >
                      {t.nav[c.id]}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={withLang(item.to)}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className="block px-1 py-2 text-sm font-semibold uppercase tracking-wide text-pa-ink"
                >
                  {t.nav[item.id]}
                </NavLink>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
