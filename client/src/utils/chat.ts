// Lightweight, decoupled signal so any component (e.g. the Navbar) can open the
// floating ChatWidget without prop drilling or shared React state.
export const OPEN_CHAT_EVENT = 'etna:open-chat'

export const openChat = (): void => {
  window.dispatchEvent(new Event(OPEN_CHAT_EVENT))
}
