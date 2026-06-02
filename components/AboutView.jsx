import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Award, Shield, CheckCircle, PhoneCall, Star } from 'lucide-react'

export default function AboutView({ lang }) {
  
  const text = {
    EN: {
      title: 'About Our Center',
      tagline: 'Quality Medicines, Professional Care, Better Health.',
      desc1: 'Fathima Medical Center is a modern community healthcare center located near the Railway Station Road in Vallapuzha, Palakkad, Kerala. We serve as a vital healthcare partner for local residents, safeguarding well-being with premium pharmaceutical drug dispensing, clinical guidance, and home delivery support.',
      desc2: 'Our facility represents the community healthcare values of Kerala—focused on clinical excellence, absolute transparency, and compassionate client services. Open daily, we are fully stocked with authentic allopathic drugs, Ayurveda medicines, and health-related retail products.',
      hoursHeading: 'Operating Hours',
      hoursDesc: 'Open Daily: 9:00 AM – 10:00 PM',
      hoursSub: 'Including public holidays, with emergency dispatch desks active for urgent prescriptions.',
      locHeading: 'Location & Area',
      locDesc: 'Railway Station Road, Vallapuzha, Palakkad, Kerala - 679336',
      departmentsHeading: 'Our Pharmacy Departments',
      dep1: 'Registered Chemist & Druggist',
      dep1Desc: 'State Board licensed apothecary with rigid dosage and composition checks.',
      dep2: 'Allopathic Medicine Dealer',
      dep2Desc: 'Comprehensive stock of pediatric, cardiac, diabetic, and generic chronic therapies.',
      dep3: 'Arya Vaidya Pharmacy (AVP)',
      dep3Desc: 'Authentic Ayurvedic formulations, herbal oils, and dietary supplements.',
      dep4: 'Medical Product Dealer',
      dep4Desc: 'Authorized diagnostic instruments, blood pressure trackers, and safety devices.',
      dep5: 'Jan Aushadhi Kendra Hub',
      dep5Desc: 'Government sponsored high-quality generic drugs at highly affordable rates.'
    },
    ML: {
      title: 'ഞങ്ങളുടെ സെന്ററിനെക്കുറിച്ച്',
      tagline: 'ഗുണനിലവാരമുള്ള മരുന്നുകൾ, പ്രൊഫഷണൽ പരിചരണം, മെച്ചപ്പെട്ട ആരോഗ്യം.',
      desc1: 'ഫാത്തിമ മെഡിക്കൽ സെന്റർ പാലക്കാട് ജില്ലയിലെ വല്ലപ്പുഴയിൽ റെയിൽവേ സ്റ്റേഷൻ റോഡിന് സമീപം പ്രവർത്തിക്കുന്ന പ്രമുഖ കമ്മ്യൂണിറ്റി ഹെൽത്ത്കെയർ സെന്ററാണ്. പ്രദേശവാസികൾക്കായി മികച്ച ഫാർമസി സേവനങ്ങൾ, മരുന്നുകളുടെ വിതരണം, വീട്ടിലെത്തിക്കുന്ന ഡെലിവറി എന്നിവ ഞങ്ങൾ നൽകുന്നു.',
      desc2: 'കേരളത്തിലെ മികച്ച ആരോഗ്യ മൂല്യങ്ങളെ ഉയർത്തിപ്പിടിച്ചാണ് ഞങ്ങളുടെ പ്രവർത്തനം. പ്രതിദിന പ്രവർത്തന മണിക്കൂറുകളോടെ പ്രവർത്തിക്കുന്ന ഞങ്ങളുടെ ഫാർമസിയിൽ എല്ലാത്തരം അലോപ്പതി മരുന്നുകളും, ആയുർവേദ ഔഷധങ്ങളും ലഭ്യമാണ്.',
      hoursHeading: 'പ്രവർത്തന സമയം',
      hoursDesc: 'എല്ലാ ദിവസവും: 9:00 AM – 10:00 PM',
      hoursSub: 'അടിയന്തിര ആവശ്യങ്ങൾക്കായി പ്രത്യേക ഹെൽപ്പ് ഡെസ്ക് എപ്പോഴും സജ്ജമാണ്.',
      locHeading: 'ഞങ്ങളുടെ വിലാസം',
      locDesc: 'റെയിൽവേ സ്റ്റേഷൻ റോഡ്, വല്ലപ്പുഴ, പാലക്കാട്, കേരളം - 679336',
      departmentsHeading: 'പ്രധാന വിഭാഗങ്ങൾ',
      dep1: 'അംഗീകൃത മരുന്ന് വിതരണ വിഭാഗം',
      dep1Desc: 'കൃത്യമായ ഡോസേജ് പരിശോധനകളോടെ പ്രവർത്തിക്കുന്ന സ്റ്റേറ്റ് അംഗീകൃത ഫാർമസി.',
      dep2: 'അലോപ്പതി മരുന്ന് വിതരണം',
      dep2Desc: 'ശിശുരോഗങ്ങൾ, ഹൃദ്രോഗം, പ്രമേഹം തുടങ്ങിയവയ്ക്കുള്ള മരുന്നുകളുടെ വലിയ ശേഖരം.',
      dep3: 'ആര്യ വൈദ്യ ഫാർമസി (AVP)',
      dep3Desc: 'വിശ്വസനീയമായ ആയുർവേദ മരുന്നുകളും ഔഷധ എണ്ണകളും.',
      dep4: 'മെഡിക്കൽ ഉപകരണങ്ങളുടെ വിതരണം',
      dep4Desc: 'രക്തസമ്മർദ്ദം, ഷുഗർ തുടങ്ങിയവ പരിശോധിക്കുന്നതിനുള്ള അത്യാധുനിക ഉപകരണങ്ങൾ.',
      dep5: 'ജൻ ഔഷധി കേന്ദ്രം',
      dep5Desc: 'ഗുണനിലവാരമുള്ള ജനറിക് മരുന്നുകൾ കുറഞ്ഞ നിരക്കിൽ ലഭ്യമാക്കുന്ന കേന്ദ്രം.'
    },
    AR: {
      title: 'حول مركزنا',
      tagline: 'أدوية عالية الجودة، رعاية مهنية، صحة أفضل.',
      desc1: 'يقع مركز فاطمة الطبي بالقرب من طريق محطة القطار في فالابوزا، بالاكاد، كيرلا. نحن نخدم سكان المنطقة من خلال توفير الأدوية، والمنتجات المتعلقة بالرعاية الصحية، وصرف الوصفات الطبية بشكل آمن وسليم.',
      desc2: 'يمثل مرفقنا قيم الرعاية الصحية الرائدة في كيرلا، مع التركيز على التميز والسرية والرحمة في خدمة المرضى. نحن مفتوحون يومياً ونوفر الأدوية الألوپاثية والأيورفيدية على حد سواء.',
      hoursHeading: 'ساعات العمل',
      hoursDesc: 'مفتوح يومياً: ٩:٠٠ صباحاً – ١٠:٠٠ مساءً',
      hoursSub: 'بما في ذلك العطلات الرسمية، مع وجود مكاتب صرف الطوارئ النشطة على مدار الساعة.',
      locHeading: 'الموقع والعنوان',
      locDesc: 'طريق محطة القطار، فالابوزا، بالاكاد، كيرلا - 679336',
      departmentsHeading: 'أقسام الصيدلية الأساسية',
      dep1: 'صيدلية وصرف أدوية مرخصة',
      dep1Desc: 'صيدلية معتمدة من مجلس الولاية مع ضوابط صارمة للجرعات الدوائية.',
      dep2: 'موزع أدوية ألوپاثية متكامل',
      dep2Desc: 'مخزون شامل لعلاجات الأطفال والقلب والسكري والعلاجات المزمنة.',
      dep3: 'صيدلية آريا فايديا (AVP)',
      dep3Desc: 'تركيبات آيورفيدية أصلية وزيوت عشبية ومكملات غذائية طبيعية.',
      dep4: 'موزع منتجات وأجهزة طبية',
      dep4Desc: 'أجهزة قياس ضغط الدم، وتتبع السكر المعتمدة من الجهات الطبية.',
      dep5: 'مركز جن أوشادهي للأدوية الجنيسة',
      dep5Desc: 'توفير الأدوية الجنيسة عالية الجودة المدعومة حكومياً بأسعار معقولة جداً.'
    }
  }

  const current = text[lang] || text['EN']
  const isRtl = lang === 'AR'

  const departments = [
    { title: current.dep1, desc: current.dep1Desc },
    { title: current.dep2, desc: current.dep2Desc },
    { title: current.dep3, desc: current.dep3Desc },
    { title: current.dep4, desc: current.dep4Desc },
    { title: current.dep5, desc: current.dep5Desc }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left"
    >
      {/* Header Banner */}
      <div className="border-b border-[#E0EBFC] pb-10 mb-12">
        <h1 className={`font-heading font-extrabold text-4xl text-[#333333] mb-4 ${
          lang === 'ML' ? 'font-malayalam' : ''
        }`}>
          {current.title}
        </h1>
        <p className={`text-lg font-bold text-[#0B4DBB] ${
          lang === 'ML' ? 'font-malayalam' : ''
        }`}>
          {current.tagline}
        </p>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Col: Descriptions and Departments */}
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base font-medium">
            <p className={lang === 'ML' ? 'font-malayalam' : ''}>{current.desc1}</p>
            <p className={lang === 'ML' ? 'font-malayalam' : ''}>{current.desc2}</p>
          </div>

          {/* Departments Grid */}
          <div className="pt-6">
            <h2 className={`font-heading font-extrabold text-2xl text-[#333333] mb-8 ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.departmentsHeading}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, idx) => (
                <div key={idx} className="bg-white border border-[#E0EBFC] rounded-2xl p-6 hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B4DBB] flex items-center justify-center shrink-0 border border-blue-100">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`font-heading font-bold text-base text-[#333333] mb-1.5 ${
                      lang === 'ML' ? 'font-malayalam font-bold' : ''
                    }`}>
                      {dept.title}
                    </h3>
                    <p className={`text-gray-500 text-xs leading-relaxed ${
                      lang === 'ML' ? 'font-malayalam font-medium' : ''
                    }`}>
                      {dept.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Info Widgets (Hours, Location, Ratings) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Operating Hours Widget */}
          <div className="bg-[#0B4DBB] text-white rounded-3xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className={`font-heading font-bold text-lg ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {current.hoursHeading}
              </h3>
            </div>
            
            <p className={`text-xl font-extrabold mb-3 tracking-tight ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.hoursDesc}
            </p>
            <p className={`text-xs text-blue-100 font-medium leading-relaxed ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              {current.hoursSub}
            </p>
          </div>

          {/* Location & Details Widget */}
          <div className="bg-white border border-[#E0EBFC] rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#FF1E2D] flex items-center justify-center shrink-0 border border-red-100">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className={`font-heading font-bold text-lg text-[#333333] ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {current.locHeading}
              </h3>
            </div>
            
            <p className={`text-sm text-gray-500 font-bold mb-4 ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              {current.locDesc}
            </p>

            {/* Static visual map helper */}
            <div className="h-32 bg-slate-100 border border-[#E0EBFC] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#E0EBFC_1px,transparent_1px)] [background-size:16px_16px] opacity-60" />
              <div className="w-12 h-12 bg-[#FF1E2D]/10 text-[#FF1E2D] rounded-full flex items-center justify-center border border-[#FF1E2D]/20 animate-pulse">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Clinical Credentials & Badges */}
          <div className="border border-[#E0EBFC] rounded-3xl p-6 bg-slate-50/50 space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className={`text-xs font-extrabold text-gray-700 ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {lang === 'EN' && 'Authorized Drug License Holder'}
                {lang === 'ML' && 'അംഗീകൃത മരുന്ന് വിതരണ ലൈസൻസ്'}
                {lang === 'AR' && 'حائز على ترخيص توزيع الأدوية الرسمي'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[#0B4DBB] shrink-0" />
              <span className={`text-xs font-extrabold text-gray-700 ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                {lang === 'EN' && '5.0 Star rated on Justdial'}
                {lang === 'ML' && 'ജസ്റ്റ്‌ഡയലിൽ 5.0 സ്റ്റാർ റേറ്റിംഗ്'}
                {lang === 'AR' && 'حائز على تقييم ممتاز ٥.٠ نجوم'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  )
}
