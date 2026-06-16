import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Joni Residence PDF'

const apartments: Apartment[] = [
  { name: '52.0 m²', area: '52.0 m²', pdfPath: `${BASE}/52.0m2.pdf` },
  { name: '80.4 m²', area: '80.4 m²', pdfPath: `${BASE}/80.4m2.pdf` },
  { name: '83.5 m²', area: '83.5 m²', pdfPath: `${BASE}/83.5m2.pdf` },
  { name: '83.6 m²', area: '83.6 m²', pdfPath: `${BASE}/83.6m2.pdf` },
  { name: '85.3 m²', area: '85.3 m²', pdfPath: `${BASE}/85.3m2.pdf` },
  { name: '91.2 m²', area: '91.2 m²', pdfPath: `${BASE}/91.2m2.pdf` },
  { name: '102.8 m²', area: '102.8 m²', pdfPath: `${BASE}/102.8m2.pdf` },
  { name: '106.8 m²', area: '106.8 m²', pdfPath: `${BASE}/106.8m2.pdf` },
  { name: '108.5 m²', area: '108.5 m²', pdfPath: `${BASE}/108.5m2.pdf` },
  { name: '109.0 m²', area: '109.0 m²', pdfPath: `${BASE}/109.0m2.pdf` },
  { name: '112.3 m²', area: '112.3 m²', pdfPath: `${BASE}/112.3m2.pdf` },
  { name: '130.6 m²', area: '130.6 m²', pdfPath: `${BASE}/130.6m2.pdf` },
]

export const JoniApartments = () => (
  <ApartmentList
    title="Joni Residence"
    subtitle="Tipet e banesave në Joni Residence"
    backLink="/projektet/joni"
    backLabel="Kthehu te Joni Residence"
    apartments={apartments}
  />
)
