import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tiani Residence PDF/Tiani Blloku A'

const apartments: Apartment[] = [
  { name: 'A-107.4 m²', area: '107.4 m²', pdfPath: `${BASE}/Tiani-A-107.4m².pdf` },
  { name: 'A-115.5 m²', area: '115.5 m²', pdfPath: `${BASE}/Tiani-A-115.5m².pdf` },
  { name: 'A-116.6 m²', area: '116.6 m²', pdfPath: `${BASE}/Tiani-A-116.6m².pdf` },
  { name: 'A-130.7 m²', area: '130.7 m²', pdfPath: `${BASE}/Tiani-A-130.7m².pdf` },
  { name: 'A-130.9 m²', area: '130.9 m²', pdfPath: `${BASE}/Tiani-A-130.9m².pdf` },
  { name: 'A-138.8 m²', area: '138.8 m²', pdfPath: `${BASE}/Tiani-A-138.8m².pdf` },
  { name: 'A-184.8 m²', area: '184.8 m²', pdfPath: `${BASE}/Tiani-A-184.8m².pdf` },
  { name: 'A-90.2 m²', area: '90.2 m²', pdfPath: `${BASE}/Tiani-A-90.2m².pdf` },
  { name: 'A-92.1 m²', area: '92.1 m²', pdfPath: `${BASE}/Tiani-A-92.1m².pdf` },
  { name: 'A-93.5 m²', area: '93.5 m²', pdfPath: `${BASE}/Tiani-A-93.5m².pdf` },
  { name: 'A-94.4 m²', area: '94.4 m²', pdfPath: `${BASE}/Tiani-A-94.4m².pdf` },
  { name: 'A-99.0 m²', area: '99.0 m²', pdfPath: `${BASE}/Tiani-A-99.0m².pdf` },
  { name: 'A-99.1 m²', area: '99.1 m²', pdfPath: `${BASE}/Tiani-A-99.1m².pdf` },
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
