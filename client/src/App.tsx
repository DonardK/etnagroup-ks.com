import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { HomePage } from './pages/HomePage'
import { ProjectDetail } from './pages/ProjectDetail'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ElsaBlockEF } from './pages/ElsaBlockEF'
import { ElsaBlockBCD } from './pages/ElsaBlockBCD'
import { ElsaBlockA } from './pages/ElsaBlockA'
import { TianiBlockA } from './pages/TianiBlockA'
import { TianiBlockB } from './pages/TianiBlockB'
import { TaraApartments } from './pages/TaraApartments'
import { JoniApartments } from './pages/JoniApartments'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[#F8F2DD] flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <div className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projektet/:id" element={<ProjectDetail />} />
          <Route path="/per-ne" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/elsaresidence-blloku-ef" element={<ElsaBlockEF />} />
          <Route path="/elsaresidence-blloku-bcd" element={<ElsaBlockBCD />} />
          <Route path="/elsaresidence-blloku-a" element={<ElsaBlockA />} />
          <Route path="/tianiresidence-blloku-a" element={<TianiBlockA />} />
          <Route path="/tianiresidence-blloku-b" element={<TianiBlockB />} />
          <Route path="/tararesidence-apartments" element={<TaraApartments />} />
          <Route path="/joniresidence-apartments" element={<JoniApartments />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
