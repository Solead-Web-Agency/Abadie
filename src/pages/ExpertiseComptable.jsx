import ServicePage from '../components/ServicePage'
import { useLang } from '../i18n/useLang'

export default function ExpertiseComptable() {
  const { t } = useLang()
  return (
    <ServicePage
      title={t.nav.compta}
      icon="chart"
      subtitle={t.compta.subtitle}
      intro={t.compta.intro}
      items={t.compta.items}
    />
  )
}
