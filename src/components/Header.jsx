import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../data/nav'
import { useLang } from '../i18n/useLang'
import Icon from './Icon'
import {
  SOCIALS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_ADDRESS_SHORT,
  MAPS_SEARCH_HREF,
  WHATSAPP_HREF,
} from '../i18n/translations'

const topLinkClass = (active) =>
  `px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
    active ? 'text-pa-green-dark underline decoration-2 underline-offset-8' : 'text-pa-ink hover:text-pa-green-dark'
  }`

// Desktop menu entry. Only one dropdown can be open at a time: the open state
// lives in <Header> (openId) and is passed down.
function TopLink({ item, open, onOpen, onClose }) {
  const location = useLocation()
  const { t, withLang } = useLang()
  const wrapRef = useRef(null)
  const buttonRef = useRef(null)

  if (!item.children) {
    return (
      <NavLink to={withLang(item.to)} end={item.to === '/'} className={({ isActive }) => topLinkClass(isActive)}>
        {t.nav[item.id]}
      </NavLink>
    )
  }

  const childActive = item.children.some((c) => withLang(c.to) === location.pathname)
  const menuId = `submenu-${item.id}`

  const onKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      e.stopPropagation()
      onClose()
      buttonRef.current?.focus()
    }
  }

  // Close when keyboard focus leaves the entry (Tab past the last link).
  const onBlur = (e) => {
    if (open && !wrapRef.current?.contains(e.relatedTarget)) onClose()
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => (open ? onClose() : onOpen())}
        className={`flex items-center gap-1 ${topLinkClass(childActive)}`}
      >
        {t.nav[item.id]}
        <svg
          className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul
        id={menuId}
        hidden={!open}
        className="absolute left-0 top-full z-30 min-w-60 rounded-b-md border-t-2 border-pa-green bg-white py-2 shadow-xl"
      >
        {item.children.map((c) => (
          <li key={c.to}>
            <NavLink
              to={withLang(c.to)}
              onClick={onClose}
              className={({ isActive }) =>
                `block px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'bg-pa-green/10 font-semibold text-pa-green'
                    : 'text-pa-gray hover:bg-pa-green/5 hover:text-pa-green'
                }`
              }
            >
              {t.nav[c.id]}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openId, setOpenId] = useState(null)
  const { lang, t, withLang, pathInLang } = useLang()
  const { pathname } = useLocation()
  const navRef = useRef(null)
  const burgerRef = useRef(null)

  // Close every menu when the page changes.
  const [lastPath, setLastPath] = useState(pathname)
  if (lastPath !== pathname) {
    setLastPath(pathname)
    setOpenId(null)
    setMobileOpen(false)
  }

  // Escape closes the mobile menu; a click outside closes the desktop dropdown.
  useEffect(() => {
    if (!mobileOpen && !openId) return
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (mobileOpen) {
        setMobileOpen(false)
        burgerRef.current?.focus()
      }
      setOpenId(null)
    }
    const onPointer = (e) => {
      if (openId && !navRef.current?.contains(e.target)) setOpenId(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onPointer)
    }
  }, [mobileOpen, openId])

  return (
    <header className="relative z-40 shadow-sm">
      {/* Tier 1 — red contact bar */}
      <div className="focus-light bg-pa-red text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 text-xs sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <a
              href={MAPS_SEARCH_HREF}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Icon name="pin" className="h-3.5 w-3.5" />
              {CONTACT_ADDRESS_SHORT}
              <span className="sr-only"> {t.common.newTab}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE_HREF}`} className="flex items-center gap-1.5 hover:underline">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {t.header.phone} {CONTACT_PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:underline"
            >
              <Icon name="whatsapp" className="h-3.5 w-3.5" />
              WhatsApp
              <span className="sr-only"> {t.common.newTab}</span>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-1.5 hover:underline">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-2" aria-label={t.header.socials}>
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${s.name} ${t.common.newTab}`}
                    className="block opacity-90 transition-opacity hover:opacity-100"
                  >
                    <Icon name={s.icon} className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="h-3 w-px bg-white/40" aria-hidden="true" />
            <nav aria-label={t.header.lang} className="flex items-center gap-1 font-semibold">
              {['fr', 'en'].map((l) => (
                <Link
                  key={l}
                  to={pathInLang(l)}
                  lang={l}
                  hrefLang={l}
                  aria-label={t.header.langNames[l]}
                  aria-current={lang === l ? 'true' : undefined}
                  className={`rounded px-1.5 py-0.5 uppercase transition-colors ${
                    lang === l ? 'bg-white text-pa-red' : 'text-white hover:underline'
                  }`}
                >
                  {l}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tier 2 — logo + menu */}
      <div className="bg-pa-yellow">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5">
          <Link to={withLang('/')} className="flex items-center">
            <img
              src="/images/logo-cabinet.webp"
              alt={`Cabinet Pierre Abadie — ${t.common.home}`}
              width="190"
              height="44"
              className="h-11 w-auto"
            />
          </Link>

          <nav ref={navRef} aria-label={t.header.mainNav} className="hidden items-center lg:flex">
            {nav.map((item) => (
              <TopLink
                key={item.id}
                item={item}
                open={openId === item.id}
                onOpen={() => setOpenId(item.id)}
                onClose={() => setOpenId((id) => (id === item.id ? null : id))}
              />
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
              ref={burgerRef}
              type="button"
              aria-label={mobileOpen ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-md p-2 text-pa-ink lg:hidden"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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

      <div id="mobile-menu" hidden={!mobileOpen} className="border-t border-black/5 bg-white lg:hidden">
        <nav aria-label={t.header.mainNav} className="mx-auto max-w-7xl px-4 py-3">
          <ul>
            {nav.map((item) =>
              item.children ? (
                <li key={item.id} className="py-1">
                  <p className="px-1 pt-2 text-xs font-bold uppercase tracking-wider text-pa-green">
                    {t.nav[item.id]}
                  </p>
                  <ul>
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink
                          to={withLang(c.to)}
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm ${isActive ? 'font-semibold text-pa-green' : 'text-pa-gray'}`
                          }
                        >
                          {t.nav[c.id]}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.to}>
                  <NavLink
                    to={withLang(item.to)}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block px-1 py-2 text-sm font-semibold uppercase tracking-wide ${
                        isActive ? 'text-pa-green' : 'text-pa-ink'
                      }`
                    }
                  >
                    {t.nav[item.id]}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}
