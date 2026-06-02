import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Stethoscope, PhoneCall, Award, Clock, HeartPulse } from 'lucide-react'

export default function Hero({ lang, onOpenAppointment }) {
  
  const text = {
    EN: {
      badge: 'Welcome to Fathima Medical Clinic',
      title: 'Your Trusted Healthcare Partner in ',
      titleSpan: 'Vallapuzha',
      description: 'We offer state-of-the-art diagnostic facilities, experienced consulting practitioners, and dedicated nursing services to safeguard your well-being 24/7.',
      ctaPrimary: 'Book Appointment',
      ctaSecondary: 'Emergency Contact',
      card1Title: 'Comprehensive Diagnostics',
      card1Desc: 'State-of-the-art laboratory and screening tools.',
      card2Title: '24/7 Pharmacist Desk',
      card2Desc: 'Get authentic prescriptions and wellness advice.',
      card3Title: 'Experienced Doctors',
      card3Desc: 'Consult highly experienced healthcare specialists.',
      labelHours: 'Clinic Hours',
      hours: 'Mon - Sat: 8:00 AM - 10:00 PM',
      labelCall: 'Direct Hotline',
      phone: '+91 8086537077'
    },
    AR: {
      badge: 'مرحباً بكم في عيادة فاطمة الطبية',
      title: 'شريكك الموثوق في الرعاية الصحية في ',
      titleSpan: 'فالابوزا',
      description: 'نحن نقدم مرافق تشخيصية حديثة، وممارسين استشاريين ذوي خبرة، وخدمات تمريض مخصصة لحماية سلامتك على مدار الساعة طوال أيام الأسبوع.',
      ctaPrimary: 'حجز موعد',
      ctaSecondary: 'اتصال الطوارئ',
      card1Title: 'تشخيص شامل',
      card1Desc: 'أحدث الأدوات والتحاليل المخبرية المتطورة.',
      card2Title: 'مكتب الصيدلة 24/7',
      card2Desc: 'احصل على الأدوية الأصلية والنصائح الصحية.',
      card3Title: 'أطباء ذوو خبرة',
      card3Desc: 'استشر أخصائيي الرعاية الصحية ذوي الخبرة العالية.',
      labelHours: 'ساعات العمل',
      hours: 'الاثنين - السبت: 8:00 ص - 10:00 م',
      labelCall: 'الخط الساخن المباشر',
      phone: '+91 8086537077'
    }
  }

  const current = text[lang]
  const isRtl = lang === 'AR'

  return (
    <section id="hero" className="relative bg-white py-12 md:py-24 overflow-hidden border-b border-[#E0EBFC]/60">
      
      {/* Background soft glowing elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero grid layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Left: Text Content block */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-[#E0EBFC] rounded-full text-xs md:text-sm font-semibold text-[#0B4DBB] mb-6 self-start"
            >
              <Award className="w-4 h-4 text-[#0B4DBB]" />
              {current.badge}
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#333333] tracking-tight leading-tight"
            >
              {current.title}
              <span className="text-[#0B4DBB] relative inline-block">
                {current.titleSpan}
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-[#0B4DBB]/10 -z-10" />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-gray-500 max-w-2xl leading-relaxed"
            >
              {current.description}
            </motion.p>

            {/* Interactive Call to Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button 
                onClick={onOpenAppointment}
                className="px-6 py-3 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {current.ctaPrimary}
              </button>
              <a 
                href={`tel:${current.phone}`}
                className="px-6 py-3 bg-[#FF1E2D] hover:bg-[#d61825] text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5" />
                {current.ctaSecondary}
              </a>
            </motion.div>

            {/* Quick Contact & Hours Strip */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 border border-[#E0EBFC] rounded-xl bg-gray-50/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100/80 flex items-center justify-center text-[#0B4DBB] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">{current.labelHours}</h4>
                  <p className="text-sm font-bold text-[#333333]">{current.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-red-100/80 flex items-center justify-center text-[#FF1E2D] shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">{current.labelCall}</h4>
                  <a href={`tel:${current.phone}`} className="text-sm font-extrabold text-[#333333] hover:text-[#0B4DBB] transition-colors">
                    {current.phone}
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: Hospital UI cards illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Main graphic wrapping medical cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-sm"
            >
              
              {/* Custom background circle */}
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3" />
              
              {/* Stacked clinical info cards */}
              <div className="relative bg-white border border-[#E0EBFC] p-6 rounded-3xl shadow-lg space-y-5">
                
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Live Desk Active</span>
                  </div>
                  <HeartPulse className="w-5 h-5 text-[#0B4DBB]" />
                </div>

                {/* Card 1 */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-blue-50/50 border border-transparent hover:border-[#E0EBFC] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-[#0B4DBB] shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-[#333333]">{current.card1Title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{current.card1Desc}</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-teal-50/50 border border-transparent hover:border-[#E0EBFC] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-[#333333]">{current.card2Title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{current.card2Desc}</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-indigo-50/50 border border-transparent hover:border-[#E0EBFC] transition-all">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-sm font-bold text-[#333333]">{current.card3Title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{current.card3Desc}</p>
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}
