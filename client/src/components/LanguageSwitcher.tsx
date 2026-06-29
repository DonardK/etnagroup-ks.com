import { LOCALES, LOCALE_ARIA_LABELS } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'

interface LanguageSwitcherProps {
  className?: string
  compact?: boolean
}

export const LanguageSwitcher = ({ className = '', compact = false }: LanguageSwitcherProps) => {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={`inline-flex rounded-full border border-[#657432]/25 bg-[#F8F2DD]/80 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map(({ code, label }) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
              active
                ? 'bg-[#657432] text-[#F8F2DD] shadow-sm'
                : 'text-[#657432]/70 hover:text-[#657432]'
            } ${compact ? 'px-2 py-0.5 text-[10px]' : ''}`}
            aria-pressed={active}
            aria-label={LOCALE_ARIA_LABELS[code]}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
