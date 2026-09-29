import { Link, useParams } from 'react-router-dom'
import PageBanner from './PageBanner'
import CTA from './CTA'
import Icon from './Icon'
import NotFound from '../pages/NotFound'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

const mediaName = (media, lang) => (typeof media === 'string' ? media : media[lang])

const formatDate = (iso, lang) =>
  new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T12:00:00`))

function Meta({ item }) {
  const { lang } = useLang()
  return (
    <p className="text-xs font-semibold uppercase tracking-wider text-pa-gray">
      <span className="text-pa-green">{mediaName(item.media, lang)}</span>
      {item.date && (
        <>
          <span aria-hidden="true"> · </span>
          <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
        </>
      )}
    </p>
  )
}

// Card grid for the press and posts index pages.
export function PublicationList({ items, basePath, readMore, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`
  const { lang, withLang } = useLang()
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.slug}>
          <article className="relative flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-shadow focus-within:shadow-lg hover:shadow-lg">
            <Meta item={item} />
            <Heading className="mt-2 text-lg font-bold leading-snug">
              <Link
                to={withLang(`${basePath}/${item.slug}`)}
                className="after:absolute after:inset-0 after:rounded-2xl hover:text-pa-green"
              >
                {item.title[lang]}
              </Link>
            </Heading>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-pa-gray">{item.summary[lang][0]}</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-pa-green" aria-hidden="true">
              <Icon name={item.file ? 'file' : 'book'} className="h-4 w-4" />
              {readMore} →
            </p>
          </article>
        </li>
      ))}
    </ul>
  )
}

function Body({ blocks }) {
  return (
    <div lang="fr" className="space-y-4 leading-relaxed text-pa-ink">
      {blocks.map((b, i) => {
        if (b.h) return <h3 key={i} className="pt-4 text-lg font-bold">{b.h}</h3>
        if (b.ul)
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 text-pa-gray">
              {b.ul.map((li) => <li key={li}>{li}</li>)}
            </ul>
          )
        return <p key={i} className="text-pa-gray">{b.p}</p>
      })}
    </div>
  )
}

// Detail page shared by press articles and posts: summary, full text (for
// Word sources) and the original PDF, viewable inline and downloadable.
export function PublicationDetail({ items, basePath, parentLabel, labels }) {
  const { slug } = useParams()
  const { t, lang, withLang } = useLang()
  const item = items.find((p) => p.slug === slug)

  usePageMeta(
    item
      ? { title: item.title[lang], description: item.summary[lang][0] }
      : { title: t.seo.notFound, noindex: true }
  )

  if (!item) return <NotFound />

  const others = items.filter((p) => p.slug !== slug).slice(0, 4)
  const fileName = item.file?.split('/').pop()

  return (
    <>
      <PageBanner title={item.title[lang]} crumb={item.title[lang]} parent={{ to: basePath, label: parentLabel }} />

      <article className="py-14">
        <div className="mx-auto max-w-4xl px-4">
          <Meta item={item} />

          <div className="mt-5 space-y-4 text-lg leading-relaxed text-pa-ink">
            {item.summary[lang].map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {t.doc.frenchOnly && (item.file || item.body) && (
            <p className="mt-6 rounded-lg bg-gray-50 px-4 py-3 text-sm text-pa-gray">{t.doc.frenchOnly}</p>
          )}

          {item.file && (
            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-pa-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-pa-green-dark"
                >
                  <Icon name="external" className="h-4 w-4" />
                  {t.doc.openPdf}
                  <span className="sr-only"> {t.common.newTab}</span>
                </a>
                <a
                  href={item.file}
                  download={fileName}
                  className="inline-flex items-center gap-2 rounded-md border border-pa-green px-5 py-3 text-sm font-semibold text-pa-green transition-colors hover:bg-pa-green hover:text-white"
                >
                  <Icon name="download" className="h-4 w-4" />
                  {t.doc.download}
                </a>
              </div>
              <p className="mt-3 text-xs text-pa-gray">{t.doc.pdfHint}</p>
              <object
                data={`${item.file}#view=FitH`}
                type="application/pdf"
                title={`${t.doc.pdfTitle} : ${item.title[lang]}`}
                className="mt-4 hidden h-[85vh] w-full rounded-xl border border-black/10 bg-gray-50 md:block"
              >
                <p className="p-6 text-sm text-pa-gray">
                  <a href={item.file} className="font-semibold text-pa-green underline">
                    {t.doc.openPdf}
                  </a>
                </p>
              </object>
            </div>
          )}

          {item.body && (
            <section className="mt-10 border-t border-black/10 pt-8" aria-labelledby="full-text">
              <h2 id="full-text" className="text-xl font-extrabold">{t.doc.fullText}</h2>
              <div className="mt-4">
                <Body blocks={item.body} />
              </div>
            </section>
          )}

          <Link
            to={withLang(basePath)}
            className="mt-10 inline-block text-sm font-semibold text-pa-green hover:underline"
          >
            ← {labels.back}
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-gray-50 py-14" aria-labelledby="more-title">
          <div className="mx-auto max-w-7xl px-4">
            <h2 id="more-title" className="mb-8 text-2xl font-extrabold">{labels.moreTitle}</h2>
            <PublicationList items={others} basePath={basePath} readMore={labels.readMore} headingLevel={3} />
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
