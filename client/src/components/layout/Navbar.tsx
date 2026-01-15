import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full backdrop-blur-xl bg-[#F8F2DD]/95 border-b border-[#657432]/20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/brand/Logo.png"
              alt="Etna Group Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-[#657432]/90 transition-colors hover:text-[#657432]"
            >
              Ballina
            </Link>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="flex items-center gap-2 text-[#657432]/90 transition-colors hover:text-[#657432]">
                Projektet
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
              Për Ne
            </Link>

            <Link
              to="/kontakt"
              className="rounded-full bg-[#657432] px-6 py-2 font-semibold text-[#F8F2DD] transition-all hover:scale-105 hover:shadow-lg"
            >
              Na Kontaktoni
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#657432]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
        </div>

        {/* Mobile Menu */}
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
                Ballina
              </Link>
              <div className="space-y-2">
                <div className="text-[#657432]/90 font-semibold">Projektet</div>
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
                Për Ne
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-full bg-[#657432] px-6 py-2 text-center font-semibold text-[#F8F2DD]"
              >
                Na Kontaktoni
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
