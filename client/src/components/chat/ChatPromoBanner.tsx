import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { openChat } from '../../utils/chat'
import { useTouchDevice } from '../../hooks/useTouchDevice'

export const ChatPromoBanner = () => {
  const { t } = useLanguage()
  const isTouch = useTouchDevice()

  return (
    <motion.button
      type="button"
      initial={isTouch ? false : { opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={isTouch ? undefined : { scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={openChat}
      className="group relative mb-0 flex max-w-[min(200px,calc(100vw-5.5rem))] flex-shrink-0 items-center gap-2 rounded-2xl border border-[#657432]/25 bg-[#F8F2DD]/95 px-3 py-2.5 text-left shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl sm:max-w-[260px] lg:max-w-[300px]"
      aria-label={t.chat.promoAria}
    >
      {/* Arrow pointing to chat FAB */}
      <span
        className="absolute -right-2 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[8px] border-l-[10px] border-y-transparent border-l-[#657432]/25"
        aria-hidden="true"
      />
      <span
        className="absolute -right-[7px] top-1/2 h-0 w-0 -translate-y-1/2 border-y-[7px] border-l-[9px] border-y-transparent border-l-[#F8F2DD]/95"
        aria-hidden="true"
      />
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#657432]/15 text-lg">
        🤖
      </span>
      <span className="text-xs font-semibold leading-snug text-[#657432] md:text-sm">
        {t.chat.promo}
      </span>
    </motion.button>
  )
}
