import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLang } from './useLang'
import { SITE_URL } from './translations'

function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

const meta = (key, name, content) =>
  upsert(`meta[${key}="${name}"]`, 'meta', { [key]: name, content })

const link = (rel, href, hreflang) =>
  upsert(
    hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`,
    'link',
    hreflang ? { rel, href, hreflang } : { rel, href }
  )

// Preview deployments (*.vercel.app) must not compete with the official domain.
const isPreviewHost = () => window.location.hostname.endsWith('.vercel.app')

// Sets <title>, description, canonical, hreflang and Open Graph tags for the
// current route. Static pages get their text from t.seo.pages; detail pages
// pass their own title/description.
export function usePageMeta({ title, description, noindex = false } = {}) {
  const { t, lang, stripLang } = useLang()
  const { pathname } = useLocation()
  const base = stripLang(pathname)
  const preset = t.seo.pages[base]
  const pageTitle = title ?? preset?.title
  const desc = description ?? preset?.description ?? t.seo.default.description

  useEffect(() => {
    const fullTitle = pageTitle ? `${pageTitle} | ${t.seo.siteName}` : t.seo.default.title
    const frUrl = SITE_URL + base
    const enUrl = SITE_URL + (base === '/' ? '/en' : `/en${base}`)
    const url = lang === 'en' ? enUrl : frUrl

    document.title = fullTitle
    meta('name', 'description', desc)
    meta('name', 'robots', noindex || isPreviewHost() ? 'noindex, nofollow' : 'index, follow')
    link('canonical', url)
    link('alternate', frUrl, 'fr')
    link('alternate', enUrl, 'en')
    link('alternate', frUrl, 'x-default')
    meta('property', 'og:title', fullTitle)
    meta('property', 'og:description', desc)
    meta('property', 'og:url', url)
    meta('property', 'og:locale', lang === 'en' ? 'en_GB' : 'fr_FR')
  }, [pageTitle, desc, noindex, base, lang, t])
}
