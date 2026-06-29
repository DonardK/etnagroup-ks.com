import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  findApartmentsByArea,
  parseRequestedArea,
  parseRequestedProjects,
  type ApartmentMatchGroup,
} from '../../data/apartmentCatalog'
import { apartmentSpecs } from '../../data/apartmentSpecs'
import { OPEN_CHAT_EVENT, REPLY_CLOSING, appendReplyClosing, getChatSessionId } from '../../utils/chat'
import { useTouchDevice } from '../../hooks/useTouchDevice'
import { useLanguage } from '../../i18n/LanguageContext'

const APARTMENT_CONTEXT_CAP = 3500

const PDF_BASE = import.meta.env.BASE_URL

const formatArea = (area: number): string => `${area} m²`

const PLAN_ICON_PATH =
  'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'

interface ApartmentContext {
  context: string
  links: Record<string, string>
}

/** Build a verified spec block (with [pN] ids) plus a pN -> PDF-url map for the matched apartments. */
const buildApartmentContext = (
  groups: ApartmentMatchGroup[],
): ApartmentContext | undefined => {
  const lines: string[] = []
  const links: Record<string, string> = {}
  let n = 0
  for (const g of groups) {
    for (const apt of g.apartments) {
      n += 1
      const id = `p${n}`
      links[id] = encodeURI(`${PDF_BASE}${apt.pdfPath}`)
      const spec = apartmentSpecs[apt.pdfPath]
      const head = `[${id}] ${g.project} (${g.city})${apt.group ? `, ${apt.group}` : ''}, ${apt.area} m²`
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
  const joined = lines.join('\n')
  const context =
    joined.length > APARTMENT_CONTEXT_CAP ? joined.slice(0, APARTMENT_CONTEXT_CAP) : joined
  return { context, links }
}

interface ChatMessage {
  role: 'user' | 'assistant'
  text: string
  ts: number
  matches?: ApartmentMatchGroup[]
  links?: Record<string, string>
}

/** Render a text segment with **bold** / __bold__ support. */
const renderInline = (segment: string, keyBase: string): ReactNode[] =>
  segment.split(/(\*\*[^*\n]+\*\*|__[^_\n]+__)/g).map((part, i) => {
    const bold = part.match(/^\*\*([^*\n]+)\*\*$/) || part.match(/^__([^_\n]+)__$/)
    return bold ? (
      <strong key={`${keyBase}-${i}`}>{bold[1]}</strong>
    ) : (
      <span key={`${keyBase}-${i}`}>{part}</span>
    )
  })

/** Render markdown bold + [text](href) links. apt:ID hrefs resolve to PDF buttons via the links map. */
const renderRichText = (text: string, links?: Record<string, string>): ReactNode => {
  const out: ReactNode[] = []
  const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g
  let last = 0
  let k = 0
  let m: RegExpExecArray | null
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) out.push(...renderInline(text.slice(last, m.index), `seg${k}`))
    const label = m[1]
    const href = m[2]
    let url: string | null = null
    if (href.startsWith('apt:')) url = links?.[href.slice(4)] ?? null
    else if (/^https?:\/\//i.test(href)) url = href
    if (url) {
      out.push(
        <a
          key={`lnk${k}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="my-1 inline-flex items-center gap-1.5 rounded-lg bg-[#657432] px-2.5 py-1 text-xs font-medium text-[#F8F2DD] no-underline transition-all hover:bg-[#657432]/85 active:scale-[0.97]"
        >
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={PLAN_ICON_PATH}
            />
          </svg>
          {label}
        </a>,
      )
    } else {
      out.push(...renderInline(label, `lbl${k}`))
    }
    last = linkRe.lastIndex
    k += 1
  }
  if (last < text.length) out.push(...renderInline(text.slice(last), `seg${k}`))
  return out
}

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

const GREETING_TEXT = (intro: string) => `${intro}\n\n${REPLY_CLOSING}`

const MAX_INPUT_LENGTH = 1000

export const ChatWidget = () => {
  const { t, locale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    { role: 'assistant', text: GREETING_TEXT(t.chat.greeting), ts: Date.now() },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastMsgRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const isTouch = useTouchDevice()

  useEffect(() => {
    const c = scrollRef.current
    if (!c) return
    const last = messages[messages.length - 1]
    if (loading || last?.role === 'user') {
      // Sending: jump to bottom so the question + typing indicator are visible.
      c.scrollTop = c.scrollHeight
    } else if (last?.role === 'assistant' && lastMsgRef.current) {
      // Reply arrived: align the START of the answer to the top; user scrolls to read.
      c.scrollTop = Math.max(0, lastMsgRef.current.offsetTop - 8)
    }
  }, [messages, loading, isOpen])

  useEffect(() => {
    // Programmatic focus on mobile triggers iOS Safari zoom; user taps the field instead.
    if (isOpen && !isTouch) inputRef.current?.focus()
  }, [isOpen, isTouch])

  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener(OPEN_CHAT_EVENT, open)
    return () => window.removeEventListener(OPEN_CHAT_EVENT, open)
  }, [])

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length !== 1 || prev[0].role !== 'assistant') return prev
      return [{ role: 'assistant', text: GREETING_TEXT(t.chat.greeting), ts: Date.now() }]
    })
  }, [locale, t.chat.greeting])

  const sendMessage = async () => {
    const text = input.trim()
    if (!text || loading) return

    const requestedArea = parseRequestedArea(text)
    const requestedProjects = parseRequestedProjects(text)
    const matches =
      requestedArea !== null
        ? findApartmentsByArea(requestedArea, {
            projectIds: requestedProjects,
            maxPerProject: requestedProjects.length === 1 ? 6 : 4,
          })
        : undefined
    const ctx = matches ? buildApartmentContext(matches) : undefined
    const apartmentContext = ctx?.context
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
          sessionId: getChatSessionId(),
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

      const reply = appendReplyClosing(
        data.reply?.trim() || 'Më vjen keq, ndodhi një gabim. Ju lutem provoni përsëri.',
      )

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: reply, ts: Date.now(), matches, links: ctx?.links },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: appendReplyClosing(
            'Më vjen keq, shërbimi nuk është i disponueshëm për momentin. Ju lutem provoni më vonë ose na kontaktoni në info@etnagroup-ks.com. / Sorry, the assistant is unavailable right now — please try again later or contact info@etnagroup-ks.com.',
          ),
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
    <div className="flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-4 flex h-[70vh] max-h-[560px] w-[min(380px,calc(100vw-3rem))] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-[#657432]/20 bg-[#F8F2DD] shadow-2xl"
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
                  <div className="text-xs text-[#F8F2DD]/70">{t.chat.assistant}</div>
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

            <div
              ref={scrollRef}
              className="relative flex-1 space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.map((m, i) => (
                <div
                  key={`${m.ts}-${i}`}
                  ref={i === messages.length - 1 ? lastMsgRef : undefined}
                  className="space-y-2"
                >
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
                      {renderRichText(m.text, m.links)}
                    </div>
                  </div>
                  {m.matches &&
                    m.matches.length > 0 &&
                    !(m.links && /\]\(apt:/.test(m.text)) && (
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
                  placeholder={t.chat.placeholder}
                  className="flex-1 rounded-full border border-[#657432]/25 bg-white px-4 py-2.5 text-base text-[#3a3a2e] outline-none transition-colors placeholder:text-[#657432]/40 focus:border-[#657432]"
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
              <p className="mt-2 text-center text-[10px] text-[#657432]/50">{t.chat.disclaimer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        initial={isTouch ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={isTouch ? undefined : { scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#657432] text-[#F8F2DD] shadow-lg transition-shadow hover:shadow-xl"
        aria-label={isOpen ? 'Close chat assistant' : 'Open AI chat assistant'}
      >
        {isOpen ? (
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <span className="relative flex h-9 w-9 items-center justify-center">
            <svg className="h-9 w-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3C6.48 3 2 6.86 2 11.5c0 2.3 1.1 4.4 2.9 5.9-.13 1.05-.57 2.3-1.45 3.4-.21.27 0 .66.34.6 1.86-.25 3.52-.92 4.79-1.74.74.16 1.52.24 2.32.24 5.52 0 10-3.86 10-8.4S17.52 3 12 3z" />
            </svg>
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
              style={{ fontSize: '14px', lineHeight: 1, WebkitTextSizeAdjust: '100%' }}
              aria-hidden="true"
            >
              🤖
            </span>
          </span>
        )}

        {!isOpen && (
          <span className="pointer-events-none absolute -right-2 -top-1.5 select-none rounded-full bg-red-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase leading-none tracking-wide text-white shadow-md ring-2 ring-[#F8F2DD]">
            New
          </span>
        )}
      </motion.button>
    </div>
  )
}
