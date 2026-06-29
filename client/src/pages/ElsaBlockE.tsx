import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { elsaBllokuEApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockE = () => (
  <ResidenceApartmentPage
    residence="elsa"
    block="E"
    comingSoon
    apartments={elsaBllokuEApartments}
  />
)
