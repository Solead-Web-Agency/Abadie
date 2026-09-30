import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CookieBanner from './CookieBanner'
import { useLang } from '../i18n/useLang'

export default function Layout() {
  const { t } = useLang()
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a href="#contenu" className="pa-skip">
        {t.common.skip}
      </a>
      {/* Early in the DOM so keyboard users reach it first; displayed fixed at the bottom. */}
      <CookieBanner />
      <Header />
      <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
