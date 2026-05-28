export default function VideoEmbed({ id, title = 'Vidéo' }) {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-xl ring-1 ring-black/5">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
