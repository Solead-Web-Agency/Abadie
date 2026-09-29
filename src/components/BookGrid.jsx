import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { books, bookImage } from '../data/books'
import { useLang } from '../i18n/useLang'

// Grid of the firm's books. Each visual opens enlarged in a native <dialog>
// (focus trap and Escape handled by the browser).
export default function BookGrid({ showTitles = false }) {
  const { t, lang } = useLang()
  const [current, setCurrent] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (current && !d.open) d.showModal()
    if (!current && d.open) d.close()
  }, [current])

  const book = books.find((b) => b.slug === current)

  return (
    <>
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {books.map((b) => (
          <li key={b.slug}>
            <button
              type="button"
              onClick={() => setCurrent(b.slug)}
              className="group block w-full text-left"
            >
              {/* 2:3 frame; the dark green matches the visuals' background so
                  a taller visual (e.g. Réglementation fiscale 2025) is letterboxed, not cropped. */}
              <span className="block aspect-[2/3] overflow-hidden rounded-lg bg-[#002311] shadow-md ring-1 ring-black/5 transition-transform group-hover:-translate-y-1 group-hover:shadow-xl">
                <img
                  src={bookImage(b.slug, 'small')}
                  alt={b.title[lang]}
                  width="480"
                  height="720"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>
              {showTitles && (
                <span className="mt-3 block text-sm font-semibold leading-snug text-pa-ink group-hover:text-pa-green">
                  {b.title[lang]}
                </span>
              )}
              <span className="sr-only">{t.books.enlarge}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="book-dialog-title"
        onClose={() => setCurrent(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setCurrent(null)
        }}
        className="m-auto max-h-[95vh] w-[min(92vw,34rem)] overflow-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/70"
      >
        {book && (
          <div className="p-4">
            <div className="flex items-start justify-between gap-4">
              <h2 id="book-dialog-title" className="text-base font-bold leading-snug">
                {book.title[lang]}
              </h2>
              <button
                type="button"
                onClick={() => setCurrent(null)}
                aria-label={t.books.close}
                className="shrink-0 rounded-full p-1.5 text-pa-gray hover:bg-gray-100"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>
            <img
              src={bookImage(book.slug)}
              alt={book.title[lang]}
              className="mt-3 h-auto w-full rounded-lg"
            />
          </div>
        )}
      </dialog>
    </>
  )
}
