import { ApartmentList } from '../components/ApartmentList'
import { elsaBllokuBApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockB = () => (
  <ApartmentList
    title="Elsa Residence — Blloku B"
    subtitle="Tipet e banesave në Bllokun B"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={elsaBllokuBApartments}
  />
)
