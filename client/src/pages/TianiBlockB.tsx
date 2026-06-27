import { ApartmentList } from '../components/ApartmentList'
import { getApartmentList } from '../data/apartmentCatalog'

const apartments = getApartmentList('tiani', 'Blloku B')

export const TianiBlockB = () => (
  <ApartmentList
    title="Tiani Residence — Blloku B"
    subtitle="Tipet e banesave në Bllokun B"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
