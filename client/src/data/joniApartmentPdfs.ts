import type { Apartment } from '../components/ApartmentList'

/** PDF filenames: `Joni-{Kati}-{area}m².pdf` */
const kati1Only: Apartment[] = [
  { name: '91.2 m²', area: '91.2 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1/Joni-K1-91.2m².pdf' },
  { name: '102.8 m²', area: '102.8 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1/Joni-K1-102.8m².pdf' },
  { name: '112.3 m²', area: '112.3 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1/Joni-K1-112.3m².pdf' },
  { name: '130.6 m²', area: '130.6 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1/Joni-K1-130.6m².pdf' },
]

const kati1to6: Apartment[] = [
  { name: '52.0 m²', area: '52.0 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1-6/Joni-K1-6-52.0m².pdf' },
  { name: '83.6 m²', area: '83.6 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1-6/Joni-K1-6-83.6m².pdf' },
  { name: '108.5 m²', area: '108.5 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1-6/Joni-K1-6-108.5m².pdf' },
  { name: '109.0 m²', area: '109.0 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 1-6/Joni-K1-6-109.0m².pdf' },
]

const kati2to6: Apartment[] = [
  { name: '80.4 m²', area: '80.4 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 2-6/Joni-K2-6-80.4m².pdf' },
  { name: '83.5 m²', area: '83.5 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 2-6/Joni-K2-6-83.5m².pdf' },
  { name: '85.3 m²', area: '85.3 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 2-6/Joni-K2-6-85.3m².pdf' },
  { name: '106.8 m²', area: '106.8 m²', pdfPath: 'Residences Apartments/Joni Residence PDF/Kati 2-6/Joni-K2-6-106.8m².pdf' },
]

function sortByArea(apartments: Apartment[]): Apartment[] {
  return [...apartments].sort(
    (a, b) => parseFloat(a.name) - parseFloat(b.name)
  )
}

export function getJoniKatiApartments(kati: number): Apartment[] {
  if (kati === 1) {
    return sortByArea([...kati1Only, ...kati1to6])
  }
  if (kati >= 2 && kati <= 6) {
    return sortByArea([...kati2to6, ...kati1to6])
  }
  return []
}
