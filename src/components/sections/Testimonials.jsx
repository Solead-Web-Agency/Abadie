import { useState } from 'react'
import { useLang } from '../../i18n/useLang'

export default function Testimonials() {
  const { t } = useLang()
  const items = t.testimonials.items
  const [i, setI] = useState(0)

  const item = items[i]
  const go = (d) => setI((v) => (v + d + items.length) % items.length)

  return (
    <section className="relative overflow-hidden bg-pa-ink py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-pa-ink via-[#06351f] to-pa-green-dark opacity-90" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-200">
          {t.testimonials.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
          {t.testimonials.title}
        </h2>

        <div className="mt-10">
          <svg
            className="mx-auto h-12 w-12 text-pa-green"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M9.5 7C6.5 7 5 9.5 5 12.5V18h6v-6H8c0-2 .8-3 2.5-3V7zm9 0c-3 0-4.5 2.5-4.5 5.5V18h6v-6h-3c0-2 .8-3 2.5-3V7z" />
          </svg>
          <blockquote
            key={i}
            className="pa-fade mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            « {item.text} »
          </blockquote>
          <p className="mt-6 font-semibold text-emerald-200">{item.role}</p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
          >
            ←
          </button>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Testimonial ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === i ? 'w-8 bg-pa-green' : 'w-2 bg-white/30'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
