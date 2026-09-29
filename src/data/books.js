// The 10 books supplied by the firm (Sept. 2026). Visuals live in
// public/images/ouvrages as <slug>.webp (1024px) and <slug>-480.webp.
export const books = [
  {
    slug: 'reglementation-fiscale-2025',
    title: {
      fr: 'Toute la réglementation fiscale 2025',
      en: 'Complete tax regulations 2025',
    },
  },
  {
    slug: 'essentiel-fiscalite-burkinabe',
    title: {
      fr: "L'essentiel de la fiscalité burkinabè, avec exercices corrigés",
      en: 'The essentials of Burkinabè taxation, with worked exercises',
    },
  },
  {
    slug: 'jurisprudence-fiscale',
    title: {
      fr: 'Jurisprudence fiscale analysée',
      en: 'Tax case law, analysed',
    },
  },
  {
    slug: 'fiscalite-internationale',
    title: {
      fr: 'Fiscalité internationale & Burkina Faso',
      en: 'International taxation & Burkina Faso',
    },
  },
  {
    slug: 'reglementation-du-travail',
    title: {
      fr: 'Réglementation du travail — Tome I : Code du travail et conventions collectives',
      en: 'Labour regulations — Volume I: Labour Code and collective agreements',
    },
  },
  {
    slug: 'securite-sociale',
    title: {
      fr: 'Réglementation du travail — Tome II : Sécurité sociale',
      en: 'Labour regulations — Volume II: Social security',
    },
  },
  {
    slug: 'reglementation-douaniere',
    title: {
      fr: 'Réglementation douanière — Tome 1 : Tous les textes applicables',
      en: 'Customs regulations — Volume 1: All applicable texts',
    },
  },
  {
    slug: 'regimes-douaniers',
    title: {
      fr: 'Réglementation douanière — Tome 2 : Régimes particuliers et exonérations',
      en: 'Customs regulations — Volume 2: Special regimes and exemptions',
    },
  },
  {
    slug: 'tarif-exterieur-commun',
    title: {
      fr: 'Réglementation douanière — Tome 3 : Tarif extérieur commun',
      en: 'Customs regulations — Volume 3: Common external tariff',
    },
  },
  {
    slug: 'reglementation-secteur-minier',
    title: {
      fr: 'Réglementation du secteur minier & textes d’application',
      en: 'Mining sector regulations & implementing texts',
    },
  },
]

export const bookImage = (slug, size) =>
  `/images/ouvrages/${slug}${size === 'small' ? '-480' : ''}.webp`
