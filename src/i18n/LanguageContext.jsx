import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { messages } from './translations'
import { LanguageContext } from './context'

export function LanguageProvider({ children }) {
  const { pathname } = useLocation()
  const lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr'

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => {
    const t = messages[lang]

    // Prefix an app path with /en when in English. `to` is always the
    // French canonical path (e.g. '/', '/nos-clients').
    const withLang = (to) => {
      if (lang !== 'en') return to
      return to === '/' ? '/en' : `/en${to}`
    }

    // Strip the /en prefix to recover the canonical French path.
    const stripLang = (p) => {
      if (p === '/en') return '/'
      if (p.startsWith('/en/')) return p.slice(3)
      return p
    }

    // Same page, other language — used by the FR/EN switch.
    const pathInLang = (targetLang) => {
      const base = stripLang(pathname)
      if (targetLang !== 'en') return base
      return base === '/' ? '/en' : `/en${base}`
    }

    return { lang, t, withLang, stripLang, pathInLang }
  }, [lang, pathname])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
