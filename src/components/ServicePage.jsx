import PageBanner from './PageBanner'
import CTA from './CTA'
import Icon from './Icon'
import { usePageMeta } from '../i18n/usePageMeta'

export default function ServicePage({ title, subtitle, intro, items, icon }) {
  usePageMeta()
  return (
    <>
      <PageBanner title={title} subtitle={subtitle} crumb={title} />

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pa-green/10 text-pa-green">
              <Icon name={icon} className="h-8 w-8" />
            </div>
            <p className="text-lg leading-relaxed text-pa-ink">{intro}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {items.map((it) => (
              <div
                key={it.title}
                className="rounded-2xl border border-black/5 bg-gray-50 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pa-green text-white" aria-hidden="true">
                  <Icon name="check" className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pa-gray">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
