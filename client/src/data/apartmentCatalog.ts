// Unified apartment catalog used by the chat assistant to surface real floor-plan
// (planimetri) PDFs, matched deterministically by square meters across all
// projects/cities. Mirrors the per-project data files and the PDFs under
// client/public/Residences Apartments/. Keep in sync when plans change.

import type { Apartment } from '../components/ApartmentList'

export interface CatalogApartment {
  project: string
  projectId: string
  city: string
  /** Block / floor grouping, e.g. "Blloku A" or "Kati 1". Empty for single towers. */
  group: string
  /** Net area in square meters. */
  area: number
  /** Path relative to the site base URL. */
  pdfPath: string
}

interface AreaEntry {
  area: number
  pdfPath: string
}

const make = (
  project: string,
  projectId: string,
  city: string,
  group: string,
  items: AreaEntry[],
): CatalogApartment[] => items.map((i) => ({ project, projectId, city, group, ...i }))

const ELSA_BASE = 'Residences Apartments/Elsa Residence PDF'
const TIANI_BASE = 'Residences Apartments/Tiani Residence PDF'
const TARA_BASE = 'Residences Apartments/Tara Residence PDF'
const JONI_BASE = 'Residences Apartments/Joni Residence PDF'

export const apartmentCatalog: CatalogApartment[] = [
  // --- Elsa Residence — Prishtinë ---
  ...make('Elsa Residence', 'elsa', 'Prishtinë', 'Blloku A', [
    { area: 66.39, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-66.39m².pdf` },
    { area: 74.4, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-74.4m².pdf` },
    { area: 74.43, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-74.43m².pdf` },
    { area: 82.3, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-82.3m².pdf` },
    { area: 93.37, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-93.37m².pdf` },
    { area: 108.4, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-108.4m².pdf` },
    { area: 114, pdfPath: `${ELSA_BASE}/Elsa Blloku A/Elsa-A-114m².pdf` },
  ]),
  ...make('Elsa Residence', 'elsa', 'Prishtinë', 'Blloku B', [
    { area: 53.35, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-53.35m².pdf` },
    { area: 66.26, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-66.26m².pdf` },
    { area: 84.34, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-84.34m².pdf` },
    { area: 90.65, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-90.65m².pdf` },
    { area: 91.11, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-91.11m².pdf` },
    { area: 99.65, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-99.65m².pdf` },
    { area: 113.4, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-113.40m².pdf` },
    { area: 115.99, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-115.99m².pdf` },
    { area: 127.11, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-127.11m².pdf` },
    { area: 132.21, pdfPath: `${ELSA_BASE}/Elsa Blloku B/Elsa-B-132.21m².pdf` },
  ]),
  ...make('Elsa Residence', 'elsa', 'Prishtinë', 'Blloku C', [
    { area: 53.35, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-53.35m².pdf` },
    { area: 66.26, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-66.26m².pdf` },
    { area: 67.98, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-67.98m².pdf` },
    { area: 84.34, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-84.34m².pdf` },
    { area: 91.11, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-91.11m².pdf` },
    { area: 99.65, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-99.65m².pdf` },
    { area: 104.46, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-104.46m².pdf` },
    { area: 113.97, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-113.97m².pdf` },
    { area: 115.99, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-115.99m².pdf` },
    { area: 118.88, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-118.88m².pdf` },
    { area: 127.8, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-127.8m².pdf` },
    { area: 128.18, pdfPath: `${ELSA_BASE}/Elsa Blloku C/Elsa-C-128.18m².pdf` },
  ]),
  ...make('Elsa Residence', 'elsa', 'Prishtinë', 'Blloku D', [
    { area: 53.35, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-53.35m².pdf` },
    { area: 66.26, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-66.26m².pdf` },
    { area: 67.98, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-67.98m².pdf` },
    { area: 84.34, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-84.34m².pdf` },
    { area: 91.11, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-91.11m².pdf` },
    { area: 99.65, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-99.65m².pdf` },
    { area: 104.46, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-104.46m².pdf` },
    { area: 113.97, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-113.97m².pdf` },
    { area: 115.9, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-115.9m².pdf` },
    { area: 118.88, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-118.88m².pdf` },
    { area: 127.8, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-127.80m².pdf` },
    { area: 128.18, pdfPath: `${ELSA_BASE}/Elsa Blloku D/Elsa-D-128.18m².pdf` },
  ]),

  // --- Tiani Residence — Prizren ---
  ...make('Tiani Residence', 'tiani', 'Prizren', 'Blloku A', [
    { area: 90.2, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-90.2m².pdf` },
    { area: 92.1, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-92.1m².pdf` },
    { area: 93.5, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-93.5m².pdf` },
    { area: 94.4, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-94.4m².pdf` },
    { area: 99.0, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-99.0m².pdf` },
    { area: 99.1, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-99.1m².pdf` },
    { area: 107.4, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-107.4m².pdf` },
    { area: 115.5, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-115.5m².pdf` },
    { area: 116.6, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-116.6m².pdf` },
    { area: 130.7, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-130.7m².pdf` },
    { area: 130.9, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-130.9m².pdf` },
    { area: 138.8, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-138.8m².pdf` },
    { area: 184.8, pdfPath: `${TIANI_BASE}/Tiani Blloku A/Tiani-A-184.8m².pdf` },
  ]),
  ...make('Tiani Residence', 'tiani', 'Prizren', 'Blloku B', [
    { area: 68.6, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-68.6m².pdf` },
    { area: 84.9, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-84.9m².pdf` },
    { area: 87.8, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-87.8m².pdf` },
    { area: 88.0, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-88.0m².pdf` },
    { area: 88.7, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-88.7m².pdf` },
    { area: 88.8, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-88.8m².pdf` },
    { area: 90.0, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-90.0m².pdf` },
    { area: 92.6, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-92.6m².pdf` },
    { area: 144.7, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-144.7m².pdf` },
    { area: 150.5, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-150.5m².pdf` },
    { area: 179.1, pdfPath: `${TIANI_BASE}/Tiani Blloku B/Tiani-B-179.1m².pdf` },
  ]),

  // --- Tara Residence — Prizren (single tower) ---
  ...make('Tara Residence', 'tara', 'Prizren', '', [
    { area: 46.1, pdfPath: `${TARA_BASE}/Tara-46.1m².pdf` },
    { area: 64.3, pdfPath: `${TARA_BASE}/Tara-64.3m².pdf` },
    { area: 74.13, pdfPath: `${TARA_BASE}/Tara-74.13m².pdf` },
    { area: 74.3, pdfPath: `${TARA_BASE}/Tara-74.3m².pdf` },
    { area: 76.7, pdfPath: `${TARA_BASE}/Tara-76.7m².pdf` },
    { area: 91.2, pdfPath: `${TARA_BASE}/Tara-91.2m².pdf` },
    { area: 93.8, pdfPath: `${TARA_BASE}/Tara-93.8m².pdf` },
    { area: 115, pdfPath: `${TARA_BASE}/Tara-115m².pdf` },
    { area: 120.1, pdfPath: `${TARA_BASE}/Tara-120.1m².pdf` },
    { area: 122.5, pdfPath: `${TARA_BASE}/Tara-122.5m².pdf` },
    { area: 129.0, pdfPath: `${TARA_BASE}/Tara-129.0m².pdf` },
    { area: 129.4, pdfPath: `${TARA_BASE}/Tara-129.4m².pdf` },
    { area: 139.5, pdfPath: `${TARA_BASE}/Tara-139.5m².pdf` },
    { area: 145.1, pdfPath: `${TARA_BASE}/Tara-145.1m².pdf` },
    { area: 159.1, pdfPath: `${TARA_BASE}/Tara-159.1m².pdf` },
    { area: 183.3, pdfPath: `${TARA_BASE}/Tara-183.3m².pdf` },
  ]),

  // --- Joni Residence — Malishevë ---
  ...make('Joni Residence', 'joni', 'Malishevë', 'Kati 1', [
    { area: 91.2, pdfPath: `${JONI_BASE}/Kati 1/Joni-K1-91.2m².pdf` },
    { area: 102.8, pdfPath: `${JONI_BASE}/Kati 1/Joni-K1-102.8m².pdf` },
    { area: 112.3, pdfPath: `${JONI_BASE}/Kati 1/Joni-K1-112.3m².pdf` },
    { area: 130.6, pdfPath: `${JONI_BASE}/Kati 1/Joni-K1-130.6m².pdf` },
  ]),
  ...make('Joni Residence', 'joni', 'Malishevë', 'Kati 1–6', [
    { area: 52.0, pdfPath: `${JONI_BASE}/Kati 1-6/Joni-K1-6-52.0m².pdf` },
    { area: 83.6, pdfPath: `${JONI_BASE}/Kati 1-6/Joni-K1-6-83.6m².pdf` },
    { area: 108.5, pdfPath: `${JONI_BASE}/Kati 1-6/Joni-K1-6-108.5m².pdf` },
    { area: 109.0, pdfPath: `${JONI_BASE}/Kati 1-6/Joni-K1-6-109.0m².pdf` },
  ]),
  ...make('Joni Residence', 'joni', 'Malishevë', 'Kati 2–6', [
    { area: 80.4, pdfPath: `${JONI_BASE}/Kati 2-6/Joni-K2-6-80.4m².pdf` },
    { area: 83.5, pdfPath: `${JONI_BASE}/Kati 2-6/Joni-K2-6-83.5m².pdf` },
    { area: 85.3, pdfPath: `${JONI_BASE}/Kati 2-6/Joni-K2-6-85.3m².pdf` },
    { area: 106.8, pdfPath: `${JONI_BASE}/Kati 2-6/Joni-K2-6-106.8m².pdf` },
  ]),
]

// --- Page-facing helpers (single source of truth for the apartment pages) ---

/** Reproduce the exact area label from the PDF filename, e.g. "127.80 m²". */
const areaLabelFromPath = (pdfPath: string): string => {
  const file = pdfPath.split('/').pop() ?? ''
  const token = file.replace(/\.pdf$/i, '').split('-').pop() ?? ''
  return token.replace(/m²$/i, ' m²').trim()
}

const blockLetter = (group: string): string => {
  const match = group.match(/Blloku\s+([A-Za-z])/)
  return match ? match[1].toUpperCase() : ''
}

const toApartment = (apt: CatalogApartment): Apartment => {
  const areaLabel = areaLabelFromPath(apt.pdfPath)
  const letter = blockLetter(apt.group)
  return {
    name: letter ? `${letter}-${areaLabel}` : areaLabel,
    area: areaLabel,
    pdfPath: apt.pdfPath,
  }
}

/** Apartments for a project (optionally a single block/group), as the pages expect. */
export const getApartmentList = (projectId: string, group?: string): Apartment[] =>
  apartmentCatalog
    .filter((a) => a.projectId === projectId && (group === undefined || a.group === group))
    .map(toApartment)

/** Joni floor-specific listing: floor 1 gets "Kati 1" + shared "Kati 1–6"; floors 2–6 get "Kati 2–6" + shared. */
export const getJoniFloorApartments = (kati: number): Apartment[] => {
  let groups: string[]
  if (kati === 1) groups = ['Kati 1', 'Kati 1–6']
  else if (kati >= 2 && kati <= 6) groups = ['Kati 2–6', 'Kati 1–6']
  else return []
  return apartmentCatalog
    .filter((a) => a.projectId === 'joni' && groups.includes(a.group))
    .sort((a, b) => a.area - b.area)
    .map(toApartment)
}

export interface ApartmentMatchGroup {
  project: string
  projectId: string
  city: string
  apartments: CatalogApartment[]
}

/**
 * Extract a requested apartment area (m²) from a user's message.
 * Returns null when no plausible size is mentioned.
 */
export function parseRequestedArea(text: string): number | null {
  // Normalize decimal commas (e.g. "90,5" -> "90.5").
  const normalized = text.toLowerCase().replace(/(\d),(\d)/g, '$1.$2')

  // 1) Number directly followed by an area unit (strongest signal).
  const withUnit = normalized.match(
    /(\d{2,3}(?:\.\d+)?)\s*(?:m²|m2|m\^2|metra(?:\s*katror[ëe])?|metror|meter|sqm|m\b)/,
  )
  if (withUnit) {
    const value = parseFloat(withUnit[1])
    if (value >= 20 && value <= 400) return value
  }

  // 2) A size keyword present + a plausible 2–3 digit number anywhere.
  if (/(metra|m²|m2|sipërfaqe|siperfaqe|banes|apartment|flat|katror)/.test(normalized)) {
    const num = normalized.match(/(\d{2,3}(?:\.\d+)?)/)
    if (num) {
      const value = parseFloat(num[1])
      if (value >= 20 && value <= 400) return value
    }
  }

  return null
}

const PROJECT_ALIASES: Record<string, RegExp> = {
  elsa: /\belsa\b/i,
  tiani: /\btiani\b/i,
  tara: /\btara\b/i,
  joni: /\bjoni\b/i,
}

const CITY_TO_PROJECTS: { re: RegExp; ids: string[] }[] = [
  { re: /prishtin/i, ids: ['elsa'] },
  { re: /prizren/i, ids: ['tiani', 'tara'] },
  { re: /malishev/i, ids: ['joni'] },
]

/**
 * Detect which residence(s)/city the user named in their message.
 * Returns matching project ids, or an empty array if none were mentioned.
 */
export function parseRequestedProjects(text: string): string[] {
  const ids = new Set<string>()
  for (const [id, re] of Object.entries(PROJECT_ALIASES)) {
    if (re.test(text)) ids.add(id)
  }
  for (const { re, ids: cityIds } of CITY_TO_PROJECTS) {
    if (re.test(text)) for (const id of cityIds) ids.add(id)
  }
  return [...ids]
}

/**
 * Find apartments closest to a target area, grouped by project/city.
 * Always returns at least the closest apartment for each project so the user
 * gets an option in every city, ordered by how close the best match is.
 */
export function findApartmentsByArea(
  targetArea: number,
  opts?: { tolerance?: number; maxPerProject?: number; projectIds?: string[] },
): ApartmentMatchGroup[] {
  const tolerance = opts?.tolerance ?? 12
  const maxPerProject = opts?.maxPerProject ?? 4
  const allowed =
    opts?.projectIds && opts.projectIds.length > 0 ? new Set(opts.projectIds) : null
  const source = allowed
    ? apartmentCatalog.filter((a) => allowed.has(a.projectId))
    : apartmentCatalog

  const byProject = new Map<string, CatalogApartment[]>()
  for (const apt of source) {
    const list = byProject.get(apt.projectId) ?? []
    list.push(apt)
    byProject.set(apt.projectId, list)
  }

  const distance = (a: CatalogApartment) => Math.abs(a.area - targetArea)
  const groups: ApartmentMatchGroup[] = []

  for (const list of byProject.values()) {
    const sorted = [...list].sort((a, b) => distance(a) - distance(b))
    let chosen = sorted.filter((a) => distance(a) <= tolerance).slice(0, maxPerProject)
    if (chosen.length === 0) chosen = sorted.slice(0, 1)
    chosen.sort((a, b) => a.area - b.area)
    const head = chosen[0]
    groups.push({
      project: head.project,
      projectId: head.projectId,
      city: head.city,
      apartments: chosen,
    })
  }

  const bestDistance = (g: ApartmentMatchGroup) => Math.min(...g.apartments.map(distance))
  groups.sort((a, b) => bestDistance(a) - bestDistance(b))
  return groups
}
