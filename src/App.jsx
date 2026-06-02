import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import HomeView from './components/HomeView'
import AboutView from './components/AboutView'
import CheckupsView from './components/CheckupsView'
import DoctorsView from './components/DoctorsView'
import DeliveryView from './components/DeliveryView'
import AppointmentView from './components/AppointmentView'
import ContactView from './components/ContactView'
import Footer from './components/Footer'
import FloatingContactWidget from './components/FloatingContactWidget'

export default function App() {
  const [lang, setLang] = useState('EN')
  const [currentPage, setCurrentPage] = useState('home')
  const [bookingPrefill, setBookingPrefill] = useState(null)

  const handleNavigate = (page, prefill = null) => {
    setBookingPrefill(prefill)
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isRtl = lang === 'AR'

  // Render the active view based on the state router
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView 
            lang={lang} 
            onNavigate={handleNavigate} 
            onOpenAppointment={() => handleNavigate('appointment')} 
          />
        )
      case 'about':
        return <AboutView lang={lang} />
      case 'checkups':
        return <CheckupsView lang={lang} onNavigate={handleNavigate} />
      case 'doctors':
        return <DoctorsView lang={lang} onNavigate={handleNavigate} />
      case 'delivery':
        return <DeliveryView lang={lang} />
      case 'appointment':
        return <AppointmentView lang={lang} prefill={bookingPrefill} />
      case 'contact':
        return <ContactView lang={lang} />
      default:
        return (
          <HomeView 
            lang={lang} 
            onNavigate={handleNavigate} 
            onOpenAppointment={() => handleNavigate('appointment')} 
          />
        )
    }
  }

  return (
    <div 
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FFFFFF] text-[#333333] transition-colors duration-300 flex flex-col justify-between"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div>
        {/* Sticky Global Navigation Header */}
        <Header 
          lang={lang} 
          setLang={setLang} 
          currentPage={currentPage}
          onNavigate={handleNavigate}
        />

        {/* Multi-Page Transition Container */}
        <main className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              {renderActiveView()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Global Hospital Footer */}
      <Footer lang={lang} />

      {/* Floating Premium Contact Widget */}
      <FloatingContactWidget lang={lang} onNavigate={handleNavigate} />
    </div>
  )
}
