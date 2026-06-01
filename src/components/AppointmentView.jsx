import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, CheckCircle, Clock, Stethoscope, User, Phone } from 'lucide-react'

export default function AppointmentView({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: 'General Medicine',
    doctor: 'FR',
    date: '',
    time: '',
    symptoms: ''
  })
  const [success, setSuccess] = useState(false)

  const text = {
    EN: {
      title: 'Book a Consultation',
      tagline: 'Secure slot times with our clinical consulting specialists.',
      formHeading: 'Consultation Booking Form',
      labelName: 'Patient Full Name',
      labelPhone: 'Contact Phone Number',
      labelSpec: 'Clinical Specialty',
      labelDoc: 'Preferred Consulting Doctor',
      labelDate: 'Appointment Date',
      labelTime: 'Preferred Time Slot',
      labelSymptoms: 'Chief Complaints / Health Symptoms',
      placeholderName: 'e.g. John Doe',
      placeholderSymptoms: 'e.g. Fever for 2 days, chest discomfort...',
      btnSubmit: 'Confirm Booking Request',
      successTitle: 'Consultation Requested!',
      successDesc: 'Your request has been successfully registered. Our front desk coordinator will dial your number shortly to confirm the scheduled practitioner slots.'
    },
    ML: {
      title: 'അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക',
      tagline: 'ഞങ്ങളുടെ വിദഗ്ദ്ധ ഡോക്ടർമാരുടെ സേവനം ഉറപ്പാക്കാൻ സമയം ബുക്ക് ചെയ്യുക.',
      formHeading: 'ബുക്കിംഗ് വിവരങ്ങൾ',
      labelName: 'രോഗിയുടെ പേര്',
      labelPhone: 'ഫോൺ നമ്പർ',
      labelSpec: 'മെഡിക്കൽ വിഭാഗം',
      labelDoc: 'ഡോക്ടർ',
      labelDate: 'തീയതി',
      labelTime: 'സമയം',
      labelSymptoms: 'ശാരീരിക ബുദ്ധിമുട്ടുകൾ / ലക്ഷണങ്ങൾ',
      placeholderName: 'ഉദാഹരണത്തിന്: പ്രണവ്',
      placeholderSymptoms: 'ഉദാഹരണത്തിന്: രണ്ട് ദിവസമായി പനി, തലവേദന...',
      btnSubmit: 'അപ്പോയിന്റ്മെന്റ് സ്ഥിരീകരിക്കുക',
      successTitle: 'ബുക്കിംഗ് വിജയകരമായി സമർപ്പിച്ചു!',
      successDesc: 'അപ്പോയിന്റ്മെന്റ് സമയം സ്ഥിരീകരിക്കുന്നതിനായി ഞങ്ങളുടെ ഫ്രണ്ട് ഡെസ്കിൽ നിന്നും നിങ്ങളെ ഉടൻ വിളിക്കുന്നതാണ്.'
    },
    AR: {
      title: 'حجز موعد استشارة',
      tagline: 'احجز موعداً آمناً مع الأطباء الاستشاريين المتخصصين لدينا.',
      formHeading: 'نموذج طلب حجز موعد سريري',
      labelName: 'اسم المريض بالكامل',
      labelPhone: 'رقم الهاتف للتواصل',
      labelSpec: 'التخصص الطبي المطلوب',
      labelDoc: 'الطبيب الاستشاري المفضل',
      labelDate: 'تاريخ الموعد',
      labelTime: 'الوقت المفضل والفرصة',
      labelSymptoms: 'الشكاوى الرئيسية / الأعراض الصحية',
      placeholderName: 'مثال: أحمد عبد الله',
      placeholderSymptoms: 'مثال: حمى لمدة يومين، آلام في المفاصل...',
      btnSubmit: 'تأكيد طلب الحجز',
      successTitle: 'تم طلب الموعد بنجاح!',
      successDesc: 'تم تسجيل طلب حجزك بنجاح. سيتصل بك منسق الاستقبال لدينا قريباً لتأكيد المواعيد وساعة الحضور المحددة.'
    }
  }

  const current = text[lang] || text['EN']

  const specialties = {
    EN: ['General Medicine', 'Pediatrics', 'Orthopedics', 'Laboratory Clinic', 'Emergency Care'],
    ML: ['ജനറൽ മെഡിസിൻ', 'പീഡിയാട്രിക്സ് (ശിശുരോഗ വിഭാഗം)', 'ഓർത്തോപീഡിക്സ് (അസ്ഥിരോഗ വിഭാഗം)', 'ലബോറട്ടറി ക്ലിനിക്ക്', 'അടിയന്തര പരിചരണം'],
    AR: ['الطب العام', 'طب الأطفال', 'طب العظام', 'المختبر السريري', 'رعاية الطوارئ']
  }

  const doctors = [
    { code: 'FR', name: lang === 'EN' ? 'Dr. Faisal Rahman (General Medicine)' : lang === 'ML' ? 'ഡോ. ഫൈസൽ റഹ്മാൻ (ജനറൽ മെഡിസിൻ)' : 'د. فيصل الرحمن (الطب العام)' },
    { code: 'MT', name: lang === 'EN' ? 'Dr. Maryam Thomas (Pediatrics)' : lang === 'ML' ? 'ഡോ. മറിയം തോമസ് (പീഡിയാട്രിക്സ്)' : 'د. مريم توماس (الأطفال)' },
    { code: 'JM', name: lang === 'EN' ? 'Dr. Jafar Moideenkutty (Pediatrics)' : lang === 'ML' ? 'ഡോ. ജാഫർ മൊയ്തീൻകുട്ടി (പീഡിയാട്രിക്സ്)' : 'د. جعفر محي الدين كوتي (الأطفال)' },
    { code: 'SK', name: lang === 'EN' ? 'Dr. Suresh Kumar (Orthopedics)' : lang === 'ML' ? 'ഡോ. സുരേഷ് കുമാർ (ഓർത്തോപീഡിക്സ്)' : 'د. سوريش كومار (العظام)' }
  ]

  // Handle bidirectional sync and language persistence
  useEffect(() => {
    const langKeys = Object.keys(specialties)
    let foundIdx = 0
    for (const key of langKeys) {
      const idx = specialties[key].indexOf(formData.specialty)
      if (idx !== -1) {
        foundIdx = idx
        break
      }
    }
    const currentSpecs = specialties[lang] || specialties['EN']
    setFormData(prev => ({
      ...prev,
      specialty: currentSpecs[foundIdx] || currentSpecs[0]
    }))
  }, [lang])

  const handleSpecialtyChange = (specValue) => {
    const currentSpecs = specialties[lang] || specialties['EN']
    const idx = currentSpecs.indexOf(specValue)
    let newDoctor = formData.doctor

    if (idx === 0) newDoctor = 'FR'
    else if (idx === 1) {
      if (newDoctor !== 'MT' && newDoctor !== 'JM') {
        newDoctor = 'MT' // Default pediatrician
      }
    }
    else if (idx === 2) newDoctor = 'SK'
    else if (idx === 3) newDoctor = 'FR' // Fallback to Dr. Faisal Rahman for general clinic/lab referrals
    else if (idx === 4) newDoctor = 'FR' // Fallback to Dr. Faisal Rahman for general emergency handling

    setFormData(prev => ({
      ...prev,
      specialty: specValue,
      doctor: newDoctor
    }))
  }

  const handleDoctorChange = (docCode) => {
    const currentSpecs = specialties[lang] || specialties['EN']
    let newSpecialty = formData.specialty

    if (docCode === 'FR') newSpecialty = currentSpecs[0]
    else if (docCode === 'MT' || docCode === 'JM') newSpecialty = currentSpecs[1]
    else if (docCode === 'SK') newSpecialty = currentSpecs[2]

    setFormData(prev => ({
      ...prev,
      doctor: docCode,
      specialty: newSpecialty
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)

    // Lookup selected doctor's full name based on selection code
    const doctorObj = doctors.find(d => d.code === formData.doctor)
    const docName = doctorObj ? doctorObj.name : formData.doctor

    // Construct highly structured, professional WhatsApp message
    const message = `*FATHIMA MEDICAL CENTER - APPOINTMENT REQUEST*\n` +
                    `----------------------------------------\n` +
                    `*Patient Name:* ${formData.name}\n` +
                    `*Phone Number:* ${formData.phone}\n` +
                    `*Specialty:* ${formData.specialty}\n` +
                    `*Consultant Doctor:* ${docName}\n` +
                    `*Preferred Date:* ${formData.date}\n` +
                    `*Preferred Time:* ${formData.time}\n` +
                    `*Symptoms / Complaints:* ${formData.symptoms || 'N/A'}\n` +
                    `----------------------------------------\n` +
                    `_Sent via Fathima Medical Website Booking Desk_`

    const waUrl = `https://wa.me/918086537077?text=${encodeURIComponent(message)}`

    // Open WhatsApp in a new tab after a brief delay for local checkmark animation feedback
    setTimeout(() => {
      window.open(waUrl, '_blank')
    }, 800)

    // Reset local form states
    setTimeout(() => {
      setSuccess(false)
      setFormData({ name: '', phone: '', specialty: 'General Medicine', doctor: 'FR', date: '', time: '', symptoms: '' })
    }, 4500)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-20 text-left">
      
      {/* View Header with background image and premium gradient overlay */}
      <div className="relative w-full rounded-3xl overflow-hidden mb-12 h-64 md:h-72 flex items-center justify-center text-center shadow-md border border-[#E0EBFC]">
        {/* Background Image */}
        <img 
          src="/herosection/c1.png" 
          alt="Consultation Header Background" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-95"
        />
        {/* Deep blue gradient overlay with logo-matching primary blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4DBB]/95 via-[#0B4DBB]/85 to-blue-950/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-2xl px-6 py-8 text-white text-center flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 border border-white/30 rounded-full text-xs font-bold text-white mb-4 backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5 text-white" />
            {lang === 'EN' && 'Secure Practitioner Slots'}
            {lang === 'ML' && 'ബുക്കിംഗ് കൗണ്ടർ'}
            {lang === 'AR' && 'جدولة وحجز المواعيد السريرية'}
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

      <div className="bg-white border-t-4 border-t-[#0B4DBB] border-x border-b border-[#E0EBFC] rounded-3xl p-6 md:p-10 shadow-md">
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 border-2 border-emerald-500 animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h2 className={`font-heading font-bold text-2xl text-emerald-600 mb-3 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                {current.successTitle}
              </h2>
              <p className={`text-gray-500 max-w-md leading-relaxed text-sm ${
                lang === 'ML' ? 'font-malayalam font-medium' : ''
              }`}>
                {current.successDesc}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              
              <h3 className={`font-heading font-bold text-lg text-[#333333] border-b border-gray-100 pb-3 mb-6 flex items-center gap-2 ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}>
                <span className="w-1 h-5 bg-[#0B4DBB] rounded-full shrink-0 animate-pulse" />
                {current.formHeading}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Patient Name */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {current.labelName}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      required
                      autoComplete="off"
                      placeholder={current.placeholderName}
                      className="w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg pl-10 pr-3 text-sm outline-none transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {current.labelPhone}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="tel" 
                      required
                      autoComplete="off"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg pl-10 pr-3 text-sm outline-none transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Specialty Dropdown */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {current.labelSpec}
                  </label>
                  <div className="relative">
                    <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select 
                      className={`w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg pl-10 pr-3 text-sm outline-none bg-white transition-colors ${
                        lang === 'ML' ? 'font-malayalam font-semibold' : ''
                      }`}
                      value={formData.specialty}
                      onChange={e => handleSpecialtyChange(e.target.value)}
                    >
                      {(specialties[lang] || specialties['EN']).map((spec, idx) => (
                        <option key={idx} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Preferred Doctor */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {current.labelDoc}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select 
                      className={`w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg pl-10 pr-3 text-sm outline-none bg-white transition-colors ${
                        lang === 'ML' ? 'font-malayalam font-semibold' : ''
                      }`}
                      value={formData.doctor}
                      onChange={e => handleDoctorChange(e.target.value)}
                    >
                      {doctors.map((doc, idx) => (
                        <option key={idx} value={doc.code}>{doc.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {current.labelDate}
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="date" 
                      required
                      className="w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg pl-10 pr-3 text-sm outline-none bg-white transition-colors"
                      value={formData.date}
                      onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {current.labelTime}
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="time" 
                      required
                      className="w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg pl-10 pr-3 text-sm outline-none bg-white transition-colors"
                      value={formData.time}
                      onChange={e => setFormData({ ...formData, time: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Symptoms notes */}
              <div className="flex flex-col gap-1.5 text-left mt-4">
                <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                  {current.labelSymptoms}
                </label>
                <textarea 
                  placeholder={current.placeholderSymptoms}
                  rows="3"
                  className="w-full border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg p-3 text-sm outline-none resize-none transition-colors"
                  value={formData.symptoms}
                  onChange={e => setFormData({ ...formData, symptoms: e.target.value })}
                />
              </div>

              {/* Confirm Submit */}
              <button
                type="submit"
                className={`w-full py-3.5 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-extrabold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${
                  lang === 'ML' ? 'font-malayalam' : ''
                }`}
              >
                {current.btnSubmit}
              </button>

            </form>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}
