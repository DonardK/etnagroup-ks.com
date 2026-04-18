import { ApartmentList } from '../components/ApartmentList'
import { elsaBllokuEApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockE = () => (
  <ApartmentList
    title="Elsa Residence — Blloku E"
    subtitle="Planimetritë me m² për Bllokun E do të shtohen së shpejti."
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={elsaBllokuEApartments}
  />
)
