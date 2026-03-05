import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export interface Apartment {
  name: string
  pdfPath: string
  area?: string
  note?: string
}

interface ApartmentListProps {
  title: string
  subtitle?: string
  backLink: string
  backLabel: string
  apartments: Apartment[]
}

export const ApartmentList = ({
  title,
  subtitle,
  backLink,
  backLabel,
  apartments,
}: ApartmentListProps) => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="min-h-screen bg-[#F8F2DD]">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <Link
          to={backLink}
          className="mb-8 inline-flex items-center gap-2 text-[#657432]/70 transition-colors hover:text-[#657432]"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {backLabel}
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 text-4xl font-bold text-[#657432] md:text-5xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <p className="mb-10 text-lg text-[#657432]/70">{subtitle}</p>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {apartments.map((apt, i) => (
            <motion.div
              key={apt.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="group flex flex-col justify-between rounded-2xl border border-[#657432]/15 bg-white/60 p-5 backdrop-blur-sm transition-shadow hover:shadow-lg"
            >
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#657432]/10 text-[#657432]">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#657432]">{apt.name}</h3>
                </div>
                {apt.area && (
                  <p className="ml-11 text-sm text-[#657432]/60">{apt.area}</p>
                )}
                {apt.note && (
                  <p className="ml-11 mt-1 text-xs text-[#657432]/50 italic">{apt.note}</p>
                )}
              </div>

              <a
                href={encodeURI(`${baseUrl}${apt.pdfPath}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#657432] px-4 py-2.5 text-sm font-semibold text-[#F8F2DD] transition-all hover:bg-[#657432]/85 active:scale-[0.97]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Shiko Planimetrinë
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
