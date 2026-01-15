import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface Apartment {
  id: string
  unitNumber: string
  area: number // square meters
  bedrooms?: number
  bathrooms?: number
  floor: number
  status: 'available' | 'reserved' | 'sold'
  pdfUrl?: string
  // Coordinates for clickable area (percentage-based)
  clickableArea: {
    x: number
    y: number
    width: number
    height: number
  }
}

interface FloorPlanViewerProps {
  floorPlanImage: string
  apartments: Apartment[]
  floorLabel: string
  buildingName: string
}

export const FloorPlanViewer = ({
  floorPlanImage,
  apartments,
  floorLabel,
  buildingName,
}: FloorPlanViewerProps) => {
  const [hoveredApartment, setHoveredApartment] = useState<Apartment | null>(null)
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null)

  const statusLabels = {
    available: 'E Lirë',
    reserved: 'E Rezervuar',
    sold: 'E Shitur',
  }

  const statusColors = {
    available: '#657432',
    reserved: '#F8F2DD',
    sold: '#999',
  }

  return (
    <div className="w-full">
      <div className="mb-6 text-center">
        <h3 className="mb-2 text-3xl font-bold text-[#657432]">
          Planimetria e {floorLabel}
        </h3>
        <p className="text-[#657432]/70">
          {buildingName} - Klikoni mbi njësinë për më shumë informacion
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Floor plan image with clickable areas */}
        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-[#657432]/10">
          <img
            src={floorPlanImage}
            alt={`Planimetria ${floorLabel}`}
            className="h-full w-full object-contain"
            onError={(e) => {
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
              <div className="mb-4 text-6xl">📐</div>
              <div className="text-xl font-semibold">Planimetria e Katit</div>
              <div className="mt-2 text-sm">Imazhi do të shtohet së shpejti</div>
            </div>
          </div>

          {/* Clickable apartment areas */}
          {apartments.map((apartment) => {
            const { x, y, width, height } = apartment.clickableArea
            const isHovered = hoveredApartment?.id === apartment.id
            const isSelected = selectedApartment?.id === apartment.id

            return (
              <motion.div
                key={apartment.id}
                className="absolute cursor-pointer rounded transition-all"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${width}%`,
                  height: `${height}%`,
                  border: `2px solid ${isHovered || isSelected ? statusColors[apartment.status] : 'transparent'}`,
                  backgroundColor: isHovered || isSelected
                    ? `${statusColors[apartment.status]}40`
                    : 'transparent',
                }}
                onMouseEnter={() => setHoveredApartment(apartment)}
                onMouseLeave={() => setHoveredApartment(null)}
                onClick={() => setSelectedApartment(apartment)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: isHovered || isSelected
                    ? `0 0 20px ${statusColors[apartment.status]}80`
                    : '0 0 0px transparent',
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Apartment number label */}
                {(isHovered || isSelected) && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#657432] px-3 py-1 text-xs font-semibold text-[#F8F2DD] shadow-lg"
                  >
                    {apartment.unitNumber}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Apartment info popup */}
        <AnimatePresence>
          {hoveredApartment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute right-0 top-0 z-10 w-80 rounded-2xl bg-[#F8F2DD] border-2 border-[#657432]/20 p-6 shadow-2xl"
            >
              <div className="mb-4">
                <h4 className="mb-2 text-2xl font-bold text-[#657432]">
                  Njësia {hoveredApartment.unitNumber}
                </h4>
                <div
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                    hoveredApartment.status === 'available'
                      ? 'bg-[#657432] text-[#F8F2DD]'
                      : hoveredApartment.status === 'reserved'
                      ? 'bg-[#657432]/60 text-[#F8F2DD]'
                      : 'bg-gray-400 text-white'
                  }`}
                >
                  {statusLabels[hoveredApartment.status]}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#657432]/70">Sipërfaqja:</span>
                  <span className="font-semibold text-[#657432]">
                    {hoveredApartment.area} m²
                  </span>
                </div>
                {hoveredApartment.bedrooms && (
                  <div className="flex justify-between">
                    <span className="text-[#657432]/70">Dhoma Gjumi:</span>
                    <span className="font-semibold text-[#657432]">
                      {hoveredApartment.bedrooms}
                    </span>
                  </div>
                )}
                {hoveredApartment.bathrooms && (
                  <div className="flex justify-between">
                    <span className="text-[#657432]/70">Banjo:</span>
                    <span className="font-semibold text-[#657432]">
                      {hoveredApartment.bathrooms}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#657432]/70">Kati:</span>
                  <span className="font-semibold text-[#657432]">
                    {hoveredApartment.floor}
                  </span>
                </div>
              </div>

              {hoveredApartment.pdfUrl && (
                <motion.a
                  href={hoveredApartment.pdfUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#657432] px-4 py-3 font-semibold text-[#F8F2DD] transition-all hover:shadow-lg"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Shkarko PDF
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
