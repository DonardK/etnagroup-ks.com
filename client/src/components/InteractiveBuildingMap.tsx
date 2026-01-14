import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

interface BuildingArea {
  id: string
  projectId: string
  x: number // Percentage from left
  y: number // Percentage from top
  width: number // Percentage width
  height: number // Percentage height
  shape: 'rect' | 'circle'
}

// Define clickable areas for buildings in the image
const buildingAreas: BuildingArea[] = [
  {
    id: 'elsa',
    projectId: 'elsa',
    x: 20,
    y: 30,
    width: 15,
    height: 20,
    shape: 'rect',
  },
  {
    id: 'tara',
    projectId: 'tara',
    x: 40,
    y: 25,
    width: 18,
    height: 25,
    shape: 'rect',
  },
  {
    id: 'tiani',
    projectId: 'tiani',
    x: 65,
    y: 35,
    width: 15,
    height: 18,
    shape: 'rect',
  },
  {
    id: 'etna',
    projectId: 'etna',
    x: 50,
    y: 50,
    width: 20,
    height: 22,
    shape: 'rect',
  },
]

interface InteractiveBuildingMapProps {
  imageUrl: string
  className?: string
}

export const InteractiveBuildingMap = ({
  imageUrl,
  className = '',
}: InteractiveBuildingMapProps) => {
  const [hoveredBuilding, setHoveredBuilding] = useState<string | null>(null)

  return (
    <div className={`relative ${className}`}>
      {/* Base Image */}
      <img
        src={imageUrl}
        alt="Etna Group Buildings"
        className="w-full h-auto"
        onError={(e) => {
          e.currentTarget.src = '/buildings/etna-hero.jpg'
        }}
      />

      {/* Clickable Building Areas */}
      {buildingAreas.map((area) => {
        const project = projects.find((p) => p.id === area.projectId)
        if (!project) return null

        const isHovered = hoveredBuilding === area.id

        return (
          <Link
            key={area.id}
            to={`/projektet/${area.projectId}`}
            onMouseEnter={() => setHoveredBuilding(area.id)}
            onMouseLeave={() => setHoveredBuilding(null)}
            className="absolute cursor-pointer transition-all duration-300"
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.width}%`,
              height: `${area.height}%`,
            }}
          >
            {/* Hover Overlay - Green tint */}
            <motion.div
              animate={{
                backgroundColor: isHovered
                  ? 'rgba(34, 197, 94, 0.4)'
                  : 'rgba(0, 0, 0, 0)',
                borderColor: isHovered
                  ? 'rgba(34, 197, 94, 0.8)'
                  : 'rgba(0, 0, 0, 0)',
              }}
              transition={{ duration: 0.3 }}
              className={`h-full w-full rounded-lg border-2 ${
                area.shape === 'circle' ? 'rounded-full' : ''
              }`}
            />

            {/* Building Label on Hover */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#657432] px-4 py-2 text-sm font-semibold text-[#F8F2DD] shadow-xl"
              >
                {project.name}
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#657432]" />
              </motion.div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
