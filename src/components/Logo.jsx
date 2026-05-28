import { useState } from 'react'

// Renders a partner/client logo, falling back to a styled text chip
// when the underlying image is missing (some archive assets failed to fetch).
export default function Logo({ img, name, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !img) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center px-2 text-center text-xs font-semibold uppercase tracking-wide text-pa-gray ${className}`}
        title={name}
      >
        {name}
      </div>
    )
  }

  return (
    <img
      src={`/images/${img}`}
      alt={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`max-h-full max-w-full object-contain ${className}`}
    />
  )
}
