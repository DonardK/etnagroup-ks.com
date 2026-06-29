import type { TranslationTree } from './translations'
import type { CatalogApartment } from '../data/apartmentCatalog'

const CITY_KEYS: Record<string, keyof TranslationTree['cities']> = {
  Prishtinë: 'prishtina',
  Prizren: 'prizren',
  Malishevë: 'malisheva',
}

/** Localize catalog group labels such as "Blloku A" or "Kati 1". */
export const localizeGroup = (group: string, t: TranslationTree): string => {
  const blockMatch = group.match(/^Blloku ([A-E])$/)
  if (blockMatch) return t.group.block(blockMatch[1])

  const floorMatch = group.match(/^Kati (\d+)$/)
  if (floorMatch) return t.group.floor(Number(floorMatch[1]))

  return group
}

export const localizeCity = (city: string, t: TranslationTree): string => {
  const key = CITY_KEYS[city]
  return key ? t.cities[key] : city
}

export const localizeCatalogApartment = (
  apt: CatalogApartment,
  t: TranslationTree,
): { project: string; city: string; group: string } => ({
  project: apt.project,
  city: localizeCity(apt.city, t),
  group: apt.group ? localizeGroup(apt.group, t) : '',
})

export const buildingCountLabel = (count: number, t: TranslationTree): string =>
  count === 1 ? t.project.buildingSingular : t.project.buildingPlural(count)
