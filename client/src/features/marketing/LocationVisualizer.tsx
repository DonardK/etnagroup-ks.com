import { useState } from 'react'
import { motion } from 'framer-motion'

interface LocationPoint {
  name: string
  distance: string
  time: string
  icon: string
  color: string
}

const locations: LocationPoint[] = [
  {
    name: 'Pristina City Center',
    distance: '2.5 km',
    time: '5 min',
    icon: '🏛️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Pristina International Airport',
    distance: '18 km',
    time: '15 min',
    icon: '✈️',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Shopping Centers',
    distance: '3 km',
    time: '7 min',
    icon: '🛍️',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Medical Facilities',
    distance: '1.5 km',
    time: '3 min',
    icon: '🏥',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Universities',
    distance: '4 km',
    time: '10 min',
    icon: '🎓',
    color: 'from-indigo-500 to-blue-500',
  },
]

export const LocationVisualizer = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
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
            Connected Living
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Strategically located in the heart of Pristina, with everything you need within reach
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 p-8"
          >
            {/* Map Placeholder with Stylized Design */}
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30">
              {/* Decorative Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
              
              {/* Center Point - Building Location */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative">
                  {/* Pulsing Rings */}
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-400"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400"
                  />
                  
                  {/* Building Marker */}
                  <div className="relative z-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-4 shadow-2xl">
                    <div className="text-2xl">🏢</div>
                  </div>
                </div>
              </motion.div>

              {/* Location Points on Map */}
              {locations.map((location, index) => {
                const positions = [
                  { top: '20%', left: '30%' },
                  { top: '15%', right: '20%' },
                  { top: '60%', left: '20%' },
                  { top: '70%', right: '25%' },
                  { top: '40%', right: '15%' },
                ]
                const position = positions[index % positions.length]

                return (
                  <motion.div
                    key={location.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    animate={{
                      scale: hoveredLocation === location.name ? 1.3 : 1,
                      opacity: hoveredLocation === location.name ? 1 : 0.6,
                    }}
                    className={`absolute ${position.top} ${position.left || position.right} z-20`}
                    style={position.left ? { left: position.left } : { right: position.right }}
                  >
                    <div className="relative">
                      <div className="h-3 w-3 rounded-full bg-white shadow-lg" />
                      {hoveredLocation === location.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -left-8 -top-8 whitespace-nowrap rounded-lg bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-xl"
                        >
                          {location.name}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}

              {/* Map Label */}
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
                Etna Residence, Pristina
              </div>
            </div>
          </motion.div>

          {/* Key Distances - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="mb-8 text-3xl font-bold text-white">
              Key Distances
            </h3>

            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredLocation(location.name)}
                onMouseLeave={() => setHoveredLocation(null)}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r ${location.color} p-6 transition-all duration-300 ${
                  hoveredLocation === location.name
                    ? 'scale-105 shadow-2xl'
                    : 'hover:scale-102'
                }`}
              >
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20" />

                {/* Content */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: hoveredLocation === location.name ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl"
                    >
                      {location.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {location.name}
                      </h4>
                      <p className="text-sm text-white/80">{location.distance}</p>
                    </div>
                  </div>

                  {/* Time Badge */}
                  <motion.div
                    animate={{
                      scale: hoveredLocation === location.name ? 1.1 : 1,
                    }}
                    className="rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm"
                  >
                    <span className="text-lg font-bold text-white">
                      {location.time}
                    </span>
                  </motion.div>
                </div>

                {/* Glow Effect on Hover */}
                {hoveredLocation === location.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 rounded-2xl bg-white/20 blur-xl"
                  />
                )}
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 rounded-2xl bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-gray-300">
                <span className="font-semibold text-white">Prime Location:</span> Etna Residence
                is strategically positioned in Pristina's most desirable neighborhood, offering
                easy access to business districts, cultural centers, and recreational facilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
