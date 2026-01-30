import { motion } from 'framer-motion'
import { assetUrl } from '../utils/assetUrl'

export const InteractiveLivingHero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${assetUrl('/buildings/etna-hero.jpg')}')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Glassmorphism Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="mx-4 max-w-4xl rounded-3xl bg-white/10 p-8 backdrop-blur-xl md:p-12 lg:p-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            Interactive Living
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 text-lg text-white/90 md:text-xl"
          >
            Experience modern luxury in Pristina's premier residential complex.
            Where design meets lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition-all hover:scale-105 hover:shadow-xl">
              Explore Units
            </button>
            <button className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white/10">
              Book a Tour
            </button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-white/20 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">2</div>
              <div className="text-sm text-white/70">Buildings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-sm text-white/70">Apartments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">Security</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-12 w-8 rounded-full border-2 border-white/50 p-2"
        >
          <div className="h-2 w-2 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </div>
  )
}
