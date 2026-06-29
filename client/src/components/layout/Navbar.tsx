import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { assetUrl } from '../../utils/assetUrl'
import { projects } from '../../data/projects'
import { openChat } from '../../utils/chat'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { useLanguage } from '../../i18n/LanguageContext'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full backdrop-blur-xl bg-[#F8F2DD]/95 border-b border-[#657432]/20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={encodeURI(assetUrl('brand/Logo.png'))}
              alt="Etna Group Logo"
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-[#657432]/90 transition-colors hover:text-[#657432]"
            >
              {t.nav.home}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="flex items-center gap-2 text-[#657432]/90 transition-colors hover:text-[#657432]">
                {t.nav.projects}
                <motion.svg
                  animate={{ rotate: isProjectsOpen ? 180 : 0 }}
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-2 w-64 rounded-2xl bg-[#F8F2DD]/95 backdrop-blur-xl border border-[#657432]/20 p-2 shadow-2xl"
                  >
                    {projects.map((project) => (
                      <Link
                        key={project.id}
                        to={`/projektet/${project.id}`}
                        className="block rounded-xl px-4 py-3 text-[#657432]/90 transition-all hover:bg-[#657432]/10 hover:text-[#657432]"
                      >
                        <div className="font-semibold">{project.name}</div>
                        <div className="text-xs text-[#657432]/60">{project.location}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/per-ne"
              className="text-[#657432]/90 transition-colors hover:text-[#657432]"
            >
              {t.nav.about}
            </Link>

            <LanguageSwitcher />

            <button
              onClick={openChat}
              className="relative flex items-center gap-1.5 whitespace-nowrap text-[#657432]/90 transition-colors hover:text-[#657432]"
              aria-label={t.nav.chatAria}
            >
              <span aria-hidden="true">🤖</span>
              {t.nav.chat}
              <span className="absolute -right-2 -top-2.5 rounded-full bg-red-600 px-1 py-0.5 text-[8px] font-extrabold uppercase leading-none tracking-wide text-white shadow">
                New
              </span>
            </button>

            <Link
              to="/kontakt"
              className="rounded-full bg-[#657432] px-6 py-2 font-semibold text-[#F8F2DD] transition-all hover:scale-105 hover:shadow-lg"
            >
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#657432]"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            <LanguageSwitcher compact />
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#657432]/20 py-4 space-y-4"
            >
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#657432]/90 hover:text-[#657432]"
              >
                {t.nav.home}
              </Link>
              <div className="space-y-2">
                <div className="text-[#657432]/90 font-semibold">{t.nav.projects}</div>
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projektet/${project.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-4 text-[#657432]/70 hover:text-[#657432]"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/per-ne"
                onClick={() => setIsMenuOpen(false)}
                className="block text-[#657432]/90 hover:text-[#657432]"
              >
                {t.nav.about}
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  openChat()
                }}
                className="flex items-center gap-2 text-[#657432]/90 hover:text-[#657432]"
                aria-label={t.nav.chatAria}
              >
                <span aria-hidden="true">🤖</span>
                {t.nav.chat}
                <span className="rounded-full bg-red-600 px-1.5 py-0.5 text-[9px] font-extrabold uppercase leading-none tracking-wide text-white">
                  New
                </span>
              </button>
              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-full bg-[#657432] px-6 py-2 text-center font-semibold text-[#F8F2DD]"
              >
                {t.nav.contact}
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
