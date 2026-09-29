// Writes public/sitemap.xml (FR + EN with hreflang alternates). Run on build.
import { writeFileSync } from 'node:fs'
import { SITE_URL } from '../src/i18n/translations.js'
import { press, posts } from '../src/data/publications.js'

const pages = [
  '/',
  '/qui-sommes-nous',
  '/conseil-fiscal',
  '/conseiller-droit-social',
  '/expertise-comptable',
  '/nos-clients',
  '/nos-ouvrages',
  '/nos-actions-presse-et-tv',
  ...press.map((p) => `/nos-actions-presse-et-tv/${p.slug}`),
  '/nos-posts',
  ...posts.map((p) => `/nos-posts/${p.slug}`),
  '/nous-rejoindre',
  '/nous-ecrire',
  '/nos-coordonnees',
  '/mentions-legales',
  '/politique-de-confidentialite',
]

const fr = (p) => SITE_URL + p
const en = (p) => SITE_URL + (p === '/' ? '/en' : `/en${p}`)
const alternates = (p) =>
  [
    `    <xhtml:link rel="alternate" hreflang="fr" href="${fr(p)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${en(p)}"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${fr(p)}"/>`,
  ].join('\n')

const urls = pages
  .flatMap((p) => [fr(p), en(p)].map((loc) => `  <url>\n    <loc>${loc}</loc>\n${alternates(p)}\n  </url>`))
  .join('\n')

writeFileSync(
  new URL('../public/sitemap.xml', import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
)
console.log(`sitemap.xml: ${pages.length * 2} URLs`)
