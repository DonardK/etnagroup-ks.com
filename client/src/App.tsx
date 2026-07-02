import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { FloatingAssistantDock } from './components/chat/FloatingAssistantDock'
import { SeoHead } from './components/seo/SeoHead'
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
import { QrCodePage } from './pages/QrCodePage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'

const HIDDEN_LAYOUT_PATHS = ['/qr-code']

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  const { pathname } = useLocation()
  const hideSiteLayout = HIDDEN_LAYOUT_PATHS.includes(pathname)

  return (
    <div className="min-h-screen bg-[#F8F2DD] flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <SeoHead />
      {!hideSiteLayout && <Navbar />}
      <div className={hideSiteLayout ? 'flex-grow' : 'pt-20 flex-grow'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projektet/:id" element={<ProjectDetail />} />
          <Route path="/per-ne" element={<AboutPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
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
          <Route path="/joniresidence-kati-1" element={<JoniKati floor={1} />} />
          <Route path="/joniresidence-kati-2" element={<JoniKati floor={2} />} />
          <Route path="/joniresidence-kati-3" element={<JoniKati floor={3} />} />
          <Route path="/joniresidence-kati-4" element={<JoniKati floor={4} />} />
          <Route path="/joniresidence-kati-5" element={<JoniKati floor={5} />} />
          <Route path="/joniresidence-kati-6" element={<JoniKati floor={6} />} />
          <Route path="/joniresidence-apartments" element={<Navigate to="/projektet/joni" replace />} />
          <Route path="/qr-code" element={<QrCodePage />} />
        </Routes>
      </div>
      {!hideSiteLayout && <Footer />}
      {!hideSiteLayout && <WhatsAppButton />}
      {!hideSiteLayout && <FloatingAssistantDock />}
    </div>
  )
}

export default App
