import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects, getLocalizedProject } from '../data/projects'
import { assetUrl } from '../utils/assetUrl'
import { useLanguage } from '../i18n/LanguageContext'

export const AboutPage = () => {
  const { locale, t } = useLanguage()
  return (
    <div className="min-h-screen bg-[#F8F2DD] overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#F8F2DD] via-[#F8F2DD] to-[#F8F2DD] flex items-center justify-center overflow-hidden border-b border-[#657432]/20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl px-4 text-center"
        >
          <h1 className="mb-6 text-6xl font-bold text-[#657432] md:text-7xl">
            {t.about.title}
          </h1>
          <p className="mb-8 text-xl text-[#657432]/90 md:text-2xl">
            {t.about.hero}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[#657432]/80">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#657432]">4</div>
              <div className="text-sm">{t.about.projects}</div>
            </div>
            <div className="h-12 w-px bg-[#657432]/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#657432]">450+</div>
              <div className="text-sm">{t.about.units}</div>
            </div>
            <div className="h-12 w-px bg-[#657432]/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#657432]">200+</div>
              <div className="text-sm">{t.about.residents}</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#657432]/60"
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

      {/* Projects Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0
              const p = getLocalizedProject(project, locale)

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  {/* Content Card */}
                  <div
                    className={`grid gap-8 md:grid-cols-2 items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                      {/* Image Section */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.1 }}
                        className={`${isEven ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}
                      >
                        <Link to={`/projektet/${project.id}`}>
                          <div className="group relative overflow-hidden rounded-2xl bg-[#F8F2DD] shadow-2xl border border-[#657432]/20">
                            <div className="aspect-[4/3] overflow-hidden bg-[#657432]/10">
                              <img
                                src={encodeURI(assetUrl(project.cardImage || project.heroImage))}
                                alt=""
                                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                              <div
                                className={`rounded-full px-4 py-2 text-xs font-semibold backdrop-blur-sm ${
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

                            {/* Project Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <h3 className="mb-1 text-2xl font-bold text-[#657432]">
                                {project.name}
                              </h3>
                              <p className="text-sm text-[#657432]/90">{project.location}</p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-[#657432]/0 transition-colors duration-300 group-hover:bg-[#657432]/10" />
                          </div>
                        </Link>
                      </motion.div>

                      {/* Text Section */}
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.2 }}
                        className={`space-y-6 ${isEven ? 'md:pl-8' : 'md:pr-8 md:order-1'}`}
                      >
                        {/* Year Badge */}
                        {project.completionDate && (
                          <div className="inline-block rounded-full bg-[#657432]/10 px-4 py-2 text-sm font-semibold text-[#657432]">
                            {project.completionDate}
                          </div>
                        )}

                        <h2 className="text-4xl md:text-5xl font-bold text-[#0B1C2C]">
                          {project.name}
                        </h2>

                        <p className="text-lg text-[#657432] leading-relaxed">
                          {p.description}
                        </p>

                        {/* Features List */}
                        <div className="grid grid-cols-2 gap-3">
                          {project.features.slice(0, 4).map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-[#657432]"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-[#657432]" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Divider */}
                        <div className="border-t border-[#657432]/20 pt-4" />

                        {/* CTA Button */}
                        <Link
                          to={`/projektet/${project.id}`}
                          className="inline-block rounded-full bg-[#657432] px-6 py-3 font-semibold text-[#F8F2DD] transition-all hover:scale-105 hover:shadow-lg"
                        >
                          Shiko Detajet →
                        </Link>
                  </motion.div>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Vision Section */}
      <section className="bg-gradient-to-br from-[#F8F2DD] to-[#F8F2DD] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-[#657432]"
          >
            <h2 className="mb-6 text-5xl font-bold">Vizioni Ynë</h2>
            <p className="mx-auto mb-12 max-w-3xl text-xl text-[#657432]/90 leading-relaxed">
              Etna Group synon të jetë lider në tregun e zhvillimit rezidencial në
              Kosovë, duke ofruar komplekse që kombinon arkitekturë moderne, teknologji
              të avancuar dhe jetesë premium. Ne besojmë në ndërtimin e komuniteteve që
              përmirësojnë jetën e banorëve tanë dhe kontribuojnë në zhvillimin e
              qëndrueshëm të qytetit.
            </p>

            {/* Values Grid */}
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-[#657432]/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 text-5xl">🏗️</div>
                <h3 className="mb-2 text-2xl font-bold">Cilësi Premium</h3>
                <p className="text-[#657432]/80">
                  Materiale dhe teknologji më të mira për rezultate të jashtëzakonshme
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl bg-[#657432]/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 text-5xl">🌱</div>
                <h3 className="mb-2 text-2xl font-bold">Qëndrueshmëri</h3>
                <p className="text-[#657432]/80">
                  Dizajn që respekton mjedisin dhe promovon jetesë të qëndrueshme
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl bg-[#657432]/10 p-8 backdrop-blur-sm"
              >
                <div className="mb-4 text-5xl">🤝</div>
                <h3 className="mb-2 text-2xl font-bold">Komunitet</h3>
                <p className="text-[#657432]/80">
                  Krijimi i hapësirave që lidhin njerëzit dhe ndërtojnë komunitete të
                  forta
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
