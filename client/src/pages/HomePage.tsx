import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export const HomePage = () => {
  // Auto-slide functionality removed - using static video hero instead

  return (
    <div className="min-h-screen bg-[#F8F2DD]">
      {/* Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-[#F8F2DD]">
        {/* Video Container - fills entire width and height */}
        <div className="absolute inset-0 h-full w-full bg-[#F8F2DD] overflow-hidden">
          {/* Fallback image - behind video */}
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(/buildings/etna-hero.jpg)`,
            }}
          />
          {/* Video - using YouTube embed */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover object-center"
            style={{ 
              objectFit: 'cover', 
              objectPosition: 'center',
              minWidth: '100vw',
              minHeight: '100vh',
              width: '100vw',
              height: '100vh'
            }}
            poster="/buildings/etna-hero.jpg"
          >
            <source src="https://www.youtube.com/embed/T1IwAUDIvrs?autoplay=1&loop=1&playlist=T1IwAUDIvrs&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0" type="video/mp4" />
          </video>
          {/* YouTube iframe as fallback */}
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ 
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77777778vh', // Maintain aspect ratio when height is limiting
              border: 'none',
              pointerEvents: 'none'
            }}
            src="https://www.youtube.com/embed/T1IwAUDIvrs?autoplay=1&loop=1&playlist=T1IwAUDIvrs&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0"
            title="Etna Group Hero Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* Subtle Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8F2DD]/30 via-transparent to-[#F8F2DD]/50" />
        </div>

        {/* Company Name Overlay */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="mb-4 text-6xl font-bold text-[#F8F2DD] md:text-8xl drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(101, 116, 50, 0.3)' }}>
              ETNA GROUP
            </h1>
            <p className="text-2xl text-[#F8F2DD]/95 md:text-3xl drop-shadow-md" style={{ textShadow: '0 2px 8px rgba(101, 116, 50, 0.3)' }}>
              Ndërtojmë të Ardhmen
            </p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[#F8F2DD]/80"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Project Grid Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-5xl font-bold text-[#657432] md:text-6xl">
              Projektet Tona
            </h2>
            <p className="text-xl text-[#657432]/70">
              Portofolio i komplekseve rezidenciale premium
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-[#F8F2DD] border border-[#657432]/20"
              >
                <Link to={`/projektet/${project.id}`}>
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${project.heroImage})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-[#F8F2DD] via-transparent to-transparent" />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute right-4 top-4">
                      <div
                        className={`rounded-full px-4 py-2 text-xs font-semibold ${
                          project.status === 'completed'
                            ? 'bg-[#657432] text-[#F8F2DD]'
                            : project.status === 'under-construction'
                            ? 'bg-[#657432]/80 text-[#F8F2DD]'
                            : 'bg-[#657432]/60 text-[#F8F2DD]'
                        }`}
                      >
                        {project.status === 'completed'
                          ? 'I Përfunduar'
                          : project.status === 'under-construction'
                          ? 'Në Ndërtim'
                          : 'Së Shpejti'}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="mb-2 text-3xl font-bold text-[#657432]">{project.name}</h3>
                    <p className="mb-6 text-[#657432]/70">{project.description}</p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl bg-[#657432]/10 p-4 backdrop-blur-sm">
                        <div className="text-sm text-[#657432]/60">Lokacioni</div>
                        <div className="text-lg font-semibold text-[#657432]">
                          {project.location}
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#657432]/10 p-4 backdrop-blur-sm">
                        <div className="text-sm text-[#657432]/60">Njësi të Lira</div>
                        <div className="text-lg font-semibold text-[#657432]">
                          {project.availableUnits} / {project.totalUnits}
                        </div>
                      </div>
                    </div>


                    {/* Hover Arrow */}
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="mt-6 flex items-center gap-2 text-[#657432]"
                    >
                      <span className="font-semibold">Shiko Detajet</span>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
