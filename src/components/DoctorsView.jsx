import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Award, Calendar, Search, Star } from 'lucide-react'

export default function DoctorsView({ lang, onNavigate }) {
  const [activeDept, setActiveDept] = useState('All')

  const text = {
    EN: {
      title: 'Our Consulting Doctors',
      tagline: 'Highly qualified specialists dedicated to community clinical excellence.',
      btnBook: 'Schedule Appointment',
      doc1Spec: 'General Medicine & Family Clinic',
      doc1Qual: 'MBBS, MD (General Medicine)',
      doc2Spec: 'Pediatric Specialist',
      doc2Qual: 'MBBS, DCH (Pediatrics)',
      doc3Spec: 'Consultant Orthopedist',
      doc3Qual: 'MBBS, MS (Orthopedics)',
      available: 'Available Today',
      deptAll: 'All Specialties',
      deptGen: 'General Medicine',
      deptPedi: 'Pediatrics',
      deptOrtho: 'Orthopedics'
    },
    ML: {
      title: 'ഞങ്ങളുടെ ഡോക്ടർമാർ',
      tagline: 'മികച്ച പരിചരണത്തിനായി സമർപ്പിതരായ യോഗ്യതയുള്ള വിദഗ്ദ്ധ ഡോക്ടർമാർ.',
      btnBook: 'ബുക്കിംഗ് ഷെഡ്യൂൾ ചെയ്യുക',
      doc1Spec: 'ജനറൽ മെഡിസിൻ & ഫാമിലി ക്ലിനിക്ക്',
      doc1Qual: 'MBBS, MD (ജനറൽ മെഡിസിൻ)',
      doc2Spec: 'പീഡിയാട്രിക്സ് സ്പെഷ്യലിസ്റ്റ്',
      doc2Qual: 'MBBS, DCH (പീഡിയാട്രിക്സ്)',
      doc3Spec: 'കൺസൾട്ടന്റ് ഓർത്തോപീഡിസ്റ്റ്',
      doc3Qual: 'MBBS, MS (ഓർത്തോപീഡിക്സ്)',
      available: 'ഇന്ന് ലഭ്യമാണ്',
      deptAll: 'എല്ലാ വിഭാഗങ്ങളും',
      deptGen: 'ജനറൽ മെഡിസിൻ',
      deptPedi: 'പീഡിയാട്രിക്സ്',
      deptOrtho: 'ഓർത്തോപീഡിക്സ്'
    },
    AR: {
      title: 'أطباؤنا الاستشاريون',
      tagline: 'أخصائيون ذوو خبرة عالية مكرسون للتميز السريري ورعاية المجتمع.',
      btnBook: 'جدولة موعد الآن',
      doc1Spec: 'الطب العام وطب الأسرة',
      doc1Qual: 'بكالوريوس الطب والجراحة، دكتوراه في الطب (الطب العام)',
      doc2Spec: 'أخصائي طب الأطفال',
      doc2Qual: 'بكالوريوس الطب والجراحة، دبلوم صحة الطفل (الأطفال)',
      doc3Spec: 'استشاري جراحة العظام',
      doc3Qual: 'بكالوريوس الطب والجراحة، ماجستير جراحة العظام (العظام)',
      available: 'متاح اليوم',
      deptAll: 'جميع التخصصات',
      deptGen: 'الطب العام',
      deptPedi: 'طب الأطفال',
      deptOrtho: 'جراحة العظام'
    }
  }

  const current = text[lang] || text['EN']

  const depts = [
    { code: 'All', label: current.deptAll },
    { code: 'General', label: current.deptGen },
    { code: 'Pediatrics', label: current.deptPedi },
    { code: 'Orthopedics', label: current.deptOrtho }
  ]

  const doctorsList = [
    {
      name: lang === 'EN' ? 'Dr. Faisal Rahman' : lang === 'ML' ? 'ഡോ. ഫൈസൽ റഹ്മാൻ' : 'د. فيصل الرحمن',
      dept: 'General',
      spec: current.doc1Spec,
      qual: current.doc1Qual,
      exp: lang === 'EN' ? '15+ Years Experience' : lang === 'ML' ? '15+ വർഷത്തെ പരിചയം' : 'خبرة ١٥+ عاماً',
      recommend: lang === 'EN' ? '98% Recommended (120 Ratings)' : lang === 'ML' ? '98% ശുപാർശ ചെയ്തത് (120 റേറ്റിംഗുകൾ)' : '٩٨٪ موصى به (١٢٠ تقييم)',
      initials: 'FR'
    },
    {
      name: lang === 'EN' ? 'Dr. Maryam Thomas' : lang === 'ML' ? 'ഡോ. മറിയം തോമസ്' : 'د. مريم توماس',
      dept: 'Pediatrics',
      spec: current.doc2Spec,
      qual: current.doc2Qual,
      exp: lang === 'EN' ? '10+ Years Experience' : lang === 'ML' ? '10+ വർഷത്തെ പരിചയം' : 'خبرة ١٠+ أعوام',
      recommend: lang === 'EN' ? '96% Recommended (85 Ratings)' : lang === 'ML' ? '96% ശുപാർശ ചെയ്തത് (85 റേറ്റിംഗുകൾ)' : '٩٦٪ موصى به (٨٥ تقييم)',
      initials: 'MT'
    },
    {
      name: lang === 'EN' ? 'Dr. Jafar Moideenkutty' : lang === 'ML' ? 'ഡോ. ജാഫർ മൊയ്‌തീൻകുട്ടി' : 'د. جعفر محي الدين كوتي',
      dept: 'Pediatrics',
      spec: lang === 'EN' ? 'Consultant Paediatrician' : lang === 'ML' ? 'കൺസൾട്ടന്റ് പീഡിയാട്രിക്സ്' : 'استشاري طب الأطفال',
      qual: 'MBBS, MD (Paediatrics)',
      exp: lang === 'EN' ? '11+ Years Experience' : lang === 'ML' ? '11+ വർഷത്തെ പരിചയം' : 'خبرة ١١+ عاماً',
      recommend: lang === 'EN' ? '99% Recommended (98 Ratings)' : lang === 'ML' ? '99% ശുപാർശ ചെയ്തത് (98 റേറ്റിംഗുകൾ)' : '٩٩٪ موصى به (٩٨ تقييم)',
      initials: 'JM',
      image: '/doctor/jafar.jpg'
    },
    {
      name: lang === 'EN' ? 'Dr. Suresh Kumar' : lang === 'ML' ? 'ഡോ. സുരേഷ് കുമാർ' : 'د. سوريش كومار',
      dept: 'Orthopedics',
      spec: current.doc3Spec,
      qual: current.doc3Qual,
      exp: lang === 'EN' ? '12+ Years Experience' : lang === 'ML' ? '12+ വർഷത്തെ പരിചയം' : 'خبرة ١٢+ عاماً',
      recommend: lang === 'EN' ? '97% Recommended (110 Ratings)' : lang === 'ML' ? '97% ശുപാർശ ചെയ്തത് (110 റേറ്റിംഗുകൾ)' : '٩٧٪ موصى به (١١٠ تقييم)',
      initials: 'SK'
    }
  ]

  const filteredDoctors = activeDept === 'All' 
    ? doctorsList 
    : doctorsList.filter(doc => doc.dept === activeDept)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left">
      
      {/* View Header with background image and premium gradient overlay */}
      <div className="relative w-full rounded-3xl overflow-hidden mb-12 h-64 md:h-72 flex items-center justify-center text-center shadow-md border border-[#E0EBFC]">
        {/* Background Image */}
        <img 
          src="/herosection/b1.png" 
          alt="Consulting Doctors Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        {/* Deep blue gradient overlay with logo-matching primary blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4DBB]/95 via-[#0B4DBB]/85 to-blue-950/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 py-8 text-white text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-white mb-4 backdrop-blur-sm">
            <Stethoscope className="w-3.5 h-3.5 text-white" />
            {lang === 'EN' && 'Expert Medical Consultants'}
            {lang === 'ML' && 'കൺസൾട്ടിംഗ് ഡോക്ടർമാർ'}
            {lang === 'AR' && 'الاستشاريون الطبيون المعتمدون'}
          </span>
          <h1 className={`font-heading font-extrabold text-3xl md:text-4xl text-white mb-3 drop-shadow-sm leading-tight ${
            lang === 'ML' ? 'font-malayalam leading-relaxed' : ''
          }`}>
            {current.title}
          </h1>
          <p className={`text-blue-100 text-xs md:text-sm leading-relaxed max-w-lg mx-auto ${
            lang === 'ML' ? 'font-malayalam font-medium' : ''
          }`}>
            {current.tagline}
          </p>
        </div>
      </div>

      {/* Specialty Filter Segmented Badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {depts.map((d) => (
          <button
            key={d.code}
            onClick={() => setActiveDept(d.code)}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all border cursor-pointer ${
              activeDept === d.code 
                ? 'bg-[#0B4DBB] text-white border-transparent shadow-md' 
                : 'bg-white text-gray-600 border-[#E0EBFC] hover:border-[#0B4DBB]/40'
            } ${lang === 'ML' ? 'font-malayalam font-bold text-xs' : ''}`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Dynamic Doctors Cards Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDoctors.map((doc, idx) => (
          <motion.article 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-[#E0EBFC] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col hover:border-[#0B4DBB]/40 text-left"
          >
            
            {/* Doctor Avatar Block */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-[#E0EBFC]/40 flex items-center justify-center relative">
              <div className="w-24 h-24 rounded-full bg-white border-2 border-[#0B4DBB]/20 shadow-inner flex items-center justify-center font-heading font-extrabold text-3xl text-[#0B4DBB] overflow-hidden">
                {doc.image ? (
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                ) : (
                  doc.initials
                )}
              </div>
              <div className={`absolute bottom-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                lang === 'ML' ? 'font-malayalam text-[9px]' : ''
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                {current.available}
              </div>
            </div>

            {/* Doctor Detail and booking button */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              
              <div>
                <h3 className={`font-heading font-bold text-xl text-[#333333] mb-1 ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {doc.name}
                </h3>
                <p className={`text-sm font-semibold text-[#0B4DBB] mb-2 ${
                  lang === 'ML' ? 'font-malayalam font-bold text-xs' : ''
                }`}>{doc.spec}</p>
                
                <div className={`space-y-1.5 py-3 border-y border-gray-100 my-4 text-xs font-medium text-gray-500 ${
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
                  {doc.recommend && (
                    <p className="flex items-center gap-2 text-emerald-600 font-bold">
                      <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                      {doc.recommend}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <button 
                  onClick={() => onNavigate('appointment', { doctor: doc.initials })}
                  className={`flex-grow py-2.5 bg-blue-50 hover:bg-[#0B4DBB] text-[#0B4DBB] hover:text-white font-bold text-sm rounded-lg border border-[#E0EBFC] hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  {current.btnBook}
                </button>
                <a 
                  href={`https://wa.me/918086537077?text=${encodeURIComponent(
                    `Hello Fathima Medical Center, I would like to inquire/book an appointment with ${doc.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-emerald-50 hover:bg-emerald-500 border border-emerald-100 hover:border-transparent text-emerald-600 hover:text-white rounded-lg flex items-center justify-center shrink-0 transition-all active:scale-95 cursor-pointer"
                  title="Chat directly on WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.597-1.002-5.04-2.833-6.87C16.425 2.103 13.99 1.1 11.39 1.1 5.99 1.1 1.588 5.497 1.586 10.902c-.001 1.516.402 2.999 1.168 4.309l-1.018 3.715 3.812-1.001a9.757 9.757 0 0 0 4.509 1.229zm10.967-7.46c-.29-.145-1.719-.848-1.984-.944-.266-.097-.459-.145-.652.145-.193.29-.747.944-.916 1.137-.168.193-.338.217-.628.072-.29-.145-1.223-.45-2.33-1.439-.86-.767-1.44-1.716-1.609-2.006-.168-.29-.018-.447.127-.591.13-.13.29-.338.434-.507.145-.168.193-.29.29-.483.096-.193.048-.361-.024-.507-.072-.145-.652-1.57-.893-2.148-.235-.572-.472-.495-.652-.504-.168-.008-.362-.01-.555-.01-.193 0-.507.073-.772.362-.266.29-1.013.99-1.013 2.415 0 1.425 1.037 2.801 1.182 2.994.145.193 2.04 3.115 4.94 4.373.688.298 1.226.477 1.646.61.692.22 1.32.19 1.817.115.553-.083 1.719-.702 1.96-1.378.24-.677.24-1.258.17-1.378-.073-.12-.266-.194-.555-.339z"/>
                  </svg>
                </a>
              </div>

            </div>

          </motion.article>
        ))}
      </div>

    </div>
  )
}
