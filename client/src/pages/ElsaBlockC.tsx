import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { elsaBllokuCApartments } from '../data/elsaApartmentPdfs'

export const ElsaBlockC = () => (
  <ResidenceApartmentPage residence="elsa" block="C" apartments={elsaBllokuCApartments} />
)
