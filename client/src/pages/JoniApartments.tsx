import { Link } from 'react-router-dom'

/** Placeholder until apartment PDFs are added. */
export const JoniApartments = () => (
  <div className="min-h-[70vh] bg-[#F8F2DD]">
    <div className="mx-auto max-w-7xl px-4 py-16">
      <Link
        to="/projektet/joni"
        className="inline-flex items-center gap-2 text-[#657432]/70 transition-colors hover:text-[#657432]"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Kthehu te Joni Residence
      </Link>
    </div>
  </div>
)
