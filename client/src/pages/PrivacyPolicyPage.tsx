import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

export const PrivacyPolicyPage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F2DD]">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 text-4xl font-bold text-[#657432] md:text-5xl">
            {t.privacy.title}
          </h1>
          <p className="mb-10 text-sm text-[#657432]/60">{t.privacy.lastUpdated}</p>

          <div className="space-y-8">
            {t.privacy.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="mb-3 text-xl font-semibold text-[#657432]">
                  {section.heading}
                </h2>
                <p className="whitespace-pre-line leading-relaxed text-[#657432]/80">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
