import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Upload, FileText, CheckCircle, Truck, PhoneCall, MessageSquare } from 'lucide-react'

export default function DeliveryView({ lang }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  })
  const [success, setSuccess] = useState(false)

  const text = {
    EN: {
      title: 'Medicine Home Delivery',
      tagline: 'Get authentic prescriptions and retail healthcare products delivered directly to your home in Vallapuzha.',
      uploadTitle: 'Upload Medical Prescription',
      uploadDesc: 'Drag & drop your prescription image/PDF here, or browse local files.',
      uploadLimit: 'Supports JPEG, PNG, or PDF. Max file size: 5MB.',
      formHeading: 'Patient Delivery Details',
      labelName: 'Full Patient Name',
      labelPhone: 'Phone Number',
      labelAddress: 'Full Delivery Address (in Vallapuzha)',
      labelNotes: 'Specific Medicine Names / Requests',
      placeholderNotes: 'e.g. Paracetamol 650mg - 1 strip, Eye drops...',
      btnSubmit: 'Request Home Delivery',
      successTitle: 'Prescription Submitted!',
      successDesc: 'Our pharmacist desk will review your prescription, verify clinical dosages, and contact you shortly to confirm the delivery slots and billing.',
      whatsappHeading: 'Quick Order via WhatsApp',
      whatsappDesc: 'Prefer direct chatting? Send a snapshot of your prescription directly to our pharmacist on WhatsApp.'
    },
    ML: {
      title: 'മരുന്ന് ഹോം ഡെലിവറി',
      tagline: 'വല്ലപ്പുഴയിലെ നിങ്ങളുടെ വീട്ടിലേക്ക് ആവശ്യമായ മരുന്നുകളും ആരോഗ്യ ഉൽപ്പന്നങ്ങളും നേരിട്ട് എത്തിക്കുന്നു.',
      uploadTitle: 'പ്രിസ്‌ക്രിപ്ഷൻ അപ്‌ലോഡ് ചെയ്യുക',
      uploadDesc: 'നിങ്ങളുടെ പ്രിസ്‌ക്രിപ്ഷൻ ഇമേജ്/PDF ഇവിടെ അപ്‌ലോഡ് ചെയ്യുക.',
      uploadLimit: 'JPEG, PNG, അല്ലെങ്കിൽ PDF പിന്തുണയ്ക്കുന്നു. പരമാവധി 5MB.',
      formHeading: 'ഡെലിവറി വിലാസം',
      labelName: 'രോഗിയുടെ മുഴുവൻ പേര്',
      labelPhone: 'ഫോൺ നമ്പർ',
      labelAddress: 'ഡെലിവറി വിലാസം (വല്ലപ്പുഴ പരിധിയിൽ)',
      labelNotes: 'ആവശ്യമായ മരുന്നുകളുടെ വിവരങ്ങൾ',
      placeholderNotes: 'ഉദാഹരണത്തിന്: പാരസെറ്റമോൾ 650mg - 1 സ്ട്രിപ്പ്...',
      btnSubmit: 'ഹോം ഡെലിവറി അപേക്ഷിക്കുക',
      successTitle: 'വിവരങ്ങൾ വിജയകരമായി സമർപ്പിച്ചു!',
      successDesc: 'ഞങ്ങളുടെ ഫാർമസിസ്റ്റ് നിങ്ങളുടെ കുറിപ്പടി പരിശോധിച്ച ശേഷം മരുന്നുകളുടെ വിലയും ഡെലിവറി സമയവും സ്ഥിരീകരിക്കാൻ ഉടൻ ബന്ധപ്പെടുന്നതാണ്.',
      whatsappHeading: 'വാട്സ്ആപ്പ് വഴി ഓർഡർ ചെയ്യുക',
      whatsappDesc: 'കൂടുതൽ എളുപ്പത്തിൽ മരുന്നുകൾ ഓർഡർ ചെയ്യാൻ നിങ്ങളുടെ പ്രിസ്‌ക്രിപ്ഷൻ ഫോട്ടോ എടുത്ത് ഞങ്ങൾക്ക് വാട്സ്ആപ്പ് ചെയ്യുക.'
    },
    AR: {
      title: 'توصيل الأدوية للمنازل',
      tagline: 'احصل على الأدوية الأصلية ومنتجات الرعاية الصحية وتوصيلها مباشرة إلى منزلك في فالابوزا.',
      uploadTitle: 'تحميل الوصفة الطبية الطبية',
      uploadDesc: 'قم بسحب وإفلات صورة الوصفة الطبية (روشتة) هنا، أو تصفح الملفات المحلية.',
      uploadLimit: 'يدعم JPEG أو PNG أو PDF. الحد الأقصى لحجم الملف: ٥ ميجابايت.',
      formHeading: 'بيانات توصيل المريض',
      labelName: 'اسم المريض الكامل',
      labelPhone: 'رقم الهاتف',
      labelAddress: 'عنوان التوصيل بالكامل (داخل فالابوزا)',
      labelNotes: 'أسماء الأدوية المحددة / الطلبات الخاصة',
      placeholderNotes: 'مثال: باراسيتامول ٦٥٠ مجم - علبة واحدة...',
      btnSubmit: 'طلب توصيل للمنزل',
      successTitle: 'تم إرسال الوصفة بنجاح!',
      successDesc: 'سيقوم مكتب الصيدلي لدينا بمراجعة الوصفة الطبية الخاصة بك، والتحقق من الجرعات الطبية، والاتصال بك قريباً لتأكيد مواعيد التوصيل والفواتير.',
      whatsappHeading: 'طلب سريع عبر واتساب',
      whatsappDesc: 'هل تفضل الدردشة المباشرة؟ أرسل لقطة لوصفتك الطبية مباشرة إلى الصيدلي لدينا على واتساب.'
    }
  }

  const current = text[lang] || text['EN']

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Construct rich text WhatsApp prescription order message
    const message = `*FATHIMA MEDICAL CENTER - PRESCRIPTION HOME DELIVERY*\n` +
                    `----------------------------------------\n` +
                    `*Patient Name:* ${formData.name}\n` +
                    `*Contact Phone:* ${formData.phone}\n` +
                    `*Delivery Address:* ${formData.address}\n` +
                    `*Medicines / Requests:* ${formData.notes || 'None Specified'}\n` +
                    `----------------------------------------\n` +
                    `_Please attach your uploaded prescription photo/document in the chat below_\n` +
                    `----------------------------------------\n` +
                    `_Sent via Fathima Medical Delivery Counter_`

    const waUrl = `https://wa.me/918086537077?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in new window
    window.open(waUrl, '_blank', 'noopener,noreferrer')

    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      setSelectedFile(null)
      setFormData({ name: '', phone: '', address: '', notes: '' })
    }, 4500)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 text-left">
      
      {/* Page Header */}
      <div className="border-b border-[#E0EBFC] pb-10 mb-12 text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-bold text-[#0B4DBB] mb-4">
          <Truck className="w-3.5 h-3.5 text-[#0B4DBB]" />
          {lang === 'EN' && 'Express Delivery Counter'}
          {lang === 'ML' && 'എക്സ്പ്രസ്സ് ഹോം ഡെലിവറി'}
          {lang === 'AR' && 'صيدلية التوصيل السريع للمنازل'}
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
        
        {/* Left Side: Upload Widget & Order Form */}
        <div className="lg:col-span-8 bg-white border border-[#E0EBFC] rounded-3xl p-6 md:p-8 shadow-sm">
          
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 border-2 border-emerald-500 animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className={`font-heading font-bold text-2xl text-emerald-600 mb-3 ${
                  lang === 'ML' ? 'font-malayalam font-bold' : ''
                }`}>
                  {current.successTitle}
                </h2>
                <p className={`text-gray-500 max-w-lg leading-relaxed text-sm ${
                  lang === 'ML' ? 'font-malayalam font-medium' : ''
                }`}>
                  {current.successDesc}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* File Upload Box */}
                <div className="flex flex-col gap-2">
                  <h3 className={`font-heading font-bold text-base text-[#333333] ${
                    lang === 'ML' ? 'font-malayalam font-bold' : ''
                  }`}>
                    {current.uploadTitle}
                  </h3>
                  
                  <div className="border-2 border-dashed border-[#E0EBFC] hover:border-[#0B4DBB]/40 rounded-2xl p-8 flex flex-col items-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors relative cursor-pointer group">
                    <input 
                      type="file" 
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B4DBB] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>

                    {selectedFile ? (
                      <div>
                        <p className="text-sm font-bold text-emerald-600 inline-flex items-center gap-1.5">
                          <FileText className="w-4 h-4" />
                          {selectedFile.name}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <>
                        <p className={`text-sm font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam' : ''}`}>
                          {current.uploadDesc}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {current.uploadLimit}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="border-t border-[#E0EBFC] pt-6">
                  <h3 className={`font-heading font-bold text-base text-[#333333] mb-4 ${
                    lang === 'ML' ? 'font-malayalam font-bold' : ''
                  }`}>
                    {current.formHeading}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                        {current.labelName}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder={lang === 'EN' ? 'e.g. Rahul' : lang === 'ML' ? 'ഉദാഹരണത്തിന്: രാഹുൽ' : 'مثال: أحمد'}
                        className="w-full h-11 border border-[#E0EBFC] rounded-lg px-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                        {current.labelPhone}
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
                  </div>

                  {/* Delivery Address */}
                  <div className="flex flex-col gap-1.5 text-left mt-4">
                    <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                      {current.labelAddress}
                    </label>
                    <textarea 
                      required
                      placeholder={lang === 'EN' ? 'e.g. Near Railway Station Road...' : lang === 'ML' ? 'ഉദാഹരണത്തിന്: റെയിൽവേ സ്റ്റേഷൻ റോഡിന് സമീപം...' : 'مثال: بالقرب من محطة القطار...'}
                      rows="3"
                      className="w-full border border-[#E0EBFC] rounded-lg p-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none resize-none"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>

                  {/* Medicine Notes */}
                  <div className="flex flex-col gap-1.5 text-left mt-4">
                    <label className={`text-xs font-bold text-gray-700 ${lang === 'ML' ? 'font-malayalam text-[10px]' : ''}`}>
                      {current.labelNotes}
                    </label>
                    <textarea 
                      placeholder={current.placeholderNotes}
                      rows="2"
                      className="w-full border border-[#E0EBFC] rounded-lg p-3 text-sm focus:border-[#0B4DBB] focus:ring-1 focus:ring-[#0B4DBB] outline-none resize-none"
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full py-3 bg-[#0B4DBB] hover:bg-[#073a91] text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer ${
                    lang === 'ML' ? 'font-malayalam' : ''
                  }`}
                >
                  {current.btnSubmit}
                </button>

              </form>
            )}
          </AnimatePresence>

        </div>

        {/* Right Side: Quick WhatsApp Ordering Banner */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-emerald-500 text-white rounded-3xl p-8 shadow-lg relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
              <MessageSquare className="w-7 h-7" />
            </div>

            <h3 className={`font-heading font-bold text-xl mb-3 ${
              lang === 'ML' ? 'font-malayalam font-bold' : ''
            }`}>
              {current.whatsappHeading}
            </h3>
            
            <p className={`text-xs text-emerald-50 leading-relaxed mb-6 ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              {current.whatsappDesc}
            </p>

            <a 
              href="https://wa.me/918086537077"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 bg-white text-emerald-600 font-extrabold rounded-xl shadow-md hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                lang === 'ML' ? 'font-malayalam font-bold' : ''
              }`}
            >
              <span>{lang === 'EN' ? 'Order on WhatsApp' : lang === 'ML' ? 'വാട്സ്ആപ്പ് ഓർഡർ' : 'طلب عبر واتساب'}</span>
            </a>
          </div>

          {/* Quick Hotline Call */}
          <div className="bg-white border border-[#E0EBFC] rounded-3xl p-6 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#FF1E2D] flex items-center justify-center border border-red-100 shrink-0">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left">
              <h4 className={`text-xs font-bold text-gray-400 uppercase tracking-wide ${
                lang === 'ML' ? 'font-malayalam text-[9px]' : ''
              }`}>
                {lang === 'EN' && 'Pharmacist hotline'}
                {lang === 'ML' && 'അടിയന്തിര ഫാർമസി നമ്പർ'}
                {lang === 'AR' && 'الخط الساخن للصيدلية'}
              </h4>
              <a href="tel:+918086537077" className="text-base font-extrabold text-gray-800 hover:text-[#0B4DBB] transition-colors">
                +91 8086537077
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
