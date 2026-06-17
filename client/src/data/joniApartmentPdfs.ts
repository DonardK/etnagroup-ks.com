import type { Apartment } from '../components/ApartmentList'

const BASE = 'Residences Apartments/Joni Residence PDF'

function pdfToApartment(folder: string, filename: string): Apartment {
  const areaNum = filename.replace(/m2\.pdf$/i, '')
  const label = `${areaNum} m²`
  return { name: label, area: label, pdfPath: `${BASE}/${folder}/${filename}` }
}

const kati1Only = [
  '102.8m2.pdf',
  '112.3m2.pdf',
  '91.2m2.pdf',
  '130.6m2.pdf',
].map((f) => pdfToApartment('Kati 1', f))

const kati1to6 = [
  '52.0m2.pdf',
  '83.6m2.pdf',
  '108.5m2.pdf',
  '109.0m2.pdf',
].map((f) => pdfToApartment('Kati 1-6', f))

const kati2to6 = [
  '80.4m2.pdf',
  '106.8m2.pdf',
  '83.5m2.pdf',
  '85.3m2.pdf',
].map((f) => pdfToApartment('Kati 2-6', f))

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
