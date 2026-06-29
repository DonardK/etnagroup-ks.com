import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { getApartmentList } from '../data/apartmentCatalog'

const apartments = getApartmentList('tiani', 'Blloku A')

export const TianiBlockA = () => (
  <ResidenceApartmentPage residence="tiani" block="A" apartments={apartments} />
)
