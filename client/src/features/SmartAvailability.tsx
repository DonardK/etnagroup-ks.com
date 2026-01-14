import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFilteredUnits } from '../hooks/useUnits'
import { UnitStatus } from '../types'
import type { UnitFilterParams } from '../types'

export const SmartAvailability = () => {
  const [filters, setFilters] = useState<UnitFilterParams>({
    status: UnitStatus.Available,
  })

  const { data: units, isLoading } = useFilteredUnits(filters)

  const updateFilter = (key: keyof UnitFilterParams, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Find Your Perfect Home
          </h2>
          <p className="text-lg text-gray-600">
            Filter by your preferences and find available units instantly
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 rounded-2xl bg-white p-6 shadow-lg"
        >
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {/* Status Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                value={filters.status || ''}
                onChange={(e) =>
                  updateFilter(
                    'status',
                    e.target.value ? (e.target.value as UnitStatus) : undefined
                  )
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="">All</option>
                <option value={UnitStatus.Available}>Available</option>
                <option value={UnitStatus.Reserved}>Reserved</option>
                <option value={UnitStatus.Sold}>Sold</option>
              </select>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Bedrooms
              </label>
              <select
                value={filters.bedrooms || ''}
                onChange={(e) =>
                  updateFilter('bedrooms', e.target.value ? Number(e.target.value) : undefined)
                }
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4+</option>
              </select>
            </div>

          </div>

          {/* Move-in Ready Toggle */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="moveInReady"
              checked={filters.moveInReady || false}
              onChange={(e) => updateFilter('moveInReady', e.target.checked || undefined)}
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20"
            />
            <label htmlFor="moveInReady" className="ml-2 text-sm font-medium text-gray-700">
              Move-in Ready Only
            </label>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => setFilters({ status: UnitStatus.Available })}
            className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Clear all filters
          </button>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-gray-600">
          {isLoading ? (
            'Loading...'
          ) : (
            <>
              Found {units?.length || 0} unit{units?.length !== 1 ? 's' : ''}
            </>
          )}
        </div>

        {/* Results Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
            </div>
          ) : units && units.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {units.map((unit, index) => (
                <motion.div
                  key={unit.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
                >
                  {/* Unit Image */}
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={unit.plan2DUrl}
                      alt={`Unit ${unit.unitNumber}`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/400x300?text=Unit+${unit.unitNumber}`
                      }}
                    />
                    {/* Status Badge */}
                    <div
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${
                        unit.status === UnitStatus.Available
                          ? 'bg-green-500 text-white'
                          : unit.status === UnitStatus.Reserved
                          ? 'bg-yellow-500 text-white'
                          : 'bg-gray-500 text-white'
                      }`}
                    >
                      {unit.status}
                    </div>
                    {unit.moveInReady && (
                      <div className="absolute left-4 top-4 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                        Move-in Ready
                      </div>
                    )}
                  </div>

                  {/* Unit Details */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">
                        Unit {unit.unitNumber}
                      </h3>
                      <span className="text-sm text-gray-500">{unit.type}</span>
                    </div>


                    <div className="mb-4 grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{unit.bedrooms}</div>
                        <div className="text-gray-500">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{unit.bathrooms}</div>
                        <div className="text-gray-500">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">{unit.totalSqm}</div>
                        <div className="text-gray-500">m²</div>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Floor:</span>
                        <span className="font-medium text-gray-900">{unit.floor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Facing:</span>
                        <span className="font-medium text-gray-900">{unit.facing}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Terrace:</span>
                        <span className="font-medium text-gray-900">{unit.exteriorSqm}m²</span>
                      </div>
                    </div>

                    <button className="mt-6 w-full rounded-full bg-blue-600 py-3 font-semibold text-white transition-all hover:bg-blue-700">
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-64 flex-col items-center justify-center text-gray-500"
            >
              <svg
                className="mb-4 h-16 w-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <p className="text-lg font-medium">No units found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
