import React from 'react'
import { motion } from 'framer-motion'
import HeroSlider from './HeroSlider'
import { Calendar, FileText, Search, ShieldAlert, Award, MessageSquare, Heart, Clock, MapPin } from 'lucide-react'

export default function HomeView({ lang, onNavigate, onOpenAppointment }) {
  
  const text = {
    EN: {
      badge: 'Trusted Healthcare Partner for Every Family',
      heading: 'World-Class Clinical Pharmacy & Primary Care',
      desc: 'Fathima Medical Center is a modern community healthcare center in Vallapuzha, Kerala. We provide authentic medicines, professional clinical consultation, comprehensive diagnostic health checkups, and direct medicine home delivery.',
      card1Title: 'Upload Prescription',
      card1Desc: 'Get medicines delivered directly to your doorstep in Vallapuzha.',
      card2Title: 'Health Packages',
      card2Desc: 'Explore complete diagnostic health screenings for all age groups.',
      card3Title: 'Find a Specialist',
      card3Desc: 'Search for consulting practitioners and schedule slot times.',
      card4Title: 'WhatsApp Pharmacy',
      card4Desc: 'Quick medicine order and inquiries via direct WhatsApp chat.',
      ratingTitle: 'Justdial 5.0/5 Star Rated Care',
      ratingDesc: 'Highly rated community support for authentic dispensing and professional clinical guidelines.',
      featuresHeading: 'Why Families Choose Fathima Medical',
      feat1: '24-Hour Apothecary Desk',
      feat2: 'Arya Vaidya Pharmacy Ayurveda',
      feat3: 'Jan Aushadhi Generic Hub',
      feat4: 'Himalaya Herbal Wellness'
    },
    ML: {
      badge: 'ഓരോ കുടുംബത്തിനും വിശ്വസ്തനായ ആരോഗ്യ പങ്കാളി',
      heading: 'ലോകോത്തര ഫാർമസിയും പ്രാഥമിക പരിചരണവും',
      desc: 'ഫാത്തിമ മെഡിക്കൽ സെന്റർ വല്ലപ്പുഴയിൽ (പാലക്കാട്, കേരളം) പ്രവർത്തിക്കുന്ന അത്യാധുനിക ഹെൽത്ത്കെയർ സെന്ററാണ്. മികച്ച മരുന്നുകൾ, പ്രൊഫഷണൽ ക്ലിനിക്കൽ കൺസൾട്ടേഷൻ, സമഗ്രമായ ഹെൽത്ത് ചെക്കപ്പുകൾ, ഹോം ഡെലിവറി എന്നിവ ഞങ്ങൾ നൽകുന്നു.',
      card1Title: 'കുറിപ്പടി അപ്‌ലോഡ് ചെയ്യുക',
      card1Desc: 'വല്ലപ്പുഴയിലെ നിങ്ങളുടെ വീട്ടുപടിക്കൽ മരുന്നുകൾ എത്തിക്കുന്നു.',
      card2Title: 'ഹെൽത്ത് പാക്കേജുകൾ',
      card2Desc: 'എല്ലാ പ്രായക്കാർക്കുമുള്ള സമഗ്രമായ ആരോഗ്യ പരിശോധനകൾ.',
      card3Title: 'ഡോക്ടറെ കണ്ടെത്തുക',
      card3Desc: 'പരിചയസമ്പന്നരായ കൺസൾട്ടിംഗ് ഡോക്ടർമാരുടെ സമയം ഷെഡ്യൂൾ ചെയ്യുക.',
      card4Title: 'വാട്സ്ആപ്പ് ഫാർമസി',
      card4Desc: 'വാട്സ്ആപ്പ് വഴി വേഗത്തിൽ മരുന്നുകൾ ഓർഡർ ചെയ്യുക.',
      ratingTitle: 'ജസ്റ്റ്‌ഡയൽ 5.0/5 സ്റ്റാർ റേറ്റിംഗ്',
      ratingDesc: 'മികച്ച മരുന്നുകളുടെ വിതരണത്തിനും പ്രൊഫഷണൽ മാർഗ്ഗനിർദ്ദേശങ്ങൾക്കും ഉയർന്ന റേറ്റിംഗ്.',
      featuresHeading: 'എന്തുകൊണ്ട് ഫാത്തിമ മെഡിക്കൽ?',
      feat1: '24 മണിക്കൂർ ഫാർമസി',
      feat2: 'ആര്യ വൈദ്യ ഫാർമസി ആയുർവേദം',
      feat3: 'ജൻ ഔഷധി ജനറിക് വിഭാഗം',
      feat4: 'ഹിമാലയ ഹെർബൽ വെൽനസ്'
    },
    AR: {
      badge: 'شريك الرعاية الصحية الموثوق لكل عائلة',
      heading: 'صيدلية سريرية ورعاية أولية ذات مستوى عالمي',
      desc: 'مركز فاطمة الطبي هو مركز رعاية صحية مجتمعي حديث في فالابوزا، كيرلا. نحن نقدم أدوية أصلية، واستشارات سريرية مهنية، وفحوصات صحية تشخيصية شاملة، وتوصيل الأدوية مباشرة إلى المنازل.',
      card1Title: 'تحميل وصفة طبية',
      card1Desc: 'احصل على أدويتك وتوصيلها مباشرة إلى عتبة دارك في فالابوزا.',
      card2Title: 'باقات فحص الصحة',
      card2Desc: 'استكشف الفحوصات الصحية الشاملة لجميع الفئات العمرية.',
      card3Title: 'البحث عن أخصائي',
      card3Desc: 'ابحث عن الأطباء الاستشاريين وجدول مواعيدك معهم.',
      card4Title: 'صيدلية واتساب',
      card4Desc: 'طلب سريع للأدوية والاستفسارات عبر دردشة واتساب المباشرة.',
      ratingTitle: 'تقييم ممتاز ٥.٠ / ٥ من جست دايال',
      ratingDesc: 'دعم مجتمعي ذو تصنيف عالٍ لصرف الأدوية الأصلية والتوجيهات السريرية المهنية.',
      featuresHeading: 'لماذا تختار عيادة فاطمة الطبية؟',
      feat1: 'مكتب الصيدلة المفتوح ٢٤/٧',
      feat2: 'صيدلية آريا فايديا آيورفيدا',
      feat3: 'مركز جن أوشادهي للأدوية الجنيسة',
      feat4: 'قسم هيمالايا هيربال للصحة'
    }
  }

  const current = text[lang] || text['EN']
  const isRtl = lang === 'AR'

  return (
    <div className="w-full">
      {/* Premium Hero Slider Component */}
      <HeroSlider lang={lang} onOpenAppointment={onOpenAppointment} />

      {/* Corporate Overview and Core Callout Grid */}
      <section className="bg-slate-50 py-16 border-b border-[#E0EBFC]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-[#0B4DBB] mb-4 ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              <Award className="w-3.5 h-3.5 text-[#0B4DBB]" />
              {current.badge}
            </span>
            <h2 className={`font-heading font-extrabold text-3xl md:text-4xl text-[#333333] leading-tight ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.heading}
            </h2>
            <p className={`mt-4 text-gray-500 text-sm md:text-base leading-relaxed ${
              lang === 'ML' ? 'font-malayalam font-medium' : ''
            }`}>
              {current.desc}
            </p>
          </div>

          {/* Core Feature Grid - 4 Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Upload Prescription */}
            <motion.div
              whileHover={{ y: -6, shadow: 'md' }}
              onClick={() => onNavigate('delivery')}
              className="bg-white border border-[#E0EBFC] hover:border-[#0B4DBB]/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer text-left flex flex-col group justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0B4DBB] border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className={`font-heading font-bold text-base text-[#333333] mb-2 group-hover:text-[#0B4DBB] transition-colors ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {current.card1Title}
                </h3>
                <p className={`text-gray-500 text-xs leading-relaxed ${
                  lang === 'ML' ? 'font-malayalam font-medium' : ''
                }`}>
                  {current.card1Desc}
                </p>
              </div>
              <span className={`text-[#0B4DBB] text-xs font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {lang === 'EN' && 'Upload Now →'}
                {lang === 'ML' && 'അപ്‌ലോഡ് ചെയ്യുക →'}
                {lang === 'AR' && 'حمّل الآن ←'}
              </span>
            </motion.div>

            {/* Card 2: Health Packages */}
            <motion.div
              whileHover={{ y: -6, shadow: 'md' }}
              onClick={() => onNavigate('checkups')}
              className="bg-white border border-[#E0EBFC] hover:border-[#0B4DBB]/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer text-left flex flex-col group justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className={`font-heading font-bold text-base text-[#333333] mb-2 group-hover:text-teal-600 transition-colors ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {current.card2Title}
                </h3>
                <p className={`text-gray-500 text-xs leading-relaxed ${
                  lang === 'ML' ? 'font-malayalam font-medium' : ''
                }`}>
                  {current.card2Desc}
                </p>
              </div>
              <span className={`text-teal-600 text-xs font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {lang === 'EN' && 'View Packages →'}
                {lang === 'ML' && 'പാക്കേജുകൾ കാണുക →'}
                {lang === 'AR' && 'عرض الباقات ←'}
              </span>
            </motion.div>

            {/* Card 3: Find Doctor */}
            <motion.div
              whileHover={{ y: -6, shadow: 'md' }}
              onClick={() => onNavigate('doctors')}
              className="bg-white border border-[#E0EBFC] hover:border-[#0B4DBB]/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer text-left flex flex-col group justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className={`font-heading font-bold text-base text-[#333333] mb-2 group-hover:text-indigo-600 transition-colors ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {current.card3Title}
                </h3>
                <p className={`text-gray-500 text-xs leading-relaxed ${
                  lang === 'ML' ? 'font-malayalam font-medium' : ''
                }`}>
                  {current.card3Desc}
                </p>
              </div>
              <span className={`text-indigo-600 text-xs font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {lang === 'EN' && 'Find Doctors →'}
                {lang === 'ML' && 'ഡോക്ടർമാരെ കാണുക →'}
                {lang === 'AR' && 'ابحث عن أطباء ←'}
              </span>
            </motion.div>

            {/* Card 4: WhatsApp Support */}
            <motion.a
              whileHover={{ y: -6, shadow: 'md' }}
              href="https://wa.me/918086537077"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#E0EBFC] hover:border-emerald-500/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer text-left flex flex-col group justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className={`font-heading font-bold text-base text-[#333333] mb-2 group-hover:text-emerald-600 transition-colors ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {current.card4Title}
                </h3>
                <p className={`text-gray-500 text-xs leading-relaxed ${
                  lang === 'ML' ? 'font-malayalam font-medium' : ''
                }`}>
                  {current.card4Desc}
                </p>
              </div>
              <span className={`text-emerald-600 text-xs font-bold mt-4 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {lang === 'EN' && 'Chat on WhatsApp →'}
                {lang === 'ML' && 'വാട്സ്ആപ്പ് ചാറ്റ് →'}
                {lang === 'AR' && 'تحدث معنا واتساب ←'}
              </span>
            </motion.a>

          </div>

          {/* Center Ratings Callout Section */}
          <div className="mt-16 bg-white border border-[#E0EBFC] rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-4 text-left">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-500 border border-amber-100 flex items-center justify-center shrink-0">
                <span className="text-3xl font-black">5.0</span>
              </div>
              <div>
                <h4 className={`font-heading font-extrabold text-lg text-[#333333] ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {current.ratingTitle}
                </h4>
                <p className={`text-gray-500 text-sm leading-relaxed ${
                  lang === 'ML' ? 'font-malayalam font-medium' : ''
                }`}>
                  {current.ratingDesc}
                </p>
              </div>
            </div>
            
            {/* Star Display and Justdial Direct Link */}
            <div className="flex flex-col items-center lg:items-end gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-2xl text-amber-400">★</span>
                ))}
              </div>
              <a 
                href="https://www.justdial.com/Palakkad/Fathima-Medical-Center-Vallapuzha/9999PX491-X491-230818192259-R3R9_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs font-bold text-[#0B4DBB] hover:underline ${
                  lang === 'ML' ? 'font-malayalam' : ''
                }`}
              >
                {lang === 'EN' && 'Verify Listing on Justdial →'}
                {lang === 'ML' && 'ജസ്റ്റ്‌ഡയലിൽ പരിശോധിക്കുക →'}
                {lang === 'AR' && 'تحقق من القائمة على جست دايال ←'}
              </a>
            </div>
          </div>

          {/* Quick Clinic Info Widgets */}
          <div className="mt-14 pt-10 border-t border-[#E0EBFC] text-center">
            <h3 className={`font-heading font-bold text-xl text-[#333333] mb-8 ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.featuresHeading}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: current.feat1, color: 'text-blue-600 bg-blue-50 border-blue-100', icon: Clock },
                { title: current.feat2, color: 'text-emerald-600 bg-emerald-50 border-emerald-100', icon: Heart },
                { title: current.feat3, color: 'text-teal-600 bg-teal-50 border-teal-100', icon: Award },
                { title: current.feat4, color: 'text-orange-600 bg-orange-50 border-orange-100', icon: ShieldAlert }
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-[#E0EBFC] rounded-2xl text-left hover:shadow-sm transition-all">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${feat.color}`}>
                    <feat.icon className="w-4.5 h-4.5" />
                  </div>
                  <span className={`text-xs font-extrabold text-gray-700 leading-tight ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}>
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
