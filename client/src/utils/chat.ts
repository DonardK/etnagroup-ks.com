// Lightweight, decoupled signal so any component (e.g. the Navbar) can open the
// floating ChatWidget without prop drilling or shared React state.
export const OPEN_CHAT_EVENT = 'etna:open-chat'

export const openChat = (): void => {
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT))
}

/** Standard contact footer appended to every assistant message. */
export const REPLY_CLOSING = `Nëse keni interes, ju lutem kontaktoni ne në numrin e telefonit të mëposhtëm për të marrë më shumë informacione ose për të rezervuar një vizitë:

📞 +383 46 38 38 38 (gjithashtu në WhatsApp)`

export const appendReplyClosing = (reply: string): string => {
  const trimmed = reply.trim()
  if (!trimmed) return REPLY_CLOSING
  if (/383\s*46\s*38\s*38\s*38/.test(trimmed) && /Nëse keni interes/i.test(trimmed)) {
    return trimmed
  }
  return `${trimmed}\n\n${REPLY_CLOSING}`
}
