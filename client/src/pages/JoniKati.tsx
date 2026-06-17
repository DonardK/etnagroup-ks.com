import { Navigate, useParams } from 'react-router-dom'
import { ApartmentList } from '../components/ApartmentList'
import { getJoniKatiApartments } from '../data/joniApartmentPdfs'

export const JoniKati = () => {
  const { kati } = useParams()
  const floor = Number(kati)

  if (!Number.isInteger(floor) || floor < 1 || floor > 6) {
    return <Navigate to="/projektet/joni" replace />
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
