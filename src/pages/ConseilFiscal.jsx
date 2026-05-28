import ServicePage from '../components/ServicePage'
import { useLang } from '../i18n/useLang'

export default function ConseilFiscal() {
  const { t } = useLang()
  return (
    <ServicePage
      title={t.nav.fiscal}
      icon="scale"
      subtitle={t.fiscal.subtitle}
      intro={t.fiscal.intro}
      items={t.fiscal.items}
    />
  )
}
