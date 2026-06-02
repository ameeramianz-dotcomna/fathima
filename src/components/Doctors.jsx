import React, { useRef, useEffect, useState } from 'react'
import { Stethoscope, Award, Calendar } from 'lucide-react'

export default function Doctors({ lang, onOpenAppointment }) {
  
  const text = {
    EN: {
      title: 'Meet Our Consulting ',
      titleSpan: 'Doctors',
      subtitle: 'Highly qualified and experienced healthcare practitioners dedicated to clinical excellence. Drag or swipe to explore.',
      btnBook: 'Schedule Appointment',
      doc1Spec: 'General Medicine & Family Clinic',
      doc1Qual: 'MBBS, MD (General Medicine)',
      doc2Spec: 'Pediatric Specialist',
      doc2Qual: 'MBBS, DCH (Pediatrics)',
      doc3Spec: 'Consultant Orthopedist',
      doc3Qual: 'MBBS, MS (Orthopedics)',
      doc4Spec: 'Consultant Paediatrician',
      doc4Qual: 'MBBS, MD (Paediatrics)',
      available: 'Available Today'
    },
    ML: {
      title: 'ഞങ്ങളുടെ കൺസൾട്ടിംഗ് ',
      titleSpan: 'ഡോക്ടർമാർ',
      subtitle: 'മികച്ച ചികിത്സാ പരിചരണത്തിനായി സമർപ്പിതരായ യോഗ്യതയുള്ള പരിചയസമ്പന്നരായ ഡോക്ടർമാർ. കാണാൻ ഡ്രാഗ് അല്ലെങ്കിൽ സ്വൈപ്പ് ചെയ്യുക.',
      btnBook: 'അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക',
      doc1Spec: 'ജനറൽ മെഡിസിൻ & ഫാമിലി ക്ലിനിക്ക്',
      doc1Qual: 'MBBS, MD (ജനറൽ മെഡിസിൻ)',
      doc2Spec: 'പീഡിയാട്രിക്സ് സ്പെഷ്യലിസ്റ്റ്',
      doc2Qual: 'MBBS, DCH (പീഡിയാട്രിക്സ്)',
      doc3Spec: 'കൺസൾട്ടന്റ് ഓർത്തോപീഡിസ്റ്റ്',
      doc3Qual: 'MBBS, MS (ഓർത്തോപീഡിക്സ്)',
      doc4Spec: 'കൺസൾട്ടന്റ് പീഡിയാട്രിക്സ്',
      doc4Qual: 'MBBS, MD (പീഡിയാട്രിക്സ്)',
      available: 'ഇന്ന് ലഭ്യമാണ്'
    },
    AR: {
      title: 'قابل أطباءنا ',
      titleSpan: 'الاستشاريين',
      subtitle: 'ممارسو رعاية صحية مؤهلون وذوو خبرة عالية مكرسون للتميز السريري. اسحب للاستكشاف.',
      btnBook: 'جدولة موعد',
      doc1Spec: 'الطب العام وطب الأسرة',
      doc1Qual: 'بكالوريوس الطب والجراحة، دكتوراه في الطب (الطب العام)',
      doc2Spec: 'أخصائي طب الأطفال',
      doc2Qual: 'بكالوريوس الطب والجراحة، دبلوم صحة الطفل (الأطفال)',
      doc3Spec: 'استشاري جراحة العظام',
      doc3Qual: 'بكالوريوس الطب والجراحة، ماجستير جراحة العظام (العظام)',
      doc4Spec: 'استشاري طب الأطفال',
      doc4Qual: 'بكالوريوس الطب والجراحة، دكتوراه طب الأطفال',
      available: 'متاح اليوم'
    }
  }

  const current = text[lang] || text['EN']

  const doctorsList = [
    {
      name: lang === 'EN' ? 'Dr. Faisal Rahman' : lang === 'ML' ? 'ഡോ. ഫൈസൽ റഹ്മാൻ' : 'د. فيصل الرحمن',
      spec: current.doc1Spec,
      qual: current.doc1Qual,
      exp: lang === 'EN' ? '15+ Years Experience' : lang === 'ML' ? '15+ വർഷത്തെ പരിചയം' : 'خبرة ١٥+ عاماً',
      initials: 'FR'
    },
    {
      name: lang === 'EN' ? 'Dr. Maryam Thomas' : lang === 'ML' ? 'ഡോ. മറിയം തോമസ്' : 'د. مريم توماس',
      spec: current.doc2Spec,
      qual: current.doc2Qual,
      exp: lang === 'EN' ? '10+ Years Experience' : lang === 'ML' ? '10+ വർഷത്തെ പരിചയം' : 'خبرة ١٠+ أعوام',
      initials: 'MT'
    },
    {
      name: lang === 'EN' ? 'Dr. Jafar Moideenkutty' : lang === 'ML' ? 'ഡോ. ജാഫർ മൊയ്‌തീൻകുട്ടി' : 'د. جعفر محي الدين كوتي',
      spec: current.doc4Spec,
      qual: current.doc4Qual,
      exp: lang === 'EN' ? '11+ Years Experience' : lang === 'ML' ? '11+ വർഷത്തെ പരിചയം' : 'خبرة ١١+ عاماً',
      initials: 'JM',
      image: '/doctor/jafar.jpg'
    },
    {
      name: lang === 'EN' ? 'Dr. Suresh Kumar' : lang === 'ML' ? 'ഡോ. സുരേഷ് കുമാർ' : 'د. സുരേഷ് കുമാർ',
      spec: current.doc3Spec,
      qual: current.doc3Qual,
      exp: lang === 'EN' ? '12+ Years Experience' : lang === 'ML' ? '12+ വർഷത്തെ പരിചയം' : 'خبرة ١٢+ عاماً',
      initials: 'SK'
    }
  ]

  // Duplicate list to guarantee seamless infinite carousel scrolling without gaps
  const carouselDoctorsList = [...doctorsList, ...doctorsList, ...doctorsList]

  const scrollRef = useRef(null)
  const [isInteracting, setIsInteracting] = useState(false)
  const dragInfo = useRef({ isDragging: false, startX: 0, scrollStart: 0 })

  // Seamless wrap boundary checking
  const handleScroll = () => {
    const container = scrollRef.current
    if (!container) return

    const singleWidth = container.scrollWidth / 3
    if (singleWidth <= 0) return

    // Wrapping when scrolling too far left (towards 0) or too far right
    if (container.scrollLeft <= 10) {
      container.scrollLeft = singleWidth
    } else if (container.scrollLeft >= singleWidth * 2 - 10) {
      container.scrollLeft = singleWidth
    }
  }

  // Set initial scroll position to middle list instance on mount
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const timer = setTimeout(() => {
      const singleWidth = container.scrollWidth / 3
      container.scrollLeft = singleWidth
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  // Auto-scroll loop using requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrameId
    let lastTime = performance.now()

    const scrollStep = (time) => {
      // Only auto-scroll when user is NOT interacting
      if (!isInteracting && !dragInfo.current.isDragging) {
        // Slow speed sliding from left to right (decreasing scrollLeft)
        container.scrollLeft -= 0.65

        const singleWidth = container.scrollWidth / 3
        if (container.scrollLeft <= 10) {
          container.scrollLeft = singleWidth
        }
      }
      lastTime = time
      animationFrameId = requestAnimationFrame(scrollStep)
    }

    animationFrameId = requestAnimationFrame(scrollStep)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isInteracting])

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    const container = scrollRef.current
    if (!container) return

    setIsInteracting(true)
    dragInfo.current.isDragging = true
    dragInfo.current.startX = e.pageX - container.offsetLeft
    dragInfo.current.scrollStart = container.scrollLeft
  }

  const handleMouseMove = (e) => {
    const container = scrollRef.current
    if (!container || !dragInfo.current.isDragging) return

    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const walk = (x - dragInfo.current.startX) * 1.5 // multiplier controls drag speed
    container.scrollLeft = dragInfo.current.scrollStart - walk
  }

  const handleMouseUpOrLeave = () => {
    dragInfo.current.isDragging = false
    setIsInteracting(false)
  }

  return (
    <section id="doctors" className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#E0EBFC]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`font-heading font-extrabold text-3xl md:text-4xl text-[#333333] ${
            lang === 'ML' ? 'font-malayalam font-bold' : ''
          }`}>
            {current.title}
            <span className="text-[#0B4DBB]">{current.titleSpan}</span>
          </h2>
          <p className={`mt-4 text-base sm:text-lg text-gray-500 leading-relaxed ${
            lang === 'ML' ? 'font-malayalam font-medium' : ''
          }`}>
            {current.subtitle}
          </p>
        </div>
      </div>

      {/* Marquee & Manual Scroll Container */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={() => setIsInteracting(true)}
        onTouchEnd={() => setIsInteracting(false)}
        className="w-full overflow-x-auto no-scrollbar mask-grad-horizontal py-4 relative cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex gap-8 w-max px-8">
          {carouselDoctorsList.map((doc, idx) => (
            <article 
              key={idx}
              className="w-[290px] md:w-[320px] shrink-0 bg-white border border-[#E0EBFC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col hover:border-[#0B4DBB]/40 text-left select-none pointer-events-auto"
            >
              
              {/* Doctor Avatar Badge */}
              <div className="h-44 bg-gradient-to-br from-blue-50 to-[#E0EBFC]/40 flex items-center justify-center relative">
                <div className="w-20 h-20 rounded-full bg-white border-2 border-[#0B4DBB]/20 shadow-inner flex items-center justify-center font-heading font-extrabold text-2xl text-[#0B4DBB] overflow-hidden">
                  {doc.image ? (
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  ) : (
                    doc.initials
                  )}
                </div>
                <div className={`absolute bottom-3 right-3 bg-emerald-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                  lang === 'ML' ? 'font-malayalam text-[8px]' : ''
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  {current.available}
                </div>
              </div>

              {/* Doctor details */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className={`font-heading font-bold text-lg text-[#333333] mb-1 leading-snug ${
                    lang === 'ML' ? 'font-malayalam font-bold' : ''
                  }`}>
                    {doc.name}
                  </h3>
                  <p className={`text-xs font-semibold text-[#0B4DBB] mb-2 ${
                    lang === 'ML' ? 'font-malayalam font-bold text-[11px]' : ''
                  }`}>{doc.spec}</p>
                  
                  <div className={`space-y-1 py-2 border-y border-gray-100 my-3 text-[11px] font-medium text-gray-500 ${
                    lang === 'ML' ? 'font-malayalam font-medium' : ''
                  }`}>
                    <p className="flex items-center gap-2">
                      <Stethoscope className="w-3.5 h-3.5 text-[#0B4DBB]" />
                      {doc.qual}
                    </p>
                    <p className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-teal-600" />
                      {doc.exp}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={onOpenAppointment}
                  className="w-full py-2 bg-blue-50 hover:bg-[#0B4DBB] text-[#0B4DBB] hover:text-white font-bold text-xs rounded-lg border border-[#E0EBFC] hover:border-transparent transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {current.btnBook}
                </button>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
