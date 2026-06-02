import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Heart, Award, ArrowRight, ShieldCheck, Activity, X, MessageSquare } from 'lucide-react'

export default function CheckupsView({ lang, onNavigate }) {
  const [selectedPkg, setSelectedPkg] = useState(null)
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male'
  })
  
  const text = {
    EN: {
      title: 'Diagnostic Health Packages',
      tagline: 'Comprehensive screenings tailored for every member of your family.',
      btnBook: 'Book Package Now',
      featuresHeading: 'Our Clinical Checkup Features',
      feat1: 'Fully Automated Laboratory',
      feat2: 'Precise Biochemical Assays',
      feat3: 'Clinical Doctor Consultation Included',
      
      // Card 1: Child
      c1Title: 'Child Wellness Package',
      c1Desc: 'Gentle developmental screenings and pediatric blood panels for healthy growth.',
      c1Price: '₹999',
      c1Item1: 'Pediatric Doctor Consultation',
      c1Item2: 'Growth & Vaccination Review',
      c1Item3: 'Complete Blood Count (CBC)',
      c1Item4: 'Calcium & Vitamin D Levels',
      c1Item5: 'Basic Urine Analysis',

      // Card 2: Seniors
      c2Title: 'Senior Citizen Package',
      c2Desc: 'Comprehensive geriatric panels focusing on cardiovascular and bone wellness.',
      c2Price: '₹1,999',
      c2Item1: 'Geriatric Health Review',
      c2Item2: 'Kidney & Liver Profile Tests',
      c2Item3: 'Blood Sugar & HbA1c (Diabetes)',
      c2Item4: 'ECG Cardiac screening',
      c2Item5: 'Bone Pain & Uric Acid Check',

      // Card 3: Men
      c3Title: 'Men Wellness Package',
      c3Desc: 'Specialized diagnostic checks tracking cardiac fitness, lipid health, and prostate safety.',
      c3Price: '₹1,699',
      c3Item1: 'General Practitioner Consultation',
      c3Item2: 'PSA (Prostate Cancer Screening)',
      c3Item3: 'Lipid Profile (Cholesterol levels)',
      c3Item4: 'Liver Function Panel (LFT)',
      c3Item5: 'Vitamin B12 & Heart Risk Check',

      // Card 4: Women
      c4Title: 'Women Wellness Package',
      c4Desc: 'Hormonal and health panel tracking thyroid, calcium density, and blood wellness.',
      c4Price: '₹1,799',
      c4Item1: 'Gynecological Counseling',
      c4Item2: 'Thyroid Profile (T3, T4, TSH)',
      c4Item3: 'Bone Mineral Density Check',
      c4Item4: 'Anaemia & Iron Panels (Hb)',
      c4Item5: 'Breast Screening guidelines'
    },
    ML: {
      title: 'ഹെൽത്ത് ചെക്കപ്പ് പാക്കേജുകൾ',
      tagline: 'നിങ്ങളുടെ കുടുംബത്തിലെ ഓരോ അംഗത്തിനും അനുയോജ്യമായ സമഗ്ര പരിശോധനകൾ.',
      btnBook: 'ഇപ്പോൾ ബുക്ക് ചെയ്യുക',
      featuresHeading: 'ഞങ്ങളുടെ ക്ലിനിക്കൽ പ്രത്യേകതകൾ',
      feat1: 'ഓട്ടോമേറ്റഡ് ലബോറട്ടറി',
      feat2: 'കൃത്യമായ ലാബ് റിപ്പോർട്ടുകൾ',
      feat3: 'ഡോക്ടർ കൺസൾട്ടേഷൻ ഉൾപ്പെടുന്നു',
      
      // Card 1: Child
      c1Title: 'കുട്ടികളുടെ ആരോഗ്യ പാക്കേജ്',
      c1Desc: 'കുട്ടികളുടെ ആരോഗ്യകരമായ വളർച്ചയ്ക്കായുള്ള പീഡിയാട്രിക് പരിശോധനകൾ.',
      c1Price: '₹999',
      c1Item1: 'പീഡിയാട്രിക് ഡോക്ടർ കൺസൾട്ടേഷൻ',
      c1Item2: 'വളർച്ച & വാക്സിനേഷൻ പരിശോധന',
      c1Item3: 'കംപ്ലീറ്റ് ബ്ലഡ് കൗണ്ട് (CBC)',
      c1Item4: 'കാൽസ്യം, വൈറ്റമിൻ ഡി പരിശോധന',
      c1Item5: 'യൂറിൻ അനാലിസിസ്',

      // Card 2: Seniors
      c2Title: 'മുതിർന്നവർക്കുള്ള പാക്കേജ്',
      c2Desc: 'ഹൃദയാരോഗ്യവും എല്ലുകളുടെ സാന്ദ്രതയും പരിശോധിക്കുന്ന പാക്കേജുകൾ.',
      c2Price: '₹1,999',
      c2Item1: 'ഡോക്ടറുടെ വിശദമായ പരിശോധന',
      c2Item2: 'കിഡ്നി, ലിവർ പ്രൊഫൈൽ ടെസ്റ്റുകൾ',
      c2Item3: 'ബ്ലഡ് ഷുഗർ & HbA1c പരിശോധന',
      c2Item4: 'ECG ഹൃദയ പരിശോധന',
      c2Item5: 'എല്ലുകളുടെ സാന്ദ്രത & യൂറിക് ആസിഡ്',

      // Card 3: Men
      c3Title: 'പുരുഷന്മാർക്കുള്ള ഹെൽത്ത് പാക്കേജ്',
      c3Desc: 'ഹൃദയാരോഗ്യം, കൊളസ്ട്രോൾ, പ്രോസ്റ്റേറ്റ് എന്നിവ പരിശോധിക്കുന്ന പാക്കേജ്.',
      c3Price: '₹1,699',
      c3Item1: 'ഡോക്ടറുടെ ജനറൽ കൺസൾട്ടേഷൻ',
      c3Item2: 'PSA (പ്രോസ്റ്റേറ്റ് പരിശോധന)',
      c3Item3: 'ലിപിഡ് പ്രൊഫൈൽ (കൊളസ്ട്രോൾ)',
      c3Item4: 'ലിവർ ഫംഗ്ഷൻ പാനൽ (LFT)',
      c3Item5: 'വൈറ്റമിൻ B12 & ഹാർട്ട് റിസ്ക് പാനൽ',

      // Card 4: Women
      c4Title: 'സ്ത്രീകൾക്കുള്ള ഹെൽത്ത് പാക്കേജ്',
      c4Desc: 'തൈറോയ്ഡ്, കാൽസ്യം, ഹോർമോൺ തുടങ്ങിയവ പരിശോധിക്കുന്ന പാക്കേജ്.',
      c4Price: '₹1,799',
      c4Item1: 'ഗൈനക്കോളജി കൗൺസിലിംഗ്',
      c4Item2: 'തൈറോയ്ഡ് പ്രൊഫൈൽ (T3, T4, TSH)',
      c4Item3: 'ബോൺ മിനറൽ പരിശോധന',
      c4Item4: 'അനീമിയ & ഇരുമ്പിന്റെ അളവ് (Hb)',
      c4Item5: 'ബ്രെസ്റ്റ് സ്ക്രീനിംഗ് മാർഗ്ഗനിർദ്ദേശങ്ങൾ'
    },
    AR: {
      title: 'باقات فحص الصحة التشخيصية',
      tagline: 'فحوصات شاملة مصممة لكل فرد من أفراد عائلتك.',
      btnBook: 'احجز الباقة الآن',
      featuresHeading: 'مميزات الفحوصات السريرية لدينا',
      feat1: 'مختبر آلي بالكامل لنتائج دقيقة',
      feat2: 'تحاليل كيميائية حيوية دقيقة للغاية',
      feat3: 'تتضمن استشارة طبيب سريري متخصصة',
      
      // Card 1: Child
      c1Title: 'باقة صحة الطفل',
      c1Desc: 'فحوصات لطيفة لنمو الطفل واختبارات دم پي دياترية لنمو سليم.',
      c1Price: '٩٩٩ ر.س',
      c1Item1: 'استشارة طبيب الأطفال المتخصص',
      c1Item2: 'مراجعة النمو وحالة التطعيمات',
      c1Item3: 'فحص دم كامل (CBC)',
      c1Item4: 'نسبة الكالسيوم وفيتامين د',
      c1Item5: 'تحليل البول الأساسي',

      // Card 2: Seniors
      c2Title: 'باقة كبار السن والوالدين',
      c2Desc: 'فحوصات شاملة لكبار السن تركز على صحة القلب والمفاصل والسكري.',
      c2Price: '١,٩٩٩ ر.س',
      c2Item1: 'استشارة ومراجعة طب الشيخوخة',
      c2Item2: 'تحاليل الكلى ووظائف الكبد الشاملة',
      c2Item3: 'فحص السكر والسكري التراكمي (HbA1c)',
      c2Item4: 'تخطيط القلب السريري (ECG)',
      c2Item5: 'فحص كثافة العظام والتهاب المفاصل',

      // Card 3: Men
      c3Title: 'باقة صحة الرجل الشاملة',
      c3Desc: 'تحاليل مخصصة لتتبع اللياقة القلبية ومستويات الكوليسترول وسلامة البروستاتا.',
      c3Price: '١,٦٩٩ ر.س',
      c3Item1: 'استشارة الطبيب العام والتشخيص',
      c3Item2: 'فحص البروستاتا الاستباقي (PSA)',
      c3Item3: 'تحليل الكوليسترول والدهون الكامل',
      c3Item4: 'تحليل وظائف الكبد المتطور (LFT)',
      c3Item5: 'فيتامين ب١٢ وفحص مخاطر القلب',

      // Card 4: Women
      c4Title: 'باقة صحة المرأة المتكاملة',
      c4Desc: 'فحوصات هرمونية متخصصة لتتبع الغدة الدرقية، وكثافة الكالسيوم، وفقر الدم.',
      c4Price: '١,٧٩٩ ر.س',
      c4Item1: 'استشارة ومراجعة نسائية متخصصة',
      c4Item2: 'تحليل الغدة الدرقية الشامل (T3, T4, TSH)',
      c4Item3: 'فحص المعادن وكثافة العظام',
      c4Item4: 'فحوصات فقر الدم ومستويات الحديد (Hb)',
      c4Item5: 'إرشادات الكشف والاستشارة المبكرة'
    }
  }

  const current = text[lang] || text['EN']

  const packages = [
    {
      title: current.c1Title,
      desc: current.c1Desc,
      price: current.c1Price,
      themeClass: 'border-emerald-200 hover:border-emerald-400 bg-gradient-to-b from-white to-emerald-50/20',
      tagColor: 'bg-emerald-500 text-white',
      accentColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      items: [current.c1Item1, current.c1Item2, current.c1Item3, current.c1Item4, current.c1Item5]
    },
    {
      title: current.c2Title,
      desc: current.c2Desc,
      price: current.c2Price,
      themeClass: 'border-amber-200 hover:border-amber-400 bg-gradient-to-b from-white to-amber-50/20',
      tagColor: 'bg-amber-500 text-white',
      accentColor: 'text-amber-600',
      iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
      items: [current.c2Item1, current.c2Item2, current.c2Item3, current.c2Item4, current.c2Item5]
    },
    {
      title: current.c3Title,
      desc: current.c3Desc,
      price: current.c3Price,
      themeClass: 'border-blue-200 hover:border-blue-400 bg-gradient-to-b from-white to-blue-50/20',
      tagColor: 'bg-blue-600 text-white',
      accentColor: 'text-blue-600',
      iconBg: 'bg-blue-50 text-blue-600 border-blue-100',
      items: [current.c3Item1, current.c3Item2, current.c3Item3, current.c3Item4, current.c3Item5]
    },
    {
      title: current.c4Title,
      desc: current.c4Desc,
      price: current.c4Price,
      themeClass: 'border-rose-200 hover:border-rose-400 bg-gradient-to-b from-white to-rose-50/20',
      tagColor: 'bg-rose-500 text-white',
      accentColor: 'text-rose-600',
      iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
      items: [current.c4Item1, current.c4Item2, current.c4Item3, current.c4Item4, current.c4Item5]
    }
  ]

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left">
      
      {/* View Header with background image and premium gradient overlay */}
      <div className="relative w-full rounded-3xl overflow-hidden mb-12 h-64 md:h-72 flex items-center justify-center text-center shadow-md border border-[#E0EBFC]">
        {/* Background Image */}
        <img 
          src="/herosection/a1.png" 
          alt="Diagnostic Screening Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        {/* Deep blue gradient overlay with logo-matching primary blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4DBB]/95 via-[#0B4DBB]/85 to-blue-950/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 py-8 text-white text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-white mb-4 backdrop-blur-sm">
            <Activity className="w-3.5 h-3.5 text-white" />
            {lang === 'EN' && 'Preventive Clinical Screening'}
            {lang === 'ML' && 'പ്രിവന്റീവ് ഹെൽത്ത് ചെക്കപ്പ്'}
            {lang === 'AR' && 'الفحوصات السريرية الوقائية'}
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

      {/* Grid of customized Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -8, shadow: 'lg' }}
            className={`border rounded-3xl p-6 shadow-sm flex flex-col justify-between transition-all ${pkg.themeClass}`}
          >
            <div>
              {/* Header inside Card */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${pkg.iconBg}`}>
                  <Heart className="w-5 h-5 animate-pulse" />
                </div>
                <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${pkg.tagColor}`}>
                  {pkg.price}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className={`font-heading font-bold text-lg text-[#333333] mb-2 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {pkg.title}
              </h3>
              <p className={`text-gray-500 text-xs leading-relaxed mb-6 ${
                lang === 'ML' ? 'font-malayalam font-medium' : ''
              }`}>
                {pkg.desc}
              </p>

              {/* List of included tests */}
              <div className="border-t border-dashed border-slate-200 pt-5 mb-8">
                <ul className="space-y-3.5 text-xs font-semibold text-gray-700">
                  {pkg.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.iconBg}`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className={lang === 'ML' ? 'font-malayalam font-medium' : ''}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book Package button triggering the local form modal */}
            <button
              onClick={() => setSelectedPkg(pkg)}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs shadow-sm bg-white border border-slate-200 hover:bg-[#0B4DBB] hover:text-white hover:border-transparent transition-all cursor-pointer flex items-center justify-center gap-1.5 group ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}
            >
              <span>{current.btnBook}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        ))}
      </div>

      {/* Features strip underneath */}
      <div className="mt-16 bg-slate-50 border border-[#E0EBFC] rounded-3xl p-8 text-center">
        <h3 className={`font-heading font-bold text-lg text-[#333333] mb-6 ${
          lang === 'ML' ? 'font-malayalam font-bold' : ''
        }`}>
          {current.featuresHeading}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: current.feat1, icon: ShieldCheck },
            { title: current.feat2, icon: Activity },
            { title: current.feat3, icon: Award }
          ].map((feat, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-center md:justify-start p-4 bg-white border border-[#E0EBFC] rounded-2xl">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0B4DBB] flex items-center justify-center border border-blue-100 shrink-0">
                <feat.icon className="w-4 h-4" />
              </div>
              <span className={`text-xs font-bold text-gray-700 ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {feat.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sleek Package Booking Form Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            
            {/* Dark blur backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPkg(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-white border border-[#E0EBFC] rounded-3xl shadow-2xl overflow-hidden z-10 text-left"
            >
              
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#0B4DBB] text-white border-b border-[#E0EBFC]">
                <div>
                  <span className="text-[10px] uppercase font-bold text-blue-100 tracking-wider">
                    {lang === 'EN' ? 'Confirm Diagnostic Booking' : lang === 'ML' ? 'ഡയഗ്നോസ്റ്റിക് ബുക്കിംഗ് സ്ഥിരീകരിക്കുക' : 'تأكيد الحجز التشخيصي'}
                  </span>
                  <h3 className={`font-heading font-extrabold text-base leading-tight mt-0.5 ${lang === 'ML' ? 'font-malayalam font-bold' : ''}`}>
                    {selectedPkg.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedPkg(null)}
                  className="p-1 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Content */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault()
                  
                  // Construct WhatsApp Package Booking message with Demographics
                  const message = `*FATHIMA MEDICAL CENTER - HEALTH CHECKUP BOOKING*\n` +
                                  `----------------------------------------\n` +
                                  `*Selected Package:* ${selectedPkg.title}\n` +
                                  `*Price:* ${selectedPkg.price}\n` +
                                  `----------------------------------------\n` +
                                  `*Patient Name:* ${bookingForm.name}\n` +
                                  `*Phone Number:* ${bookingForm.phone}\n` +
                                  `*Patient Age:* ${bookingForm.age}\n` +
                                  `*Gender:* ${bookingForm.gender}\n` +
                                  `----------------------------------------\n` +
                                  `Hello, I would like to book the ${selectedPkg.title} diagnostic wellness package with the patient details above. Please contact me to schedule a slot.\n` +
                                  `----------------------------------------\n` +
                                  `_Sent via Fathima Medical Website_`

                  const waUrl = `https://wa.me/918086537077?text=${encodeURIComponent(message)}`
                  window.open(waUrl, '_blank', 'noopener,noreferrer')
                  
                  // Close and reset
                  setSelectedPkg(null)
                  setBookingForm({ name: '', phone: '', age: '', gender: 'Male' })
                }}
                className="p-6 space-y-4"
              >
                
                {/* Full Patient Name */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {lang === 'EN' ? 'Full Patient Name' : lang === 'ML' ? 'രോഗിയുടെ മുഴുവൻ പേര്' : 'اسم المريض الكامل'}
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder={lang === 'EN' ? 'e.g. Rahul' : lang === 'ML' ? 'ഉദാ: രാഹുൽ' : 'مثال: أحمد'}
                    className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                    value={bookingForm.name}
                    onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                  />
                </div>

                {/* Contact Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {lang === 'EN' ? 'Phone Number' : lang === 'ML' ? 'ഫോൺ നമ്പർ' : 'رقم الهاتف'}
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                    value={bookingForm.phone}
                    onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  />
                </div>

                {/* Age & Gender Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Age */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                      {lang === 'EN' ? 'Age' : lang === 'ML' ? 'പ്രായം' : 'العمر'}
                    </label>
                    <input 
                      type="number" 
                      required
                      min="0"
                      max="125"
                      placeholder={lang === 'EN' ? 'e.g. 28' : lang === 'ML' ? 'ഉദാ: 28' : 'مثال: ٢٨'}
                      className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                      value={bookingForm.age}
                      onChange={e => setBookingForm({ ...bookingForm, age: e.target.value })}
                    />
                  </div>
                  {/* Gender */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                      {lang === 'EN' ? 'Gender' : lang === 'ML' ? 'ലിംഗം' : 'الجنس'}
                    </label>
                    <select 
                      className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none bg-white"
                      value={bookingForm.gender}
                      onChange={e => setBookingForm({ ...bookingForm, gender: e.target.value })}
                    >
                      <option value="Male">{lang === 'EN' ? 'Male' : lang === 'ML' ? 'പുരുഷൻ' : 'ذكر'}</option>
                      <option value="Female">{lang === 'EN' ? 'Female' : lang === 'ML' ? 'സ്ത്രീ' : 'أنثى'}</option>
                      <option value="Other">{lang === 'EN' ? 'Other' : lang === 'ML' ? 'മറ്റുള്ളവ' : 'آخر'}</option>
                    </select>
                  </div>
                </div>

                {/* Confirm Button */}
                <button
                  type="submit"
                  className={`w-full py-3.5 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-extrabold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-4 ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>
                    {lang === 'EN' ? 'Book via WhatsApp' : lang === 'ML' ? 'വാട്സ്ആപ്പ് വഴി ബുക്ക് ചെയ്യുക' : 'احجز عبر واتساب'}
                  </span>
                </button>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}
