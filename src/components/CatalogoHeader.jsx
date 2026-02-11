import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const CatalogoHeader = () => {
  return (
    <header className="w-full border-b border-slate-200 bg-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Mensaje */}
        <p className="text-sm md:text-base text-slate-300 font-hedvig">
          Envío gratis por compras desde <strong>S/ 60</strong>
        </p>

        {/* Redes */}
        <div className="flex gap-4 text-slate-300">
          <a href="https://www.instagram.com/tilico.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://wa.me/51944794663" aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </header>
  )
}

export default CatalogoHeader
