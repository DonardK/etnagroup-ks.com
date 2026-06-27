import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  findApartmentsByArea,
  parseRequestedArea,
  type ApartmentMatchGroup,
} from '../../data/apartmentCatalog'
import { apartmentSpecs } from '../../data/apartmentSpecs'
import { OPEN_CHAT_EVENT } from '../../utils/chat'

const APARTMENT_CONTEXT_CAP = 3500

/** Build a compact, verified spec block for the matched apartments to send to the AI. */
const buildApartmentContext = (groups: ApartmentMatchGroup[]): string | undefined => {
  const lines: string[] = []
  for (const g of groups) {
    for (const apt of g.apartments) {
      const spec = apartmentSpecs[apt.pdfPath]
      const head = `${g.project} (${g.city})${apt.group ? `, ${apt.group}` : ''}, ${apt.area} m²`
      const type = spec?.type ? `, ${spec.type}` : ''
      if (spec && spec.rooms.length > 0) {
        const rooms = spec.rooms
          .map((r) => `${r.name} ${r.area} m²${r.floor ? ` (${r.floor})` : ''}`)
          .join('; ')
        lines.push(`- ${head}${type}: ${rooms}`)
      } else {
        lines.push(`- ${head}${type}`)
      }
    }
  }
  if (lines.length === 0) return undefined
  const ctx = lines.join('\n')
  return ctx.length > APARTMENT_CONTEXT_CAP ? ctx.slice(0, APARTMENT_CONTEXT_CAP) : ctx
}

interface ChatMessage {
  role: 'user' | 'assistant'
  text: string
  ts: number
  matches?: ApartmentMatchGroup[]
}

const PDF_BASE = import.meta.env.BASE_URL

const formatArea = (area: number): string => `${area} m²`

const ApartmentButtons = ({ groups }: { groups: ApartmentMatchGroup[] }) => (
  <div className="space-y-2 pl-1">
    {groups.map((g) => (
      <div
        key={g.projectId}
        className="rounded-xl border border-[#657432]/15 bg-white/70 p-3"
      >
        <div className="mb-2 text-xs font-semibold text-[#657432]">
          {g.project} · {g.city}
        </div>
        <div className="flex flex-wrap gap-2">
          {g.apartments.map((apt) => (
            <a
              key={apt.pdfPath}
              href={encodeURI(`${PDF_BASE}${apt.pdfPath}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#657432] px-3 py-1.5 text-xs font-medium text-[#F8F2DD] transition-all hover:bg-[#657432]/85 active:scale-[0.97]"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {formatArea(apt.area)}
              {apt.group ? ` · ${apt.group}` : ''}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
)

const GREETING: ChatMessage = {
  role: 'assistant',
  text: 'Përshëndetje! Unë jam Etna, asistentja juaj dixhitale e Etna Group. Si mund t’ju ndihmoj? (How can I help you today?)',
  ts: Date.now(),
}

const MAX_INPUT_LENGTH = 1000

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading, isOpen])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener(OPEN_CHAT_EVENT, open)
    return () => window.removeEventListener(OPEN_CHAT_EVENT, open)
  }, [])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const requestedArea = parseRequestedArea(text)
    const matches = requestedArea !== null ? findApartmentsByArea(requestedArea) : undefined
    const apartmentContext = matches ? buildApartmentContext(matches) : undefined
    const userMessage: ChatMessage = { role: 'user', text, ts: Date.now() }
    const nextMessages = [...messages, userMessage]
    setMessages(nextMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          messages: nextMessages.map((m) => ({ role: m.role, content: m.text })),
          apartmentContext,
        }),
      })

      const data = (await res.json().catch(() => null)) as
        | { reply?: string; error?: string }
        | null

      if (!res.ok || !data) {
        throw new Error(data?.error || 'Request failed')
      }

      const reply =
        data.reply?.trim() || 'Më vjen keq, ndodhi një gabim. Ju lutem provoni përsëri.'

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: reply, ts: Date.now(), matches },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text:
            'Më vjen keq, shërbimi nuk është i disponueshëm për momentin. Ju lutem provoni më vonë ose na kontaktoni në info@etnagroup-ks.com. / Sorry, the assistant is unavailable right now — please try again later or contact info@etnagroup-ks.com.',
          ts: Date.now(),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void sendMessage()
    }
  }

  return (
    <div
      style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}
      className="flex flex-col items-end"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-4 flex h-[70vh] max-h-[560px] w-[calc(100vw-3rem)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-[#657432]/20 bg-[#F8F2DD] shadow-2xl"
            role="dialog"
            aria-label="Etna Group chat assistant"
          >
            <div className="flex items-center justify-between bg-[#657432] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F2DD]/15 text-lg font-bold text-[#F8F2DD]">
                  E
                </div>
                <div>
                  <div className="font-semibold leading-tight text-[#F8F2DD]">Etna</div>
                  <div className="text-xs text-[#F8F2DD]/70">Asistente Dixhitale</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-[#F8F2DD]/80 transition-colors hover:bg-[#F8F2DD]/15 hover:text-[#F8F2DD]"
                aria-label="Close chat"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={`${m.ts}-${i}`} className="space-y-2">
                  <div
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
                        m.role === 'user'
                          ? 'rounded-br-sm bg-[#657432] text-[#F8F2DD]'
                          : 'rounded-bl-sm border border-[#657432]/15 bg-white text-[#3a3a2e]'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                  {m.matches && m.matches.length > 0 && (
                    <ApartmentButtons groups={m.matches} />
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-[#657432]/15 bg-white px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-2 w-2 rounded-full bg-[#657432]/60"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-[#657432]/15 bg-[#F8F2DD] p-3">
              <div className="flex items-end gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  maxLength={MAX_INPUT_LENGTH}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Shkruani mesazhin tuaj…"
                  className="flex-1 rounded-full border border-[#657432]/25 bg-white px-4 py-2.5 text-sm text-[#3a3a2e] outline-none transition-colors placeholder:text-[#657432]/40 focus:border-[#657432]"
                  aria-label="Type your message"
                />
                <button
                  onClick={() => void sendMessage()}
                  disabled={loading || !input.trim()}
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#657432] text-[#F8F2DD] transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Send message"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19V5M5 12l7-7 7 7"
                    />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-[#657432]/50">
                Etna mund të gabojë. Për çmime &amp; rezervime, na kontaktoni.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#657432] text-[#F8F2DD] shadow-lg transition-shadow hover:shadow-xl"
        aria-label={isOpen ? 'Close chat assistant' : 'Open AI chat assistant'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.span
              key="bubble"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative flex items-center justify-center"
            >
              <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C6.48 3 2 6.86 2 11.5c0 2.3 1.1 4.4 2.9 5.9-.13 1.05-.57 2.3-1.45 3.4-.21.27 0 .66.34.6 1.86-.25 3.52-.92 4.79-1.74.74.16 1.52.24 2.32.24 5.52 0 10-3.86 10-8.4S17.52 3 12 3z" />
              </svg>
              <span className="absolute text-[15px] leading-none" aria-hidden="true">
                🤖
              </span>
            </motion.span>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -right-2 -top-1.5 rounded-full bg-red-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase leading-none tracking-wide text-white shadow-md ring-2 ring-[#F8F2DD]">
            New
          </span>
        )}
      </motion.button>
    </div>
  )
}
