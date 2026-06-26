import fs from 'node:fs'
import path from 'node:path'

const PUBLIC = path.resolve('client/public/Residences Apartments')

function areaFromFilename(filename) {
  const m = path.basename(filename).match(/(\d+(?:\.\d+)?)m²/i)
  return m ? parseFloat(m[1]) : null
}

function walkPdfs(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results.push(...walkPdfs(full))
    else if (entry.name.toLowerCase().endsWith('.pdf')) results.push(full)
  }
  return results
}

/** Prefer canonical name without -2/-3 suffix; shorter names win ties. */
function canonicalRank(filename) {
  const hasSuffix = /m²-\d+\.pdf$/i.test(filename)
  return [hasSuffix ? 1 : 0, filename.length, filename]
}

const pdfs = walkPdfs(PUBLIC)
const groups = new Map()

for (const fullPath of pdfs) {
  const dir = path.dirname(fullPath)
  const area = areaFromFilename(fullPath)
  if (area === null) {
    console.warn(`Skip (no area): ${fullPath}`)
    continue
  }
  const key = `${dir}|${area}`
  if (!groups.has(key)) groups.set(key, [])
  groups.get(key).push(fullPath)
}

const toDelete = []

for (const [key, files] of groups) {
  if (files.length <= 1) continue

  const sorted = [...files].sort((a, b) => {
    const ra = canonicalRank(path.basename(a))
    const rb = canonicalRank(path.basename(b))
    return ra[0] - rb[0] || ra[1] - rb[1] || ra[2].localeCompare(rb[2])
  })

  const [keep, ...dupes] = sorted
  console.log(`\n[${key}]`)
  console.log(`  KEEP: ${path.basename(keep)}`)
  for (const d of dupes) {
    console.log(`  DELETE: ${path.basename(d)}`)
    toDelete.push(d)
  }
}

console.log(`\nDeleting ${toDelete.length} duplicate PDFs...`)
for (const f of toDelete) {
  fs.unlinkSync(f)
}

// Regenerate manifest
const remaining = walkPdfs(PUBLIC).map((fullPath) => {
  const dir = path.dirname(fullPath)
  const relDir = path.relative(PUBLIC, dir).replace(/\\/g, '/')
  const filename = path.basename(fullPath)
  const relPdf = `Residences Apartments/${relDir}/${filename}`.replace(/\\/g, '/')
  let building, block
  if (relDir.includes('Elsa Blloku')) {
    building = 'Elsa'
    block = relDir.match(/Elsa Blloku ([A-E])/)?.[1]
  } else if (relDir.includes('Tiani Blloku')) {
    building = 'Tiani'
    block = relDir.match(/Tiani Blloku ([AB])/)?.[1]
  } else if (relDir.includes('Tara')) {
    building = 'Tara'
    block = null
  } else if (relDir.includes('Joni')) {
    building = 'Joni'
    if (relDir.includes('Kati 1-6')) block = 'K1-6'
    else if (relDir.includes('Kati 2-6')) block = 'K2-6'
    else if (relDir.includes('Kati 1')) block = 'K1'
  }
  return { relPdf, building, block, filename, relDir }
})

fs.writeFileSync(
  path.resolve('scripts/pdf-manifest.json'),
  JSON.stringify(remaining, null, 2)
)
console.log(`Remaining PDFs: ${remaining.length}`)
