import { useEffect, useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'

interface ReportIssueDialogProps {
  open: boolean
  onClose: () => void
}

export const ReportIssueDialog = ({ open, onClose }: ReportIssueDialogProps) => {
  const { t } = useLanguage()
  const [description, setDescription] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (!open) {
      setStatus('idle')
      setDescription('')
      setEmail('')
    }
  }, [open])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setStatus('idle')

    try {
      const res = await fetch('/api/report', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          description: description.trim(),
          pageUrl: window.location.href,
          email: email.trim() || undefined,
        }),
      })
      if (!res.ok) throw new Error('failed')
      setStatus('success')
      setTimeout(() => onClose(), 2000)
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-[#657432]/20 bg-[#F8F2DD] p-6 shadow-2xl"
            role="dialog"
            aria-labelledby="report-title"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h2 id="report-title" className="text-xl font-bold text-[#657432]">
                {t.report.title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full p-1 text-[#657432]/60 hover:bg-[#657432]/10 hover:text-[#657432]"
                aria-label={t.report.close}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm text-[#657432]/70">{t.report.subtitle}</p>

            <form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
              <div>
                <label htmlFor="report-desc" className="mb-1 block text-sm font-semibold text-[#657432]">
                  {t.report.descriptionLabel}
                </label>
                <textarea
                  id="report-desc"
                  required
                  minLength={10}
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={t.report.descriptionPlaceholder}
                  className="w-full rounded-xl border border-[#657432]/25 bg-white px-3 py-2 text-sm text-[#3a3a2e] outline-none focus:border-[#657432]"
                />
              </div>
              <div>
                <label htmlFor="report-email" className="mb-1 block text-sm font-semibold text-[#657432]">
                  {t.report.emailLabel}
                </label>
                <input
                  id="report-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.report.emailPlaceholder}
                  className="w-full rounded-xl border border-[#657432]/25 bg-white px-3 py-2 text-sm outline-none focus:border-[#657432]"
                />
              </div>

              {status === 'success' && (
                <p className="rounded-lg bg-green-100 px-3 py-2 text-sm text-green-800">{t.report.success}</p>
              )}
              {status === 'error' && (
                <p className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-800">{t.report.error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#657432] py-3 text-sm font-semibold text-[#F8F2DD] transition-opacity disabled:opacity-50"
              >
                {loading ? t.report.sending : t.report.submit}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
