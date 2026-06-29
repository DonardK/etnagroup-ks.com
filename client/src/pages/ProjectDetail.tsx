import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProjectById, getLocalizedProject } from '../data/projects'
import { getResidenceHeroImage } from '../data/residenceVisuals'
import { assetUrl } from '../utils/assetUrl'
import { useLanguage } from '../i18n/LanguageContext'
import { buildingCountLabel } from '../i18n/labels'
import { ElsaResidenceBuildingMap } from '../components/ElsaResidenceBuildingMap'
import { TianiResidenceBuildingMap } from '../components/TianiResidenceBuildingMap'
import { TaraResidenceBuildingMap } from '../components/TaraResidenceBuildingMap'
import { JoniResidenceBuildingMap } from '../components/JoniResidenceBuildingMap'

export const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { locale, t } = useLanguage()
  const project = id ? getProjectById(id) : null

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F2DD] text-[#657432]">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">{t.project.notFound}</h2>
          <Link to="/" className="text-[#657432] hover:underline">
            {t.project.backToHome}
          </Link>
        </div>
      </div>
    )
  }

  const p = getLocalizedProject(project, locale)
  const heroImage = project.heroImage || getResidenceHeroImage(project.id) || ''

  const statusLabel =
    project.status === 'planning'
      ? t.project.statusInPlanning
      : t.status[project.status]

  const mapTitle =
    project.id === 'joni'
      ? t.project.mapSelectFloor
      : project.id === 'tara'
        ? t.project.mapSelectApartment
        : t.project.mapSelectBlock

  const mapHint =
    project.id === 'joni'
      ? t.project.mapHintFloor
      : project.id === 'tara'
        ? t.project.mapHintApartment
        : t.project.mapHintBlock

  return (
    <div className="min-h-screen bg-[#F8F2DD]">
      <section className="relative h-[60vh] overflow-hidden">
        {heroImage && (
          <img
            src={encodeURI(assetUrl(heroImage))}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-hidden
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F2DD]/80 to-[#F8F2DD]" />
        <div className="relative z-10 flex h-full items-end">
          <div className="mx-auto w-full max-w-7xl px-4 pb-12">
            <h1 className="mb-4 text-5xl font-bold text-[#657432] md:text-6xl">{project.name}</h1>
            <p className="max-w-3xl text-xl text-[#657432]/90">{p.description}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#657432]/20 bg-[#F8F2DD] py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">{t.project.location}</div>
              <div className="text-xl font-semibold text-[#657432]">{project.location}</div>
            </div>
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">{t.project.status}</div>
              <div className="text-xl font-semibold text-[#657432]">{statusLabel}</div>
            </div>
            <div className="rounded-2xl bg-[#657432]/10 p-6 backdrop-blur-sm">
              <div className="mb-2 text-sm text-[#657432]/60">{t.project.buildings}</div>
              <div className="text-xl font-semibold text-[#657432]">
                {buildingCountLabel(project.buildingCount, t)}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-2xl font-bold text-[#657432]">{t.project.features}</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {p.features.map((feature, index) => (
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

      {['elsa', 'tiani', 'tara', 'joni'].includes(project.id) && (
        <section className="bg-[#F8F2DD] py-20">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-2 text-center text-3xl font-bold text-[#657432] md:text-4xl">
                {mapTitle}
              </h2>
              <p className="mb-10 text-center text-[#657432]/70">{mapHint}</p>
              {project.id === 'elsa' && <ElsaResidenceBuildingMap />}
              {project.id === 'tiani' && <TianiResidenceBuildingMap />}
              {project.id === 'tara' && <TaraResidenceBuildingMap />}
              {project.id === 'joni' && <JoniResidenceBuildingMap />}
            </motion.div>
          </div>
        </section>
      )}

      <section className="hidden bg-gradient-to-b from-[#F8F2DD] to-[#F8F2DD] py-20">
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
              {t.project.sectionUnderConstruction}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#657432]/70 mb-8">
              {t.project.sectionUnderConstructionBody}
            </p>
            <p className="text-[#657432]/80">
              {t.project.moreInfoPrefix}{' '}
              <Link
                to="/kontakt"
                className="font-semibold text-[#657432] underline hover:text-[#657432]/80"
              >
                {t.project.contactUsLink}
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
