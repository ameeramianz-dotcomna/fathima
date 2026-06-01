import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, MapPin, Clock, Globe, Award, MessageSquare } from 'lucide-react'

export default function ContactView({ lang }) {
  
  const text = {
    EN: {
      title: 'Contact Fathima Medical',
      tagline: 'Connect with our front desk coordinator or order products via double hotline channels.',
      hoursHeading: 'Operating Hours',
      hoursDesc: 'Open Daily: 9:00 AM – 10:00 PM',
      addressHeading: 'Clinic Location',
      addressDesc: 'Fathima Medical Center, Near Railway Station Road, Vallapuzha, Palakkad, Kerala - 679336',
      phonesHeading: 'Telephone Support',
      phonePrimary: 'Booking Hotline: 8086537077',
      phoneAlternate: 'Alternate Hotline: 8086159098',
      socialHeading: 'Online Resources & Listing',
      socialInsta: 'Fathima Medical Instagram Page',
      socialJustdial: 'Justdial 5.0 Star Business Listing',
      mapHeading: 'Clinical Neighborhood Direction'
    },
    ML: {
      title: 'ബന്ധപ്പെടുക',
      tagline: 'ഞങ്ങളുടെ സഹായ നമ്പറുകൾ വഴിയോ ഫാർമസി ഡെസ്ക് വഴിയോ ബന്ധപ്പെടുക.',
      hoursHeading: 'പ്രവർത്തന സമയം',
      hoursDesc: 'എല്ലാ ദിവസവും: 9:00 AM – 10:00 PM',
      addressHeading: 'വിലാസം',
      addressDesc: 'ഫാത്തിമ മെഡിക്കൽ സെന്റർ, റെയിൽവേ സ്റ്റേഷൻ റോഡിന് സമീപം, വല്ലപ്പുഴ, പാലക്കാട്, കേരളം - 679336',
      phonesHeading: 'ഹോട്ട്‌ലൈൻ നമ്പറുകൾ',
      phonePrimary: 'ബുക്കിംഗ് നമ്പർ: 8086537077',
      phoneAlternate: 'മറ്റൊരു നമ്പർ: 8086159098',
      socialHeading: 'ഓൺലൈൻ പേജുകൾ',
      socialInsta: 'ഫാത്തിമ മെഡിക്കൽ ഇൻസ്റ്റാഗ്രാം പേജ്',
      socialJustdial: 'ജസ്റ്റ്‌ഡയൽ ബിസിനസ്സ് ലിസ്റ്റിംഗ് (5.0★)',
      mapHeading: 'ക്ലിനിക്ക് ലൊക്കേഷൻ മാപ്പ്'
    },
    AR: {
      title: 'اتصل بمركز فاطمة الطبي',
      tagline: 'تواصل مع منسق مكتب الاستقبال لدينا أو اطلب الأدوية عبر خطوط الاتصال الثنائية المتاحة.',
      hoursHeading: 'ساعات العمل الرسمية',
      hoursDesc: 'مفتوح يومياً: ٩:٠٠ صباحاً – ١٠:٠٠ مساءً',
      addressHeading: 'موقع العيادة والصيدلية',
      addressDesc: 'مركز فاطمة الطبي، بالقرب من طريق محطة القطار، فالابوزا، بالاكاد، كيرلا - 679336',
      phonesHeading: 'خطوط الهاتف والدعم المباشر',
      phonePrimary: 'هاتف الحجز الرئيسي: 8086537077',
      phoneAlternate: 'هاتف الدعم البديل: 8086159098',
      socialHeading: 'منصات الإنترنت والقوائم',
      socialInsta: 'صفحة انستغرام مركز فاطمة الطبي',
      socialJustdial: 'قائمة الأعمال جست دايال (٥.٠ نجوم)',
      mapHeading: 'خريطة الاتجاهات السريرية'
    }
  }

  const current = text[lang] || text['EN']

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left"
    >
      {/* View Header */}
      <div className="border-b border-[#E0EBFC] pb-10 mb-12 text-center max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-[#0B4DBB] mb-4">
          <PhoneCall className="w-3.5 h-3.5 text-[#0B4DBB]" />
          {lang === 'EN' && '24/7 Support Desk'}
          {lang === 'ML' && 'ഹെൽപ്പ് ഡെസ്ക്'}
          {lang === 'AR' && 'مكتب الدعم والاستعلام المستمر'}
        </span>
        <h1 className={`font-heading font-extrabold text-3xl md:text-4xl text-[#333333] mb-4 ${
          lang === 'ML' ? 'font-malayalam' : ''
        }`}>
          {current.title}
        </h1>
        <p className={`text-slate-500 text-sm md:text-base leading-relaxed ${
          lang === 'ML' ? 'font-malayalam font-medium' : ''
        }`}>
          {current.tagline}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Contact Card Grid */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Card 1: Double Hotlines */}
          <div className="bg-white border border-[#E0EBFC] rounded-3xl p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0B4DBB] border border-blue-100 flex items-center justify-center shrink-0">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className={`font-heading font-bold text-base text-[#333333] mb-3.5 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {current.phonesHeading}
              </h3>
              
              <div className="space-y-3 font-semibold text-gray-800 text-sm md:text-base">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <a href="tel:8086537077" className="hover:text-[#0B4DBB] transition-colors">{current.phonePrimary}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <a href="tel:8086159098" className="hover:text-[#0B4DBB] transition-colors">{current.phoneAlternate}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Address & Location */}
          <div className="bg-white border border-[#E0EBFC] rounded-3xl p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#FF1E2D] border border-red-100 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-heading font-bold text-base text-[#333333] mb-2.5 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {current.addressHeading}
              </h3>
              <p className={`text-gray-500 text-sm leading-relaxed ${
                lang === 'ML' ? 'font-malayalam font-medium' : ''
              }`}>
                {current.addressDesc}
              </p>
            </div>
          </div>

          {/* Card 3: Social & Online presence links */}
          <div className="bg-white border border-[#E0EBFC] rounded-3xl p-6 shadow-sm flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`font-heading font-bold text-base text-[#333333] mb-3.5 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {current.socialHeading}
              </h3>
              
              <div className="space-y-3 font-bold text-sm text-[#0B4DBB]">
                <p className="flex items-center gap-2 hover:underline">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <a href="https://www.instagram.com/fathima_medical_vallapuzha/" target="_blank" rel="noopener noreferrer">
                    {current.socialInsta}
                  </a>
                </p>
                <p className="flex items-center gap-2 hover:underline">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  <a href="https://www.justdial.com/Palakkad/Fathima-Medical-Center-Vallapuzha/9999PX491-X491-230818192259-R3R9_BZDET" target="_blank" rel="noopener noreferrer">
                    {current.socialJustdial}
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right: Map Box and Operating Hours widget */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Operating Hours Widget */}
          <div className="bg-[#0B4DBB] text-white rounded-3xl p-8 shadow-lg relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5 border border-white/20">
              <Clock className="w-6 h-6" />
            </div>

            <h3 className={`font-heading font-bold text-lg mb-2 ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              {current.hoursHeading}
            </h3>
            
            <p className={`text-xl font-extrabold mb-1.5 tracking-tight ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.hoursDesc}
            </p>
            <p className="text-[10px] text-blue-100 font-semibold uppercase tracking-wider">
              {lang === 'EN' && '9:00 AM to 10:00 PM Daily'}
              {lang === 'ML' && 'രാവിലെ 9 മുതൽ രാത്രി 10 വരെ'}
              {lang === 'AR' && 'من الساعة ٩:٠٠ ص حتى ١٠:٠٠ م يومياً'}
            </p>
          </div>

          {/* Clinical Neighborhood Direction */}
          <div className="bg-white border border-[#E0EBFC] rounded-3xl p-6 shadow-sm">
            <h3 className={`font-heading font-bold text-base text-[#333333] mb-4 ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.mapHeading}
            </h3>
            
            {/* Visual neighborhood dots helper representing Vallapuzha map */}
            <div className="h-44 bg-slate-100 border border-[#E0EBFC] rounded-2xl flex flex-col items-center justify-center relative overflow-hidden p-4 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#E0EBFC_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-60" />
              <div className="w-10 h-10 bg-[#FF1E2D]/10 text-[#FF1E2D] rounded-full flex items-center justify-center border border-[#FF1E2D]/20 mb-2 shrink-0 animate-bounce">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-gray-700 text-xs font-bold leading-tight">Fathima Medical Center</span>
              <span className="text-gray-400 text-[10px] mt-1">Railway Station Road, Vallapuzha</span>
            </div>
          </div>

        </div>

      </div>

    </motion.div>
  )
}
