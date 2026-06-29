import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { elsaBllokuAApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockA = () => (
  <ResidenceApartmentPage residence="elsa" block="A" apartments={elsaBllokuAApartments} />
)
