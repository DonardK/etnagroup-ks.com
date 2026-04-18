import { ApartmentList } from '../components/ApartmentList'
import { elsaBllokuDApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockD = () => (
  <ApartmentList
    title="Elsa Residence — Blloku D"
    subtitle="Tipet e banesave në Bllokun D"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={elsaBllokuDApartments}
  />
)
