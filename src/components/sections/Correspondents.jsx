import { correspondents } from '../../data/assets'
import Logo from '../Logo'
import { useLang } from '../../i18n/useLang'

export default function Correspondents() {
  const { t } = useLang()
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-pa-green">
          {t.correspondents.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
          {t.correspondents.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pa-gray">{t.correspondents.text}</p>

        {/* Flex (not grid) so an incomplete last row stays centred. */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {correspondents.map((c) => (
            <div
              key={c.img}
              className="flex h-24 w-[calc((100%-1.5rem)/2)] sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-6rem)/5)] items-center justify-center rounded-xl border border-black/5 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <Logo img={c.img} name={c.name} className="grayscale transition hover:grayscale-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
