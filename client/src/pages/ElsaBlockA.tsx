import { ApartmentList } from '../components/ApartmentList'
import { elsaBllokuAApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockA = () => (
  <ApartmentList
    title="Elsa Residence — Blloku A"
    subtitle="Tipet e banesave në Bllokun A"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={elsaBllokuAApartments}
  />
)
