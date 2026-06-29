import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FLOATING_DOCK_STYLE } from '../../utils/floatingDock'
import { OPEN_CHAT_EVENT } from '../../utils/chat'
import { ChatPromoBanner } from './ChatPromoBanner'
import { ChatWidget } from './ChatWidget'

/** Sticky bottom-right dock: promo banner + AI chat (scrolls with viewport). */
export const FloatingAssistantDock = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)

  useEffect(() => {
    const open = () => setIsOpen(true)
    window.addEventListener(OPEN_CHAT_EVENT, open)
    return () => window.removeEventListener(OPEN_CHAT_EVENT, open)
  }, [])

  useEffect(() => {
    if (isOpen) setShowBanner(false)
  }, [isOpen])

  return (
    <div style={FLOATING_DOCK_STYLE} className="flex flex-row items-end justify-end">
      <AnimatePresence mode="wait">
        {showBanner && (
          <motion.div
            key="banner"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            transition={{ duration: 0.15 }}
            className="mr-2 sm:mr-3"
          >
            <ChatPromoBanner />
          </motion.div>
        )}
      </AnimatePresence>
      <ChatWidget isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}
