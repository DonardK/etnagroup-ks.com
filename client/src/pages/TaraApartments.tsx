import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Tara Residence PDF'

const apartments: Apartment[] = [
  { name: 'Tara 01', pdfPath: `${BASE}/Tara 01.pdf` },
  { name: 'Tara 02', pdfPath: `${BASE}/Tara 02.pdf` },
  { name: 'Tara 3, 10, 17, 24, 31', pdfPath: `${BASE}/Tara 3,10,17,24,31.pdf` },
  { name: 'Tara 04, 11, 18, 25, 32, 38, 43, 47', pdfPath: `${BASE}/Tara 04,11,18,25,32,38,43,47.pdf` },
  { name: 'Tara 5, 12, 19, 26, 33, 39', pdfPath: `${BASE}/Tara 5,12,19, 26,33,39.pdf` },
  { name: 'Tara 06', pdfPath: `${BASE}/Tara 06.pdf` },
  { name: 'Tara 07', pdfPath: `${BASE}/Tara 07.pdf` },
  { name: 'Tara 08, 15, 22', pdfPath: `${BASE}/Tara 08,15,22.pdf` },
  { name: 'Tara 09, 16, 23, 30', note: 'Vetëm 30 Kati 5 e lirë', pdfPath: `${BASE}/Tara 09,16,23,30 (vetem 30 Kati 5 e lire).pdf` },
  { name: 'Tara 13, 20, 27', pdfPath: `${BASE}/Tara 13, 20, 27.pdf` },
  { name: 'Tara 14, 21, 28', note: 'Vetëm 21 Kati 3 e lirë', pdfPath: `${BASE}/Tara 14, 21, 28 (vetem 21 Kati 3 e lire).pdf` },
  { name: 'Tara 29', pdfPath: `${BASE}/Tara 29.pdf` },
  { name: 'Tara 34', pdfPath: `${BASE}/Tara 34.pdf` },
  { name: 'Tara 35', pdfPath: `${BASE}/Tara 35.pdf` },
  { name: 'Tara 36', pdfPath: `${BASE}/Tara 36.pdf` },
  { name: 'Tara 37', pdfPath: `${BASE}/Tara 37.pdf` },
  { name: 'Tara 40', pdfPath: `${BASE}/Tara 40.pdf` },
  { name: 'Tara 41', pdfPath: `${BASE}/Tara 41.pdf` },
  { name: 'Tara 42', pdfPath: `${BASE}/Tara 42.pdf` },
  { name: 'Tara 43, 47', pdfPath: `${BASE}/Tara 43,47.pdf` },
  { name: 'Tara 44', pdfPath: `${BASE}/Tara 44.pdf` },
  { name: 'Tara 45', pdfPath: `${BASE}/Tara 45.pdf` },
  { name: 'Tara 46', pdfPath: `${BASE}/Tara 46.pdf` },
  { name: 'Tara 48', pdfPath: `${BASE}/Tara 48.pdf` },
  { name: 'Tara 49', pdfPath: `${BASE}/Tara 49.pdf` },
  { name: 'Tara 50', pdfPath: `${BASE}/Tara 50.pdf` },
]

export const TaraApartments = () => (
  <ApartmentList
    title="Tara Residence"
    subtitle="26 banesa të disponueshme"
    backLink="/projektet/tara"
    backLabel="Kthehu te Tara Residence"
    apartments={apartments}
  />
)
