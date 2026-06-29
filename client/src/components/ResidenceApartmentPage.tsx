import { ApartmentList, type Apartment } from './ApartmentList'
import { getApartmentPageCopy, type ResidenceId } from '../i18n/apartmentPages'
import { useLanguage } from '../i18n/LanguageContext'

interface ResidenceApartmentPageProps {
  residence: ResidenceId
  block?: string
  floor?: number
  comingSoon?: boolean
  apartments: Apartment[]
}

export const ResidenceApartmentPage = ({
  residence,
  block,
  floor,
  comingSoon,
  apartments,
}: ResidenceApartmentPageProps) => {
  const { t } = useLanguage()
  const copy = getApartmentPageCopy(t, { residence, block, floor, comingSoon })

  return (
    <ApartmentList
      title={copy.title}
      subtitle={copy.subtitle}
      backLink={copy.backLink}
      backLabel={copy.backLabel}
      apartments={apartments}
    />
  )
}
