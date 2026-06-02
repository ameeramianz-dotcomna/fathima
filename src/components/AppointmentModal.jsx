import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Download, Calendar, Clock, Stethoscope, User, CheckCircle, MessageSquare } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose, lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    specialty: 'General Medicine',
    date: '',
    time: ''
  })
  const [success, setSuccess] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [waLink, setWaLink] = useState('')

  const handleClose = () => {
    setSuccess(false)
    setIsSent(false)
    setWaLink('')
    setFormData({
      name: '',
      phone: '',
      age: '',
      gender: 'Male',
      specialty: 'General Medicine',
      date: '',
      time: ''
    })
    onClose()
  }

  const handleDownloadImage = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 600
    canvas.height = 700
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

      // Draw overlay
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

      // Title
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)'
      ctx.fillRect(canvas.width / 2 - 130, 105, 260, 32)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'
      ctx.strokeRect(canvas.width / 2 - 130, 105, 260, 32)
      
      ctx.fillStyle = '#FFFFFF'
      ctx.font = 'bold 13px system-ui, -apple-system, sans-serif'
      ctx.fillText('QUICK APPOINTMENT CONFIRMATION', canvas.width / 2, 126)

      // Body Box
      ctx.fillStyle = '#F8FAFC'
      ctx.fillRect(25, 180, canvas.width - 50, 380)
      ctx.strokeStyle = '#E2E8F0'
      ctx.lineWidth = 1
      ctx.strokeRect(25, 180, canvas.width - 50, 380)

      // Greeting
      ctx.fillStyle = '#0B4DBB'
      ctx.font = 'bold 20px system-ui, -apple-system, sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText(`Hello, ${formData.name || 'Patient'}!`, canvas.width / 2, 220)

      ctx.fillStyle = '#475569'
      ctx.font = '14px system-ui, -apple-system, sans-serif'
      ctx.fillText('Your appointment slot has been registered via Quick Booking.', canvas.width / 2, 245)

      // Divider
      ctx.strokeStyle = '#CBD5E1'
      ctx.lineWidth = 1.5
      ctx.setLineDash([4, 4])
      ctx.beginPath()
      ctx.moveTo(40, 270)
      ctx.lineTo(canvas.width - 40, 270)
      ctx.stroke()
      ctx.setLineDash([])

      // Details
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

      drawDetailRow('Patient Name', formData.name || 'N/A', 310)
      drawDetailRow('Contact Phone', formData.phone || 'N/A', 350)
      drawDetailRow('Specialty / Dept', formData.specialty || 'N/A', 390)
      drawDetailRow('Preferred Date', formData.date || 'N/A', 430)
      drawDetailRow('Preferred Time Slot', formData.time || 'N/A', 470)

      // Status
      ctx.textAlign = 'left'
      ctx.fillStyle = '#64748B'
      ctx.font = 'bold 13px system-ui, -apple-system, sans-serif'
      ctx.fillText('BOOKING STATUS', 50, 520)

      ctx.textAlign = 'right'
      ctx.fillStyle = isSent ? '#10B981' : '#F59E0B'
      ctx.font = 'bold 14px system-ui, -apple-system, sans-serif'
      ctx.fillText(isSent ? 'REGISTERED / WAITING CONFIRMATION' : 'PENDING / WAITING WHATSAPP SEND', canvas.width - 50, 520)

      // Barcode
      ctx.fillStyle = '#1E293B'
      const barcodeStartX = canvas.width / 2 - 100
      const barcodeY = 580
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
      ctx.fillText(`FMC-Q-${Date.now().toString().slice(-8)}`, canvas.width / 2, 630)

      const dataUrl = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.download = `fathima_quick_booking_${(formData.name || 'patient').toLowerCase().replace(/\s+/g, '_')}.png`
      link.href = dataUrl
      link.click()
    }

    headerImg.onload = drawContent
    headerImg.onerror = drawContent
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Formulate rich WhatsApp booking request message
    const message = `*FATHIMA MEDICAL CENTER - APPOINTMENT REQUEST*\n` +
                    `----------------------------------------\n` +
                    `*Patient Name:* ${formData.name}\n` +
                    `*Phone Number:* ${formData.phone}\n` +
                    `*Patient Age:* ${formData.age || 'N/A'}\n` +
                    `*Gender:* ${formData.gender}\n` +
                    `*Specialty:* ${formData.specialty}\n` +
                    `*Preferred Date:* ${formData.date}\n` +
                    `*Preferred Time:* ${formData.time}\n` +
                    `----------------------------------------\n` +
                    `_Sent via Fathima Medical Website Modal Book Desk_`

    const waUrl = `https://wa.me/918086537077?text=${encodeURIComponent(message)}`
    setWaLink(waUrl)
    setSuccess(true)
    setIsSent(false)
  }

  const specialties = {
    EN: ['General Medicine', 'Pediatrics', 'Orthopedics', 'Laboratory Clinic', 'Emergency Care'],
    ML: ['ജനറൽ മെഡിസിൻ', 'പീഡിയാട്രിക്സ് (ശിശുരോഗ വിഭാഗം)', 'ഓർത്തോപീഡിക്സ് (അസ്ഥിരോഗ വിഭാഗം)', 'ലബോറട്ടറി ക്ലിനിക്ക്', 'അടിയന്തിര പരിചരണം'],
    AR: ['الطب العام', 'طب الأطفال', 'طب العظام', 'المختبر السريري', 'رعاية الطوارئ']
  }

  const currentSpecialties = specialties[lang] || specialties['EN']

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-white w-full max-w-md mx-4 rounded-2xl shadow-xl overflow-hidden border border-[#E0EBFC] z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0EBFC] bg-[#0B4DBB] text-white">
              <h3 className={`font-heading font-bold text-lg ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                {lang === 'EN' ? 'Book a Consultation' : lang === 'ML' ? 'ഒരു അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക' : 'حجز موعد استشارة'}
              </h3>
              <button 
                onClick={handleClose}
                className="p-1 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {success ? (
                <div className="flex flex-col items-center text-center">
                  
                  {/* Slip Card */}
                  <div className="w-full bg-slate-50 border border-[#E0EBFC] rounded-2xl overflow-hidden mb-6 text-left shadow-inner">
                    {/* Slip Header with Background Image */}
                    <div className="relative w-full h-32 flex items-center justify-center text-center">
                      <img 
                        src="/herosection/c1.png" 
                        alt="Quick Success Slip Background" 
                        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
                      />
                      <div className="absolute inset-0 bg-[#0B4DBB]/90" />
                      
                      <div className="relative z-10 text-white flex flex-col items-center px-4">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center mb-1 backdrop-blur-sm ${
                          isSent 
                            ? 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 animate-bounce' 
                            : 'bg-amber-500/20 border border-amber-400/40 text-amber-400'
                        }`}>
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        <h4 className={`font-heading font-bold text-sm text-white ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                          {isSent 
                            ? (lang === 'EN' ? 'Appointment Requested!' : lang === 'ML' ? 'അപ്പോയിന്റ്മെന്റ് അപേക്ഷ സമർപ്പിച്ചു!' : 'تم طلب الموعد بنجاح!')
                            : (lang === 'EN' ? 'Pending WhatsApp Send' : lang === 'ML' ? 'വാട്സ്ആപ്പ് അയക്കുക' : 'في انتظار الإرسال')
                          }
                        </h4>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-4 space-y-2 text-xs">
                      <div className="flex justify-between border-b border-gray-200/40 pb-1.5">
                        <span className="text-gray-400">{lang === 'EN' ? 'Patient Name' : lang === 'ML' ? 'രോഗിയുടെ പേര്' : 'اسم المريض'}</span>
                        <span className="font-bold text-slate-800">{formData.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/40 pb-1.5">
                        <span className="text-gray-400">{lang === 'EN' ? 'Specialty' : lang === 'ML' ? 'വിഭാഗം' : 'التخصص'}</span>
                        <span className="font-bold text-slate-800">{formData.specialty}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/40 pb-1.5">
                        <span className="text-gray-400">{lang === 'EN' ? 'Preferred Date' : lang === 'ML' ? 'തീയതി' : 'التاريخ'}</span>
                        <span className="font-bold text-slate-800">{formData.date}</span>
                      </div>
                      <div className="flex justify-between border-b border-gray-200/40 pb-1.5">
                        <span className="text-gray-400">{lang === 'EN' ? 'Preferred Time' : lang === 'ML' ? 'സമയം' : 'الوقت'}</span>
                        <span className="font-bold text-slate-800">{formData.time}</span>
                      </div>
                      <div className="flex justify-between pb-0.5">
                        <span className="text-gray-400">{lang === 'EN' ? 'Status' : lang === 'ML' ? 'നിലവാരം' : 'الحالة'}</span>
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

                  {/* Actions */}
                  <div className="w-full flex flex-col gap-2.5">
                    {!isSent ? (
                      <>
                        <button
                          onClick={() => {
                            window.open(waLink, '_blank', 'noopener,noreferrer')
                            setIsSent(true)
                          }}
                          className="w-full py-2.5 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-extrabold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          {lang === 'EN' ? 'Send WhatsApp to Confirm' : lang === 'ML' ? 'വാട്സ്ആപ്പ് സന്ദേശം അയക്കുക' : 'إرسال واتساب للتأكيد'}
                        </button>
                        <button
                          onClick={handleClose}
                          className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-red-500 border border-red-100 font-bold rounded-xl transition-all cursor-pointer text-xs"
                        >
                          {lang === 'EN' ? 'Cancel' : lang === 'ML' ? 'റദ്ദാക്കുക' : 'إلغاء'}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={handleDownloadImage}
                          className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                        >
                          <Download className="w-3.5 h-3.5" />
                          {lang === 'EN' ? 'Save to Gallery' : lang === 'ML' ? 'ഗാലറിയിലേക്ക് സേവ് ചെയ്യുക' : 'حفظ في المعرض'}
                        </button>
                        <button
                          onClick={handleClose}
                          className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold rounded-xl transition-all cursor-pointer text-xs"
                        >
                          {lang === 'EN' ? 'Close Window' : lang === 'ML' ? 'വിൻഡോ ക്ലോസ് ചെയ്യുക' : 'إغلاق النافذة'}
                        </button>
                      </>
                    )}
                  </div>

                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                      {lang === 'EN' ? 'Full Patient Name' : lang === 'ML' ? 'രോഗിയുടെ മുഴുവൻ പേര്' : 'اسم المريض الكامل'}
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder={lang === 'EN' ? 'e.g. John Doe' : lang === 'ML' ? 'ഉദാഹരണത്തിന്: ജോൺ ഡോ' : 'مثال: أحمد محمد'}
                      className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                      {lang === 'EN' ? 'Phone Number' : lang === 'ML' ? 'ഫോൺ നമ്പർ' : 'رقم الهاتف'}
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Age & Gender Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Age */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                        {lang === 'EN' ? 'Age' : lang === 'ML' ? 'പ്രായം' : 'العمر'}
                      </label>
                      <input 
                        type="number" 
                        required
                        min="0"
                        max="125"
                        placeholder={lang === 'EN' ? 'e.g. 28' : lang === 'ML' ? 'ഉദാ: 28' : 'مثال: ٢٨'}
                        className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                        value={formData.age}
                        onChange={e => setFormData({ ...formData, age: e.target.value })}
                      />
                    </div>
                    {/* Gender */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                        {lang === 'EN' ? 'Gender' : lang === 'ML' ? 'ലിംഗം' : 'الجنس'}
                      </label>
                      <select 
                        className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none bg-white"
                        value={formData.gender}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="Male">{lang === 'EN' ? 'Male' : lang === 'ML' ? 'പുരുഷൻ' : 'ذكر'}</option>
                        <option value="Female">{lang === 'EN' ? 'Female' : lang === 'ML' ? 'സ്ത്രീ' : 'أنثى'}</option>
                        <option value="Other">{lang === 'EN' ? 'Other' : lang === 'ML' ? 'മറ്റുള്ളവ' : 'آخر'}</option>
                      </select>
                    </div>
                  </div>

                  {/* Specialty */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                      {lang === 'EN' ? 'Medical Specialty' : lang === 'ML' ? 'മെഡിക്കൽ വിഭാഗം' : 'التخصص الطبي'}
                    </label>
                    <select 
                      className={`w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none bg-white ${
                        lang === 'ML' ? 'font-malayalam font-medium' : ''
                      }`}
                      value={formData.specialty}
                      onChange={e => setFormData({ ...formData, specialty: e.target.value })}
                    >
                      {currentSpecialties.map((spec, idx) => (
                        <option key={idx} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                        {lang === 'EN' ? 'Preferred Date' : lang === 'ML' ? 'തീയതി' : 'التاريخ المفضل'}
                      </label>
                      <input 
                        type="date" 
                        required
                        className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none bg-white"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-xs font-semibold' : ''}`}>
                        {lang === 'EN' ? 'Preferred Time' : lang === 'ML' ? 'സമയം' : 'الوقت المفضل'}
                      </label>
                      <input 
                        type="time" 
                        required
                        className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none bg-white"
                        value={formData.time}
                        onChange={e => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className={`w-full py-3 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer mt-2 ${
                      lang === 'ML' ? 'font-malayalam' : ''
                    }`}
                  >
                    {lang === 'EN' ? 'Confirm Request' : lang === 'ML' ? 'ബുക്കിംഗ് സ്ഥിരീകരിക്കുക' : 'تأكيد طلب الموعد'}
                  </button>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
