import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import { assetUrl } from '../../utils/assetUrl'

interface QualityFeature {
  title: string
  description: string
  image: string
}

const qualityFeatures: QualityFeature[] = [
  {
    title: 'Acoustic Insulation',
    description:
      'Premium soundproofing materials ensure peace and tranquility, even in the heart of the city',
    image: '/buildings/quality-acoustic.jpg',
  },
  {
    title: 'Ventilated Facade',
    description:
      'Advanced facade system provides optimal thermal regulation and energy efficiency year-round',
    image: '/buildings/quality-facade.jpg',
  },
  {
    title: 'Premium Flooring',
    description:
      'High-end materials and finishes throughout, from engineered hardwood to premium tiles',
    image: '/buildings/quality-flooring.jpg',
  },
  {
    title: 'Smart Home Integration',
    description:
      'Fully integrated smart home systems with automated climate, lighting, and security controls',
    image: '/buildings/quality-smart.jpg',
  },
]

export const QualityParallax = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] overflow-hidden bg-gray-900"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen">
        {qualityFeatures.map((feature, index) => {
          const y = useTransform(
            scrollYProgress,
            [index * 0.25, (index + 1) * 0.25],
            ['0%', '-50%']
          )
          const opacity = useTransform(
            scrollYProgress,
            [
              index * 0.25 - 0.1,
              index * 0.25,
              (index + 1) * 0.25 - 0.1,
              (index + 1) * 0.25,
            ],
            [0, 1, 1, 0]
          )
          const scale = useTransform(
            scrollYProgress,
            [
              index * 0.25 - 0.1,
              index * 0.25,
              (index + 1) * 0.25 - 0.1,
              (index + 1) * 0.25,
            ],
            [1.2, 1, 1, 1.2]
          )

          return (
            <motion.div
              key={feature.title}
              style={{ y, opacity, scale }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Background Image with Parallax */}
              <motion.div
                style={{
                  y: useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [0, -100]),
                }}
                className="absolute inset-0"
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${assetUrl(feature.image)})`,
                    backgroundSize: 'cover',
                  }}
                >
                  {/* Fallback gradient if image doesn't load */}
                  <div className="h-full w-full bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-gray-900/80" />
                </div>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="mb-6 inline-block rounded-full bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-md"
                  >
                    Construction Quality
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-6 text-5xl font-bold text-white md:text-7xl"
                  >
                    {feature.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mx-auto max-w-2xl text-xl text-white/90 md:text-2xl"
                  >
                    {feature.description}
                  </motion.p>

                  {/* Decorative Elements */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    className="mt-8 flex justify-center gap-4"
                  >
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="h-2 w-2 rounded-full bg-white"
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>

              {/* Scroll Indicator */}
              {index < qualityFeatures.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2 text-white/60"
                  >
                    <span className="text-sm">Scroll</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
