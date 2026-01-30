import { motion } from 'framer-motion'

export interface Floor {
  id: string
  number: number
  label: string
  image: string
  availableUnits?: number
}

interface FloorSelectorProps {
  floors: Floor[]
  selectedFloor: string | null
  onFloorSelect: (floorId: string) => void
  buildingName: string
}

export const FloorSelector = ({
  floors,
  selectedFloor,
  onFloorSelect,
  buildingName,
}: FloorSelectorProps) => {
  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-3xl font-bold text-[#657432]">
          Zgjidhni Katin
        </h3>
        <p className="text-[#657432]/70">
          {buildingName} - Zgjidhni katin për të parë planimetrinë
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {floors.map((floor) => {
          const isSelected = selectedFloor === floor.id

          return (
            <motion.button
              key={floor.id}
              onClick={() => onFloorSelect(floor.id)}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all ${
                isSelected
                  ? 'border-[#657432] bg-[#657432]/10 shadow-2xl'
                  : 'border-[#657432]/20 bg-[#657432]/5 hover:border-[#657432]/40'
              }`}
            >
              {/* Floor image */}
              <div className="aspect-video overflow-hidden bg-[#657432]/10">
                <img
                  src={floor.image}
                  alt={`Kati ${floor.label}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Floor info */}
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-2xl font-bold text-[#657432]">{floor.label}</h4>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="h-6 w-6 rounded-full bg-[#657432] flex items-center justify-center"
                    >
                      <svg
                        className="h-4 w-4 text-[#F8F2DD]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>
                  )}
                </div>
                {floor.availableUnits !== undefined && (
                  <p className="text-sm text-[#657432]/70">
                    {floor.availableUnits} njësi të disponueshme
                  </p>
                )}
              </div>

              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 border-4 border-[#657432] rounded-2xl pointer-events-none"
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
