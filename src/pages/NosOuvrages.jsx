import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import BookGrid from '../components/BookGrid'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

export default function NosOuvrages() {
  const { t } = useLang()
  usePageMeta()
  return (
    <>
      <PageBanner
        title={t.books.title}
        crumb={t.nav.ouvrages}
        subtitle={t.ouvragesPage.subtitle}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <BookGrid showTitles />
        </div>
      </section>

      <CTA title={t.ouvragesPage.ctaTitle} text={t.ouvragesPage.ctaText} />
    </>
  )
}
