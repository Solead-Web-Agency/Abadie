import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import QuiSommesNous from './pages/QuiSommesNous'
import ConseilFiscal from './pages/ConseilFiscal'
import DroitSocial from './pages/DroitSocial'
import ExpertiseComptable from './pages/ExpertiseComptable'
import NosClients from './pages/NosClients'
import NosOuvrages from './pages/NosOuvrages'
import PresseTV from './pages/PresseTV'
import PresseArticle from './pages/PresseArticle'
import NosPosts from './pages/NosPosts'
import Post from './pages/Post'
import NousRejoindre from './pages/NousRejoindre'
import NousEcrire from './pages/NousEcrire'
import NosCoordonnees from './pages/NosCoordonnees'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import NotFound from './pages/NotFound'

// Canonical (French) paths. Rendered once at root and once under /en.
const routes = [
  { index: true, element: <Home /> },
  { path: 'qui-sommes-nous', element: <QuiSommesNous /> },
  { path: 'conseil-fiscal', element: <ConseilFiscal /> },
  { path: 'conseiller-droit-social', element: <DroitSocial /> },
  { path: 'expertise-comptable', element: <ExpertiseComptable /> },
  { path: 'nos-clients', element: <NosClients /> },
  { path: 'nos-ouvrages', element: <NosOuvrages /> },
  { path: 'nos-actions-presse-et-tv', element: <PresseTV /> },
  { path: 'nos-actions-presse-et-tv/:slug', element: <PresseArticle /> },
  { path: 'nos-posts', element: <NosPosts /> },
  { path: 'nos-posts/:slug', element: <Post /> },
  { path: 'nous-rejoindre', element: <NousRejoindre /> },
  { path: 'nous-ecrire', element: <NousEcrire /> },
  { path: 'nos-coordonnees', element: <NosCoordonnees /> },
  { path: 'mentions-legales', element: <MentionsLegales /> },
  { path: 'politique-de-confidentialite', element: <Confidentialite /> },
  { path: '*', element: <NotFound /> },
]

function renderRoutes() {
  return routes.map((r) =>
    r.index ? (
      <Route key="index" index element={r.element} />
    ) : (
      <Route key={r.path} path={r.path} element={r.element} />
    )
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/en" element={<Layout />}>
          {renderRoutes()}
        </Route>
        <Route path="/" element={<Layout />}>
          {renderRoutes()}
        </Route>
      </Routes>
    </>
  )
}
