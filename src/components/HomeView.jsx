import React from 'react'
import { motion } from 'framer-motion'
import HeroSlider from './HeroSlider'
import { Calendar, FileText, Search, ShieldAlert, Award, MessageSquare, Heart, Clock, MapPin, Star, Stethoscope } from 'lucide-react'

// Smooth counting up animation using requestAnimationFrame
function AnimatedCounter({ target, duration = 3000, suffix = "" }) {
  const [count, setCount] = React.useState(0)
  const [trigger, setTrigger] = React.useState(0)

  // Trigger re-animation every 10 seconds
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTrigger((prev) => prev + 1)
    }, 10000)

    return () => clearInterval(intervalId)
  }, [])

  React.useEffect(() => {
    let startTimestamp = null
    let animationFrameId = null

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const easeProgress = progress * (2 - progress) // easeOutQuad
      const currentVal = Math.floor(easeProgress * target)
      
      setCount(currentVal)

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step)
      }
    }

    animationFrameId = window.requestAnimationFrame(step)

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [target, duration, trigger])

  return <span>{count.toLocaleString()}{suffix}</span>
}

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
      feat4: 'Himalaya Herbal Wellness',
      greetHeading: 'About Us',
      greetDesc: 'Fathima Medical Center represents clinical pharmacy excellence and compassionate patient care in Vallapuzha. For over a decade, we have been Palakkad\'s premier health service partner, providing authentic medicine dispensing, standard Ayurveda remedies, generic Jan Aushadhi access, and round-the-clock professional clinical guidance. We safeguard your family\'s health with rigorous safety controls and warm community values.',
      statsLabel1: 'Happy Customers',
      statsLabel2: 'Years of Experience',
      statsLabel3: 'Consulting',
      ctaBook: 'Schedule Free Slot',
      bannerHeading: 'Empowering Community Health Across Generations',
      bannerDesc: 'Experience transparent clinical services, fully certified drug dosage validations, and affordable generic health plans.'
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
      feat4: 'ഹിമാലയ ഹെർബൽ വെൽനസ്',
      greetHeading: 'ഞങ്ങളെക്കുറിച്ച്',
      greetDesc: 'ഫാത്തിമ മെഡിക്കൽ സെന്റർ വല്ലപ്പുഴയിൽ മികച്ച ക്ലിനിക്കൽ ഫാർമസി സേവനങ്ങളും കാരുണ്യത്തോടുള്ള പരിചരണവും വാഗ്ദാനം ചെയ്യുന്നു. ഒരു പതിറ്റാണ്ടിലേറെയായി, ഞങ്ങൾ പാലക്കാട്ടെ പ്രമുഖ ആരോഗ്യ സേവന പങ്കാളിയാണ്. അലോപ്പതി മരുന്നുകൾ, ആര്യ വൈദ്യ ഫാർമസി ആയുർവേദം, കുറഞ്ഞ ചെലവിൽ ജൻ ഔഷധി മരുന്നുകൾ എന്നിവയും 24 മണിക്കൂർ ഫാർമസിസ്റ്റ് ഉപദേശവും ഇവിടെ ലഭ്യമാക്കുന്നു.',
      statsLabel1: 'സന്തുഷ്ടരായ ഉപഭോക്താക്കൾ',
      statsLabel2: 'വർഷത്തെ പരിചയം',
      statsLabel3: 'കൺസൾട്ടിങ്',
      ctaBook: 'അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക',
      bannerHeading: 'തലമുറകളിലൂടെ കമ്മ്യൂണിറ്റി ആരോഗ്യം ശാക്തീകരിക്കുന്നു',
      bannerDesc: 'സുതാര്യമായ ക്ലിനിക്കൽ സേവനങ്ങളും, കൃത്യതയാർന്ന ഡോസേജ് പരിശോധനകളും, കുറഞ്ഞ ചെലവിലുള്ള ആരോഗ്യ പദ്ധതികളും അനുഭവിച്ചറിയൂ.'
    },
    AR: {
      badge: 'Ø´Ø±ÙŠÙƒ Ø§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„ØµØ­ÙŠØ© Ø§Ù„Ù…ÙˆØ«ÙˆÙ‚ Ù„ÙƒÙ„ Ø¹Ø§Ø¦Ù„Ø©',
      heading: 'ØµÙŠØ¯Ù„ÙŠØ© Ø³Ø±ÙŠØ±ÙŠØ© ÙˆØ±Ø¹Ø§ÙŠØ© Ø£ÙˆÙ„ÙŠØ© Ø°Ø§Øª Ù…Ø³ØªÙˆÙ‰ Ø¹Ø§Ù„Ù…ÙŠ',
      desc: 'Ù…Ø±ÙƒØ² ÙØ§Ø·Ù…Ø© Ø§Ù„Ø·Ø¨ÙŠ Ù‡Ùˆ Ù…Ø±ÙƒØ² Ø±Ø¹Ø§ÙŠØ© ØµØ­ÙŠØ© Ù…Ø¬ØªÙ…Ø¹ÙŠ Ø­Ø¯ÙŠØ« ÙÙŠ ÙØ§Ù„Ø§Ø¨ÙˆØ²Ø§ØŒ ÙƒÙŠØ±Ù„Ø§. Ù†Ø­Ù† Ù†Ù‚Ø¯Ù… Ø£Ø¯ÙˆÙŠØ© Ø£ØµÙ„ÙŠØ©ØŒ ÙˆØ§Ø³ØªØ´Ø§Ø±Ø§Øª Ø³Ø±ÙŠØ±ÙŠØ© Ù…Ù‡Ù†ÙŠØ©ØŒ ÙˆÙØ­ÙˆØµØ§Øª ØµØ­ÙŠØ© ØªØ´Ø®ÙŠØµÙŠØ© Ø´Ø§Ù…Ù„Ø©ØŒ ÙˆØªÙˆØµÙŠÙ„ Ø§Ù„Ø£Ø¯ÙˆÙŠØ© Ù…Ø¨Ø§Ø´Ø±Ø© Ø¥Ù„Ù‰ Ø§Ù„Ù…Ù†Ø§Ø²Ù„.',
      card1Title: 'ØªØ­Ù…ÙŠÙ„ ÙˆØµÙØ© Ø·Ø¨ÙŠØ©',
      card1Desc: 'Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø£Ø¯ÙˆÙŠØªÙƒ ÙˆØªÙˆØµÙŠÙ„Ù‡Ø§ Ù…Ø¨Ø§Ø´Ø±Ø© Ø¥Ù„Ù‰ Ø¹ØªØ¨Ø© Ø¯Ø§Ø±Ùƒ ÙÙŠ ÙØ§Ù„Ø§Ø¨ÙˆØ²Ø§.',
      card2Title: 'Ø¨Ø§Ù‚Ø§Øª ÙØ­Øµ Ø§Ù„ØµØ­Ø©',
      card2Desc: 'Ø§Ø³ØªÙƒØ´Ù Ø§Ù„ÙØ­ÙˆØµØ§Øª Ø§Ù„ØµØ­ÙŠØ© Ø§Ù„Ø´Ø§Ù…Ù„Ø© Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„ÙØ¦Ø§Øª Ø§Ù„Ø¹Ù…Ø±ÙŠØ©.',
      card3Title: 'Ø§Ù„Ø¨Ø­Ø« Ø¹Ù† Ø£Ø®ØµØ§Ø¦ÙŠ',
      card3Desc: 'Ø§Ø¨Ø­Ø« Ø¹Ù† Ø§Ù„Ø£Ø·Ø¨Ø§Ø¡ Ø§Ù„Ø§Ø³ØªØ´Ø§Ø±ÙŠÙŠÙ† ÙˆØ¬Ø¯ÙˆÙ„ Ù…ÙˆØ§Ø¹ÙŠØ¯Ùƒ Ù…Ø¹Ù‡Ù….',
      card4Title: 'ØµÙŠØ¯Ù„ÙŠØ© ÙˆØ§ØªØ³Ø§Ø¨',
      card4Desc: 'Ø·Ù„Ø¨ Ø³Ø±ÙŠØ¹ Ù„Ù„Ø£Ø¯ÙˆÙŠØ© ÙˆØ§Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø¹Ø¨Ø± Ø¯Ø±Ø¯Ø´Ø© ÙˆØ§ØªØ³Ø§Ø¨ Ø§Ù„Ù…Ø¨Ø§Ø´Ø±Ø©.',
      ratingTitle: 'ØªÙ‚ÙŠÙŠÙ… Ù…Ù…ØªØ§Ø² Ù¥.Ù  / Ù¥ Ù…Ù† Ø¬Ø³Øª Ø¯Ø§ÙŠØ§Ù„',
      ratingDesc: 'Ø¯Ø¹Ù… Ù…Ø¬ØªÙ…Ø¹ÙŠ Ø°Ùˆ ØªØµÙ†ÙŠÙ Ø¹Ø§Ù„Ù Ù„ØµØ±Ù Ø§Ù„Ø£Ø¯ÙˆÙŠØ© Ø§Ù„Ø£ØµÙ„ÙŠØ© ÙˆØ§Ù„ØªÙˆØ¬ÙŠÙ‡Ø§Øª Ø§Ù„Ø³Ø±ÙŠØ±ÙŠØ© Ø§Ù„Ù…Ù‡Ù†ÙŠØ©.',
      featuresHeading: 'Ù„Ù…Ø§Ø°Ø§ ØªØ®ØªØ§Ø± Ø¹ÙŠØ§Ø¯Ø© ÙØ§Ø·Ù…Ø© Ø§Ù„Ø·Ø¨ÙŠØ©ØŸ',
      feat1: 'Ù…ÙƒØªØ¨ Ø§Ù„ØµÙŠØ¯Ù„Ø© Ø§Ù„Ù…ÙØªÙˆØ­ Ù¢Ù¤/Ù§',
      feat2: 'ØµÙŠØ¯Ù„ÙŠØ© Ø¢Ø±ÙŠØ§ ÙØ§ÙŠØ¯ÙŠØ§ Ø¢ÙŠÙˆØ±ÙÙŠØ¯Ø§',
      feat3: 'Ù…Ø±ÙƒØ² Ø¬Ù† Ø£ÙˆØ´Ø§Ø¯Ù‡ÙŠ Ù„Ù„Ø£Ø¯ÙˆÙŠØ© Ø§Ù„Ø¬Ù†ÙŠØ³Ø©',
      feat4: 'Ù‚Ø³Ù… Ù‡ÙŠÙ…Ø§Ù„Ø§ÙŠØ§ Ù‡ÙŠØ±Ø¨Ø§Ù„ Ù„Ù„ØµØ­Ø©',
      greetHeading: 'Ù…Ù† Ù†Ø­Ù†',
      greetDesc: 'ÙŠÙ…Ø«Ù„ Ù…Ø±ÙƒØ² ÙØ§Ø·Ù…Ø© Ø§Ù„Ø·Ø¨ÙŠ Ø§Ù„ØªÙ…ÙŠØ² ÙÙŠ Ø§Ù„ØµÙŠØ¯Ù„Ø© Ø§Ù„Ø³Ø±ÙŠØ±ÙŠØ© ÙˆØ§Ù„Ø±Ø¹Ø§ÙŠØ© Ø§Ù„Ø­Ù†ÙˆÙ†Ø© Ø¨Ø§Ù„Ù…Ø±Ø¶Ù‰ ÙÙŠ ÙØ§Ù„Ø§Ø¨ÙˆØ²Ø§. Ù„Ø£ÙƒØ«Ø± Ù…Ù† Ø¹Ù‚Ø¯ Ù…Ù† Ø§Ù„Ø²Ù…Ø§Ù†ØŒ ÙƒÙ†Ø§ Ø§Ù„Ø´Ø±ÙŠÙƒ Ø§Ù„Ø£Ø¨Ø±Ø² Ù„Ù„Ø®Ø¯Ù…Ø§Øª Ø§Ù„ØµØ­ÙŠØ© ÙÙŠ Ø¨Ø§Ù„Ø§ÙƒØ§Ø¯ØŒ Ø­ÙŠØ« Ù†Ù‚Ø¯Ù… ØµØ±Ù Ø§Ù„Ø£Ø¯ÙˆÙŠØ© Ø§Ù„Ø£ØµÙ„ÙŠØ©ØŒ ÙˆØ¹Ù„Ø§Ø¬Ø§Øª Ø¢Ø±ÙŠØ§ ÙØ§ÙŠØ¯ÙŠØ§ Ø¢ÙŠÙˆØ±ÙÙŠØ¯Ø§ØŒ ÙˆØ§Ù„Ø­ØµÙˆÙ„ Ø¹Ù„Ù‰ Ø£Ø¯ÙˆÙŠØ© Ø¬Ù† Ø£ÙˆØ´Ø§Ø¯Ù‡ÙŠ Ø§Ù„Ø¬Ù†ÙŠØ³Ø©ØŒ ÙˆØ§Ù„ØªÙˆØ¬ÙŠÙ‡ Ø§Ù„Ø³Ø±ÙŠØ±ÙŠ Ø§Ù„Ù…Ù‡Ù†ÙŠ Ø¹Ù„Ù‰ Ù…Ø¯Ø§Ø± Ø§Ù„Ø³Ø§Ø¹Ø©.',
      statsLabel1: 'Ø¹Ù…Ù„Ø§Ø¡ Ø³Ø¹Ø¯Ø§Ø¡',
      statsLabel2: 'Ø¹Ø§Ù…Ø§Ù‹ Ù…Ù† Ø§Ù„Ø®Ø¨Ø±Ø©',
      statsLabel3: 'Ø§Ø³ØªØ´Ø§Ø±Ø§Øª Ø·Ø¨ÙŠØ©',
      ctaBook: 'Ø­Ø¬Ø² Ù…ÙˆØ¹Ø¯ Ù…Ø¬Ø§Ù†ÙŠ',
      bannerHeading: 'ØªÙ…ÙƒÙŠÙ† Ø§Ù„ØµØ­Ø© Ø§Ù„Ù…Ø¬ØªÙ…Ø¹ÙŠØ© Ø¹Ø¨Ø± Ø§Ù„Ø£Ø¬ÙŠØ§Ù„',
      bannerDesc: 'Ø§Ø­ØµÙ„ Ø¹Ù„Ù‰ Ø®Ø¯Ù…Ø§Øª Ø³Ø±ÙŠØ±ÙŠØ© Ø´ÙØ§ÙØ©ØŒ ÙˆØ´Ù‡Ø§Ø¯Ø§Øª Ù…Ø¹ØªÙ…Ø¯Ø© Ù„ØªØ±ÙƒÙŠØ¨Ø§Øª Ø§Ù„Ø£Ø¯ÙˆÙŠØ©ØŒ ÙˆØ­Ù„ÙˆÙ„ Ø¹Ù„Ø§Ø¬ÙŠØ© Ø¨Ø£Ø³Ø¹Ø§Ø± Ù…Ø¹Ù‚ÙˆÙ„Ø©.'
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
              whileHover={{ y: -6 }}
              onClick={() => onNavigate('delivery')}
              className="bg-blue-50/30 border border-blue-200/65 hover:border-[#0B4DBB] p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-blue-100/60 transition-all cursor-pointer text-left flex flex-col group justify-between animate-fade-in"
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
              whileHover={{ y: -6 }}
              onClick={() => onNavigate('checkups')}
              className="bg-teal-50/30 border border-teal-200/65 hover:border-teal-500 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-teal-100/60 transition-all cursor-pointer text-left flex flex-col group justify-between"
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
              whileHover={{ y: -6 }}
              onClick={() => onNavigate('doctors')}
              className="bg-indigo-50/30 border border-indigo-200/65 hover:border-indigo-500 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-indigo-100/60 transition-all cursor-pointer text-left flex flex-col group justify-between"
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
              whileHover={{ y: -6 }}
              href="https://wa.me/918086537077"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-50/30 border border-emerald-200/65 hover:border-emerald-500 p-6 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-100/60 transition-all cursor-pointer text-left flex flex-col group justify-between"
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
                { 
                  title: current.feat1, 
                  cardStyle: 'bg-blue-50/20 border-blue-200/50 hover:border-blue-400 hover:shadow-md hover:shadow-blue-100/50', 
                  iconColor: 'text-blue-600 bg-blue-50 border-blue-100', 
                  icon: Clock 
                },
                { 
                  title: current.feat2, 
                  cardStyle: 'bg-emerald-50/20 border-emerald-200/50 hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-100/50', 
                  iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-100', 
                  icon: Heart 
                },
                { 
                  title: current.feat3, 
                  cardStyle: 'bg-teal-50/20 border-teal-200/50 hover:border-teal-400 hover:shadow-md hover:shadow-teal-100/50', 
                  iconColor: 'text-teal-600 bg-teal-50 border-teal-100', 
                  icon: Award 
                },
                { 
                  title: current.feat4, 
                  cardStyle: 'bg-orange-50/20 border-orange-200/50 hover:border-orange-400 hover:shadow-md hover:shadow-orange-100/50', 
                  iconColor: 'text-orange-600 bg-orange-50 border-orange-100', 
                  icon: ShieldAlert 
                }
              ].map((feat, idx) => (
                <div key={idx} className={`flex items-center gap-3 p-4 rounded-2xl text-left border transition-all ${feat.cardStyle}`}>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${feat.iconColor}`}>
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

      {/* Section 1: Corporate Trust Statistics & Greeting Message Grid */}
      <section className="bg-white py-16 border-b border-[#E0EBFC]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Greeting Block */}
            <div className={`lg:col-span-7 text-left ${isRtl ? 'lg:order-2 lg:text-right' : ''}`}>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-[#0B4DBB] mb-4 ${
                lang === 'ML' ? 'font-malayalam' : ''
              }`}>
                <Award className="w-3.5 h-3.5" />
                {lang === 'EN' && "Director's Desk Welcome"}
                {lang === 'ML' && "ഡയറക്ടറുടെ സ്വാഗതം"}
                {lang === 'AR' && "ترقية إدارة المركز"}
              </span>
              <h2 className={`font-heading font-extrabold text-2xl md:text-3xl text-[#333333] leading-tight mb-4 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {current.greetHeading}
              </h2>
              <div className="w-12 h-1 bg-[#0B4DBB] rounded mb-6" />
              <p className={`text-gray-500 text-sm md:text-base leading-relaxed ${
                lang === 'ML' ? 'font-malayalam font-medium' : ''
              }`}>
                {current.greetDesc}
              </p>
            </div>

            {/* Right Col: Animated Stats Cards */}
            <div className={`lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 ${isRtl ? 'lg:order-1' : ''}`}>
              
              {/* Stat 1: 5,00,000+ Happy Customers */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100/60 p-6 rounded-2xl text-left flex items-center gap-4 shadow-sm hover:shadow-md transition-all animate-fade-in"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#333333]">
                    <AnimatedCounter target={500000} suffix="+" />
                  </div>
                  <div className={`text-xs text-gray-500 font-bold mt-0.5 ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                    {current.statsLabel1}
                  </div>
                </div>
              </motion.div>

              {/* Stat 2: 10+ Years Experience */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100/60 p-6 rounded-2xl text-left flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0B4DBB] flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#333333]">
                    <AnimatedCounter target={10} suffix="+" />
                  </div>
                  <div className={`text-xs text-gray-500 font-bold mt-0.5 ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                    {current.statsLabel2}
                  </div>
                </div>
              </motion.div>

              {/* Stat 3: 50,000+ Consulting */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/40 p-6 rounded-2xl text-left flex items-center gap-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B4DBB] flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-[#0B4DBB]" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-black text-[#333333]">
                    <AnimatedCounter target={50000} suffix="+" />
                  </div>
                  <div className={`text-xs text-gray-500 font-bold mt-0.5 ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                    {current.statsLabel3}
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Premium Clinical Background Hero Banner */}
      <section className="relative w-full h-[460px] md:h-[480px] overflow-hidden flex items-center border-b border-[#E0EBFC]/60">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/herosection/c2.png" 
            alt="Clinical Quality Assurance" 
            className="w-full h-full object-cover object-center scale-105" 
          />
          {/* Elegant Premium Dark Charcoal Gradient Overlay to decrease the blue shade, matching zains-hospital aesthetics */}
          <div className={`absolute inset-0 bg-gradient-to-r ${
            isRtl 
              ? 'from-transparent via-black/60 to-black/85' 
              : 'from-black/85 via-black/60 to-transparent'
          }`} />
        </div>

        {/* Ambient floating bubble */}
        <div className="absolute top-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <div className={`max-w-2xl text-white ${isRtl ? 'mr-auto text-right' : ''}`}>
            
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-blue-100 mb-4 backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-blue-200" />
              {lang === 'EN' && 'Comprehensive Health Pledge'}
              {lang === 'ML' && 'സമഗ്ര ആരോഗ്യ പ്രതിജ്ഞ'}
              {lang === 'AR' && 'تعهد الصحة الشامل'}
            </span>
            
            <h2 className={`font-heading font-extrabold text-2xl md:text-4xl text-white leading-tight mb-4 ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.bannerHeading}
            </h2>
            
            <p className={`text-blue-100 text-sm md:text-base leading-relaxed mb-6 opacity-90 ${
              lang === 'ML' ? 'font-malayalam font-medium' : ''
            }`}>
              {current.bannerDesc}
            </p>

            {/* Checkbox grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
              {[
                { text: lang === 'EN' ? 'Authorized Drug License Counter' : lang === 'ML' ? 'അംഗീകൃത ഫാർമസി കൗണ്ടർ' : 'موزع أدوية معتمد ومرخص' },
                { text: lang === 'EN' ? 'Arya Vaidya Pharmacy (AVP)' : lang === 'ML' ? 'ആര്യ വൈദ്യ ഫാർമസി' : 'علاجات آيورفيدية أصلية' },
                { text: lang === 'EN' ? 'Jan Aushadhi Generic Hub' : lang === 'ML' ? 'ജൻ ഔഷധി ജനറിക് മരുന്നുകൾ' : 'أدوية جنيسة عالية الجودة' },
                { text: lang === 'EN' ? '24/7 Professional Pharmacists' : lang === 'ML' ? '24 മണിക്കൂർ ഫാർമസിസ്റ്റ് സേവനം' : 'رعاية صيدلية مهنية ٢٤/٧' }
              ].map((item, idx) => (
                <div key={idx} className={`flex items-center gap-2.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 text-[10px] font-bold shrink-0">
                    ✓
                  </div>
                  <span className={`text-xs md:text-sm font-bold text-white/90 ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct consultation/slot scheduling CTA */}
            <button
              onClick={onOpenAppointment}
              className={`w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-blue-50 text-[#0B4DBB] font-extrabold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                lang === 'ML' ? 'font-malayalam' : ''
              } ${isRtl ? 'mr-auto' : ''}`}
            >
              <Calendar className="w-5 h-5 text-[#0B4DBB]" />
              <span>{current.ctaBook}</span>
            </button>

          </div>
        </div>

      </section>

    </div>
  )
}
