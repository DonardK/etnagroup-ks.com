import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FILTER_CITIES,
  filterApartments,
  getBedroomCount,
  type SizeRangeId,
} from '../../data/apartmentCatalog'
import { useLanguage } from '../../i18n/LanguageContext'
import { openChat } from '../../utils/chat'

const PDF_BASE = import.meta.env.BASE_URL

const BEDROOM_OPTIONS = [1, 2, 3, 4] as const

const SIZE_OPTIONS: { id: SizeRangeId; labelSq: string; labelEn: string }[] = [
  { id: 'under60', labelSq: '< 60 m²', labelEn: '< 60 m²' },
  { id: '60-80', labelSq: '60–80 m²', labelEn: '60–80 m²' },
  { id: '80-100', labelSq: '80–100 m²', labelEn: '80–100 m²' },
  { id: '100-120', labelSq: '100–120 m²', labelEn: '100–120 m²' },
  { id: 'over120', labelSq: '> 120 m²', labelEn: '> 120 m²' },
]

const CITY_LABELS: Record<string, { sq: string; en: string }> = {
  Prishtinë: { sq: 'Prishtinë', en: 'Prishtina' },
  Prizren: { sq: 'Prizren', en: 'Prizren' },
  Malishevë: { sq: 'Malishevë', en: 'Malisheva' },
}

const toggle = <T,>(list: T[], item: T): T[] =>
  list.includes(item) ? list.filter((x) => x !== item) : [...list, item]

export const FlatSelector = () => {
  const { locale, t } = useLanguage()
  const [cities, setCities] = useState<string[]>([])
  const [bedrooms, setBedrooms] = useState<number[]>([])
  const [sizeRange, setSizeRange] = useState<SizeRangeId | null>(null)

  const results = useMemo(
    () =>
      filterApartments({ cities, bedrooms, sizeRange }).sort(
        (a, b) => a.area - b.area || a.project.localeCompare(b.project),
      ),
    [cities, bedrooms, sizeRange],
  )

  const hasFilters = cities.length > 0 || bedrooms.length > 0 || sizeRange !== null

  const chipClass = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition-all ${
      active
        ? 'border-[#657432] bg-[#657432] text-[#F8F2DD] shadow-md'
        : 'border-[#657432]/25 bg-white text-[#657432]/80 hover:border-[#657432]/50 hover:text-[#657432]'
    }`

  return (
    <section
      id="gjej-banesen"
      className="border-y border-[#657432]/15 bg-gradient-to-b from-[#F8F2DD] to-white py-20"
      aria-labelledby="flat-selector-heading"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2
            id="flat-selector-heading"
            className="mb-3 text-4xl font-bold text-[#657432] md:text-5xl"
          >
            {t.home.flatSelectorTitle}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#657432]/70">{t.home.flatSelectorSubtitle}</p>
        </motion.div>

        <div className="mb-8 space-y-6 rounded-3xl border border-[#657432]/20 bg-[#F8F2DD]/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#657432]/60">
              {t.home.filterCity}
            </h3>
            <div className="flex flex-wrap gap-2">
              {FILTER_CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setCities((c) => toggle(c, city))}
                  className={chipClass(cities.includes(city))}
                >
                  {locale === 'en' ? CITY_LABELS[city].en : CITY_LABELS[city].sq}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#657432]/60">
              {t.home.filterBedrooms}
            </h3>
            <div className="flex flex-wrap gap-2">
              {BEDROOM_OPTIONS.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setBedrooms((b) => toggle(b, n))}
                  className={chipClass(bedrooms.includes(n))}
                >
                  {t.home.bedroom(n)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#657432]/60">
              {t.home.filterSize}
            </h3>
            <div className="flex flex-wrap gap-2">
              {SIZE_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() =>
                    setSizeRange((prev) => (prev === opt.id ? null : opt.id))
                  }
                  className={chipClass(sizeRange === opt.id)}
                >
                  {locale === 'en' ? opt.labelEn : opt.labelSq}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-[#657432]">
            {t.home.filterResults}
            {hasFilters && (
              <span className="ml-2 text-base font-normal text-[#657432]/60">
                ({results.length})
              </span>
            )}
          </h3>
          <button
            type="button"
            onClick={openChat}
            className="inline-flex items-center gap-2 rounded-full border border-[#657432]/30 bg-white px-4 py-2 text-sm font-medium text-[#657432] transition-colors hover:bg-[#657432]/10"
          >
            <span aria-hidden="true">🤖</span>
            {t.home.orUseAi}
          </button>
        </div>

        {!hasFilters ? (
          <p className="rounded-2xl border border-dashed border-[#657432]/25 bg-white/50 px-6 py-10 text-center text-[#657432]/60">
            {locale === 'sq'
              ? 'Zgjidhni të paktën një filtër për të parë banesat e disponueshme.'
              : 'Select at least one filter to see available apartments.'}
          </p>
        ) : results.length === 0 ? (
          <p className="rounded-2xl border border-[#657432]/20 bg-white px-6 py-10 text-center text-[#657432]/70">
            {t.home.filterNoResults}
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((apt) => {
              const beds = getBedroomCount(apt.pdfPath)
              const spec = beds !== null ? `${beds}+` : null
              return (
                <motion.article
                  key={apt.pdfPath}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col rounded-2xl border border-[#657432]/15 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#657432]/50">
                    {apt.city}
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-[#657432]">{apt.project}</h4>
                  {apt.group && (
                    <p className="mb-2 text-sm text-[#657432]/60">{apt.group}</p>
                  )}
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-lg bg-[#657432]/10 px-2.5 py-1 text-sm font-semibold text-[#657432]">
                      {apt.area} m²
                    </span>
                    {spec && (
                      <span className="rounded-lg bg-[#657432]/10 px-2.5 py-1 text-sm text-[#657432]/80">
                        {spec}
                      </span>
                    )}
                  </div>
                  <a
                    href={encodeURI(`${PDF_BASE}${apt.pdfPath}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#657432] px-4 py-2.5 text-sm font-medium text-[#F8F2DD] transition-all hover:bg-[#657432]/90"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {t.home.viewPlan}
                  </a>
                </motion.article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
