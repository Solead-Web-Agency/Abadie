import Icon from './Icon'
import { useConsent } from '../consent/useConsent'
import { useLang } from '../i18n/useLang'

// YouTube only loads once the visitor has accepted the "youtube" service.
export default function VideoEmbed({ id, title = 'Vidéo' }) {
  const { t } = useLang()
  const { consent, allow } = useConsent()

  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-black/5">
      {consent.youtube ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="focus-light flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-pa-ink to-pa-green-dark px-6 text-center text-white">
          <Icon name="youtube" className="h-10 w-10" />
          <p className="max-w-sm text-sm text-white/90">{t.consent.videoBlocked}</p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => allow('youtube')}
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-pa-ink transition-colors hover:bg-gray-100"
            >
              {t.consent.videoAccept}
            </button>
            <a
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/60 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t.consent.videoLink}
              <span className="sr-only"> {t.common.newTab}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
