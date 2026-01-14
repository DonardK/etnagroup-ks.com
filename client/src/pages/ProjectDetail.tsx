import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getProjectById } from '../data/projects'
import { useFilteredUnits } from '../hooks/useUnits'
import { UnitType, UnitStatus } from '../types'

const unitTypes = [
  { value: UnitType.Penthouse, label: 'Penthouse', icon: '🏢' },
  { value: UnitType.Loft, label: 'Loft', icon: '🏘️' },
  { value: UnitType.TypeA, label: 'Tipi A', icon: '🏠' },
  { value: UnitType.TypeB, label: 'Tipi B', icon: '🏡' },
]

const unitTypeLabels: Record<UnitType, string> = {
  [UnitType.Penthouse]: 'Penthouse',
  [UnitType.Loft]: 'Loft',
  [UnitType.TypeA]: 'Tipi A',
  [UnitType.TypeB]: 'Tipi B',
}

const statusLabels: Record<UnitStatus, string> = {
  [UnitStatus.Available]: 'E Lirë',
  [UnitStatus.Reserved]: 'E Rezervuar',
  [UnitStatus.Sold]: 'E Shitur',
}

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : null
  const [selectedType, setSelectedType] = useState<UnitType>(UnitType.Penthouse)
  const [show3D, setShow3D] = useState(false)

  const { data: units, isLoading } = useFilteredUnits({
    type: selectedType,
    status: UnitStatus.Available,
  })

  const selectedUnit = units?.[0]

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F2DD] text-[#657432]">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Projekti nuk u gjet</h2>
          <Link
            to="/"
            className="text-[#657432] hover:underline"
          >
            Kthehu në Ballinë
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F2DD]">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F2DD]/80 to-[#F8F2DD]" />
        </div>
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <h1 className="mb-4 text-5xl font-bold text-[#657432] md:text-6xl">
              {project.name}
            </h1>
            <p className="max-w-3xl text-xl text-[#657432]/90">{project.description}</p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="border-b border-[#657432]/20 bg-[#F8F2DD] py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">Lokacioni</div>
              <div className="text-xl font-semibold text-[#657432]">{project.location}</div>
            </div>
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">Statusi</div>
              <div className="text-xl font-semibold text-[#657432]">
                {project.status === 'completed'
                  ? 'I Përfunduar'
                  : project.status === 'under-construction'
                  ? 'Në Ndërtim'
                  : 'Së Shpejti'}
              </div>
            </div>
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">Njësi të Disponueshme</div>
              <div className="text-xl font-semibold text-[#657432]">
                {project.availableUnits} / {project.totalUnits}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-8">
            <h3 className="mb-4 text-2xl font-bold text-[#657432]">Karakteristikat</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-[#657432]/10 p-4 backdrop-blur-sm"
                >
                  <div className="text-2xl">✓</div>
                  <span className="text-[#657432]/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unit Configurator */}
      <section className="bg-gradient-to-b from-[#F8F2DD] to-[#F8F2DD] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-[#657432] md:text-5xl">
              Konfiguro Shtëpinë Tënde
            </h2>
            <p className="text-lg text-[#657432]/70">
              Zgjidhni llojin e njësisë dhe shikoni vizualizime të detajuara
            </p>
          </motion.div>

          {/* Unit Type Selector */}
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {unitTypes.map((type) => (
              <motion.button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-2xl p-6 transition-all ${
                  selectedType === type.value
                    ? 'bg-[#657432] text-[#F8F2DD] shadow-2xl'
                    : 'bg-[#657432]/10 text-[#657432] hover:bg-[#657432]/20'
                }`}
              >
                <div className="mb-2 text-4xl">{type.icon}</div>
                <div className="font-semibold">{type.label}</div>
              </motion.button>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Visualization Area */}
            <motion.div layout className="overflow-hidden rounded-3xl bg-[#657432]/10 p-2">
              <div className="mb-4 flex justify-end gap-2">
                <button
                  onClick={() => setShow3D(false)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    !show3D
                      ? 'bg-[#657432] text-[#F8F2DD]'
                      : 'bg-[#657432]/10 text-[#657432] hover:bg-[#657432]/20'
                  }`}
                >
                  Plan 2D
                </button>
                <button
                  onClick={() => setShow3D(true)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                    show3D
                      ? 'bg-[#657432] text-[#F8F2DD]'
                      : 'bg-[#657432]/10 text-[#657432] hover:bg-[#657432]/20'
                  }`}
                >
                  Pamje 3D
                </button>
              </div>

              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-96 items-center justify-center"
                  >
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#657432]/20 border-t-[#657432]" />
                  </motion.div>
                ) : selectedUnit ? (
                  <motion.div
                    key={show3D ? selectedUnit.plan3DUrl : selectedUnit.plan2DUrl}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-video overflow-hidden rounded-2xl bg-[#F8F2DD]"
                  >
                    <img
                      src={show3D ? selectedUnit.plan3DUrl : selectedUnit.plan2DUrl}
                      alt={`${unitTypeLabels[selectedType]} plan`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://via.placeholder.com/800x600?text=' +
                          (show3D ? '3D+Plan' : '2D+Plan')
                      }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-units"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-96 items-center justify-center text-[#657432]/60"
                  >
                    Nuk ka njësi të disponueshme të këtij lloji
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Specs Panel */}
            <AnimatePresence mode="wait">
              {selectedUnit && (
                <motion.div
                  key={selectedUnit.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl bg-[#657432]/10 p-8 backdrop-blur-sm"
                >
                  <h3 className="mb-6 text-2xl font-bold text-[#657432]">
                    Njësia {selectedUnit.unitNumber}
                  </h3>

                  <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-[#657432]/10 p-4">
                      <div className="text-sm text-[#657432]/60">Dhoma Gjumi</div>
                      <div className="text-2xl font-bold text-[#657432]">
                        {selectedUnit.bedrooms}
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#657432]/10 p-4">
                      <div className="text-sm text-[#657432]/60">Banjo</div>
                      <div className="text-2xl font-bold text-[#657432]">
                        {selectedUnit.bathrooms}
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#657432]/10 p-4">
                      <div className="text-sm text-[#657432]/60">Sipërfaqja</div>
                      <div className="text-2xl font-bold text-[#657432]">
                        {selectedUnit.interiorSqm}m²
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#657432]/10 p-4">
                      <div className="text-sm text-[#657432]/60">Terraza</div>
                      <div className="text-2xl font-bold text-[#657432]">
                        {selectedUnit.exteriorSqm}m²
                      </div>
                    </div>
                  </div>


                  <div className="mb-6 space-y-3 text-sm text-[#657432]/70">
                    <div className="flex justify-between">
                      <span>Kati:</span>
                      <span className="font-semibold text-[#657432]">{selectedUnit.floor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Orientimi:</span>
                      <span className="font-semibold text-[#657432]">{selectedUnit.facing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sipërfaqja Totale:</span>
                      <span className="font-semibold text-[#657432]">
                        {selectedUnit.totalSqm}m²
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Statusi:</span>
                      <span className="font-semibold text-[#657432]">
                        {statusLabels[selectedUnit.status]}
                      </span>
                    </div>
                    {selectedUnit.moveInReady && (
                      <div className="mt-4 rounded-lg bg-[#657432]/20 p-3 text-center text-[#657432]">
                        ✓ Gati për Vendosje
                      </div>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-full bg-[#657432] py-4 font-semibold text-[#F8F2DD] transition-all hover:shadow-2xl"
                  >
                    Kërko Informacion
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}
