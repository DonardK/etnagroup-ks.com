import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { elsaBllokuBApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockB = () => (
  <ResidenceApartmentPage residence="elsa" block="B" apartments={elsaBllokuBApartments} />
)
