import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { bookImage } from '../../data/books'
import { useLang } from '../../i18n/useLang'

// Per-slide visuals (background photo + book), language-neutral.
const visuals = [
  { bg: 'fiscal', book: 'jurisprudence-fiscale' },
  { bg: 'social', book: 'reglementation-du-travail' },
  { bg: 'compta', book: 'essentiel-fiscalite-burkinabe' },
]

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

export default function Hero() {
  const { t, withLang } = useLang()
  const slides = t.hero.slides
  const [i, setI] = useState(0)
  // `paused` is the user's choice (button); `held` is a temporary pause while
  // the pointer or keyboard focus is inside the slideshow.
  const [paused, setPaused] = useState(prefersReducedMotion)
  const [held, setHeld] = useState(false)
  const running = !paused && !held

  useEffect(() => {
    if (!running) return
    const tm = setInterval(() => setI((v) => (v + 1) % slides.length), 6500)
    return () => clearInterval(tm)
  }, [running, slides.length])

  const slide = slides[i]
  const visual = visuals[i] || visuals[0]

  return (
    <section
      aria-roledescription="carrousel"
      aria-label={t.hero.label}
      className="relative overflow-hidden bg-pa-ink"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false)
      }}
    >
      {/* Background photos with crossfade */}
      {visuals.map((v, idx) => (
        <div
          key={v.bg}
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url(/images/hero/${v.bg}.webp)`,
            opacity: idx === i ? 1 : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div
        className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-8 px-4 py-12 md:min-h-[620px] lg:grid-cols-2"
        aria-live={running ? 'off' : 'polite'}
      >
        {/* Book visual */}
        <div className="order-2 flex justify-center lg:order-1">
          <div className="w-56 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-black/5 sm:w-64">
            <img
              key={visual.book}
              src={bookImage(visual.book, 'small')}
              alt={t.hero.coverAlt}
              width="480"
              height="720"
              className="pa-fade h-auto w-full rounded-xl"
            />
          </div>
        </div>

        {/* Title + button */}
        <div className="order-1 flex flex-col items-start lg:order-2">
          <span className="mb-4 rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
            {t.hero.eyebrow}
          </span>
          <div className="rounded-md bg-black/40 px-6 py-5 backdrop-blur-sm">
            <h1 key={slide.title} className="pa-fade font-serif text-4xl font-medium leading-tight text-white md:text-6xl">
              {slide.title}
            </h1>
            <p key={slide.text} className="pa-fade mt-3 max-w-xl text-base text-white md:text-lg">
              {slide.text}
            </p>
          </div>
          <div className="focus-light mt-6 flex flex-wrap gap-3">
            <Link
              to={withLang(slide.to)}
              className="rounded-md bg-pa-red px-7 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-pa-red-dark"
            >
              {t.hero.ctaMore}
              <span className="sr-only"> : {slide.title}</span>
            </Link>
            <Link
              to={withLang('/nous-ecrire')}
              className="rounded-md border border-white/60 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.hero.ctaContact}
            </Link>
          </div>
        </div>
      </div>

      {/* Controls: pause/play + dots */}
      <div className="focus-light absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? t.hero.play : t.hero.pause}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/40 text-white transition-colors hover:bg-black/60"
        >
          <Icon name={paused ? 'play' : 'pause'} className="h-4 w-4" />
        </button>
        {slides.map((s, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`${t.hero.slide} ${idx + 1} : ${s.title}`}
            aria-current={idx === i ? 'true' : undefined}
            onClick={() => setI(idx)}
            className="flex h-9 items-center"
          >
            <span
              className={`block h-2 rounded-full transition-all ${idx === i ? 'w-8 bg-white' : 'w-2 bg-white/60'}`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
