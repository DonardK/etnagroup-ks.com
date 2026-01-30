import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById } from '../data/projects'
import { getResidenceHeroImage } from '../data/residenceVisuals'

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : null

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

  // Hero image for the top section (paths with spaces encoded so they load)
  const heroImage = project.heroImage || getResidenceHeroImage(project.id) || ''

  return (
    <div className="min-h-screen bg-[#F8F2DD]">
      {/* Hero Section - background image */}
      <section className="relative h-[60vh] overflow-hidden">
        {heroImage && (
          <img
            src={encodeURI(heroImage)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F2DD]/80 to-[#F8F2DD]" />
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

      {/* Apartment Selection Section - Under Construction */}
      <section className="bg-gradient-to-b from-[#F8F2DD] to-[#F8F2DD] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-[#657432]/10 p-8">
                <svg
                  className="h-24 w-24 text-[#657432]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-[#657432] md:text-5xl">
              Në Ndërtim
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#657432]/70 mb-8">
              Seksioni për zgjedhjen e banesave është në zhvillim dhe do të jetë i disponueshëm së shpejti.
            </p>
            <p className="text-[#657432]/80">
              Për informacion më të detajuar, ju lutem{' '}
              <Link
                to="/kontakt"
                className="font-semibold text-[#657432] underline hover:text-[#657432]/80"
              >
                na kontaktoni
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
