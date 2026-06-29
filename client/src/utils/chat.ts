// Lightweight, decoupled signal so any component (e.g. the Navbar) can open the
// floating ChatWidget without prop drilling or shared React state.
export const OPEN_CHAT_EVENT = 'etna:open-chat'

const SESSION_STORAGE_KEY = 'etna-chat-session'

/** Stable per-tab session id sent to /api/chat for server-side logging. */
export const getChatSessionId = (): string => {
  let id = sessionStorage.getItem(SESSION_STORAGE_KEY)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(SESSION_STORAGE_KEY, id)
  }
  return id
}

export const openChat = (): void => {
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT))
}
