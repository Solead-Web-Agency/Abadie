import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import { books } from '../data/assets'
import { useLang } from '../i18n/useLang'

export default function NosOuvrages() {
  const { t } = useLang()
  return (
    <>
      <PageBanner
        title={t.books.title}
        crumb={t.nav.ouvrages}
        subtitle={t.ouvragesPage.subtitle}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {books.map((b) => (
              <figure key={b.img} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-md ring-1 ring-black/5 transition-transform group-hover:-translate-y-1 group-hover:shadow-xl">
                  <img
                    src={`/images/${b.img}`}
                    alt={b.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.parentElement.classList.add(
                        'flex',
                        'items-center',
                        'justify-center',
                        'p-3'
                      )
                      e.currentTarget.outerHTML =
                        '<span class="text-center text-xs font-semibold text-pa-gray">' +
                        b.title +
                        '</span>'
                    }}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTA title={t.ouvragesPage.ctaTitle} text={t.ouvragesPage.ctaText} />
    </>
  )
}
