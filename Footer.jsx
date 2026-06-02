import React from 'react'
import { PhoneCall, MapPin, Mail, Clock, ShieldAlert } from 'lucide-react'

export default function Footer({ lang }) {
  
  const text = {
    EN: {
      addressLabel: 'Clinic Location',
      address: 'Fathima Medical Clinic, near Railway Station Road, Vallapuzha, Kerala - 679336',
      phoneLabel: 'Appointments & Emergency',
      phone: '+91 8086537077',
      hoursLabel: 'Working Hours',
      hours: 'Monday - Saturday: 8:00 AM - 10:00 PM\nSunday: 9:00 AM - 6:00 PM',
      emailLabel: 'General Inquiries',
      email: 'fathimaclinicvp@gmail.com',
      hipaa: 'HIPAA compliant patient record storage. Registered clinical drug license holder under State Board.',
      copyright: '© 2026 Fathima Medical Clinic Vallapuzha. All rights reserved.'
    },
    ML: {
      addressLabel: 'ക്ലിനിക്കിന്റെ വിലാസം',
      address: 'ഫാത്തിമ മെഡിക്കൽ ക്ലിനിക്ക്, റെയിൽവേ സ്റ്റേഷൻ റോഡിന് സമീപം, വല്ലപ്പുഴ, കേരളം - 679336',
      phoneLabel: 'അപ്പോയിന്റ്മെന്റുകളും അടിയന്തിര നമ്പരും',
      phone: '+91 8086537077',
      hoursLabel: 'പ്രവർത്തന സമയം',
      hours: 'തിങ്കൾ - ശനി: 8:00 AM - 10:00 PM\nഞായർ: 9:00 AM - 6:00 PM',
      emailLabel: 'പൊതുവായ അന്വേഷണങ്ങൾക്ക്',
      email: 'fathimaclinicvp@gmail.com',
      hipaa: 'HIPAA അനുസൃതമായ രോഗി വിവര സംരക്ഷണം. സ്റ്റേറ്റ് ബോർഡിന് കീഴിൽ രജിസ്റ്റർ ചെയ്ത ക്ലിനിക്കൽ ഡ്രഗ് ലൈസൻസ് ഉള്ളത്.',
      copyright: '© 2026 ഫാത്തിമ മെഡിക്കൽ ക്ലിനിക്ക് വല്ലപ്പുഴ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.'
    },
    AR: {
      addressLabel: 'موقع العيادة',
      address: 'عيادة فاطمة الطبية، بالقرب من طريق محطة القطار، فالابوزا، كيرلا - 679336',
      phoneLabel: 'المواعيد والطوارئ',
      phone: '+91 8086537077',
      hoursLabel: 'ساعات العمل',
      hours: 'الاثنين - السبت: 8:00 صباحًا - 10:00 مساءً\nالأحد: 9:00 صباحًا - 6:00 مساءً',
      emailLabel: 'الاستفسارات العامة',
      email: 'fathimaclinicvp@gmail.com',
      hipaa: 'تخزين سجلات المرضى متوافق مع معايير السرية. حائز على ترخيص صيدلية سريرية مسجل لدى مجلس الولاية.',
      copyright: '© 2026 عيادة فاطمة الطبية بفالابوزا. جميع الحقوق محفوظة.'
    }
  }

  const current = text[lang]
  const isRtl = lang === 'AR'

  return (
    <footer id="contact" className="bg-[#0B4DBB] text-white border-t border-blue-500/30 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer details */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 ${isRtl ? 'text-right' : 'text-left'}`}>
          
          {/* Col 1: Address */}
          <div className="flex flex-col gap-3">
            <h4 className={`font-heading font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2 ${
              lang === 'ML' ? 'font-malayalam text-xs' : ''
            }`}>
              <MapPin className="w-4 h-4 text-blue-200" />
              {current.addressLabel}
            </h4>
            <p className={`text-sm text-blue-100 leading-relaxed font-medium ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              {current.address}
            </p>
          </div>

          {/* Col 2: Telephone */}
          <div className="flex flex-col gap-3">
            <h4 className={`font-heading font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2 ${
              lang === 'ML' ? 'font-malayalam text-xs' : ''
            }`}>
              <PhoneCall className="w-4 h-4 text-blue-200" />
              {current.phoneLabel}
            </h4>
            <a 
              href={`tel:${current.phone}`} 
              className="text-lg font-black text-white hover:text-blue-200 transition-colors"
            >
              {current.phone}
            </a>
          </div>

          {/* Col 3: Hours */}
          <div className="flex flex-col gap-3">
            <h4 className={`font-heading font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2 ${
              lang === 'ML' ? 'font-malayalam text-xs' : ''
            }`}>
              <Clock className="w-4 h-4 text-blue-200" />
              {current.hoursLabel}
            </h4>
            <p className={`text-sm text-blue-100 whitespace-pre-line font-medium leading-relaxed ${
              lang === 'ML' ? 'font-malayalam' : ''
            }`}>
              {current.hours}
            </p>
          </div>

          {/* Col 4: Queries */}
          <div className="flex flex-col gap-3">
            <h4 className={`font-heading font-extrabold text-sm text-white uppercase tracking-wider flex items-center gap-2 ${
              lang === 'ML' ? 'font-malayalam text-xs' : ''
            }`}>
              <Mail className="w-4 h-4 text-blue-200" />
              {current.emailLabel}
            </h4>
            <a 
              href={`mailto:${current.email}`} 
              className="text-sm font-bold text-blue-50 hover:text-blue-200 transition-colors break-all underline"
            >
              {current.email}
            </a>
          </div>

        </div>

        {/* HIPAA Notice */}
        <div className="border-t border-blue-500/30 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-left bg-white/10 border border-white/20 p-3 rounded-lg max-w-2xl">
            <ShieldAlert className="w-5 h-5 text-blue-200 shrink-0" />
            <p className={`text-xs text-blue-50 font-medium ${
              lang === 'ML' ? 'font-malayalam font-semibold' : ''
            }`}>
              {current.hipaa}
            </p>
          </div>
          <img 
            src="/logo/f1.png" 
            alt="Fathima Logo footer" 
            className="h-10 w-auto opacity-80 brightness-0 invert transition-all" 
          />
        </div>

        {/* Copyright strip */}
        <div className={`text-center mt-6 text-xs text-blue-200/60 font-semibold ${
          lang === 'ML' ? 'font-malayalam' : ''
        }`}>
          {current.copyright}
        </div>

      </div>
    </footer>
  )
}
