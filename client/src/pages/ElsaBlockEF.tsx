import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE_E = 'Residences Apartments/Elsa Residence PDF/Elsa Blloku E'
const BASE_F = 'Residences Apartments/Elsa Residence PDF/Elsa Blloku F'

const apartments: Apartment[] = [
  // Blloku E
  { name: 'E-A1', note: 'Blloku E', pdfPath: `${BASE_E}/E-A1.pdf` },
  { name: 'E-A2', note: 'Blloku E', pdfPath: `${BASE_E}/E-A2.pdf` },
  { name: 'E-A3', note: 'Blloku E', pdfPath: `${BASE_E}/E-A3.pdf` },
  { name: 'E-A4', note: 'Blloku E', pdfPath: `${BASE_E}/E-A4.pdf` },
  { name: 'E-A5', note: 'Blloku E', pdfPath: `${BASE_E}/E-A5.pdf` },
  { name: 'E-A6', note: 'Blloku E', pdfPath: `${BASE_E}/E-A6.pdf` },
  { name: 'E-A7', note: 'Blloku E', pdfPath: `${BASE_E}/E-A7.pdf` },
  { name: 'E-A8', note: 'Blloku E', pdfPath: `${BASE_E}/E-A8.pdf` },
  { name: 'E-A9', note: 'Blloku E', pdfPath: `${BASE_E}/E-A9.pdf` },
  { name: 'E-A10', note: 'Blloku E', pdfPath: `${BASE_E}/E-A10.pdf` },
  { name: 'E-A11', note: 'Blloku E', pdfPath: `${BASE_E}/E-A11.pdf` },

  // Blloku F
  { name: 'F-A1', note: 'Blloku F', pdfPath: `${BASE_F}/F-A1.pdf` },
  { name: 'F-A2', note: 'Blloku F', pdfPath: `${BASE_F}/F-A2.pdf` },
  { name: 'F-A3', note: 'Blloku F', pdfPath: `${BASE_F}/F-A3.pdf` },
  { name: 'F-A19', note: 'Blloku F', pdfPath: `${BASE_F}/F-A19.pdf` },
  { name: 'F-A20', note: 'Blloku F', pdfPath: `${BASE_F}/F-A20.pdf` },
  { name: 'F-A22', note: 'Blloku F', pdfPath: `${BASE_F}/F-A22.pdf` },
  { name: 'F-A23', note: 'Blloku F', pdfPath: `${BASE_F}/F-A23.pdf` },
  { name: 'F-A24', note: 'Blloku F', pdfPath: `${BASE_F}/F-A24.pdf` },
]

export const ElsaBlockEF = () => (
  <ApartmentList
    title="Elsa Residence — Blloku E dhe F"
    subtitle="Tipet e banesave në Bllokun E dhe F"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={apartments}
  />
)
