import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Logo from '../components/Logo'
import { PublicationList } from '../components/Publications'
import { clients } from '../data/assets'
import { press } from '../data/publications'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

const mediaNames = ['CANAL+', 'MEDIACOM', "L'ÉCONOMISTE DU FASO", 'ECO MÉDIA MAROC', 'CIBLE REGIE']
const mediaLogos = clients.filter((c) => mediaNames.includes(c.name))

export default function PresseTV() {
  const { t } = useLang()
  usePageMeta()
  return (
    <>
      <PageBanner
        title={t.nav.presse}
        crumb={t.nav.presse}
        subtitle={t.presse.subtitle}
      />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-10 max-w-3xl leading-relaxed text-pa-gray">{t.presse.intro}</p>
          <PublicationList items={press} basePath="/nos-actions-presse-et-tv" readMore={t.presse.readMore} />

          {mediaLogos.length > 0 && (
            <>
              <h2 className="mt-16 text-center text-2xl font-extrabold">
                {t.presse.theyTalked}
              </h2>
              <ul className="mt-8 grid grid-cols-2 items-center gap-5 sm:grid-cols-3 lg:grid-cols-5">
                {mediaLogos.map((c) => (
                  <li
                    key={c.img}
                    className="flex h-24 items-center justify-center rounded-xl border border-black/5 bg-white p-4 shadow-sm"
                  >
                    <Logo img={c.img} name={c.name} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>
      <CTA />
    </>
  )
}
