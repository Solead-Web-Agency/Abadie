import { Link } from 'react-router-dom'
import { books } from '../../data/assets'
import { useLang } from '../../i18n/useLang'

export default function Books() {
  const { t, withLang } = useLang()
  const preview = books.slice(0, 6)

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-end justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-pa-green">
              {t.books.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">{t.books.title}</h2>
            <p className="mt-3 max-w-xl text-pa-gray">{t.books.text}</p>
          </div>
          <Link
            to={withLang('/nos-ouvrages')}
            className="shrink-0 rounded-md border border-pa-green px-5 py-2.5 text-sm font-semibold text-pa-green transition-colors hover:bg-pa-green hover:text-white"
          >
            {t.books.all}
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {preview.map((b) => (
            <div key={b.img} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-md ring-1 ring-black/5 transition-transform group-hover:-translate-y-1 group-hover:shadow-xl">
                <img
                  src={`/images/${b.img}`}
                  alt={b.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
