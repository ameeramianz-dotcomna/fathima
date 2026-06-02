import React, { useRef } from 'react'
import './FloatingContactWidget.css'

export default function FloatingContactWidget({ lang = 'EN', onNavigate }) {
  const containerRef = useRef(null)

  // Translations dictionary for premium multi-language clinical support
  const textDict = {
    EN: {
      whatsapp: 'WhatsApp',
      callTooltip: 'Call Us',
      bookingTooltip: 'Book Appointment'
    },
    ML: {
      whatsapp: 'വാട്സാപ്പ്',
      callTooltip: 'വിളിക്കുക',
      bookingTooltip: 'അപ്പോയിന്റ്മെന്റ്'
    },
    AR: {
      whatsapp: 'واتساب',
      callTooltip: 'اتصل بنا',
      bookingTooltip: 'حجز موعد'
    }
  }

  const t = textDict[lang] || textDict['EN']
  const isRtl = lang === 'AR'

  // Create high-performance Vanilla JS ripple effect on button click
  const handleButtonClick = (e, callback, actionUrl) => {
    const button = e.currentTarget
    
    // Spawn ripple circle element
    const ripple = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2
    
    const rect = button.getBoundingClientRect()
    ripple.style.width = ripple.style.height = `${diameter}px`
    ripple.style.left = `${e.clientX - rect.left - radius}px`
    ripple.style.top = `${e.clientY - rect.top - radius}px`
    ripple.className = 'fcw-ripple-effect'
    
    // Clean up older ripples
    const existing = button.querySelector('.fcw-ripple-effect')
    if (existing) {
      existing.remove()
    }
    
    button.appendChild(ripple)

    // Trigger action after a tiny delay for visual ripple satisfaction (150ms)
    setTimeout(() => {
      if (actionUrl) {
        window.open(actionUrl, '_blank', 'noopener,noreferrer')
      } else if (callback) {
        callback()
      }
    }, 150)
  }

  const whatsappUrl = `https://wa.me/918086537077?text=Hello%20Fathima%20Medical%20Center,%20I%20would%20like%20to%20inquire/book%20an%20appointment.`

  return (
    <div 
      ref={containerRef}
      className={`floating-contact-container ${isRtl ? 'is-rtl' : ''} floating-contact-idle-anim`}
      role="navigation"
      aria-label="Contact Widget"
    >
      {/* Permanent Stack of 3 Circular Buttons */}
      <div className="fcw-buttons-stack" role="menu">
        {/* Booking / Appointment Button */}
        <div className="fcw-menu-item" role="none">
          <button 
            type="button"
            className="fcw-btn fcw-btn-secondary"
            onClick={(e) => handleButtonClick(e, () => {
              if (onNavigate) {
                onNavigate('appointment')
              }
            })}
            aria-label={t.bookingTooltip}
            role="menuitem"
            tabIndex={0}
          >
            <div className="fcw-icon-container">
              {/* Calendar Icon SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.25" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className="fcw-btn-text">{t.bookingTooltip}</span>
          </button>
        </div>

        {/* Call Button */}
        <div className="fcw-menu-item" role="none">
          <button 
            type="button"
            className="fcw-btn fcw-btn-secondary"
            onClick={(e) => {
              handleButtonClick(e, () => {
                window.location.href = 'tel:+918086537077'
              })
            }}
            aria-label={t.callTooltip}
            role="menuitem"
            tabIndex={0}
          >
            <div className="fcw-icon-container">
              {/* Telephone Icon SVG */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.25" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span className="fcw-btn-text">{t.callTooltip}</span>
          </button>
        </div>

        {/* WhatsApp Button */}
        <div className="fcw-menu-item" role="none">
          <button
            type="button"
            className="fcw-btn fcw-btn-whatsapp-trigger"
            onClick={(e) => handleButtonClick(e, null, whatsappUrl)}
            aria-label="Chat on WhatsApp"
            role="menuitem"
            tabIndex={0}
          >
            <div className="fcw-icon-container">
              {/* Custom high-fidelity brand WhatsApp SVG */}
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 2c-5.514 0-9.988 4.477-9.988 9.99 0 1.76.457 3.473 1.328 4.984l-1.371 5.026 5.143-1.348c1.464.799 3.109 1.218 4.887 1.218 5.515 0 9.991-4.476 9.991-9.99S17.546 2 12.031 2zm0 17.5c-1.573 0-3.111-.423-4.453-1.223l-.319-.19-3.064.803.818-3.003-.207-.33c-.878-1.401-1.343-3.023-1.343-4.707 0-4.686 3.813-8.5 8.5-8.5s8.5 3.814 8.5 8.5-3.814 8.5-8.5 8.5zm4.673-6.423c-.256-.127-1.516-.74-1.75-.824-.233-.085-.403-.127-.573.127-.17.253-.657.824-.805.992-.148.169-.296.19-.553.063-.257-.127-1.085-.399-2.067-1.272-.764-.678-1.28-1.517-1.43-1.771-.15-.253-.016-.39.112-.516.115-.113.256-.297.383-.444.127-.148.17-.253.256-.422.085-.169.042-.317-.021-.444-.064-.127-.573-1.372-.785-1.884-.207-.5-.436-.433-.598-.44-.155-.008-.332-.01-.508-.01-.177 0-.465.066-.708.33-.243.264-.927.893-.927 2.179 0 1.285.945 2.528 1.077 2.7.132.171 1.859 2.809 4.503 3.931.629.267 1.12.427 1.503.547.632.199 1.208.171 1.662.103.508-.076 1.516-.615 1.729-1.21.212-.596.212-1.107.148-1.21-.063-.103-.233-.17-.489-.297z"/>
              </svg>
            </div>
            <span className="fcw-btn-text">{t.whatsapp}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
