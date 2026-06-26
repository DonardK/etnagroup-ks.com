import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tara Residence PDF'

const apartments: Apartment[] = [
  { name: '46.1 m²', area: '46.1 m²', pdfPath: `${BASE}/Tara-46.1m².pdf` },
  { name: '64.3 m²', area: '64.3 m²', pdfPath: `${BASE}/Tara-64.3m².pdf` },
  { name: '74.13 m²', area: '74.13 m²', pdfPath: `${BASE}/Tara-74.13m².pdf` },
  { name: '74.3 m²', area: '74.3 m²', pdfPath: `${BASE}/Tara-74.3m².pdf` },
  { name: '76.7 m²', area: '76.7 m²', pdfPath: `${BASE}/Tara-76.7m².pdf` },
  { name: '91.2 m²', area: '91.2 m²', pdfPath: `${BASE}/Tara-91.2m².pdf` },
  { name: '93.8 m²', area: '93.8 m²', pdfPath: `${BASE}/Tara-93.8m².pdf` },
  { name: '115 m²', area: '115 m²', pdfPath: `${BASE}/Tara-115m².pdf` },
  { name: '120.1 m²', area: '120.1 m²', pdfPath: `${BASE}/Tara-120.1m².pdf` },
  { name: '122.5 m²', area: '122.5 m²', pdfPath: `${BASE}/Tara-122.5m².pdf` },
  { name: '129.0 m²', area: '129.0 m²', pdfPath: `${BASE}/Tara-129.0m².pdf` },
  { name: '129.4 m²', area: '129.4 m²', pdfPath: `${BASE}/Tara-129.4m².pdf` },
  { name: '139.5 m²', area: '139.5 m²', pdfPath: `${BASE}/Tara-139.5m².pdf` },
  { name: '145.1 m²', area: '145.1 m²', pdfPath: `${BASE}/Tara-145.1m².pdf` },
  { name: '159.1 m²', area: '159.1 m²', pdfPath: `${BASE}/Tara-159.1m².pdf` },
  { name: '183.3 m²', area: '183.3 m²', pdfPath: `${BASE}/Tara-183.3m².pdf` },
]

export const TaraApartments = () => (
  <ApartmentList
    title="Tara Residence"
    subtitle="Tipet e banesave në Tara Residence"
    backLink="/projektet/tara"
    backLabel="Kthehu te Tara Residence"
    apartments={apartments}
  />
)
