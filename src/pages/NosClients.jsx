import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Logo from '../components/Logo'
import { clients, correspondents } from '../data/assets'
import { useLang } from '../i18n/useLang'

export default function NosClients() {
  const { t } = useLang()
  return (
    <>
      <PageBanner
        title={t.nav.clients}
        crumb={t.nav.clients}
        subtitle={t.clientsPage.subtitle}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">{t.clientsPage.corrTitle}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-pa-gray">{t.clientsPage.corrText}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {correspondents.map((c) => (
              <div
                key={c.img}
                className="flex h-24 items-center justify-center rounded-xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <Logo img={c.img} name={c.name} />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-extrabold md:text-3xl">{t.clientsPage.finalTitle}</h2>
            <p className="mx-auto mt-2 max-w-2xl text-pa-gray">{t.clientsPage.finalText}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <div
                key={c.img}
                className="flex h-24 items-center justify-center rounded-xl border border-black/5 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <Logo img={c.img} name={c.name} className="grayscale transition hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
