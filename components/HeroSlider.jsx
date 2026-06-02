import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar, PhoneCall, HeartPulse, ShieldAlert, Award, Clock } from 'lucide-react'

export default function HeroSlider({ lang, onOpenAppointment }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const autoplayTimer = useRef(null)

  const slides = [
    {
      desktopImage: '/herosection/a1.png',
      mobileImage: '/herosection/a2.png',
      text: {
        EN: {
          title: 'Advanced Healthcare for Everyone',
          subtitle: 'Providing world-class medical care with experienced specialists and modern technology.',
          btnText: 'Book Appointment'
        },
        ML: {
          title: 'എല്ലാവർക്കും അത്യാധുനിക ആരോഗ്യ പരിചരണം',
          subtitle: 'വിദഗ്ദ്ധരായ ഡോക്ടർമാരും അത്യാധുനിക സാങ്കേതികവിദ്യയുമായി ലോകോത്തര നിലവാരമുള്ള മെഡിക്കൽ പരിചരണം നൽകുന്നു.',
          btnText: 'അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക'
        },
        AR: {
          title: 'رعاية صحية متقدمة للجميع',
          subtitle: 'تقديم رعاية طبية ذات مستوى عالمي مع أخصائيين ذوي خبرة وأحدث التقنيات.',
          btnText: 'حجز موعد'
        }
      }
    },
    {
      desktopImage: '/herosection/b1.png',
      mobileImage: '/herosection/b2.png',
      text: {
        EN: {
          title: 'Expert Eye Care Services',
          subtitle: 'Comprehensive eye examinations and advanced vision treatments for all ages.',
          btnText: 'Find a Specialist'
        },
        ML: {
          title: 'വിദഗ്ദ്ധ നേത്രരോഗ ചികിത്സാ സേവനങ്ങൾ',
          subtitle: 'എല്ലാ പ്രായക്കാർക്കും സമഗ്രമായ നേത്ര പരിശോധനകളും നൂതന കാഴ്ച ചികിത്സകളും.',
          btnText: 'സ്പെഷ്യലിസ്റ്റിനെ കണ്ടെത്തുക'
        },
        AR: {
          title: 'خدمات رعاية العيون المتخصصة',
          subtitle: 'فحوصات شاملة للعيون وعلاجات متقدمة للنظر لجميع الأعمار.',
          btnText: 'ابحث عن أخصائي'
        }
      }
    },
    {
      desktopImage: '/herosection/c1.png',
      mobileImage: '/herosection/c2.png',
      text: {
        EN: {
          title: 'Trusted Medical Professionals',
          subtitle: 'Personalized healthcare solutions with compassionate and experienced doctors.',
          btnText: 'Learn More'
        },
        ML: {
          title: 'വിശ്വസ്തരായ മെഡിക്കൽ വിദഗ്ദ്ധർ',
          subtitle: 'പരിചയസമ്പന്നരും കാരുണ്യമനസ്കരുമായ ഡോക്ടർമാരോടൊപ്പം വ്യക്തിഗതമാക്കിയ ആരോഗ്യ പരിഹാരങ്ങൾ.',
          btnText: 'കൂടുതൽ അറിയുക'
        },
        AR: {
          title: 'أخصائيو رعاية طبية موثوقون',
          subtitle: 'حلول رعاية صحية مخصصة بأيدي أطباء رحماء وذوي خبرة.',
          btnText: 'معرفة المزيد'
        }
      }
    }
  ]

  // Identify specific local pharmacy and center services
  const pharmacyServices = [
    { en: '24 Hours Chemists', ml: '24 മണിക്കൂർ ഫാർമസി' },
    { en: 'Chemist Home Delivery', ml: 'ഹോം ഡെലിവറി സേവനം' },
    { en: 'The Arya Vaidya Pharmacy', ml: 'ആര്യ വൈദ്യ ഫാർമസി' },
    { en: 'Himalaya Wellness', ml: 'ഹിമാലയ വെൽനസ്' },
    { en: 'Jan Aushadhi Kendra', ml: 'ജൻ ഔഷധി കേന്ദ്രം' },
    { en: 'Thulasi Chemists', ml: 'തുളസി കെമിസ്റ്റ്സ്' },
    { en: 'Karunya Community Pharmacy', ml: 'കാരുണ്യ ഫാർമസി' }
  ]

  // Detect mobile viewport on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Manage Autoplay timer with Hover Pause logic
  useEffect(() => {
    if (!isHovered) {
      autoplayTimer.current = setInterval(() => {
        handleNext()
      }, 3000)
    } else {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current)
      }
    }

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current)
      }
    }
  }, [activeIndex, isHovered])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const currentSlide = slides[activeIndex]
  const content = currentSlide.text[lang] || currentSlide.text['EN']
  const isRtl = lang === 'AR'

  return (
    <section 
      id="hero"
      className="relative w-full overflow-hidden bg-slate-900 border-b border-[#E0EBFC]/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Viewport heights: Desktop 650px, Mobile 450px */}
      <div className="relative w-full h-[450px] md:h-[650px] overflow-hidden flex items-center">
        
        {/* Background Image Layer with Crossfade and breathing Ken Burns Scale Effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            {/* The actual image slowly scales up over slide lifespan */}
            <motion.img
              src={isMobile ? currentSlide.mobileImage : currentSlide.desktopImage}
              alt="Fathima Medical Hero"
              initial={{ scale: 1.0 }}
              animate={{ scale: 1.08 }}
              transition={{ scale: { duration: 3.5, ease: 'easeOut' } }}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Premium Dark Overlay with slight clinical teal tint for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 md:from-black/85 md:via-black/60 md:to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Floating Ambient Glow */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl text-white ${isRtl ? 'text-right mr-auto' : 'text-left'}`}>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                className="space-y-6"
              >
                {/* Active Service Badge in Malayalam Font */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/25 border border-blue-400/40 rounded-full text-xs md:text-sm font-semibold text-blue-200 self-start backdrop-blur-sm ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}
                >
                  <HeartPulse className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>
                    {lang === 'EN' && 'Fathima Medical Center • Vallapuzha'}
                    {lang === 'ML' && 'ഫാത്തിമ മെഡിക്കൽ സെന്റർ • വല്ലപ്പുഴ'}
                    {lang === 'AR' && 'مركز فاطمة الطبي • فالابوزا'}
                  </span>
                </motion.div>

                {/* Main Heading Text */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight drop-shadow-md text-white ${
                    lang === 'ML' ? 'font-malayalam leading-relaxed' : ''
                  }`}
                >
                  {content.title}
                </motion.h1>

                {/* Subtitle Text */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-sm ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}
                >
                  {content.subtitle}
                </motion.p>

                {/* CTA Button Block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <button
                    onClick={onOpenAppointment}
                    className={`w-full sm:w-auto px-6 py-3.5 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 ${
                      lang === 'ML' ? 'font-malayalam' : ''
                    }`}
                  >
                    <Calendar className="w-5 h-5 shrink-0" />
                    <span>{content.btnText}</span>
                  </button>

                  <a
                    href="tel:+918086537077"
                    className={`w-full sm:w-auto px-6 py-3.5 bg-[#FF1E2D] hover:bg-[#d61825] text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${
                      lang === 'ML' ? 'font-malayalam' : ''
                    }`}
                  >
                    <PhoneCall className="w-5 h-5 shrink-0" />
                    <span>
                      {lang === 'EN' && 'Emergency Contact'}
                      {lang === 'ML' && 'അടിയന്തിര നമ്പർ'}
                      {lang === 'AR' && 'اتصال الطوارئ'}
                    </span>
                  </a>
                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Absolute Previous Navigation Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/20 hover:bg-[#0B4DBB] hover:border-transparent text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer ${
            isRtl ? 'right-4 md:right-8' : 'left-4 md:left-8'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Absolute Next Navigation Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className={`absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 bg-black/20 hover:bg-[#0B4DBB] hover:border-transparent text-white flex items-center justify-center backdrop-blur-md transition-all duration-300 cursor-pointer ${
            isRtl ? 'left-4 md:left-8' : 'right-4 md:right-8'
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots at Bottom Center */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx 
                  ? 'w-8 bg-[#0B4DBB] shadow-md shadow-blue-500/40' 
                  : 'w-2.5 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Premium Integrated Malayalam & English Pharmacy Services Ticker */}
      <div className="w-full bg-[#FFFFFF] border-t border-[#E0EBFC] py-3.5 relative overflow-hidden z-10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 md:flex-row flex-col">
          
          {/* Section Badge */}
          <div className="flex items-center gap-2 shrink-0 md:self-start">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF1E2D] animate-pulse" />
            <span className={`text-[11px] font-extrabold uppercase text-[#0B4DBB] tracking-wider ${
              lang === 'ML' ? 'font-malayalam text-xs' : ''
            }`}>
              {lang === 'EN' && 'Authorized Pharmacy Counter'}
              {lang === 'ML' && 'അംഗീകൃത ഫാർമസി കൗണ്ടർ'}
              {lang === 'AR' && 'صيدلية معتمدة'}
            </span>
          </div>

          {/* Infinite Scrolling Ticker Frame */}
          <div className="flex-1 w-full overflow-hidden relative">
            
            {/* Left and Right side fades for premium feel */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Moving text track */}
            <div className="flex items-center whitespace-nowrap gap-12 animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused] py-0.5">
              
              {/* Repeating list twice to create endless loop */}
              {[...pharmacyServices, ...pharmacyServices].map((service, idx) => (
                <div key={idx} className="inline-flex items-center gap-2 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                  <span className="text-gray-700 text-xs md:text-sm">{service.en}</span>
                  <span className="text-[#0B4DBB] text-xs font-bold font-malayalam">({service.ml})</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>

      {/* Styled animation keyframes for the marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  )
}
