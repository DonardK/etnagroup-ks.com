import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tiani Residence PDF/Tiani Blloku B'

const apartments: Apartment[] = [
  { name: 'B-01', pdfPath: `${BASE}/B01.pdf` },
  { name: 'B-02', pdfPath: `${BASE}/B02.pdf` },
  { name: 'B-03', pdfPath: `${BASE}/B03.pdf` },
  { name: 'B-04', pdfPath: `${BASE}/B04.pdf` },
  { name: 'B-05', pdfPath: `${BASE}/B05.pdf` },
  { name: 'B-06', pdfPath: `${BASE}/B06.pdf` },
  { name: 'B-07', pdfPath: `${BASE}/B07.pdf` },
  { name: 'B-08', pdfPath: `${BASE}/B08.pdf` },
  { name: 'B-14', pdfPath: `${BASE}/B14.pdf` },
  { name: 'B-32', pdfPath: `${BASE}/B32.pdf` },
  { name: 'B-48', pdfPath: `${BASE}/B48.pdf` },
  { name: 'B-49', pdfPath: `${BASE}/B49.pdf` },
  { name: 'B-50', pdfPath: `${BASE}/B50.pdf` },
]

export const TianiBlockB = () => (
  <ApartmentList
    title="Tiani Residence — Blloku B"
    subtitle="13 banesa të disponueshme"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
