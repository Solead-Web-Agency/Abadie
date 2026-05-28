import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Logo from '../components/Logo'
import { clients } from '../data/assets'
import { useLang } from '../i18n/useLang'

const mediaNames = ['BLOOMBERG', 'CANAL', 'MEDIACOM', 'LECONOMISTE', 'ECO MEDIA', 'CIBLE REGIE']
const mediaLogos = clients.filter((c) => mediaNames.some((m) => c.name.includes(m)))

export default function PresseTV() {
  const { t } = useLang()
  return (
    <>
      <PageBanner
        title={t.nav.presse}
        crumb={t.nav.presse}
        subtitle={t.presse.subtitle}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {t.presse.appearances.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-black/5 bg-gray-50 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-pa-green">
                  {a.media}
                </p>
                <h3 className="mt-2 font-bold">{a.title}</h3>
              </div>
            ))}
          </div>

          {mediaLogos.length > 0 && (
            <>
              <h2 className="mt-16 text-center text-2xl font-extrabold">
                {t.presse.theyTalked}
              </h2>
              <div className="mt-8 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-6">
                {mediaLogos.map((c) => (
                  <div
                    key={c.img}
                    className="flex h-24 items-center justify-center rounded-xl border border-black/5 bg-white p-4 shadow-sm"
                  >
                    <Logo img={c.img} name={c.name} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CTA />
    </>
  )
}
