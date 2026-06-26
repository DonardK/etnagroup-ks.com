import fs from 'node:fs'
import path from 'node:path'

const manifest = JSON.parse(
  fs.readFileSync(path.resolve('scripts/pdf-manifest.json'), 'utf8')
)

function areaLabel(area) {
  return `${area} m²`
}

function areaFromFilename(filename) {
  const m = path.basename(filename).match(/(\d+(?:\.\d+)?)m²/i)
  return m ? m[1] : null
}

function toApartment(entry) {
  const { building, block, filename, relPdf } = entry
  const area = areaFromFilename(filename)
  if (!area) throw new Error(`No area in ${filename}`)
  const label =
    building === 'Tara' || building === 'Joni'
      ? areaLabel(area)
      : `${block}-${areaLabel(area)}`
  return {
    name: label,
    area: areaLabel(area),
    pdfPath: relPdf,
  }
}

function sortByArea(apartments) {
  return [...apartments].sort(
    (a, b) => parseFloat(a.name) - parseFloat(b.name)
  )
}

function formatArray(name, apartments) {
  const lines = apartments.map(
    (a) =>
      `  { name: '${a.name}', area: '${a.area}', pdfPath: '${a.pdfPath}' },`
  )
  return `export const ${name}: Apartment[] = [\n${lines.join('\n')}\n]`
}

// --- Elsa ---
const elsaBlocks = ['A', 'B', 'C', 'D', 'E']
const elsaExports = elsaBlocks.map((block) => {
  const apts = sortByArea(
    manifest
      .filter((m) => m.building === 'Elsa' && m.block === block)
      .map(toApartment)
  )
  const constName = `elsaBlloku${block}Apartments`
  return formatArray(constName, apts)
})

const elsaFile = `import type { Apartment } from '../components/ApartmentList'

/** PDF filenames: \`Elsa-{Block}-{area}m².pdf\` under \`client/public/Residences Apartments/...\` */
${elsaExports.join('\n\n')}
`

fs.writeFileSync(path.resolve('client/src/data/elsaApartmentPdfs.ts'), elsaFile)

// --- Joni ---
const joniK1 = sortByArea(
  manifest.filter((m) => m.building === 'Joni' && m.block === 'K1').map(toApartment)
)
const joniK16 = sortByArea(
  manifest.filter((m) => m.building === 'Joni' && m.block === 'K1-6').map(toApartment)
)
const joniK26 = sortByArea(
  manifest.filter((m) => m.building === 'Joni' && m.block === 'K2-6').map(toApartment)
)

function joniArray(name, apts) {
  const lines = apts.map(
    (a) =>
      `  { name: '${a.name}', area: '${a.area}', pdfPath: '${a.pdfPath}' },`
  )
  return `const ${name}: Apartment[] = [\n${lines.join('\n')}\n]`
}

const joniFile = `import type { Apartment } from '../components/ApartmentList'

/** PDF filenames: \`Joni-{Kati}-{area}m².pdf\` */
${joniArray('kati1Only', joniK1)}

${joniArray('kati1to6', joniK16)}

${joniArray('kati2to6', joniK26)}

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
`

fs.writeFileSync(path.resolve('client/src/data/joniApartmentPdfs.ts'), joniFile)

// --- Tiani ---
function tianiPage(block, componentName, title) {
  const base = `Residences Apartments/Tiani Residence PDF/Tiani Blloku ${block}`
  const apts = sortByArea(
    manifest
      .filter((m) => m.building === 'Tiani' && m.block === block)
      .map(toApartment)
  )
  const lines = apts.map(
    (a) =>
      `  { name: '${a.name}', area: '${a.area}', pdfPath: \`\${BASE}/${a.pdfPath.split('/').pop()}\` },`
  )
  return `import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = '${base}'

const apartments: Apartment[] = [
${lines.join('\n')}
]

export const ${componentName} = () => (
  <ApartmentList
    title="${title}"
    subtitle="Tipet e banesave në Bllokun ${block}"
    backLink="/projektet/tiani"
    backLabel="Kthehu te Tiani Residence"
    apartments={apartments}
  />
)
`
}

fs.writeFileSync(
  path.resolve('client/src/pages/TianiBlockA.tsx'),
  tianiPage('A', 'TianiBlockA', 'Tiani Residence — Blloku A')
)
fs.writeFileSync(
  path.resolve('client/src/pages/TianiBlockB.tsx'),
  tianiPage('B', 'TianiBlockB', 'Tiani Residence — Blloku B')
)

// --- Tara ---
const taraBase = 'Residences Apartments/Tara Residence PDF'
const taraApts = sortByArea(
  manifest.filter((m) => m.building === 'Tara').map(toApartment)
)
const taraLines = taraApts.map(
  (a) =>
    `  { name: '${a.name}', area: '${a.area}', pdfPath: \`\${BASE}/${a.pdfPath.split('/').pop()}\` },`
)

const taraFile = `import { ApartmentList } from '../components/ApartmentList'
import type { Apartment } from '../components/ApartmentList'

const BASE = '${taraBase}'

const apartments: Apartment[] = [
${taraLines.join('\n')}
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
`

fs.writeFileSync(path.resolve('client/src/pages/TaraApartments.tsx'), taraFile)

console.log('Generated apartment data files from manifest.')
