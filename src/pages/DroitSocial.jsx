import ServicePage from '../components/ServicePage'
import { useLang } from '../i18n/useLang'

export default function DroitSocial() {
  const { t } = useLang()
  return (
    <ServicePage
      title={t.nav.social}
      icon="users"
      subtitle={t.social.subtitle}
      intro={t.social.intro}
      items={t.social.items}
    />
  )
}
