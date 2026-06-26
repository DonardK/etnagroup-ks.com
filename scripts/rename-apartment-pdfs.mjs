import fs from 'node:fs'
import path from 'node:path'

const PUBLIC = path.resolve('client/public/Residences Apartments')
const M2 = 'm\u00B2' // m²

function extractArea(filename) {
  const base = path.basename(filename, '.pdf')
  const match = base.match(/(\d+(?:\.\d+)?)/)
  return match ? match[1] : null
}

function parseLocation(relDir) {
  const p = relDir.replace(/\\/g, '/')

  const elsa = p.match(/Elsa Blloku ([A-E])/)
  if (elsa) return { building: 'Elsa', block: elsa[1] }

  const tiani = p.match(/Tiani Blloku ([AB])/)
  if (tiani) return { building: 'Tiani', block: tiani[1] }

  if (p.includes('Tara Residence PDF')) return { building: 'Tara', block: null }

  if (p.includes('Joni Residence PDF')) {
    if (p.includes('Kati 1-6')) return { building: 'Joni', block: 'K1-6' }
    if (p.includes('Kati 2-6')) return { building: 'Joni', block: 'K2-6' }
    if (p.includes('Kati 1')) return { building: 'Joni', block: 'K1' }
  }

  throw new Error(`Cannot parse location: ${relDir}`)
}

function targetName(building, block, area) {
  if (block) return `${building}-${block}-${area}${M2}.pdf`
  return `${building}-${area}${M2}.pdf`
}

function walkPdfs(dir, root = dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...walkPdfs(full, root))
    } else if (entry.name.toLowerCase().endsWith('.pdf')) {
      results.push(full)
    }
  }
  return results
}

const pdfs = walkPdfs(PUBLIC)
const usedNames = new Map()
const renames = []

for (const fullPath of pdfs) {
  const dir = path.dirname(fullPath)
  const oldName = path.basename(fullPath)
  const relDir = path.relative(PUBLIC, dir)
  const area = extractArea(oldName)
  if (!area) {
    console.warn(`Skip (no area): ${fullPath}`)
    continue
  }

  const { building, block } = parseLocation(relDir)
  let newName = targetName(building, block, area)
  const key = path.join(relDir, newName)

  if (usedNames.has(key)) {
    let n = 2
    while (usedNames.has(path.join(relDir, newName.replace('.pdf', `-${n}.pdf`)))) n++
    newName = newName.replace('.pdf', `-${n}.pdf`)
  }
  usedNames.set(path.join(relDir, newName), true)

  const newPath = path.join(dir, newName)
  if (oldName !== newName) {
    renames.push({ fullPath, newPath, oldName, newName, relDir, building, block, area })
  }
}

// Rename longest paths first to avoid odd conflicts
renames.sort((a, b) => b.oldName.length - a.oldName.length)
for (const r of renames) {
  if (fs.existsSync(r.newPath) && r.fullPath !== r.newPath) {
    let n = 2
    let alt = r.newName.replace('.pdf', `-${n}.pdf`)
    while (fs.existsSync(path.join(path.dirname(r.fullPath), alt))) {
      n++
      alt = r.newName.replace('.pdf', `-${n}.pdf`)
    }
    r.newName = alt
    r.newPath = path.join(path.dirname(r.fullPath), alt)
  }
  fs.renameSync(r.fullPath, r.newPath)
  console.log(`${r.relDir}/${r.oldName} -> ${r.newName}`)
}

console.log(`\nRenamed ${renames.length} files.`)

// Write manifest for code updates
const manifest = walkPdfs(PUBLIC).map((fullPath) => {
  const dir = path.dirname(fullPath)
  const relDir = path.relative(PUBLIC, dir).replace(/\\/g, '/')
  const filename = path.basename(fullPath)
  const area = extractArea(filename)
  const { building, block } = parseLocation(relDir)
  const relPdf = `Residences Apartments/${relDir}/${filename}`.replace(/\\/g, '/')
  return { relPdf, building, block, area, filename, relDir }
})

fs.writeFileSync(
  path.resolve('scripts/pdf-manifest.json'),
  JSON.stringify(manifest, null, 2),
  'utf8'
)
console.log(`Manifest: ${manifest.length} PDFs`)
