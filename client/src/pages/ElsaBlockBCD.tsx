import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE_B = 'Residences Apartments/Elsa Residence PDF/Elsa Blloku B'
const BASE_C = 'Residences Apartments/Elsa Residence PDF/Elsa Blloku C'
const BASE_D = 'Residences Apartments/Elsa Residence PDF/Elsa Blloku D'

const apartments: Apartment[] = [
  // Blloku B
  { name: 'B — 53.35 m²', area: '53.35 m²', note: 'Blloku B', pdfPath: `${BASE_B}/53.35m2.pdf` },
  { name: 'B — 66.26 m²', area: '66.26 m²', note: 'Blloku B', pdfPath: `${BASE_B}/66.26m2.pdf` },
  { name: 'B — 84.34 m²', area: '84.34 m²', note: 'Blloku B', pdfPath: `${BASE_B}/84.34m2.pdf` },
  { name: 'B — 90.65 m²', area: '90.65 m²', note: 'Blloku B', pdfPath: `${BASE_B}/90.65m2.pdf` },
  { name: 'B — 91.11 m²', area: '91.11 m²', note: 'Blloku B', pdfPath: `${BASE_B}/91.11m2.pdf` },
  { name: 'B — 99.65 m²', area: '99.65 m²', note: 'Blloku B', pdfPath: `${BASE_B}/99.65m2.pdf` },
  { name: 'B — 113.40 m²', area: '113.40 m²', note: 'Blloku B', pdfPath: `${BASE_B}/113.40m2.pdf` },
  { name: 'B — 113.97 m²', area: '113.97 m²', note: 'Blloku B', pdfPath: `${BASE_B}/113.97m2.pdf` },
  { name: 'B — 115.41 m²', area: '115.41 m²', note: 'Blloku B', pdfPath: `${BASE_B}/115.41m2.pdf` },
  { name: 'B — 115.99 m²', area: '115.99 m²', note: 'Blloku B', pdfPath: `${BASE_B}/115.99m2.pdf` },
  { name: 'B — 127.11 m²', area: '127.11 m²', note: 'Blloku B', pdfPath: `${BASE_B}/127.11m2.pdf` },
  { name: 'Banesa B-27', note: 'Blloku B', pdfPath: `${BASE_B}/BANESA B-27.pdf` },
  { name: 'Banesa B-28', note: 'Blloku B', pdfPath: `${BASE_B}/BANESA B-28.pdf` },

  // Blloku C
  { name: 'C-01', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-01.pdf` },
  { name: 'C-02', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-02.pdf` },
  { name: 'C-03', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-03.pdf` },
  { name: 'C-04', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-04.pdf` },
  { name: 'C-05, 10, 15, 20', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-05,10,15,20.pdf` },
  { name: 'C-06, 11, 16, 21', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-06,11,16,21.pdf` },
  { name: 'C-07, 12, 17, 22', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-07,12,17,22 1.pdf` },
  { name: 'C-08, 13, 18, 23', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-08,13,18,23.pdf` },
  { name: 'C-09, 14, 19, 24', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-09,14,19,24 1.pdf` },
  { name: 'C-25', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-25.pdf` },
  { name: 'C-26', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-26.pdf` },
  { name: 'C-27', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-27.pdf` },
  { name: 'C-28', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-28.pdf` },
  { name: 'C-29', note: 'Blloku C', pdfPath: `${BASE_C}/ELSA BLLOKU C-29.pdf` },

  // Blloku D
  { name: 'D-01', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-01.pdf` },
  { name: 'D-02', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-02.pdf` },
  { name: 'D-03', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-03.pdf` },
  { name: 'D-04', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-04.pdf` },
  { name: 'D-05, 10, 15, 20', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-05,10,15,20.pdf` },
  { name: 'D-06, 11, 16, 21', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-06,11,16,21.pdf` },
  { name: 'D-07, 12, 17, 22', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-07,12,17,22.pdf` },
  { name: 'D-08, 13, 18, 23', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-08,13,18,23.pdf` },
  { name: 'D-09, 14, 19, 24', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-09,14,19,24.pdf` },
  { name: 'D-25', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-25.pdf` },
  { name: 'D-26', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-26.pdf` },
  { name: 'D-27', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-27.pdf` },
  { name: 'D-28', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-28.pdf` },
  { name: 'D-29', note: 'Blloku D', pdfPath: `${BASE_D}/ELSA BLLOKU D-29.pdf` },
]

export const ElsaBlockBCD = () => (
  <ApartmentList
    title="Elsa Residence — Blloku B, C dhe D"
    subtitle="Tipet e banesave në Bllokun B, C dhe D"
    backLink="/projektet/elsa"
    backLabel="Kthehu te Elsa Residence"
    apartments={apartments}
  />
)
