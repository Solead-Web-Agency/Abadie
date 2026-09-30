import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { useLang } from '../i18n/useLang'
import { useConsent } from '../consent/useConsent'
import { usePageMeta } from '../i18n/usePageMeta'
import {
  CONTACT_ADDRESS_LINES,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  MAPS_DIRECTIONS_HREF,
  MAPS_EMBED_SRC,
  MAPS_SEARCH_HREF,
  WHATSAPP_HREF,
} from '../i18n/translations'

const btn =
  'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold transition-colors'
const primary = `${btn} bg-pa-green text-white hover:bg-pa-green-dark`
const secondary = `${btn} border border-pa-green text-pa-green hover:bg-pa-green hover:text-white`

function Card({ icon, title, children, action }) {
  return (
    <li className="flex flex-col rounded-2xl border border-black/10 bg-white p-6 text-center shadow-sm">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-pa-green/10 text-pa-green">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h2 className="mt-4 font-bold">{title}</h2>
      <div className="mt-1 flex-1 text-sm text-pa-gray">{children}</div>
      <div className="mt-5">{action}</div>
    </li>
  )
}

export default function NosCoordonnees() {
  const { t } = useLang()
  const c = t.coord
  const { consent, allow } = useConsent()
  usePageMeta()

  const newTab = <span className="sr-only"> {t.common.newTab}</span>

  return (
    <>
      <PageBanner title={t.nav.coord} crumb={t.nav.coord} subtitle={c.subtitle} />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              icon="pin"
              title={c.addressTitle}
              action={
                <a href={MAPS_DIRECTIONS_HREF} target="_blank" rel="noreferrer" className={primary}>
                  <Icon name="route" className="h-4 w-4" />
                  {c.directions}
                  {newTab}
                </a>
              }
            >
              <address className="not-italic">
                <a href={MAPS_SEARCH_HREF} target="_blank" rel="noreferrer" className="hover:text-pa-green hover:underline">
                  Cabinet Pierre Abadie
                  {CONTACT_ADDRESS_LINES.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  {newTab}
                </a>
              </address>
            </Card>

            <Card
              icon="phone"
              title={c.phoneTitle}
              action={
                <a href={`tel:${CONTACT_PHONE_HREF}`} className={secondary}>
                  <Icon name="phone" className="h-4 w-4" />
                  {c.call}
                </a>
              }
            >
              <a href={`tel:${CONTACT_PHONE_HREF}`} className="text-base font-semibold text-pa-ink hover:text-pa-green">
                {CONTACT_PHONE}
              </a>
            </Card>

            <Card
              icon="whatsapp"
              title={c.whatsappTitle}
              action={
                <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer" className={primary}>
                  <Icon name="whatsapp" className="h-4 w-4" />
                  {c.whatsapp}
                  {newTab}
                </a>
              }
            >
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold text-pa-ink hover:text-pa-green"
              >
                {CONTACT_PHONE}
                {newTab}
              </a>
            </Card>

            <Card
              icon="mail"
              title={c.emailTitle}
              action={
                <a href={`mailto:${CONTACT_EMAIL}`} className={secondary}>
                  <Icon name="mail" className="h-4 w-4" />
                  {c.mail}
                </a>
              }
            >
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-base font-semibold text-pa-ink hover:text-pa-green">
                {CONTACT_EMAIL}
              </a>
            </Card>
          </ul>

          <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
            {consent.maps ? (
              <iframe
                title={c.mapTitle}
                className="h-96 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={MAPS_EMBED_SRC}
              />
            ) : (
              <div className="flex h-96 flex-col items-center justify-center gap-4 bg-gray-50 px-6 text-center">
                <Icon name="pin" className="h-10 w-10 text-pa-green" />
                <p className="max-w-md text-sm text-pa-gray">{c.mapNotice}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button type="button" onClick={() => allow('maps')} className={primary}>
                    {c.showMap}
                  </button>
                  <a href={MAPS_DIRECTIONS_HREF} target="_blank" rel="noreferrer" className={secondary}>
                    <Icon name="route" className="h-4 w-4" />
                    {c.directions}
                    {newTab}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}
