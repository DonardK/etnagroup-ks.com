import { ResidenceApartmentPage } from '../components/ResidenceApartmentPage'
import { getJoniKatiApartments } from '../data/joniApartmentPdfs'

interface JoniKatiProps {
  floor: number
}

export const JoniKati = ({ floor }: JoniKatiProps) => {
  if (!Number.isInteger(floor) || floor < 1 || floor > 6) {
    return null
  }

  return (
    <ResidenceApartmentPage
      residence="joni"
      floor={floor}
      apartments={getJoniKatiApartments(floor)}
    />
  )
}
