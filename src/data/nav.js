// Navigation structure (mirrors the original WordPress menu).
// Labels are resolved per-language via t.nav[id]; `to` holds the canonical path.
export const nav = [
  {
    id: 'cabinet',
    children: [
      { id: 'qui', to: '/qui-sommes-nous' },
      { id: 'actu', to: '/actualites' },
      { id: 'rejoindre', to: '/nous-rejoindre' },
      { id: 'ecrire', to: '/nous-ecrire' },
      { id: 'coord', to: '/nos-coordonnees' },
    ],
  },
  {
    id: 'metier',
    children: [
      { id: 'fiscal', to: '/conseil-fiscal' },
      { id: 'social', to: '/conseiller-droit-social' },
      { id: 'compta', to: '/expertise-comptable' },
    ],
  },
  { id: 'clients', to: '/nos-clients' },
  { id: 'ouvrages', to: '/nos-ouvrages' },
  { id: 'presse', to: '/nos-actions-presse-et-tv' },
  { id: 'posts', to: '/nos-posts' },
]
