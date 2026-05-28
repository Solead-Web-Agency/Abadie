import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { useLang } from '../i18n/useLang'

export default function NosCoordonnees() {
  const { t } = useLang()
  return (
    <>
      <PageBanner
        title={t.nav.coord}
        crumb={t.nav.coord}
        subtitle={t.coord.subtitle}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {t.coord.cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pa-green/10 text-pa-green">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-pa-gray">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 shadow-sm">
            <iframe
              title={t.coord.mapTitle}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-1.62%2C12.30%2C-1.45%2C12.42&layer=mapnik&marker=12.37%2C-1.52"
            />
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
