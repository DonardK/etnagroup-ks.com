import { ApartmentList } from '../components/ApartmentList'
import { elsaBllokuCApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockC = () => (
  <ApartmentList
    title="Elsa Residence — Blloku C"
    subtitle="Tipet e banesave në Bllokun C"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={elsaBllokuCApartments}
  />
)
