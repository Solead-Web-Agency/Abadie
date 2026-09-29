import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Books from '../components/sections/Books'
import Testimonials from '../components/sections/Testimonials'
import Correspondents from '../components/sections/Correspondents'
import Clients from '../components/sections/Clients'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

function Stats() {
  const { t } = useLang()
  return (
    <section className="bg-pa-green">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-12 text-center text-white lg:grid-cols-4">
        {t.stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-4xl font-extrabold md:text-5xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-white/85">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  usePageMeta()
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Books />
      <Testimonials />
      <Correspondents />
      <Clients />
    </>
  )
}
