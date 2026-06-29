import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { getApartmentList } from '../data/apartmentCatalog'

const apartments = getApartmentList('tara')

export const TaraApartments = () => (
  <ResidenceApartmentPage residence="tara" apartments={apartments} />
)
