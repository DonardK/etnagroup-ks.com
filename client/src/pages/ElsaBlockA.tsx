import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Elsa Residence PDF/Elsa Blloku A'

const apartments: Apartment[] = [
  { name: 'A-74.4 m²', area: '74.4 m²', pdfPath: `${BASE}/A-74.4m2.pdf` },
  { name: 'A-82.3 m²', area: '82.3 m²', pdfPath: `${BASE}/A-82.3m2.pdf` },
  { name: 'A-108.4 m²', area: '108.4 m²', pdfPath: `${BASE}/A-108.4m2.pdf` },
  { name: 'A-114 m²', area: '114 m²', pdfPath: `${BASE}/A-114m2.pdf` },
  { name: 'A-A27', pdfPath: `${BASE}/A-A27.pdf` },
  { name: 'A-A28', pdfPath: `${BASE}/A-A28.pdf` },
  { name: 'A-A29', pdfPath: `${BASE}/A-A29.pdf` },
]

export const ElsaBlockA = () => (
  <ApartmentList
    title="Elsa Residence — Blloku A"
    subtitle="Tipet e banesave në Bllokun A"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={apartments}
  />
)
