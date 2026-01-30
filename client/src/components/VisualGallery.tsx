import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface VisualGalleryProps {
  images: string[]
  title?: string
}

export const VisualGallery = ({ images, title = 'Galeria e Vizualizimeve' }: VisualGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  if (!images || images.length === 0) {
    return null
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        navigateImage('next')
      } else if (e.key === 'Escape') {
        e.preventDefault()
        closeLightbox()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, images.length])

  return (
    <>
      <section className="bg-[#F8F2DD] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-[#657432] md:text-5xl">
              {title}
            </h2>
            <p className="text-lg text-[#657432]/70">
              {images.length} {images.length === 1 ? 'vizualizim' : 'vizualizime'}
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#657432]/10"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`Vizualizim ${index + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#657432]/0 transition-all duration-300 group-hover:bg-[#657432]/20" />
                
                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-[#657432]/90 p-4 backdrop-blur-sm">
                    <svg
                      className="h-8 w-8 text-[#F8F2DD]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 z-10 rounded-full bg-[#657432]/90 p-3 text-[#F8F2DD] transition-colors hover:bg-[#657432]"
              aria-label="Mbyll"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#657432]/90 p-3 text-[#F8F2DD] transition-colors hover:bg-[#657432]"
                aria-label="Imazhi i mëparshëm"
              >
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#657432]/90 p-3 text-[#F8F2DD] transition-colors hover:bg-[#657432]"
                aria-label="Imazhi tjetër"
              >
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage]}
                alt={`Vizualizim ${selectedImage + 1}`}
                className="max-h-[90vh] max-w-full object-contain"
              />
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#657432]/90 px-4 py-2 text-sm text-[#F8F2DD] backdrop-blur-sm">
                {selectedImage + 1} / {images.length}
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
