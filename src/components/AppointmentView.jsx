import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, CheckCircle, Clock, Stethoscope, User, Phone, Download, MessageSquare } from 'lucide-react'

export default function AppointmentView({ lang, prefill }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    specialty: 'General Medicine',
    doctor: 'FR',
    date: '',
    time: '',
    symptoms: ''
  })
  const [success, setSuccess] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [waLink, setWaLink] = useState('')

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

  // Handle incoming doctor prefill selections (automatically maps doctor -> specialty)
  useEffect(() => {
    if (prefill && prefill.doctor) {
      const docCode = prefill.doctor
      let specIdx = 0 // General Medicine by default
      
      if (docCode === 'FR') specIdx = 0
      else if (docCode === 'MT' || docCode === 'JM') specIdx = 1
      else if (docCode === 'SK') specIdx = 2

      const currentSpecs = specialties[lang] || specialties['EN']
      const targetSpec = currentSpecs[specIdx] || currentSpecs[0]

      setFormData(prev => ({
        ...prev,
        doctor: docCode,
        specialty: targetSpec
      }))
    }
  }, [prefill, lang])

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

  const handleReset = () => {
    setSuccess(false)
    setIsSent(false)
    setWaLink('')
    setFormData({ 
      name: '', 
      phone: '', 
      age: '', 
      gender: 'Male', 
      specialty: 'General Medicine', 
      doctor: 'FR', 
      date: '', 
      time: '', 
      symptoms: '' 
    })
  }

  const handleDownloadImage = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 600
    canvas.height = 750
    const ctx = canvas.getContext('2d')

    ctx.imageSmoothingEnabled = true

    // Background
    ctx.fillStyle = '#FFFFFF'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const headerImg = new Image()
    headerImg.crossOrigin = 'anonymous'
    headerImg.src = '/herosection/c1.png'

    const drawContent = () => {
      try {
        if (headerImg.complete && headerImg.naturalWidth !== 0) {
          ctx.drawImage(headerImg, 0, 0, canvas.width, 160)
        }
      } catch (e) {
        console.warn(e)
      }

      // Draw primary blue color overlay
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 160)
      gradient.addColorStop(0, 'rgba(11, 77, 187, 0.95)')
      gradient.addColorStop(1, 'rgba(3, 37, 108, 0.9)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, 160)

      // Header Text
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = 'center'
      
      ctx.font = '900 24px system-ui, -apple-system, sans-serif'
      ctx.fillText('FATHIMA MEDICAL CENTER', canvas.width / 2, 60)

      ctx.font = 'bold 12px system-ui, -apple-system, sans-serif'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
      ctx.fillText('VALLAPUZHA, SH-60, KERALA - PH: 8086537077', canvas.width / 2, 85)

      // Card Title Badge
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fillRect(canvas.width / 2 - 130, 105, 260, 32)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.strokeRect(canvas.width / 2 - 130, 105, 260, 32)
      
      ctx.fillStyle = '#FFFFFF'
      ctx.font = 'bold 13px system-ui, -apple-system, sans-serif'
      ctx.fillText('APPOINTMENT CONFIRMATION SLIP', canvas.width / 2, 126)

      // Content Box Background
      ctx.fillStyle = '#F8FAFC'
      ctx.fillRect(25, 185, canvas.width - 50, 430)
      ctx.strokeStyle = '#E2E8F0'
      ctx.lineWidth = 1
      ctx.strokeRect(25, 185, canvas.width - 50, 430)

      // Greeting
      ctx.fillStyle = '#0B4DBB'
      ctx.font = 'bold 20px system-ui, -apple-system, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`Hello, ${formData.name || 'Patient'}!`, canvas.width / 2, 225)

      ctx.fillStyle = '#475569'
      ctx.font = '14px system-ui, -apple-system, sans-serif'
      ctx.fillText('Your consultation slot request has been successfully registered.', canvas.width / 2, 250)

      // Dotted divider
      ctx.strokeStyle = '#CBD5E1'
      ctx.lineWidth = 1.5
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(40, 275)
      ctx.lineTo(canvas.width - 40, 275)
      ctx.stroke()
      ctx.setLineDash([])

      // Details drawing
      const drawDetailRow = (label, value, yPos) => {
        ctx.textAlign = 'left'
        ctx.fillStyle = '#64748B'
        ctx.font = 'bold 13px system-ui, -apple-system, sans-serif'
        ctx.fillText(label.toUpperCase(), 50, yPos)

        ctx.textAlign = 'right'
        ctx.fillStyle = '#1E293B'
        ctx.font = 'bold 14px system-ui, -apple-system, sans-serif'
        ctx.fillText(value, canvas.width - 50, yPos)
      }

      const doctorObj = doctors.find(d => d.code === formData.doctor)
      const docName = doctorObj ? doctorObj.name.split(' (')[0] : formData.doctor

      drawDetailRow('Patient Name', formData.name || 'N/A', 315)
      drawDetailRow('Contact Phone', formData.phone || 'N/A', 355)
      drawDetailRow('Department / Specialty', formData.specialty || 'N/A', 395)
      drawDetailRow('Consulting Specialist', docName || 'N/A', 435)
      drawDetailRow('Preferred Date', formData.date || 'N/A', 475)
      drawDetailRow('Preferred Time Slot', formData.time || 'N/A', 515)

      // Status
      ctx.textAlign = 'left'
      ctx.fillStyle = '#64748B'
      ctx.font = 'bold 13px system-ui, -apple-system, sans-serif'
      ctx.fillText('BOOKING STATUS', 50, 560)

      ctx.textAlign = 'right'
      ctx.fillStyle = isSent ? '#10B981' : '#F59E0B'
      ctx.font = 'bold 14px system-ui, -apple-system, sans-serif'
      ctx.fillText(isSent ? 'REGISTERED / WAITING CONFIRMATION' : 'PENDING / WAITING WHATSAPP SEND', canvas.width - 50, 560)

      // Horizontal divider for barcode
      ctx.strokeStyle = '#E2E8F0'
      ctx.beginPath()
      ctx.moveTo(40, 590)
      ctx.lineTo(canvas.width - 40, 590)
      ctx.stroke()

      // Clinical text
      ctx.fillStyle = '#64748B'
      ctx.font = 'italic 11px system-ui, -apple-system, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('Please present this slip at the front reception counter upon arrival.', canvas.width / 2, 635)

      // Barcode
      ctx.fillStyle = '#1E293B'
      const barcodeStartX = canvas.width / 2 - 100
      const barcodeY = 650
      const barcodeHeight = 35
      const pattern = [2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 2, 4, 1, 1, 3, 2, 1, 2, 3, 2, 1]
      let currentX = barcodeStartX
      for (let i = 0; i < pattern.length; i++) {
        const width = pattern[i] * 2.2
        if (i % 2 === 0) {
          ctx.fillRect(currentX, barcodeY, width, barcodeHeight)
        }
        currentX += width
      }

      ctx.fillStyle = '#64748B'
      ctx.font = '10px monospace'
      ctx.fillText(`FMC-${Date.now().toString().slice(-8)}`, canvas.width / 2, 700)

      const dataUrl = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = `fathima_booking_${(formData.name || 'patient').toLowerCase().replace(/\s+/g, '_')}.png`
      link.href = dataUrl
      link.click()
    }

    headerImg.onload = drawContent
    headerImg.onerror = drawContent
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Lookup selected doctor's full name based on selection code
    const doctorObj = doctors.find(d => d.code === formData.doctor)
    const docName = doctorObj ? doctorObj.name : formData.doctor

    // Construct highly structured, professional WhatsApp message
    const message = `*FATHIMA MEDICAL CENTER - APPOINTMENT REQUEST*\n` +
                    `----------------------------------------\n` +
                    `*Patient Name:* ${formData.name}\n` +
                    `*Phone Number:* ${formData.phone}\n` +
                    `*Patient Age:* ${formData.age}\n` +
                    `*Gender:* ${formData.gender}\n` +
                    `*Specialty:* ${formData.specialty}\n` +
                    `*Consultant Doctor:* ${docName}\n` +
                    `*Preferred Date:* ${formData.date}\n` +
                    `*Preferred Time:* ${formData.time}\n` +
                    `*Symptoms / Complaints:* ${formData.symptoms || 'N/A'}\n` +
                    `----------------------------------------\n` +
                    `_Sent via Fathima Medical Website Booking Desk_`

    const waUrl = `https://wa.me/918086537077?text=${encodeURIComponent(message)}`
    setWaLink(waUrl)
    setSuccess(true)
    setIsSent(false)
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
              className="flex flex-col items-center text-center py-6 animate-fade-in"
            >
              {/* Slip Card */}
              <div className="w-full max-w-lg bg-white border border-[#E0EBFC] rounded-3xl shadow-lg overflow-hidden mb-8 text-left">
                {/* Slip Card Header with Background Image */}
                <div className="relative w-full h-44 flex items-center justify-center text-center">
                  <img 
                    src="/herosection/c1.png" 
                    alt="Success Slip Background" 
                    className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B4DBB]/95 via-[#0B4DBB]/85 to-blue-950/40" />
                  
                  <div className="relative z-10 text-white flex flex-col items-center px-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mb-2 backdrop-blur-sm animate-bounce">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h2 className={`font-heading font-black text-xl text-white ${
                      lang === 'ML' ? 'font-malayalam font-bold' : ''
                    }`}>
                      {current.successTitle}
                    </h2>
                    <p className={`text-blue-100 text-[11px] mt-1 leading-normal max-w-xs ${
                      lang === 'ML' ? 'font-malayalam font-medium' : ''
                    }`}>
                      {current.successDesc}
                    </p>
                  </div>
                </div>

                {/* Slip Card Details Table */}
                <div className="p-6 md:p-8 space-y-4 bg-slate-50/50">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider text-left">
                    {lang === 'EN' ? 'Consultation Details' : lang === 'ML' ? 'ബുക്കിംഗ് വിവരങ്ങൾ' : 'تفاصيل الاستشارة'}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-gray-500">{lang === 'EN' ? 'Patient Name' : lang === 'ML' ? 'രോഗിയുടെ പേര്' : 'اسم المريض'}</span>
                      <span className="font-bold text-slate-800">{formData.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-gray-500">{lang === 'EN' ? 'Specialty' : lang === 'ML' ? 'വിഭാഗം' : 'التخصص'}</span>
                      <span className="font-bold text-slate-800">{formData.specialty}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-gray-500">{lang === 'EN' ? 'Consulting Doctor' : lang === 'ML' ? 'ഡോക്ടർ' : 'الطبيب'}</span>
                      <span className="font-bold text-slate-800">
                        {doctors.find(d => d.code === formData.doctor)?.name.split(' (')[0] || formData.doctor}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-gray-500">{lang === 'EN' ? 'Preferred Date' : lang === 'ML' ? 'തീയതി' : 'التاريخ'}</span>
                      <span className="font-bold text-slate-800">{formData.date}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2 text-sm">
                      <span className="text-gray-500">{lang === 'EN' ? 'Preferred Time' : lang === 'ML' ? 'സമയം' : 'الوقت'}</span>
                      <span className="font-bold text-slate-800">{formData.time}</span>
                    </div>
                    <div className="flex justify-between pb-1 text-sm">
                      <span className="text-gray-500">{lang === 'EN' ? 'Status' : lang === 'ML' ? 'നിലവാരം' : 'الحالة'}</span>
                      <span className={`font-black uppercase tracking-wide ${
                        isSent ? 'text-emerald-600' : 'text-amber-500 animate-pulse'
                      }`}>
                        {isSent ? (
                          lang === 'EN' ? 'Registered' : lang === 'ML' ? 'രജിസ്റ്റർ ചെയ്തു' : 'مسجل'
                        ) : (
                          lang === 'EN' ? 'Pending Send' : lang === 'ML' ? 'സന്ദേശം അയക്കുക' : 'في انتظار الإرسال'
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="w-full max-w-lg flex flex-col sm:flex-row gap-3">
                {!isSent ? (
                  <>
                    <button
                      onClick={() => {
                        window.open(waLink, '_blank', 'noopener,noreferrer')
                        setIsSent(true)
                      }}
                      className="flex-grow py-3 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-extrabold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm font-heading"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {lang === 'EN' && 'Send to WhatsApp to Complete'}
                      {lang === 'ML' && 'ബുക്കിംഗ് പൂർത്തിയാക്കാൻ വാട്സ്ആപ്പ് അയക്കുക'}
                      {lang === 'AR' && 'إرسال إلى واتساب لإتمام الحجز'}
                    </button>
                    <button
                      onClick={handleReset}
                      className="py-3 px-6 bg-white hover:bg-slate-50 text-red-500 border border-red-200 font-bold rounded-xl transition-all cursor-pointer text-sm shrink-0"
                    >
                      {lang === 'EN' && 'Cancel'}
                      {lang === 'ML' && 'റദ്ദാക്കുക'}
                      {lang === 'AR' && 'إلغاء'}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleDownloadImage}
                      className="flex-grow py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                    >
                      <Download className="w-4 h-4" />
                      {lang === 'EN' && 'Save Confirmation to Gallery'}
                      {lang === 'ML' && 'ഗാലറിയിലേക്ക് സേവ് ചെയ്യുക'}
                      {lang === 'AR' && 'حفظ التأكيد في المعرض'}
                    </button>
                    <button
                      onClick={handleReset}
                      className="py-3 px-6 bg-white hover:bg-slate-50 text-slate-600 font-bold border border-[#E0EBFC] rounded-xl transition-all cursor-pointer text-sm shrink-0"
                    >
                      {lang === 'EN' && 'Book Another Consultation'}
                      {lang === 'ML' && 'മറ്റൊരു ബുക്കിംഗ്'}
                      {lang === 'AR' && 'حجز آخر'}
                    </button>
                  </>
                )}
              </div>
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

                {/* Age Input */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {lang === 'EN' ? 'Patient Age' : lang === 'ML' ? 'രോഗിയുടെ പ്രായം' : 'عمر المريض'}
                  </label>
                  <input 
                    type="number" 
                    required
                    min="0"
                    max="125"
                    placeholder={lang === 'EN' ? 'e.g. 28' : lang === 'ML' ? 'ഉദാ: 28' : 'مثال: ٢٨'}
                    className="w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg px-3 text-sm outline-none transition-colors"
                    value={formData.age}
                    onChange={e => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                {/* Gender Select */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                    {lang === 'EN' ? 'Gender' : lang === 'ML' ? 'ലിംഗം' : 'الجنس'}
                  </label>
                  <select 
                    className="w-full h-11 border border-[#E0EBFC] hover:border-[#0B4DBB]/40 focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] rounded-lg px-3 text-sm outline-none bg-white transition-colors"
                    value={formData.gender}
                    onChange={e => setFormData({ ...formData, gender: e.target.value })}
                  >
                    <option value="Male">{lang === 'EN' ? 'Male' : lang === 'ML' ? 'പുരുഷൻ' : 'ذكر'}</option>
                    <option value="Female">{lang === 'EN' ? 'Female' : lang === 'ML' ? 'സ്ത്രീ' : 'أنثى'}</option>
                    <option value="Other">{lang === 'EN' ? 'Other' : lang === 'ML' ? 'മറ്റുള്ളവ' : 'آخر'}</option>
                  </select>
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
