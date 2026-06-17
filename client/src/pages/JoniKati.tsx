import { ApartmentList } from '../components/ApartmentList'
import { getJoniKatiApartments } from '../data/joniApartmentPdfs'

interface JoniKatiProps {
  floor: number
}

export const JoniKati = ({ floor }: JoniKatiProps) => {
  if (!Number.isInteger(floor) || floor < 1 || floor > 6) {
    return null
  }

  return (
    <ApartmentList
      title={`Joni Residence — Kati ${floor}`}
      subtitle={`Tipet e banesave në Katin ${floor}`}
      backLink="/projektet/joni"
      backLabel="Kthehu te Joni Residence"
      apartments={getJoniKatiApartments(floor)}
    />
  )
}
