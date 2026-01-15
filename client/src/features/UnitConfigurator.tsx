import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFilteredUnits } from '../hooks/useUnits'
import { UnitType, UnitStatus } from '../types'

const unitTypes = [
  { value: UnitType.Penthouse, label: 'Penthouse', icon: '👑' },
  { value: UnitType.Loft, label: 'Banesë', icon: '🏢' },
  { value: UnitType.TypeA, label: 'Garazhë', icon: '🅿️' },
  { value: UnitType.TypeB, label: 'Lokal', icon: '🏪' },
]

export const UnitConfigurator = () => {
  const [selectedType, setSelectedType] = useState<UnitType>(UnitType.Penthouse)
  const [show3D, setShow3D] = useState(false)

  const { data: units, isLoading } = useFilteredUnits({
    type: selectedType,
    status: UnitStatus.Available,
  })

  const selectedUnit = units?.[0]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Configure Your Dream Home
          </h2>
          <p className="text-lg text-gray-300">
            Select a unit type and see instant visualizations
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
                  ? 'bg-white text-gray-900 shadow-2xl'
                  : 'bg-white/10 text-white hover:bg-white/20'
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
          <motion.div
            layout
            className="overflow-hidden rounded-3xl bg-white/5 p-2"
          >
            {/* 2D/3D Toggle */}
            <div className="mb-4 flex justify-end gap-2">
              <button
                onClick={() => setShow3D(false)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  !show3D
                    ? 'bg-white text-gray-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                2D Plan
              </button>
              <button
                onClick={() => setShow3D(true)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  show3D
                    ? 'bg-white text-gray-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                3D View
              </button>
            </div>

            {/* Plan Display */}
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-96 items-center justify-center"
                >
                  <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
                </motion.div>
              ) : selectedUnit ? (
                <motion.div
                  key={show3D ? selectedUnit.plan3DUrl : selectedUnit.plan2DUrl}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative aspect-video overflow-hidden rounded-2xl bg-gray-800"
                >
                  <img
                    src={show3D ? selectedUnit.plan3DUrl : selectedUnit.plan2DUrl}
                    alt={`${selectedType} plan`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/800x600?text=' + 
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
                  className="flex h-96 items-center justify-center text-gray-400"
                >
                  No available units of this type
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
                className="rounded-3xl bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Unit {selectedUnit.unitNumber}
                </h3>

                {/* Specs Grid */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 p-4">
                    <div className="text-sm text-gray-400">Bedrooms</div>
                    <div className="text-2xl font-bold text-white">
                      {selectedUnit.bedrooms}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    <div className="text-sm text-gray-400">Bathrooms</div>
                    <div className="text-2xl font-bold text-white">
                      {selectedUnit.bathrooms}
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    <div className="text-sm text-gray-400">Interior</div>
                    <div className="text-2xl font-bold text-white">
                      {selectedUnit.interiorSqm}m²
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4">
                    <div className="text-sm text-gray-400">Terrace</div>
                    <div className="text-2xl font-bold text-white">
                      {selectedUnit.exteriorSqm}m²
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Floor:</span>
                    <span className="font-semibold text-white">
                      {selectedUnit.floor}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Facing:</span>
                    <span className="font-semibold text-white">
                      {selectedUnit.facing}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Area:</span>
                    <span className="font-semibold text-white">
                      {selectedUnit.totalSqm}m²
                    </span>
                  </div>
                  {selectedUnit.moveInReady && (
                    <div className="mt-4 rounded-lg bg-green-500/20 p-3 text-center text-green-400">
                      ✓ Move-in Ready
                    </div>
                  )}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full rounded-full bg-white py-4 font-semibold text-gray-900 transition-all hover:shadow-2xl"
                >
                  Request Information
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Available Units Count */}
        {units && units.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center text-gray-400"
          >
            {units.length} available {selectedType} unit{units.length !== 1 ? 's' : ''}
          </motion.div>
        )}
      </div>
    </div>
  )
}
