import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getProjectById } from '../data/projects'
import { InteractiveBuildingSelector } from '../components/InteractiveBuildingSelector'
import type { Building } from '../components/InteractiveBuildingSelector'
import { FloorSelector } from '../components/FloorSelector'
import type { Floor } from '../components/FloorSelector'
import { FloorPlanViewer } from '../components/FloorPlanViewer'
import type { Apartment } from '../components/FloorPlanViewer'

type ViewState = 'building' | 'floor' | 'plan'

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : null
  const [viewState, setViewState] = useState<ViewState>('building')
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null)
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null)

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F2DD] text-[#657432]">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">Projekti nuk u gjet</h2>
          <Link to="/" className="text-[#657432] hover:underline">
            Kthehu në Ballinë
          </Link>
        </div>
      </div>
    )
  }

  // Generate buildings based on project
  const generateBuildings = (): Building[] => {
    if (project.buildingCount === 1) return []
    
    const buildings: Building[] = []
    
    // Elsa Residence: 6 buildings (A, B, C, D, E, F)
    // TODO: Update coordinates based on actual SVG building outlines
    // Coordinates are percentages: x = left %, y = top %, width = width %, height = height %
    if (project.id === 'elsa') {
      buildings.push(
        {
          id: 'building-a',
          name: 'Blloku A',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Elsa Residence Blloku A')}.svg`,
          clickableArea: { x: 10, y: 60, width: 18, height: 30 }, // TODO: Update with actual coordinates
        },
        {
          id: 'building-b',
          name: 'Blloku B',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Elsa Residence Blloku BCD')}.svg`,
          clickableArea: { x: 28, y: 55, width: 15, height: 35 }, // TODO: Update with actual coordinates
        },
        {
          id: 'building-c',
          name: 'Blloku C',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Elsa Residence Blloku BCD')}.svg`,
          clickableArea: { x: 43, y: 55, width: 15, height: 35 }, // TODO: Update with actual coordinates
        },
        {
          id: 'building-d',
          name: 'Blloku D',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Elsa Residence Blloku BCD')}.svg`,
          clickableArea: { x: 58, y: 55, width: 15, height: 35 }, // TODO: Update with actual coordinates
        },
        {
          id: 'building-e',
          name: 'Blloku E',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Elsa Residence Blloku EF')}.svg`,
          clickableArea: { x: 40, y: 15, width: 18, height: 30 }, // TODO: Update with actual coordinates
        },
        {
          id: 'building-f',
          name: 'Blloku F',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Elsa Residence Blloku EF')}.svg`,
          clickableArea: { x: 58, y: 10, width: 18, height: 40 }, // TODO: Update with actual coordinates
        }
      )
    }
    // Tiani Residence: 2 buildings (A left, B right)
    // TODO: Update coordinates based on actual SVG building outlines
    else if (project.id === 'tiani') {
      buildings.push(
        {
          id: 'building-a',
          name: 'Blloku A',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Tiani Residence')}.svg`,
          clickableArea: { x: 5, y: 20, width: 45, height: 60 }, // TODO: Update with actual coordinates
        },
        {
          id: 'building-b',
          name: 'Blloku B',
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent('Tiani Residence')}.svg`,
          clickableArea: { x: 50, y: 20, width: 45, height: 60 }, // TODO: Update with actual coordinates
        }
      )
    }
    // Other projects with multiple buildings
    else {
      for (let i = 1; i <= project.buildingCount; i++) {
        buildings.push({
          id: `building-${i}`,
          name: `Ndërtesa ${i}`,
          image: `${import.meta.env.BASE_URL}SVG Residences/${encodeURIComponent(project.name)}.svg`,
          clickableArea: {
            x: (i - 1) * (100 / project.buildingCount) + 5,
            y: 20,
            width: 90 / project.buildingCount,
            height: 60,
          },
        })
      }
    }
    
    return buildings
  }

  // Generate floors for selected building
  const generateFloors = (buildingId: string): Floor[] => {
    // Placeholder floors - will be updated with actual data
    const floors: Floor[] = []
    const floorCount = 8 // Default floor count
    
    // Add regular floors
    for (let i = 1; i <= floorCount; i++) {
      floors.push({
        id: `${buildingId}-floor-${i}`,
        number: i,
        label: i === floorCount ? 'Penthouse' : `Kati ${i}`,
        image: `/buildings/${project.id}-${buildingId}-floor-${i}.jpg`,
        availableUnits: Math.floor(Math.random() * 5), // Placeholder
      })
    }
    
    // Add Lokali (commercial spaces) for every building
    floors.push({
      id: `${buildingId}-lokali`,
      number: 0,
      label: 'Lokali',
      image: `/buildings/${project.id}-${buildingId}-lokali.jpg`,
      availableUnits: undefined,
    })
    
    return floors.reverse() // Show penthouse first, then regular floors, then Lokali
  }

  // Generate apartments for selected floor
  const generateApartments = (floorId: string): Apartment[] => {
    // Placeholder apartments - will be updated with actual data
    const apartments: Apartment[] = []
    const apartmentCount = 6 // Default apartments per floor
    
    for (let i = 1; i <= apartmentCount; i++) {
      apartments.push({
        id: `${floorId}-apt-${i}`,
        unitNumber: `A${i}`,
        area: 80 + Math.random() * 40, // 80-120 m²
        bedrooms: Math.floor(Math.random() * 3) + 1, // 1-3 bedrooms
        bathrooms: Math.floor(Math.random() * 2) + 1, // 1-2 bathrooms
        floor: parseInt(floorId.split('-')[2]) || 1,
        status: Math.random() > 0.5 ? 'available' : 'reserved',
        pdfUrl: `/pdfs/${project.id}-${floorId}-apt-${i}.pdf`,
        clickableArea: {
          // Placeholder coordinates - will be updated with actual floor plan coordinates
          x: ((i - 1) % 3) * 33 + 5,
          y: Math.floor((i - 1) / 3) * 50 + 10,
          width: 25,
          height: 40,
        },
      })
    }
    
    return apartments
  }

  const handleBuildingSelect = (buildingId: string) => {
    setSelectedBuilding(buildingId)
    setViewState('floor')
    setSelectedFloor(null)
  }

  const handleFloorSelect = (floorId: string) => {
    setSelectedFloor(floorId)
    setViewState('plan')
  }

  const handleBack = () => {
    if (viewState === 'plan') {
      setViewState('floor')
      setSelectedFloor(null)
    } else if (viewState === 'floor') {
      if (project.buildingCount > 1) {
        setViewState('building')
        setSelectedBuilding(null)
      } else {
        // Single building, can't go back further
        setViewState('floor')
      }
    }
  }

  const buildings = generateBuildings()
  const floors = selectedBuilding ? generateFloors(selectedBuilding) : []
  const apartments = selectedFloor ? generateApartments(selectedFloor) : []
  const selectedFloorData = floors.find((f) => f.id === selectedFloor)
  const selectedBuildingData = buildings.find((b) => b.id === selectedBuilding)

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
                  : 'Në Planifikim'}
              </div>
            </div>
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">Njësi të Disponueshme</div>
              <div className="text-xl font-semibold text-[#657432]">
                {project.availableUnits > 0
                  ? `${project.availableUnits} / ${project.totalUnits}`
                  : project.status === 'under-construction'
                  ? 'Në Ndërtim'
                  : project.status === 'planning'
                  ? 'Në Planifikim'
                  : 'Të Shitura'}
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

      {/* Interactive Plans Section */}
      {project.hasInteractivePlans ? (
        <section className="bg-gradient-to-b from-[#F8F2DD] to-[#F8F2DD] py-20">
          <div className="mx-auto max-w-7xl px-4">
            {/* Navigation breadcrumb */}
            {(viewState === 'floor' || viewState === 'plan') && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-4"
              >
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 rounded-lg bg-[#657432]/10 px-4 py-2 text-[#657432] transition-all hover:bg-[#657432]/20"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Kthehu
                </button>
                <div className="text-[#657432]/70">
                  {viewState === 'floor' && project.buildingCount > 1 && selectedBuildingData && (
                    <span>{selectedBuildingData.name}</span>
                  )}
                  {viewState === 'plan' && selectedFloorData && (
                    <span>
                      {selectedBuildingData ? `${selectedBuildingData.name} - ` : ''}
                      {selectedFloorData.label}
                    </span>
                  )}
                </div>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {viewState === 'building' && project.buildingCount > 1 && (
                <motion.div
                  key="building-selector"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <InteractiveBuildingSelector
                    buildings={buildings}
                    onBuildingSelect={handleBuildingSelect}
                    projectName={project.name}
                    projectId={project.id}
                  />
                </motion.div>
              )}

              {viewState === 'floor' && (
                <motion.div
                  key="floor-selector"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <FloorSelector
                    floors={floors.length > 0 ? floors : generateFloors('main')}
                    selectedFloor={selectedFloor}
                    onFloorSelect={handleFloorSelect}
                    buildingName={
                      selectedBuildingData
                        ? selectedBuildingData.name
                        : project.buildingCount === 1
                        ? project.name
                        : 'Ndërtesa Kryesore'
                    }
                  />
                </motion.div>
              )}

              {viewState === 'plan' && selectedFloor && (
                <motion.div
                  key="floor-plan"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <FloorPlanViewer
                    floorPlanImage={`/buildings/${project.id}-${selectedFloor}-plan.jpg`}
                    apartments={apartments}
                    floorLabel={selectedFloorData?.label || 'Kati'}
                    buildingName={
                      selectedBuildingData
                        ? selectedBuildingData.name
                        : project.buildingCount === 1
                        ? project.name
                        : 'Ndërtesa Kryesore'
                    }
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Initialize floor selector for single building projects */}
            {project.buildingCount === 1 && viewState === 'building' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onAnimationComplete={() => setViewState('floor')}
              >
                <FloorSelector
                  floors={generateFloors('main')}
                  selectedFloor={selectedFloor}
                  onFloorSelect={handleFloorSelect}
                  buildingName={project.name}
                />
              </motion.div>
            )}
          </div>
        </section>
      ) : (
        // For Etna Residence (all sold) or projects without interactive plans
        <section className="bg-gradient-to-b from-[#F8F2DD] to-[#F8F2DD] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#657432] md:text-5xl">
              {project.status === 'completed' && project.availableUnits === 0
                ? 'Të Gjitha Njësitë Janë Shitur'
                : 'Planimetria Së Shpejti'}
            </h2>
            <p className="text-lg text-[#657432]/70">
              {project.status === 'completed' && project.availableUnits === 0
                ? 'Etna Residence është i përfunduar dhe të gjitha njësitë janë shitur. Faleminderit për interesin tuaj!'
                : 'Planimetria interaktive do të jetë e disponueshme së shpejti.'}
            </p>
          </div>
        </section>
      )}
    </div>
  )
}
