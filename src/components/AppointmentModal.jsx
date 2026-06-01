import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check } from 'lucide-react'

export default function AppointmentModal({ isOpen, onClose, lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    specialty: 'General Medicine',
    date: '',
    time: ''
  })
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setFormData({
        name: '',
        phone: '',
        specialty: 'General Medicine',
        date: '',
        time: ''
      })
      onClose()
    }, 3000)
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
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {success ? (
                <div className="flex flex-col items-center text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 border-2 border-emerald-500 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className={`font-heading font-bold text-xl text-emerald-600 mb-2 ${lang === 'ML' ? 'font-malayalam font-bold' : ''}`}>
                    {lang === 'EN' ? 'Appointment Requested!' : lang === 'ML' ? 'അപ്പോയിന്റ്മെന്റ് അപേക്ഷ സമർപ്പിച്ചു!' : 'تم طلب الموعد بنجاح!'}
                  </h4>
                  <p className={`text-sm text-gray-500 max-w-xs ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                    {lang === 'EN' 
                      ? 'Our desk will call you shortly to confirm the scheduled slots.' 
                      : lang === 'ML' 
                      ? 'ഷെഡ്യൂൾ ചെയ്ത സ്ലോട്ടുകൾ സ്ഥിരീകരിക്കുന്നതിനായി ഞങ്ങളുടെ ഡെസ്കിൽ നിന്നും നിങ്ങളെ ഉടൻ വിളിക്കുന്നതാണ്.' 
                      : 'سيتصل بك مكتب الاستقبال لدينا قريبًا لتأكيد المواعيد المقررة.'}
                  </p>
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
