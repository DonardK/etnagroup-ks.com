import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { elsaBllokuDApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockD = () => (
  <ResidenceApartmentPage residence="elsa" block="D" apartments={elsaBllokuDApartments} />
)
