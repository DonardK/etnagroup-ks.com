import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tiani Residence PDF/Tiani Blloku B'

const apartments: Apartment[] = [
  { name: '-B-88.0m2-', area: '88.0 m²', pdfPath: `${BASE}/-B-88.0m2-.pdf` },
  { name: '-B-88.0 m²', area: '88.0 m²', pdfPath: `${BASE}/-B-88.0m2.pdf` },
  { name: 'B-68.6 m²', area: '68.6 m²', pdfPath: `${BASE}/B-68.6m2.pdf` },
  { name: 'B-84.9 m²', area: '84.9 m²', pdfPath: `${BASE}/B-84.9m2.pdf` },
  { name: 'B-87.8 m²', area: '87.8 m²', pdfPath: `${BASE}/B-87.8m2.pdf` },
  { name: 'B-88.0 m²', area: '88.0 m²', pdfPath: `${BASE}/B-88.0m2.pdf` },
  { name: 'B-88.7 m²', area: '88.7 m²', pdfPath: `${BASE}/B-88.7m2.pdf` },
  { name: 'B-88.8 m²', area: '88.8 m²', pdfPath: `${BASE}/B-88.8m2.pdf` },
  { name: 'B-90.0 m²', area: '90.0 m²', pdfPath: `${BASE}/B-90.0m2.pdf` },
  { name: 'B-92.6 m²', area: '92.6 m²', pdfPath: `${BASE}/B-92.6m2.pdf` },
  { name: 'B-144.7 m²', area: '144.7 m²', pdfPath: `${BASE}/B-144.7m2.pdf` },
  { name: 'B-150.5 m²', area: '150.5 m²', pdfPath: `${BASE}/B-150.5m2.pdf` },
  { name: 'B-179.1 m²', area: '179.1 m²', pdfPath: `${BASE}/B-179.1m2.pdf` },
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
