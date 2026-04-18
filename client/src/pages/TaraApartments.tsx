import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tara Residence PDF'

const apartments: Apartment[] = [
  { name: '46.1 m²', area: '46.1 m²', pdfPath: `${BASE}/46.1 m2.pdf` },
  { name: '46.10 m²', area: '46.10 m²', pdfPath: `${BASE}/46.10 m2.pdf` },
  { name: '64.3 m²', area: '64.3 m²', pdfPath: `${BASE}/64.3 m2.pdf` },
  { name: '-64.3 m²', area: '64.3 m²', pdfPath: `${BASE}/-64.3 m2.pdf` },
  { name: '64.3- m²', area: '64.3 m²', pdfPath: `${BASE}/64.3- m2.pdf` },
  { name: '64.30 m²', area: '64.30 m²', pdfPath: `${BASE}/64.30 m2.pdf` },
  { name: '64.30. m²', area: '64.30 m²', pdfPath: `${BASE}/64.30. m2.pdf` },
  { name: '74.13 m²', area: '74.13 m²', pdfPath: `${BASE}/74.13 m2.pdf` },
  { name: '74.3 m²', area: '74.3 m²', pdfPath: `${BASE}/74.3 m2.pdf` },
  { name: '76.7 m²', area: '76.7 m²', pdfPath: `${BASE}/76.7 m2.pdf` },
  { name: '76.7 - m²', area: '76.7 m²', pdfPath: `${BASE}/76.7 - m2.pdf` },
  { name: '76.70 m²', area: '76.70 m²', pdfPath: `${BASE}/76.70 m2.pdf` },
  { name: '91.2 m²', area: '91.2 m²', pdfPath: `${BASE}/91.2 m2.pdf` },
  { name: '91.20 m²', area: '91.20 m²', pdfPath: `${BASE}/91.20 m2.pdf` },
  { name: '91.20m2-', area: '91.20 m²', pdfPath: `${BASE}/91.20 m2-.pdf` },
  { name: '93.8 m²', area: '93.8 m²', pdfPath: `${BASE}/93.8 m2.pdf` },
  { name: '115 m²', area: '115 m²', pdfPath: `${BASE}/115 m2.pdf` },
  { name: '115.0 m²', area: '115.0 m²', pdfPath: `${BASE}/115.0 m2.pdf` },
  { name: '120.1 m²', area: '120.1 m²', pdfPath: `${BASE}/120.1  m2.pdf` },
  { name: '122.5 m²', area: '122.5 m²', pdfPath: `${BASE}/122.5 m2.pdf` },
  { name: '129.0 m²', area: '129.0 m²', pdfPath: `${BASE}/129.0m2.pdf` },
  { name: '129.4 m²', area: '129.4 m²', pdfPath: `${BASE}/129.4 m2.pdf` },
  { name: '139.5 m²', area: '139.5 m²', pdfPath: `${BASE}/139.5 m2.pdf` },
  { name: '145.1 m²', area: '145.1 m²', pdfPath: `${BASE}/145.1 m2.pdf` },
  { name: '159.1 m²', area: '159.1 m²', pdfPath: `${BASE}/159.1m2.pdf` },
  { name: '183.3 m²', area: '183.3 m²', pdfPath: `${BASE}/183.3 m2.pdf` },
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
