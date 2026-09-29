import { Link } from 'react-router-dom'
import BookGrid from '../BookGrid'
import { useLang } from '../../i18n/useLang'

export default function Books() {
  const { t, withLang } = useLang()

  return (
    <section className="bg-white py-20" aria-labelledby="books-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-pa-green">
              {t.books.eyebrow}
            </p>
            <h2 id="books-title" className="mt-2 text-3xl font-extrabold md:text-4xl">
              {t.books.title}
            </h2>
            <p className="mt-3 max-w-xl text-pa-gray">{t.books.text}</p>
          </div>
          <Link
            to={withLang('/nos-ouvrages')}
            className="shrink-0 rounded-md border border-pa-green px-5 py-2.5 text-sm font-semibold text-pa-green transition-colors hover:bg-pa-green hover:text-white"
          >
            {t.books.all}
          </Link>
        </div>

        <div className="mt-12">
          <BookGrid />
        </div>
      </div>
    </section>
  )
}
