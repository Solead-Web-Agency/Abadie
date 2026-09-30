import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES } from '../consent/context'
import { useConsent } from '../consent/useConsent'
import { useLang } from '../i18n/useLang'

const btn = 'rounded-md px-4 py-2.5 text-sm font-semibold transition-colors'
// "Refuse" is exactly as visible as "Accept" (CNIL guidance).
const choiceBtn = `${btn} border border-pa-green bg-pa-green text-white hover:bg-pa-green-dark`
const secondaryBtn = `${btn} border border-pa-ink/30 text-pa-ink hover:bg-gray-50`

// Non-modal consent panel, fixed at the bottom of the screen. Shown until the
// visitor decides, and reopened from the footer link "Gestion des cookies".
export default function CookieBanner() {
  const { t, withLang } = useLang()
  const c = t.consent
  const { consent, decided, panelOpen, acceptAll, rejectAll, save, closePanel } = useConsent()
  const visible = !decided || panelOpen
  const [details, setDetails] = useState(false)
  const [draft, setDraft] = useState(consent)
  const headingRef = useRef(null)

  // When reopened from the footer, show the detailed choices with the current
  // settings and move focus into the panel.
  const [wasOpen, setWasOpen] = useState(panelOpen)
  if (wasOpen !== panelOpen) {
    setWasOpen(panelOpen)
    if (panelOpen) {
      setDetails(true)
      setDraft(consent)
    }
  }
  useEffect(() => {
    if (panelOpen) headingRef.current?.focus()
  }, [panelOpen])

  if (!visible) return null

  return (
    <section
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
    >
      <div className="mx-auto max-h-[80vh] max-w-5xl overflow-y-auto px-4 py-5 sm:px-6">
        <h2 id="consent-title" ref={headingRef} tabIndex={-1} className="text-base font-bold focus:outline-none">
          {c.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-pa-gray">
          {c.text}{' '}
          <Link to={withLang('/politique-de-confidentialite')} className="font-semibold text-pa-green underline">
            {c.privacyLink}
          </Link>
        </p>

        {details && (
          <ul className="mt-4 divide-y divide-black/5 rounded-xl border border-black/10">
            <li className="flex items-start justify-between gap-4 p-4">
              <div>
                <p className="text-sm font-semibold">{c.necessaryTitle}</p>
                <p className="mt-1 text-xs text-pa-gray">{c.necessaryText}</p>
              </div>
              <span className="shrink-0 text-xs font-semibold text-pa-green">{c.always}</span>
            </li>
            {SERVICES.map((s) => (
              <li key={s} className="flex items-start justify-between gap-4 p-4">
                <div>
                  <label htmlFor={`consent-${s}`} className="text-sm font-semibold">
                    {c.services[s].title}
                  </label>
                  <p id={`consent-${s}-desc`} className="mt-1 text-xs text-pa-gray">
                    {c.services[s].text}
                  </p>
                </div>
                <input
                  id={`consent-${s}`}
                  type="checkbox"
                  role="switch"
                  aria-describedby={`consent-${s}-desc`}
                  checked={draft[s]}
                  onChange={(e) => setDraft((d) => ({ ...d, [s]: e.target.checked }))}
                  className="mt-1 h-5 w-5 shrink-0 accent-pa-green"
                />
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          {details ? (
            <button type="button" onClick={() => save(draft)} className={secondaryBtn}>
              {c.save}
            </button>
          ) : (
            <button type="button" onClick={() => setDetails(true)} className={secondaryBtn}>
              {c.customize}
            </button>
          )}
          {decided && panelOpen && (
            <button type="button" onClick={closePanel} className={secondaryBtn}>
              {c.close}
            </button>
          )}
          <button type="button" onClick={rejectAll} className={choiceBtn}>
            {c.rejectAll}
          </button>
          <button type="button" onClick={acceptAll} className={choiceBtn}>
            {c.acceptAll}
          </button>
        </div>
      </div>
    </section>
  )
}
