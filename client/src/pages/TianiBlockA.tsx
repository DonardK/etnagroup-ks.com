import { ApartmentList } from '../components/ApartmentList'
import { getApartmentList } from '../data/apartmentCatalog'

const apartments = getApartmentList('tiani', 'Blloku A')

export const TianiBlockA = () => (
  <ApartmentList
    title="Tiani Residence — Blloku A"
    subtitle="Tipet e banesave në Bllokun A"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
