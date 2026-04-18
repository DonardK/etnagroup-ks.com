import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tiani Residence PDF/Tiani Blloku A'

const apartments: Apartment[] = [
  { name: '-A-90.2 m²', area: '90.2 m²', pdfPath: `${BASE}/-A-90.2m2.pdf` },
  { name: '-A-94.4m2-', area: '94.4 m²', pdfPath: `${BASE}/-A-94.4m2-.pdf` },
  { name: '-A-94.4 m²', area: '94.4 m²', pdfPath: `${BASE}/-A-94.4m2.pdf` },
  { name: 'A-107.4 m²', area: '107.4 m²', pdfPath: `${BASE}/A-107.4m2.pdf` },
  { name: 'A-115.5 m²', area: '115.5 m²', pdfPath: `${BASE}/A-115.5m2.pdf` },
  { name: 'A-116.6 m²', area: '116.6 m²', pdfPath: `${BASE}/A-116.6m2.pdf` },
  { name: 'A-130.7 m²', area: '130.7 m²', pdfPath: `${BASE}/A-130.7m2.pdf` },
  { name: 'A-130.9 m²', area: '130.9 m²', pdfPath: `${BASE}/A-130.9m2.pdf` },
  { name: 'A-138.8 m²', area: '138.8 m²', pdfPath: `${BASE}/A-138.8m2.pdf` },
  { name: 'A-184.8 m²', area: '184.8 m²', pdfPath: `${BASE}/A-184.8m2.pdf` },
  { name: 'A-90.2 m²', area: '90.2 m²', pdfPath: `${BASE}/A-90.2m2.pdf` },
  { name: 'A-92.1 m²', area: '92.1 m²', pdfPath: `${BASE}/A-92.1m2.pdf` },
  { name: 'A-93.5 m²', area: '93.5 m²', pdfPath: `${BASE}/A-93.5m2.pdf` },
  { name: 'A-94.4 m²', area: '94.4 m²', pdfPath: `${BASE}/A-94.4m2.pdf` },
  { name: 'A-99.0 m²', area: '99.0 m²', pdfPath: `${BASE}/A-99.0m2.pdf` },
  { name: 'A-99.1 m²', area: '99.1 m²', pdfPath: `${BASE}/A-99.1m2.pdf` },
]

export const TianiBlockA = () => (
  <ApartmentList
    title="Tiani Residence — Blloku A"
    subtitle="Tipet e banesave në Bllokun A"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
