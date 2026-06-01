import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  PhoneCall, 
  Calendar, 
  Stethoscope, 
  UserCheck, 
  Globe, 
  Menu, 
  X, 
  MapPin,
  ChevronDown,
  Check
} from 'lucide-react'

export default function Header({ lang, setLang, currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  // Listen to scroll to update headers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Translations object
  const t = {
    EN: {
      name: 'Fathima Medical Center',
      location: 'Vallapuzha',
      emergencyTitle: 'Emergency',
      emergencyPhone: '+91 8086537077',
      appointment: 'Book an Appointment',
      checkup: 'Book a Health Checkup',
      findDoctor: 'Find a Doctor',
      navHome: 'Home',
      navServices: 'Medicine Delivery',
      navDoctors: 'Our Doctors',
      navAbout: 'About Us',
      navContact: 'Contact Us',
    },
    ML: {
      name: 'ഫാത്തിമ മെഡിക്കൽ സെന്റർ',
      location: 'വല്ലപ്പുഴ',
      emergencyTitle: 'അടിയന്തിരാവശ്യം',
      emergencyPhone: '+91 8086537077',
      appointment: 'ഡോക്ടറെ കാണാൻ ബുക്ക് ചെയ്യുക',
      checkup: 'ഹെൽത്ത് ചെക്കപ്പ് ബുക്ക് ചെയ്യുക',
      findDoctor: 'ഡോക്ടറെ കണ്ടെത്തുക',
      navHome: 'ഹോം',
      navServices: 'മരുന്ന് ഡെലിവറി',
      navDoctors: 'ഞങ്ങളുടെ ഡോക്ടർമാർ',
      navAbout: 'ഞങ്ങളെക്കുറിച്ച്',
      navContact: 'ബന്ധപ്പെടുക',
    },
    AR: {
      name: 'مركز فاطمة الطبي',
      location: 'فالابوزا',
      emergencyTitle: 'الطوارئ',
      emergencyPhone: '+91 8086537077',
      appointment: 'حجز موعد الطبيب',
      checkup: 'حجز فحص صحي',
      findDoctor: 'البحث عن طبيب',
      navHome: 'الرئيسية',
      navServices: 'توصيل الأدوية',
      navDoctors: 'أطباؤنا',
      navAbout: 'من نحن',
      navContact: 'اتصل بنا',
    }
  }

  const current = t[lang]
  const isRtl = lang === 'AR'

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md py-1 border-b border-[#E0EBFC]' 
        : 'bg-white py-3 border-b border-[#E0EBFC]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- LEVEL 1: TOP HEADER --- */}
        <div className="flex items-center justify-between py-2 border-b border-[#E0EBFC]/60 lg:pb-3 pb-2">
          
          {/* Brand Info (Logo, Clinic name, Location) */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 sm:gap-3 min-w-0 cursor-pointer group"
          >
            <img 
              src="/logo/f1.png" 
              alt="Fathima Medical Clinic Logo" 
              className="h-10 w-auto object-contain sm:h-12 md:h-14 shrink-0 transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback icon in case image is slow to render
                e.target.style.display = 'none';
              }}
            />
            <div className="flex flex-col text-left min-w-0">
              <span className="font-heading font-extrabold text-sm sm:text-base md:text-lg lg:text-xl text-[#0B4DBB] leading-tight break-words group-hover:text-[#0B4DBB]/85 transition-colors">
                {current.name}
              </span>
              <span className="flex items-center gap-1 text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium">
                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#FF1E2D] shrink-0" />
                {current.location}
              </span>
            </div>
          </div>

          {/* Action Cards (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Emergency Card */}
            <a 
              href={`tel:${current.emergencyPhone}`}
              className="flex items-center gap-3 px-3 py-2 bg-red-50 hover:bg-red-100 border border-red-100 rounded-lg transition-colors cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-full bg-[#FF1E2D] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-bold text-red-600 uppercase tracking-wide">
                  {current.emergencyTitle}
                </span>
                <span className="text-sm font-extrabold text-[#333333] group-hover:text-[#FF1E2D] transition-colors">
                  {current.emergencyPhone}
                </span>
              </div>
            </a>

            {/* Appointment Card */}
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              onClick={() => onNavigate('appointment')}
              className="flex items-center gap-3 px-3 py-2 bg-blue-50 hover:bg-blue-100 border border-[#E0EBFC] rounded-lg transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#0B4DBB] flex items-center justify-center text-white shrink-0">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500">Clinic Desk</span>
                <span className="text-sm font-bold text-[#333333] hover:text-[#0B4DBB]">
                  {current.appointment}
                </span>
              </div>
            </motion.button>

            {/* Health Checkup Card */}
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              onClick={() => onNavigate('checkups')}
              className="flex items-center gap-3 px-3 py-2 bg-teal-50 hover:bg-teal-100 border border-teal-100 rounded-lg transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-teal-600 flex items-center justify-center text-white shrink-0">
                <Stethoscope className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500">Preventive Care</span>
                <span className="text-sm font-bold text-[#333333] hover:text-[#0B4DBB]">
                  {current.checkup}
                </span>
              </div>
            </motion.button>

            {/* Find Doctor Card - Styled same as Book Appointment card */}
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              onClick={() => onNavigate('doctors')}
              className="flex items-center gap-3 px-3 py-2 bg-blue-50 hover:bg-blue-100 border border-[#E0EBFC] rounded-lg transition-colors text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#0B4DBB] flex items-center justify-center text-white shrink-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-gray-500">Expert Team</span>
                <span className={`text-sm font-bold text-[#333333] hover:text-[#0B4DBB] ${
                  lang === 'ML' ? 'font-malayalam text-xs' : ''
                }`}>
                  {current.findDoctor}
                </span>
              </div>
            </motion.button>

            {/* Language Switcher Dropdown (Desktop) */}
            <div className="relative shrink-0 select-none">
              <button 
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 border border-[#E0EBFC] rounded-lg text-sm font-bold text-[#333333] transition-colors cursor-pointer"
                title="Select Language"
              >
                <Globe className="w-4 h-4 text-[#0B4DBB]" />
                <span className={lang === 'ML' ? 'font-malayalam text-xs' : ''}>
                  {lang === 'EN' && 'English'}
                  {lang === 'ML' && 'മലയാളം'}
                  {lang === 'AR' && 'العربية'}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <>
                    {/* Backdrop to close click */}
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsLangDropdownOpen(false)} 
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute mt-1.5 w-36 bg-white border border-[#E0EBFC] rounded-xl shadow-lg py-1.5 z-40 ${
                        isRtl ? 'left-0 right-auto' : 'right-0'
                      }`}
                    >
                      {[
                        { code: 'EN', label: 'English' },
                        { code: 'ML', label: 'മലയാളം' },
                        { code: 'AR', label: 'العربية' }
                      ].map((item) => (
                        <button
                          key={item.code}
                          onClick={() => {
                            setLang(item.code)
                            setIsLangDropdownOpen(false)
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold hover:bg-blue-50 text-left transition-colors cursor-pointer ${
                            lang === item.code ? 'text-[#0B4DBB] bg-blue-50/50' : 'text-gray-700'
                          } ${item.code === 'ML' ? 'font-malayalam' : ''} ${isRtl ? 'text-right' : ''}`}
                        >
                          <span>{item.label}</span>
                          {lang === item.code && <Check className="w-3.5 h-3.5 text-[#0B4DBB]" />}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile Buttons Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button 
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
              }}
              className="p-2 border border-[#E0EBFC] rounded-lg text-gray-700 active:scale-95 transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>

        </div>

        {/* Mobile Quick Action Buttons Bar */}
        <div className="grid grid-cols-4 gap-1.5 py-2.5 border-t border-[#E0EBFC]/60 lg:hidden text-center">
          {/* Appointment button */}
          <button 
            onClick={() => onNavigate('appointment')}
            className="flex flex-col items-center justify-center p-2 bg-blue-50/50 hover:bg-blue-100 border border-[#E0EBFC] rounded-xl active:scale-95 transition-all text-center cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#0B4DBB] flex items-center justify-center text-white mb-1 shrink-0">
              <Calendar className="w-4 h-4" />
            </div>
            <span className={`text-[9px] font-extrabold text-[#333333] leading-snug ${lang === 'ML' ? 'font-malayalam' : ''}`}>
              {lang === 'EN' && 'Appointment'}
              {lang === 'ML' && 'ബുക്കിംഗ്'}
              {lang === 'AR' && 'حجز موعد'}
            </span>
          </button>

          {/* Health Checkup button */}
          <button 
            onClick={() => onNavigate('checkups')}
            className="flex flex-col items-center justify-center p-2 bg-teal-50/50 hover:bg-teal-100 border border-teal-100 rounded-xl active:scale-95 transition-all text-center cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white mb-1 shrink-0">
              <Stethoscope className="w-4 h-4" />
            </div>
            <span className={`text-[9px] font-extrabold text-[#333333] leading-snug ${lang === 'ML' ? 'font-malayalam' : ''}`}>
              {lang === 'EN' && 'Checkup'}
              {lang === 'ML' && 'ചെക്കപ്പ്'}
              {lang === 'AR' && 'فحص صحي'}
            </span>
          </button>

          {/* Find Doctor button */}
          <button 
            onClick={() => onNavigate('doctors')}
            className="flex flex-col items-center justify-center p-2 bg-blue-50/50 hover:bg-blue-100 border border-[#E0EBFC] rounded-xl active:scale-95 transition-all text-center cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-[#0B4DBB] flex items-center justify-center text-white mb-1 shrink-0">
              <UserCheck className="w-4 h-4" />
            </div>
            <span className={`text-[9px] font-extrabold text-[#333333] leading-snug ${lang === 'ML' ? 'font-malayalam' : ''}`}>
              {lang === 'EN' && 'Find Doctor'}
              {lang === 'ML' && 'ഡോക്ടർമാർ'}
              {lang === 'AR' && 'بحث طبيب'}
            </span>
          </button>

          {/* Emergency Call button */}
          <a 
            href={`tel:${current.emergencyPhone}`}
            className="flex flex-col items-center justify-center p-2 bg-red-50/50 hover:bg-red-100 border border-red-100 rounded-xl active:scale-95 transition-all text-center"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF1E2D] flex items-center justify-center text-white mb-1 shrink-0">
              <PhoneCall className="w-4 h-4 animate-bounce" />
            </div>
            <span className={`text-[9px] font-extrabold text-[#FF1E2D] leading-snug ${lang === 'ML' ? 'font-malayalam' : ''}`}>
              {lang === 'EN' && 'Emergency'}
              {lang === 'ML' && 'അടിയന്തിരം'}
              {lang === 'AR' && 'الطوارئ'}
            </span>
          </a>
        </div>

        {/* --- LEVEL 2: NAVIGATION MENU --- */}
        <div className={`hidden lg:flex items-center justify-between py-2.5 mt-0.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
          <ul className={`flex items-center gap-8 ${isRtl ? 'flex-row-reverse' : ''} ${lang === 'ML' ? 'font-malayalam font-bold' : ''}`}>
            <li>
              <button 
                onClick={() => onNavigate('home')} 
                className={`text-sm font-semibold hover:text-[#0B4DBB] hover:scale-105 transition-all cursor-pointer ${
                  currentPage === 'home' ? 'text-[#0B4DBB] font-bold border-b-2 border-[#0B4DBB] pb-1' : 'text-[#333333]'
                }`}
              >
                {current.navHome}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('about')} 
                className={`text-sm font-semibold hover:text-[#0B4DBB] hover:scale-105 transition-all cursor-pointer ${
                  currentPage === 'about' ? 'text-[#0B4DBB] font-bold border-b-2 border-[#0B4DBB] pb-1' : 'text-[#333333]'
                }`}
              >
                {current.navAbout}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('delivery')} 
                className={`text-sm font-semibold hover:text-[#0B4DBB] hover:scale-105 transition-all cursor-pointer ${
                  currentPage === 'delivery' ? 'text-[#0B4DBB] font-bold border-b-2 border-[#0B4DBB] pb-1' : 'text-[#333333]'
                }`}
              >
                {current.navServices}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('checkups')} 
                className={`text-sm font-semibold hover:text-[#0B4DBB] hover:scale-105 transition-all cursor-pointer ${
                  currentPage === 'checkups' ? 'text-[#0B4DBB] font-bold border-b-2 border-[#0B4DBB] pb-1' : 'text-[#333333]'
                }`}
              >
                {lang === 'EN' ? 'Health Checkups' : lang === 'ML' ? 'ഹെൽത്ത് ചെക്കപ്പ്' : 'الباقات الصحية'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('doctors')} 
                className={`text-sm font-semibold hover:text-[#0B4DBB] hover:scale-105 transition-all cursor-pointer ${
                  currentPage === 'doctors' ? 'text-[#0B4DBB] font-bold border-b-2 border-[#0B4DBB] pb-1' : 'text-[#333333]'
                }`}
              >
                {current.navDoctors}
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('contact')} 
                className={`text-sm font-semibold hover:text-[#0B4DBB] hover:scale-105 transition-all cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#0B4DBB] font-bold border-b-2 border-[#0B4DBB] pb-1' : 'text-[#333333]'
                }`}
              >
                {current.navContact}
              </button>
            </li>
          </ul>

          <button 
            onClick={() => onNavigate('appointment')}
            className={`px-5 py-2 bg-[#0B4DBB] hover:bg-[#073a91] text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}
          >
            {lang === 'EN' ? 'Book Consultation' : lang === 'ML' ? 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക' : 'احجز استشارة'}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-[#E0EBFC] px-4 py-4 space-y-4">
          
          <ul className="space-y-3">
            <li>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNavigate('home')
                }}
                className={`w-full text-left block text-base font-semibold hover:text-[#0B4DBB] cursor-pointer ${
                  currentPage === 'home' ? 'text-[#0B4DBB]' : 'text-[#333333]'
                } ${lang === 'ML' ? 'font-malayalam font-bold text-sm' : ''}`}
              >
                {current.navHome}
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNavigate('about')
                }}
                className={`w-full text-left block text-base font-semibold hover:text-[#0B4DBB] cursor-pointer ${
                  currentPage === 'about' ? 'text-[#0B4DBB]' : 'text-[#333333]'
                } ${lang === 'ML' ? 'font-malayalam font-bold text-sm' : ''}`}
              >
                {current.navAbout}
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNavigate('delivery')
                }}
                className={`w-full text-left block text-base font-semibold hover:text-[#0B4DBB] cursor-pointer ${
                  currentPage === 'delivery' ? 'text-[#0B4DBB]' : 'text-[#333333]'
                } ${lang === 'ML' ? 'font-malayalam font-bold text-sm' : ''}`}
              >
                {current.navServices}
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNavigate('checkups')
                }}
                className={`w-full text-left block text-base font-semibold hover:text-[#0B4DBB] cursor-pointer ${
                  currentPage === 'checkups' ? 'text-[#0B4DBB]' : 'text-[#333333]'
                } ${lang === 'ML' ? 'font-malayalam font-bold text-sm' : ''}`}
              >
                {lang === 'EN' ? 'Health Checkups' : lang === 'ML' ? 'ഹെൽത്ത് ചെക്കപ്പ്' : 'الباقات الصحية'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNavigate('doctors')
                }}
                className={`w-full text-left block text-base font-semibold hover:text-[#0B4DBB] cursor-pointer ${
                  currentPage === 'doctors' ? 'text-[#0B4DBB]' : 'text-[#333333]'
                } ${lang === 'ML' ? 'font-malayalam font-bold text-sm' : ''}`}
              >
                {current.navDoctors}
              </button>
            </li>
            <li>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false)
                  onNavigate('contact')
                }}
                className={`w-full text-left block text-base font-semibold hover:text-[#0B4DBB] cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#0B4DBB]' : 'text-[#333333]'
                } ${lang === 'ML' ? 'font-malayalam font-bold text-sm' : ''}`}
              >
                {current.navContact}
              </button>
            </li>
          </ul>

          {/* Quick Actions (Mobile Menu) */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#E0EBFC]">
            
            <button 
              onClick={() => {
                setMobileMenuOpen(false)
                onNavigate('appointment')
              }}
              className="flex flex-col items-center justify-center p-3 bg-blue-50 border border-blue-100 rounded-xl cursor-pointer"
            >
              <Calendar className="w-5 h-5 text-[#0B4DBB] mb-1" />
              <span className={`text-xs font-bold text-[#333333] text-center ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                {current.appointment}
              </span>
            </button>

            <button 
              onClick={() => {
                setMobileMenuOpen(false)
                onNavigate('checkups')
              }}
              className="flex flex-col items-center justify-center p-3 bg-teal-50 border border-teal-100 rounded-xl cursor-pointer"
            >
              <Stethoscope className="w-5 h-5 text-teal-600 mb-1" />
              <span className={`text-xs font-bold text-[#333333] text-center ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                {current.checkup}
              </span>
            </button>

          </div>

          {/* Language Selector (Mobile Menu) */}
          <div className="pt-3 border-t border-[#E0EBFC]">
            <span className={`block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2 text-left ${lang === 'ML' ? 'font-malayalam' : ''}`}>
              {lang === 'EN' ? 'Select Language' : lang === 'ML' ? 'ഭാഷ തിരഞ്ഞെടുക്കുക' : 'اختر اللغة'}
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'EN', label: 'English' },
                { code: 'ML', label: 'മലയാളം' },
                { code: 'AR', label: 'العربية' }
              ].map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    setLang(item.code)
                    setMobileMenuOpen(false)
                  }}
                  className={`py-2 text-xs font-bold border rounded-lg transition-all cursor-pointer ${
                    lang === item.code 
                      ? 'bg-blue-50 border-[#0B4DBB] text-[#0B4DBB]' 
                      : 'bg-white border-[#E0EBFC] text-gray-700 hover:bg-slate-50'
                  } ${item.code === 'ML' ? 'font-malayalam text-[10px]' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              setMobileMenuOpen(false)
              onNavigate('appointment')
            }}
            className={`w-full py-3 bg-[#0B4DBB] text-white text-center font-bold rounded-lg shadow-sm cursor-pointer ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}
          >
            {lang === 'EN' ? 'Book Consultation' : lang === 'ML' ? 'കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക' : 'احجز استشارة'}
          </button>
          
        </div>
      )}
    </header>
  )
}
