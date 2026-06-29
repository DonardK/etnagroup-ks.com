import { FLOATING_DOCK_STYLE } from '../../utils/floatingDock'
import { ChatPromoBanner } from './ChatPromoBanner'
import { ChatWidget } from './ChatWidget'

/** Sticky bottom-right dock: promo banner + AI chat (scrolls with viewport). */
export const FloatingAssistantDock = () => (
  <div style={FLOATING_DOCK_STYLE} className="flex flex-row items-end gap-2 sm:gap-3">
    <ChatPromoBanner />
    <ChatWidget />
  </div>
)
