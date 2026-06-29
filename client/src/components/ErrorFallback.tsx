import { useLanguage } from '../i18n/LanguageContext'

interface ErrorFallbackProps {
  error?: Error
  onRetry: () => void
}

export const ErrorFallback = ({ error, onRetry }: ErrorFallbackProps) => {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F2DD]">
      <div className="max-w-md rounded-2xl bg-[#F8F2DD] p-8 text-center shadow-xl border border-[#657432]/20">
        <div className="mb-4 text-6xl">⚠️</div>
        <h2 className="mb-2 text-2xl font-bold text-[#657432]">{t.error.title}</h2>
        <p className="mb-6 text-[#657432]/80">{t.error.message}</p>
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full bg-[#657432] px-6 py-3 font-semibold text-[#F8F2DD] transition-all hover:bg-[#657432]/80"
        >
          {t.error.refresh}
        </button>
        {import.meta.env.DEV && error && (
          <div className="mt-6 rounded-lg bg-red-50 p-4 text-left">
            <p className="text-sm font-mono text-red-900">{error.toString()}</p>
          </div>
        )}
      </div>
    </div>
  )
}
