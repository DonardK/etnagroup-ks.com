import {
  parseRequestedGroups,
  parseRequestedBedrooms,
  parseRequestedProjects,
  findApartmentsForQuery,
  formatCatalogInventory,
  inferApartmentType,
} from '../src/data/apartmentCatalog.ts'

const types = (matches) =>
  matches?.map(
    (g) =>
      `${g.project} ${g.apartments.map((a) => `${a.area} ${inferApartmentType(a.pdfPath) ?? ''}`.trim()).join(', ')}`,
  )

const assert = (cond, msg) => {
  if (!cond) throw new Error(msg)
}

assert(parseRequestedProjects('me duhet nje banes 2+1 ne prishtine').includes('elsa'), 'prishtine → elsa')
assert(parseRequestedBedrooms('me duhet nje banes 2+1 ne prishtine').includes(2), '2+1 bedrooms')
assert(parseRequestedGroups('Sa banesa gjithsej jane ne bllokun A ne Elsa Residence').includes('Blloku A'), 'blloku A')

const twoOne = findApartmentsForQuery('me duhet nje banes 2+1 ne prishtine')
assert(twoOne?.length === 1 && twoOne[0].projectId === 'elsa', '2+1 Prishtina is Elsa only')
assert(
  twoOne[0].apartments.every((a) => inferApartmentType(a.pdfPath) === '2+1'),
  '2+1 filter must not leak other types',
)

const followUp = findApartmentsForQuery('90m2', ['me duhet nje banes 2+1 ne prishtine'])
assert(
  followUp?.every((g) => g.projectId === 'elsa'),
  'follow-up 90m2 should stay on Elsa',
)

const switchProject = findApartmentsForQuery('Tara', ['Elsa Blloku B 2+1'])
assert(
  switchProject?.every((g) => g.projectId === 'tara'),
  'naming Tara must drop Elsa Blloku B',
)
assert(
  (switchProject?.[0].apartments.length ?? 0) > 0,
  'Tara after Elsa B must still return Tara layouts',
)

const chitchat = findApartmentsForQuery('Faleminderit', ['me duhet nje banes 2+1 ne prishtine'])
assert(chitchat === undefined, 'thanks should not rematch apartments')

const etna = parseRequestedProjects('Etna Residence Fushë Kosovë')
assert(etna.includes('etna'), 'Etna Residence should be detected')

const inventory = formatCatalogInventory()
assert(inventory.includes('LAYOUT TYPES'), 'catalog warns layouts ≠ units')
assert(inventory.includes('Blloku E'), 'Block E coming soon')
assert(inventory.length < 6500, `inventory too large: ${inventory.length}`)

console.log('2+1 Prishtina', types(twoOne))
console.log('follow-up 90m2', types(followUp))
console.log('switch Tara', types(switchProject))
console.log('inventory chars', inventory.length)
console.log('smoke-chat-match: ok')
