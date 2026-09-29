import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { clients } from '../../data/assets'
import Logo from '../Logo'
import { useLang } from '../../i18n/useLang'

function MarqueeRow({ items, reverse }) {
  const loop = [...items, ...items]
  return (
    <div className="overflow-hidden py-2">
      <div
        className="pa-marquee flex gap-4"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {loop.map((c, idx) => (
          <div
            key={`${c.img}-${idx}`}
            aria-hidden={idx >= items.length ? 'true' : undefined}
            className="flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-white p-4 shadow-sm"
          >
            <Logo img={c.img} name={c.name} className="grayscale transition hover:grayscale-0" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Clients() {
  const { t, withLang } = useLang()
  const [paused, setPaused] = useState(false)
  const third = Math.ceil(clients.length / 3)
  const rows = [
    clients.slice(0, third),
    clients.slice(third, third * 2),
    clients.slice(third * 2),
  ]

  return (
    <section className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-pa-green">
          {t.clients.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{t.clients.title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-pa-gray">{t.clients.text}</p>
      </div>

      <div className="pa-marquee-group mt-12 space-y-4" data-paused={paused}>
        {rows.map((row, idx) => (
          <MarqueeRow key={idx} items={row} reverse={idx % 2 === 1} />
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-center">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="inline-flex items-center gap-2 rounded-md border border-pa-ink/20 px-4 py-3 text-sm font-semibold text-pa-ink transition-colors hover:bg-gray-50"
        >
          <Icon name={paused ? 'play' : 'pause'} className="h-4 w-4" />
          {paused ? t.clients.play : t.clients.pause}
        </button>
        <Link
          to={withLang('/nos-clients')}
          className="inline-flex items-center gap-2 rounded-md bg-pa-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
        >
          {t.clients.all}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  )
}
