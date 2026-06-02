import React from 'react'
import { motion } from 'framer-motion'
import { Stethoscope, Award, Calendar } from 'lucide-react'

export default function Doctors({ lang, onOpenAppointment }) {
  
  const text = {
    EN: {
      title: 'Meet Our Consulting ',
      titleSpan: 'Doctors',
      subtitle: 'Highly qualified and experienced healthcare practitioners dedicated to clinical excellence.',
      btnBook: 'Schedule Appointment',
      doc1Spec: 'General Medicine & Family Clinic',
      doc1Qual: 'MBBS, MD (General Medicine)',
      doc2Spec: 'Pediatric Specialist',
      doc2Qual: 'MBBS, DCH (Pediatrics)',
      doc3Spec: 'Consultant Orthopedist',
      doc3Qual: 'MBBS, MS (Orthopedics)',
      available: 'Available Today'
    },
    ML: {
      title: 'ഞങ്ങളുടെ കൺസൾട്ടിംഗ് ',
      titleSpan: 'ഡോക്ടർമാർ',
      subtitle: 'മികച്ച ചികിത്സാ പരിചരണത്തിനായി സമർപ്പിതരായ യോഗ്യതയുള്ള പരിചയസമ്പന്നരായ ഡോക്ടർമാർ.',
      btnBook: 'അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക',
      doc1Spec: 'ജനറൽ മെഡിസിൻ & ഫാമിലി ക്ലിനിക്ക്',
      doc1Qual: 'MBBS, MD (ജനറൽ മെഡിസിൻ)',
      doc2Spec: 'പീഡിയാട്രിക്സ് സ്പെഷ്യലിസ്റ്റ്',
      doc2Qual: 'MBBS, DCH (പീഡിയാട്രിക്സ്)',
      doc3Spec: 'കൺസൾട്ടന്റ് ഓർത്തോപീഡിസ്റ്റ്',
      doc3Qual: 'MBBS, MS (ഓർത്തോപീഡിക്സ്)',
      available: 'ഇന്ന് ലഭ്യമാണ്'
    },
    AR: {
      title: 'قابل أطباءنا ',
      titleSpan: 'الاستشاريين',
      subtitle: 'ممارسو رعاية صحية مؤهلون وذوو خبرة عالية مكرسون للتميز السريري.',
      btnBook: 'جدولة موعد',
      doc1Spec: 'الطب العام وطب الأسرة',
      doc1Qual: 'بكالوريوس الطب والجراحة، دكتوراه في الطب (الطب العام)',
      doc2Spec: 'أخصائي طب الأطفال',
      doc2Qual: 'بكالوريوس الطب والجراحة، دبلوم صحة الطفل (الأطفال)',
      doc3Spec: 'استشاري جراحة العظام',
      doc3Qual: 'بكالوريوس الطب والجراحة، ماجستير جراحة العظام (العظام)',
      available: 'متاح اليوم'
    }
  }

  const current = text[lang]

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
      name: lang === 'EN' ? 'Dr. Suresh Kumar' : lang === 'ML' ? 'ഡോ. സുരേഷ് കുമാർ' : 'د. سوريш كومار',
      spec: current.doc3Spec,
      qual: current.doc3Qual,
      exp: lang === 'EN' ? '12+ Years Experience' : lang === 'ML' ? '12+ വർഷത്തെ പരിചയം' : 'خبرة ١٢+ عاماً',
      initials: 'SK'
    }
  ]

  return (
    <section id="doctors" className="bg-[#FFFFFF] py-16 md:py-24 border-b border-[#E0EBFC]/60">
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

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsList.map((doc, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-[#E0EBFC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col hover:border-[#0B4DBB]/40 text-left"
            >
              
              {/* Doctor Avatar Badge (Aesthetic Medical Icon / Initials Block) */}
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

              {/* Doctor details */}
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
                  </div>
                </div>

                <button 
                  onClick={onOpenAppointment}
                  className={`w-full py-2.5 bg-blue-50 hover:bg-[#0B4DBB] text-[#0B4DBB] hover:text-white font-bold text-sm rounded-lg border border-[#E0EBFC] hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  {current.btnBook}
                </button>

              </div>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
