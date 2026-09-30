import { useCallback, useMemo, useState } from 'react'
import { ConsentContext, SERVICES } from './context'

const STORAGE_KEY = 'pa-consent'
const MAX_AGE = 1000 * 60 * 60 * 24 * 182 // ~6 months (CNIL recommendation)
const VERSION = 1

const none = { youtube: false, maps: false }

// The choice is kept in localStorage (no cookie). Storage can be unavailable
// (private mode, blocked site data): the banner then simply shows again.
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (saved?.version === VERSION && Date.now() - saved.date < MAX_AGE) return saved.choices
  } catch {
    /* ignore */
  }
  return null
}

function persist(choices) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: VERSION, date: Date.now(), choices }))
  } catch {
    /* ignore */
  }
}

export function ConsentProvider({ children }) {
  const [choices, setChoices] = useState(load)
  const [panelOpen, setPanelOpen] = useState(false)

  const save = useCallback((next) => {
    const full = { ...none, ...next }
    persist(full)
    setChoices(full)
    setPanelOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      consent: choices ?? none,
      decided: choices !== null,
      panelOpen,
      acceptAll: () => save(Object.fromEntries(SERVICES.map((s) => [s, true]))),
      rejectAll: () => save(none),
      save,
      // Grant a single service from an inline placeholder ("Show the map").
      allow: (service) => save({ ...(choices ?? none), [service]: true }),
      openPanel: () => setPanelOpen(true),
      closePanel: () => setPanelOpen(false),
    }),
    [choices, panelOpen, save]
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}
