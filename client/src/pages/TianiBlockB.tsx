import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { getApartmentList } from '../data/apartmentCatalog'

const apartments = getApartmentList('tiani', 'Blloku B')

export const TianiBlockB = () => (
  <ResidenceApartmentPage residence="tiani" block="B" apartments={apartments} />
)
