import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tiani Residence PDF/Tiani Blloku B'

const apartments: Apartment[] = [
  { name: 'B-144.7 m²', area: '144.7 m²', pdfPath: `${BASE}/Tiani-B-144.7m².pdf` },
  { name: 'B-150.5 m²', area: '150.5 m²', pdfPath: `${BASE}/Tiani-B-150.5m².pdf` },
  { name: 'B-179.1 m²', area: '179.1 m²', pdfPath: `${BASE}/Tiani-B-179.1m².pdf` },
  { name: 'B-68.6 m²', area: '68.6 m²', pdfPath: `${BASE}/Tiani-B-68.6m².pdf` },
  { name: 'B-84.9 m²', area: '84.9 m²', pdfPath: `${BASE}/Tiani-B-84.9m².pdf` },
  { name: 'B-87.8 m²', area: '87.8 m²', pdfPath: `${BASE}/Tiani-B-87.8m².pdf` },
  { name: 'B-88.0 m²', area: '88.0 m²', pdfPath: `${BASE}/Tiani-B-88.0m².pdf` },
  { name: 'B-88.7 m²', area: '88.7 m²', pdfPath: `${BASE}/Tiani-B-88.7m².pdf` },
  { name: 'B-88.8 m²', area: '88.8 m²', pdfPath: `${BASE}/Tiani-B-88.8m².pdf` },
  { name: 'B-90.0 m²', area: '90.0 m²', pdfPath: `${BASE}/Tiani-B-90.0m².pdf` },
  { name: 'B-92.6 m²', area: '92.6 m²', pdfPath: `${BASE}/Tiani-B-92.6m².pdf` },
]

export const TianiBlockB = () => (
  <ApartmentList
    title="Tiani Residence — Blloku B"
    subtitle="Tipet e banesave në Bllokun B"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
