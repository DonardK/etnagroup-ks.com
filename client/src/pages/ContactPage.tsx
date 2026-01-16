import { useState } from 'react'
import { motion } from 'framer-motion'

interface FormData {
  name: string
  email: string
  phone: string
  project: string
  message: string
}

export const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedMap, setSelectedMap] = useState<string>(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.3746604644157!2d21.17503175369921!3d42.64081244414135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135499c18d0c14a1%3A0x2e34f7987ae9d3d8!2sETNA%20Group!5e0!3m2!1sen!2s!4v1768562309605!5m2!1sen!2s'
  )

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, this would send to your API
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        project: '',
        message: '',
      })
      setSubmitStatus('idle')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#F8F2DD] py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-6xl font-bold text-[#657432] md:text-7xl">
            Na Kontaktoni
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-[#657432]/80">
            Jemi këtu për t'ju ndihmuar. Plotësoni formularin më poshtë dhe ne do t'ju
            kontaktojmë sa më shpejt të jetë e mundur.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-[#F8F2DD] p-8 shadow-2xl lg:p-12 border border-[#657432]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#657432]">
                  Emri dhe Mbiemri *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-3 focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
                  placeholder="Shkruani emrin tuaj"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#657432]">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-3 focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
                  placeholder="email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#657432]">
                  Numri i Telefonit *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-3 focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
                  placeholder="+383 XX XXX XXX"
                />
              </div>

              {/* Project Selection */}
              <div>
                <label htmlFor="project" className="mb-2 block text-sm font-semibold text-[#657432]">
                  Projekti i Interesuar
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-3 focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
                >
                  <option value="">Zgjidhni një projekt</option>
                  <option value="elsa">Elsa Residence</option>
                  <option value="tara">Tara Residence</option>
                  <option value="tiani">Tiani Residence</option>
                  <option value="joni">Joni Residence</option>
                  <option value="etna">Etna Residence</option>
                  <option value="general">Informacion i Përgjithshëm</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#657432]">
                  Mesazhi *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-3 focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
                  placeholder="Shkruani mesazhin tuaj këtu..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-[#657432] px-8 py-4 text-lg font-semibold text-[#F8F2DD] transition-all hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Duke dërguar...' : 'Dërgo Mesazhin'}
              </motion.button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-[#657432]/20 p-4 text-[#657432]"
                >
                  ✓ Mesazhi u dërgua me sukses! Do t'ju kontaktojmë së shpejti.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Office Info */}
            <div className="rounded-3xl bg-[#F8F2DD] p-8 text-[#657432] border border-[#657432]/20">
              <h2 className="mb-6 text-3xl font-bold">Informacioni i Kontaktit</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#657432]/20 p-3">
                    <svg
                      className="h-6 w-6 text-[#657432]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#657432]">Adresa</h3>
                    <p className="text-[#657432]/80">
                      <strong className="text-[#657432]">Zyrë Prishtinë:</strong>
                      <br />
                      Prishtinë, Rr. Malush Kosova
                      <br />
                      <br />
                      <strong className="text-[#657432]">Zyrë Prizren:</strong>
                      <br />
                      Prizren, Rrethrrotullimi Ortakoll
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#657432]/20 p-3">
                    <svg
                      className="h-6 w-6 text-[#657432]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#657432]">Telefoni</h3>
                    <p className="text-[#657432]/80">
                      <a href="tel:+38346383838" className="hover:text-[#657432] text-[#657432]">
                        +383 46 38 38 38
                      </a>
                      <br />
                      <a href="tel:+38346110099" className="hover:text-[#657432] text-[#657432]">
                        +383 46 11 00 99
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#657432]/20 p-3">
                    <svg
                      className="h-6 w-6 text-[#657432]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#657432]">Email</h3>
                    <p className="text-[#657432]/80">
                      <a href="mailto:info@etnagroup-ks.com" className="hover:text-[#657432] text-[#657432]">
                        info@etnagroup-ks.com
                      </a>
                      <br />
                      <a href="mailto:sales@etnagroup-ks.com" className="hover:text-[#657432] text-[#657432]">
                        sales@etnagroup-ks.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-[#657432]/20 p-3">
                    <svg
                      className="h-6 w-6 text-[#657432]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-[#657432]">Orari i Punës</h3>
                    <p className="text-[#657432]/80">
                      E Hënë - E Shtunë: 08:00 - 16:00
                      <br />
                      E Diel: Mbyllur
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-3xl bg-[#F8F2DD] p-8 shadow-xl border border-[#657432]/20">
              <h3 className="mb-6 text-2xl font-bold text-[#657432]">Lokacionet</h3>
              <div className="mb-4">
                <select
                  id="location-select"
                  value={selectedMap}
                  onChange={(e) => setSelectedMap(e.target.value)}
                  className="w-full rounded-lg border border-[#657432]/30 bg-[#F8F2DD] px-4 py-3 text-[#657432] focus:border-[#657432] focus:outline-none focus:ring-2 focus:ring-[#657432]/20"
                >
                  <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2091.3746604644157!2d21.17503175369921!3d42.64081244414135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135499c18d0c14a1%3A0x2e34f7987ae9d3d8!2sETNA%20Group!5e0!3m2!1sen!2s!4v1768562309605!5m2!1sen!2s">
                    Elsa Residence & Zyrë Prishtinë
                  </option>
                  <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d574.6707271881615!2d20.72553285387877!3d42.22137887565017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353950a12f4301f%3A0xda0e2e9b8d3d5850!2sPrizren%2020000!5e0!3m2!1sen!2s!4v1768562857693!5m2!1sen!2s">
                    Zyrë Prizren
                  </option>
                  <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.433687670586!2d20.72099588751829!3d42.225010482551475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353950a12f4301f%3A0xda0e2e9b8d3d5850!2sPrizren%2020000!5e1!3m2!1sen!2s!4v1768562982109!5m2!1sen!2s">
                    Tara Residence
                  </option>
                  <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1507.4967021016403!2d20.70275421152505!3d42.204117073228566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353950a12f4301f%3A0xda0e2e9b8d3d5850!2sPrizren%2020000!5e1!3m2!1sen!2s!4v1768563174017!5m2!1sen!2s">
                    Tiani Residence
                  </option>
                  <option value="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.8455864122014!2d20.732583028583758!3d42.487289807849564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13539fd8ce994875%3A0x5a623408c7d18295!2sMalishev%C3%AB%2024000!5e1!3m2!1sen!2s!4v1768563291232!5m2!1sen!2s">
                    Joni Residence
                  </option>
                </select>
              </div>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  id="location-map"
                  src={selectedMap}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-3xl bg-[#F8F2DD] p-8 shadow-xl border border-[#657432]/20">
              <h3 className="mb-6 text-2xl font-bold text-[#657432]">Na Ndiqni</h3>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.facebook.com/etnagroupks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#657432] text-[#F8F2DD] transition-all hover:bg-[#657432]/80 hover:text-[#F8F2DD]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/etna.shpk"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#657432] text-[#F8F2DD] transition-all hover:bg-[#657432]/80 hover:text-[#F8F2DD]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@etnagroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#657432] text-[#F8F2DD] transition-all hover:bg-[#657432]/80 hover:text-[#F8F2DD]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
