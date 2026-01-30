import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const Footer = () => {
  // Map URLs with markers - using coordinates with q parameter to show pins
  // Format: https://www.google.com/maps/embed?pb=...&q=lat,lng
  // Coordinates from user:
  // Elsa/Prishtina: (42.64081244414135, 21.17503175369921)
  // Prizren Office: (42.22137887565017, 20.72553285387877)
  // Tara: (42.225010482551475, 20.72099588751829)
  // Tiani: (42.204117073228566, 20.70275421152505)
  // Joni: (42.487289807849564, 20.732583028583758)
  
  const mapUrls = {
    elsa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.3746604644157!2d21.17503175369921!3d42.64081244414135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135499c18d0c14a1%3A0x2e34f7987ae9d3d8!2sETNA%20Group!5e0!3m2!1sen!2s!4v1768562309605!5m2!1sen!2s&maptype=satellite',
    prizren: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.0551477768036!2d20.723544476198523!3d42.221302143856605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135395342e68ea71%3A0xc40175bf6810a566!2sETNA%20Group!5e1!3m2!1sen!2s!4v1768593628419!5m2!1sen!2s&maptype=satellite',
    tara: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.433687670586!2d20.72099588751829!3d42.225010482551475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353950a12f4301f%3A0xda0e2e9b8d3d5850!2sPrizren%2020000!5e1!3m2!1sen!2s!4v1768562982109!5m2!1sen!2s&maptype=satellite',
    tiani: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1130.6355956735513!2d20.7012540822486!3d42.204211019351746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353bfc4f1f5d507%3A0x9238d75bcb03b059!2sETNA%20Group%20Tiani%20Residence!5e1!3m2!1sen!2s!4v1768593743486!5m2!1sen!2s&maptype=satellite',
    joni: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.8455864122014!2d20.732583028583758!3d42.487289807849564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13539fd8ce994875%3A0x5a623408c7d18295!2sMalishev%C3%AB%2024000!5e1!3m2!1sen!2s!4v1768563291232!5m2!1sen!2s&maptype=satellite',
  }

  const [selectedMap, setSelectedMap] = useState<string>(mapUrls.elsa)

  return (
    <footer className="border-t border-[#657432]/20 bg-[#F8F2DD] text-[#657432]">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Map Section - Moved to top */}
        <div className="mb-8 border-b border-[#657432]/20 pb-6">
          <div className="mb-4 text-center">
            <h3 className="mb-2 text-lg font-bold text-[#657432]">Lokacionet Tona</h3>
            <select
              value={selectedMap}
              onChange={(e) => setSelectedMap(e.target.value)}
              className="rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-2 text-sm text-[#657432] focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
            >
              <option value={mapUrls.elsa}>Elsa Residence & Zyrë Prishtinë</option>
              <option value={mapUrls.prizren}>Zyrë Prizren</option>
              <option value={mapUrls.tara}>Tara Residence</option>
              <option value={mapUrls.tiani}>Tiani Residence</option>
              <option value={mapUrls.joni}>Joni Residence</option>
            </select>
          </div>
          <div className="overflow-hidden rounded-lg">
            <iframe
              src={selectedMap}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Company Info */}
          <div className="flex items-center gap-4">
            <img
              src={`${import.meta.env.BASE_URL}brand/Logo.png`}
              alt="Etna Group Logo"
              className="h-10 w-auto"
              loading="lazy"
              decoding="async"
            />
            <div>
              <div className="text-xs text-[#657432]/60">
                Hapësira Rezidenciale Premium
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/"
              className="text-[#657432]/70 transition-colors hover:text-[#657432]"
            >
              Ballina
            </Link>
            <Link
              to="/per-ne"
              className="text-[#657432]/70 transition-colors hover:text-[#657432]"
            >
              Për Ne
            </Link>
            <Link
              to="/kontakt"
              className="text-[#657432]/70 transition-colors hover:text-[#657432]"
            >
              Kontakt
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://www.facebook.com/etnagroupks/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#657432]/10 text-[#657432] transition-colors hover:bg-[#657432] hover:text-[#F8F2DD]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/etna.shpk"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#657432]/10 text-[#657432] transition-colors hover:bg-[#657432] hover:text-[#F8F2DD]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@etnagroup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#657432]/10 text-[#657432] transition-colors hover:bg-[#657432] hover:text-[#F8F2DD]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 border-t border-[#657432]/20 pt-4 text-center text-xs text-[#657432]/60">
          © {new Date().getFullYear()} Etna Group. Të gjitha të drejtat e rezervuara.
        </div>
      </div>
    </footer>
  )
}
