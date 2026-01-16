import { useState } from 'react'
import { motion } from 'framer-motion'

export interface Building {
  id: string
  name: string
  image: string
  // Coordinates for clickable area (percentage-based)
  clickableArea?: {
    x: number // percentage from left
    y: number // percentage from top
    width: number // percentage width
    height: number // percentage height
  }
}

interface InteractiveBuildingSelectorProps {
  buildings: Building[]
  onBuildingSelect: (buildingId: string) => void
  projectName: string
  projectId: string
}

export const InteractiveBuildingSelector = ({
  buildings,
  onBuildingSelect,
  projectName,
  projectId,
}: InteractiveBuildingSelectorProps) => {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null)

  return (
    <div className="relative w-full">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-3xl font-bold text-[#657432]">
          Zgjidhni Ndërtesën
        </h3>
        <p className="text-[#657432]/70">
          Klikoni mbi ndërtesën për të parë planimetritë
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* SVG Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-[#657432]/10">
          <img
            src={`${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent(projectName)}.svg`}
            alt={`${projectName} Buildings`}
            data-project-id={projectId}
            className="h-full w-full object-contain"
            onError={(e) => {
              console.error('SVG failed to load:', e.currentTarget.src)
              // Fallback to placeholder
              e.currentTarget.style.display = 'none'
              const placeholder = e.currentTarget.nextElementSibling as HTMLElement
              if (placeholder) placeholder.style.display = 'flex'
            }}
          />
          {/* Placeholder fallback */}
          <div
            className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-[#657432]/20 to-[#657432]/10 text-[#657432]/50"
            style={{ display: 'none' }}
          >
            <div className="text-center">
              <div className="mb-4 text-6xl">🏢</div>
              <div className="text-xl font-semibold">Planimetria e Ndërtesave</div>
              <div className="mt-2 text-sm">Imazhi do të shtohet së shpejti</div>
            </div>
          </div>

          {/* Clickable building areas */}
          {buildings.map((building) => {
            if (!building.clickableArea) return null

            const { x, y, width, height } = building.clickableArea
            const isHovered = hoveredBuilding === building.id

            return (
              <motion.div
                key={building.id}
                className="absolute cursor-pointer rounded-lg border-2 transition-all"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                  borderColor: isHovered ? '#657432' : 'transparent',
                  backgroundColor: isHovered ? 'rgba(101, 116, 50, 0.2)' : 'transparent',
                }}
                onMouseEnter={() => setHoveredBuilding(building.id)}
                onMouseLeave={() => setHoveredBuilding(null)}
                onClick={() => onBuildingSelect(building.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  borderWidth: isHovered ? 3 : 0,
                  boxShadow: isHovered
                    ? '0 0 20px rgba(101, 116, 50, 0.5)'
                    : '0 0 0px rgba(101, 116, 50, 0)',
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Building label on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#657432] px-4 py-2 text-sm font-semibold text-[#F8F2DD] shadow-lg"
                  >
                    {building.name}
                    <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#657432]" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Building list (alternative selection method) */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {buildings.map((building) => (
            <motion.button
              key={building.id}
              onClick={() => onBuildingSelect(building.id)}
              onMouseEnter={() => setHoveredBuilding(building.id)}
              onMouseLeave={() => setHoveredBuilding(null)}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-2xl border-2 p-6 text-left transition-all ${
                hoveredBuilding === building.id
                  ? 'border-[#657432] bg-[#657432]/10 shadow-lg'
                  : 'border-[#657432]/20 bg-[#657432]/5 hover:border-[#657432]/40'
              }`}
            >
              <div className="mb-3 aspect-video overflow-hidden rounded-xl bg-[#657432]/10 flex items-center justify-center">
                <img
                  src={building.image}
                  alt={building.name}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Hide image on error, show placeholder div instead
                    e.currentTarget.style.display = 'none'
                    const placeholder = document.createElement('div')
                    placeholder.className = 'text-center text-[#657432]/50'
                    placeholder.innerHTML = `<div class="text-4xl mb-2">🏢</div><div class="text-sm">${building.name}</div>`
                    e.currentTarget.parentElement?.appendChild(placeholder)
                  }}
                />
              </div>
              <h4 className="text-xl font-bold text-[#657432]">{building.name}</h4>
              <p className="mt-2 text-sm text-[#657432]/70">Klikoni për të parë planimetritë</p>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}
