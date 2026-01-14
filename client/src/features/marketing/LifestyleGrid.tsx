import { motion } from 'framer-motion'

interface LifestyleCard {
  title: string
  description: string
  icon: string
  gradient: string
}

const lifestyleCards: LifestyleCard[] = [
  {
    title: 'Private Terraces',
    description: 'Every unit features integrated private terraces with stunning city views',
    icon: '🏡',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: '24/7 Security',
    description: 'Advanced security systems with round-the-clock professional monitoring',
    icon: '🔒',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Underground Parking',
    description: 'Secure underground parking with visitor spots and EV charging',
    icon: '🚗',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Smart Home Ready',
    description: 'Fully integrated smart home systems included in every unit',
    icon: '🏠',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Premium Amenities',
    description: 'Rooftop terrace, fitness center, and co-working spaces',
    icon: '⭐',
    gradient: 'from-indigo-500 to-blue-500',
  },
]

export const LifestyleGrid = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            The Etna Lifestyle
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Premium amenities designed to elevate your everyday living experience
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lifestyleCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${card.gradient} p-8 backdrop-blur-xl transition-all duration-300 ${
                index === 0 ? 'md:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="mb-4 text-6xl"
                >
                  {card.icon}
                </motion.div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-white/90 md:text-xl">
                  {card.description}
                </p>

                {/* Hover Effect - Shine */}
                <motion.div
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-500 group-hover:scale-150" />
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-all hover:shadow-2xl"
          >
            Explore All Amenities
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
