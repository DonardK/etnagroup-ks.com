import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tiani Residence PDF/Tiani Blloku A'

const apartments: Apartment[] = [
  { name: 'A-01', pdfPath: `${BASE}/A-01 BANESA.pdf` },
  { name: 'A-02', pdfPath: `${BASE}/A-02 BANESA.pdf` },
  { name: 'A-03', pdfPath: `${BASE}/A-03 BANESA.pdf` },
  { name: 'A-04', pdfPath: `${BASE}/A-04 BANESA.pdf` },
  { name: 'A-05', pdfPath: `${BASE}/A-05 BANESA.pdf` },
  { name: 'A-06', pdfPath: `${BASE}/A-06 BANESA.pdf` },
  { name: 'A-07', pdfPath: `${BASE}/A-07 BANESA.pdf` },
  { name: 'A-08', pdfPath: `${BASE}/A-08 BANESA.pdf` },
  { name: 'A-18', pdfPath: `${BASE}/A-18 BANESA.pdf` },
  { name: 'A-19', pdfPath: `${BASE}/A-19 BANESA.pdf` },
  { name: 'A-20', pdfPath: `${BASE}/A-20 BANESA.pdf` },
  { name: 'A-21', pdfPath: `${BASE}/A-21 BANESA.pdf` },
  { name: 'A-22', pdfPath: `${BASE}/A-22 BANESA.pdf` },
  { name: 'A-23', pdfPath: `${BASE}/A-23 BANESA.pdf` },
  { name: 'A-24', pdfPath: `${BASE}/A-24 BANESA.pdf` },
  { name: 'A-25', pdfPath: `${BASE}/A-25 BANESA.pdf` },
]

export const TianiBlockA = () => (
  <ApartmentList
    title="Tiani Residence — Blloku A"
    subtitle="16 banesa të disponueshme"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
