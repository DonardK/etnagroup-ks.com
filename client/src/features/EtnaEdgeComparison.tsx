import { motion } from 'framer-motion'

interface ComparisonItem {
  feature: string
  us: string
  them: string
  highlight?: boolean
}

const comparisons: ComparisonItem[] = [
  {
    feature: 'Private Terraces',
    us: 'Integrated with every unit',
    them: 'Limited availability',
    highlight: true,
  },
  {
    feature: 'Smart Home System',
    us: 'Fully integrated & included',
    them: 'Optional add-on',
  },
  {
    feature: 'Parking',
    us: 'Underground + visitor spots',
    them: 'Surface parking only',
  },
  {
    feature: 'Security',
    us: '24/7 + Smart access control',
    them: '24/7 basic security',
  },
  {
    feature: 'Common Areas',
    us: 'Rooftop, Gym, Co-working',
    them: 'Basic lobby',
  },
  {
    feature: 'Interior Finish',
    us: 'Premium materials included',
    them: 'Standard finish',
  },
]

export const EtnaEdgeComparison = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            The Etna Edge
          </h2>
          <p className="text-lg text-gray-300">
            See why we're the premium choice in Pristina
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 border-b border-white/10 p-6">
            <div className="text-sm font-medium text-gray-400">Feature</div>
            <div className="text-center">
              <div className="mb-1 text-lg font-bold text-white">Etna Group</div>
              <div className="text-xs text-green-400">✓ Premium Living</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-lg font-medium text-gray-400">Competition</div>
              <div className="text-xs text-gray-500">Standard Offering</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                className={`grid grid-cols-3 gap-4 p-6 transition-colors ${
                  item.highlight ? 'bg-blue-500/10' : ''
                }`}
              >
                <div className="flex items-center">
                  <span className="font-medium text-white">{item.feature}</span>
                  {item.highlight && (
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: 'spring' }}
                      className="ml-2 rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white"
                    >
                      SIGNATURE
                    </motion.span>
                  )}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center rounded-lg bg-green-500/20 px-4 py-3 text-center"
                >
                  <div>
                    <div className="mb-1 text-2xl">✓</div>
                    <div className="text-sm font-medium text-green-400">{item.us}</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center rounded-lg bg-red-500/10 px-4 py-3 text-center"
                >
                  <div>
                    <div className="mb-1 text-2xl text-gray-600">~</div>
                    <div className="text-sm text-gray-500">{item.them}</div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Footer CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center"
          >
            <h3 className="mb-2 text-2xl font-bold text-white">
              Experience the Difference
            </h3>
            <p className="mb-6 text-white/90">
              Book a tour and see why Etna Group sets the standard
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition-all hover:shadow-2xl"
              >
                Schedule Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all hover:bg-white/10"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-3 gap-6"
        >
          <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-white">98%</div>
            <div className="text-sm text-gray-400">Customer Satisfaction</div>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-white">5+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-3xl font-bold text-white">200+</div>
            <div className="text-sm text-gray-400">Happy Residents</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
