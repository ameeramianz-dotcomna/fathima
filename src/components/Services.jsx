import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, 
  Baby, 
  Activity, 
  ActivitySquare, 
  Layers, 
  PlusSquare 
} from 'lucide-react'

export default function Services({ lang }) {
  
  const text = {
    EN: {
      title: 'Our Medical ',
      titleSpan: 'Specialties',
      subtitle: 'Providing professional primary care, clinical testing, and pediatric services for Vallapuzha families.',
      service1: 'General Medicine',
      service1Desc: 'Routine checkups, chronic disease counseling, and generic health prescriptions.',
      service2: 'Pediatric Care',
      service2Desc: 'Gentle vaccinations, wellness tracking, and pediatric checkups for children.',
      service3: 'Orthopedic Support',
      service3Desc: 'Bone density checks, joint pain treatments, and orthopedic support braces.',
      service4: 'Diagnostic Laboratory',
      service4Desc: 'Precise blood panels, biochemistry tests, and rapid diagnostic reports.',
      service5: 'Emergency Stabilization',
      service5Desc: 'Immediate triage care, wound dressings, and emergency stabilizer actions.',
      service6: 'Apothecary Dispensing',
      service6Desc: 'Authentic prescription drug supply with clinical dosage checks.'
    },
    ML: {
      title: 'ഞങ്ങളുടെ മെഡിക്കൽ ',
      titleSpan: 'പ്രത്യേകതകൾ',
      subtitle: 'വല്ലപ്പുഴയിലെ കുടുംബങ്ങൾക്കായി പ്രൊഫഷണൽ പ്രൈമറി കെയർ, ക്ലിനിക്കൽ പരിശോധനകൾ, ശിശുരോഗ സേവനങ്ങൾ എന്നിവ നൽകുന്നു.',
      service1: 'ജനറൽ മെഡിസിൻ',
      service1Desc: 'പതിവ് ചെക്കപ്പുകൾ, വിട്ടുമാറാത്ത രോഗങ്ങൾക്കുള്ള കൗൺസിലിംഗ്, മരുന്ന് കുറിപ്പടികൾ.',
      service2: 'ശിശുരോഗ പരിചരണം',
      service2Desc: 'കുട്ടികൾക്കായുള്ള വാക്സിനേഷനുകൾ, ആരോഗ്യ നിരീക്ഷണം, കൃത്യമായ ചെക്കപ്പുകൾ.',
      service3: 'ഓർത്തോപീഡിക് വിഭാഗം',
      service3Desc: 'എല്ലുകളുടെ സാന്ദ്രത പരിശോധന, സന്ധി വേദന ചികിത്സകൾ, ഓർത്തോപീഡിക് സപ്പോർട്ട്.',
      service4: 'ഡയഗ്നോസ്റ്റിക് ലബോറട്ടറി',
      service4Desc: 'കൃത്യമായ രക്തപരിശോധനകൾ, ബയോകെമിസ്ട്രി ലാബ് റിപ്പോർട്ടുകൾ.',
      service5: 'അടിയന്തിര പ്രാഥമിക ശുശ്രൂഷ',
      service5Desc: 'പെട്ടെന്നുള്ള മുറിവ് ഉണക്കൽ, അടിയന്തിര പ്രാഥമിക ചികിത്സകൾ.',
      service6: 'ഫാർമസി വിഭാഗം',
      service6Desc: 'കൃത്യമായ അളവിലുള്ള ഡോസേജ് പരിശോധനയോടെയുള്ള യഥാർത്ഥ മരുന്നുകളുടെ വിതരണം.'
    },
    AR: {
      title: 'تخصصاتنا ',
      titleSpan: 'الطبية',
      subtitle: 'نقدم الرعاية الأولية المهنية، الفحوصات المخبرية، وخدمات طب الأطفال للعائلات في فالابوزا.',
      service1: 'الطب العام',
      service1Desc: 'الفحوصات الروتينية، واستشارات الأمراض المزمنة، والوصفات الطبية العامة.',
      service2: 'رعاية الأطفال',
      service2Desc: 'التطعيمات اللطيفة، ومتابعة نمو الطفل، والفحوصات الدورية للأطفال.',
      service3: 'دعم العظام',
      service3Desc: 'فحوصات كثافة العظام، وعلاج آلام المفاصل، ومشدات العظام الداعمة.',
      service4: 'مختبر التشخيص',
      service4Desc: 'تحاليل الدم الدقيقة، اختبارات الكيمياء الحيوية، والتقارير المخبرية السريعة.',
      service5: 'تثبيت الطوارئ',
      service5Desc: 'رعاية الطوارئ الفورية، وتضميد الجروح، وتثبيت الحالات الحرجة.',
      service6: 'صرف الأدوية',
      service6Desc: 'توفير الأدوية الموصوفة الأصلية مع مراجعة الجرعات الدوائية.'
    }
  }

  const current = text[lang]
  const isRtl = lang === 'AR'

  const list = [
    { icon: Heart, color: 'text-[#0B4DBB] bg-blue-50 border-blue-100', title: current.service1, desc: current.service1Desc },
    { icon: Baby, color: 'text-pink-600 bg-pink-50 border-pink-100', title: current.service2, desc: current.service2Desc },
    { icon: ActivitySquare, color: 'text-indigo-600 bg-indigo-50 border-indigo-100', title: current.service3, desc: current.service3Desc },
    { icon: Layers, color: 'text-teal-600 bg-teal-50 border-teal-100', title: current.service4, desc: current.service4Desc },
    { icon: PlusSquare, color: 'text-[#FF1E2D] bg-red-50 border-red-100', title: current.service5, desc: current.service5Desc },
    { icon: Activity, color: 'text-emerald-600 bg-emerald-50 border-emerald-100', title: current.service6, desc: current.service6Desc }
  ]

  return (
    <section id="services" className="bg-white py-16 md:py-24 border-b border-[#E0EBFC]/60">
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

        {/* Grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, shadow: 'md' }}
              className="bg-white border border-[#E0EBFC] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-left flex flex-col group hover:border-[#0B4DBB]/40"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.color} group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className={`font-heading font-bold text-lg text-[#333333] mb-3 group-hover:text-[#0B4DBB] transition-colors ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {item.title}
              </h3>
              <p className={`text-sm text-gray-500 leading-relaxed ${
                lang === 'ML' ? 'font-malayalam font-medium' : ''
              }`}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
