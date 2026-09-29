import { PublicationDetail } from '../components/Publications'
import { press } from '../data/publications'
import { useLang } from '../i18n/useLang'

export default function PresseArticle() {
  const { t } = useLang()
  return (
    <PublicationDetail
      items={press}
      basePath="/nos-actions-presse-et-tv"
      parentLabel={t.nav.presse}
      labels={t.presse}
    />
  )
}
