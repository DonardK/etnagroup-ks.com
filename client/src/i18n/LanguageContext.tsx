import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { translations, type Locale, type TranslationTree } from './translations'

const STORAGE_KEY = 'etna-locale'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: TranslationTree
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const readStoredLocale = (): Locale => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'sq') return stored
  } catch {
    /* private browsing */
  }
  return 'sq'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'sq' ? 'sq' : 'en'
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
