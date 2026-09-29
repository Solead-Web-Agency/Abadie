import { PublicationDetail } from '../components/Publications'
import { posts } from '../data/publications'
import { useLang } from '../i18n/useLang'

export default function Post() {
  const { t } = useLang()
  return (
    <PublicationDetail
      items={posts}
      basePath="/nos-posts"
      parentLabel={t.nav.posts}
      labels={t.postsPage}
    />
  )
}
