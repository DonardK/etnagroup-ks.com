import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { HomePage } from './pages/HomePage'
import { ProjectDetail } from './pages/ProjectDetail'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { ElsaBlockA } from './pages/ElsaBlockA'
import { ElsaBlockB } from './pages/ElsaBlockB'
import { ElsaBlockC } from './pages/ElsaBlockC'
import { ElsaBlockD } from './pages/ElsaBlockD'
import { ElsaBlockE } from './pages/ElsaBlockE'
import { TianiBlockA } from './pages/TianiBlockA'
import { TianiBlockB } from './pages/TianiBlockB'
import { TaraApartments } from './pages/TaraApartments'
import { JoniKati } from './pages/JoniKati'

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
          <Route path="/elsaresidence-bllokua" element={<ElsaBlockA />} />
          <Route path="/elsaresidence-bllokub" element={<ElsaBlockB />} />
          <Route path="/elsaresidence-bllokuc" element={<ElsaBlockC />} />
          <Route path="/elsaresidence-bllokud" element={<ElsaBlockD />} />
          <Route path="/elsaresidence-bllokue" element={<ElsaBlockE />} />
          <Route path="/elsaresidence-blloku-a" element={<Navigate to="/elsaresidence-bllokua" replace />} />
          <Route path="/elsaresidence-blloku-bcd" element={<Navigate to="/projektet/elsa" replace />} />
          <Route path="/elsaresidence-blloku-ef" element={<Navigate to="/elsaresidence-bllokue" replace />} />
          <Route path="/tianiresidence-blloku-a" element={<TianiBlockA />} />
          <Route path="/tianiresidence-blloku-b" element={<TianiBlockB />} />
          <Route path="/tararesidence-apartments" element={<TaraApartments />} />
          <Route path="/joniresidence-kati-:kati" element={<JoniKati />} />
          <Route path="/joniresidence-apartments" element={<Navigate to="/projektet/joni" replace />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
