import { ApartmentList } from '../components/ApartmentList'
import { getApartmentList } from '../data/apartmentCatalog'

const apartments = getApartmentList('tara')

export const TaraApartments = () => (
  <ApartmentList
    title="Tara Residence"
    subtitle="Tipet e banesave në Tara Residence"
    backLink="/projektet/tara"
    backLabel="Kthehu te Tara Residence"
    apartments={apartments}
  />
)
