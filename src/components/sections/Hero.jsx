import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'

// Per-slide visuals (background photo + book cover), language-neutral.
const visuals = [
  { bg: 'hero-fiscal.jpg', cover: 'jurisprudence-fiscale.png' },
  { bg: 'hero-social.jpg', cover: 'Droit-du-travail-est-enseignement-priv-non-conv.png' },
  { bg: 'hero-compta.jpg', cover: 'lessentiel-de-la-fisacalite-burkinabe.png' },
]

export default function Hero() {
  const { t, withLang } = useLang()
  const slides = t.hero.slides
  const [i, setI] = useState(0)

  useEffect(() => {
    const tm = setInterval(() => setI((v) => (v + 1) % slides.length), 6500)
    return () => clearInterval(tm)
  }, [slides.length])

  const slide = slides[i]
  const visual = visuals[i] || visuals[0]

  return (
    <section className="relative overflow-hidden bg-pa-ink">
      {/* Background photos with crossfade */}
      {visuals.map((v, idx) => (
        <div
          key={v.bg}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(/images/${v.bg})`,
            opacity: idx === i ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-4 py-12 md:min-h-[620px] lg:grid-cols-2">
        {/* Book cover card */}
        <div className="order-2 flex justify-center lg:order-1">
          <div className="w-60 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-black/5 sm:w-72">
            <img
              key={visual.cover}
              src={`/images/${visual.cover}`}
              alt={slide.title}
              className="pa-fade w-full rounded-lg object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        </div>

        {/* Title + button */}
        <div className="order-1 flex flex-col items-start lg:order-2">
          <span className="mb-4 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            {t.hero.eyebrow}
          </span>
          <div className="rounded-md bg-black/35 px-6 py-5 backdrop-blur-sm">
            <h1
              key={slide.title}
              className="pa-fade font-serif text-4xl font-medium leading-tight text-white md:text-6xl"
            >
              {slide.title}
            </h1>
            <p key={slide.text} className="pa-fade mt-3 max-w-xl text-base text-white/85 md:text-lg">
              {slide.text}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={withLang(slide.to)}
              className="rounded-md bg-pa-red px-7 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-pa-red-dark"
            >
              {t.hero.ctaMore}…
            </Link>
            <Link
              to={withLang('/nous-ecrire')}
              className="rounded-md border border-white/40 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.hero.ctaContact}
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? 'w-8 bg-pa-green' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
