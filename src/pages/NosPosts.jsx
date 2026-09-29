import PageBanner from '../components/PageBanner'
import CTA from '../components/CTA'
import Icon from '../components/Icon'
import { PublicationList } from '../components/Publications'
import { posts } from '../data/publications'
import { SOCIALS } from '../i18n/translations'
import { useLang } from '../i18n/useLang'
import { usePageMeta } from '../i18n/usePageMeta'

export default function NosPosts() {
  const { t } = useLang()
  usePageMeta()
  return (
    <>
      <PageBanner
        title={t.nav.posts}
        crumb={t.nav.posts}
        subtitle={t.postsPage.subtitle}
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p className="mb-10 max-w-3xl leading-relaxed text-pa-gray">{t.postsPage.intro}</p>
          <PublicationList items={posts} basePath="/nos-posts" readMore={t.postsPage.readMore} />

          <div className="mt-14 flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-8 py-10 text-center">
            <h2 className="text-xl font-extrabold">{t.postsPage.followTitle}</h2>
            <p className="max-w-xl text-sm text-pa-gray">{t.postsPage.followText}</p>
            <ul className="flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${s.name} ${t.common.newTab}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-pa-gray transition-colors hover:border-pa-green hover:bg-pa-green hover:text-white"
                  >
                    <Icon name={s.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
