import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo' // Ajusta la ruta si es necesario
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // Ajusta este valor según la altura del header
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  return (
   <footer className="bg-[#faf7f2] mt-24 relative">
  {/* Separador superior */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-slate-300"></div>

  <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-3 items-start gap-6">

    {/* Columna 1 – Texto */}
    <div className="text-left text-slate-600 font-hedvig text-xs leading-relaxed">
      Panadería artesanal elaborada con masa madre.
      <span className="block mt-2 tracking-widest uppercase text-[10px] text-slate-400">
        Lima · Perú
      </span>
    </div>

    {/* Columna 2 – Explorar */}
    <div>
      <h4 className="font-hedvig text-[11px] mb-3 tracking-widest uppercase text-slate-700">
        Explorar
      </h4>

      <ul className="grid grid-cols-2 gap-x-10 gap-y-1 text-xs text-slate-600">
        {[
          ["home", "Inicio"],
          ["nosotros", "Nosotros"],
          ["tilico", "Tilico"],
          ["i+d", "I+D"],
          ["productos", "Productos"],
          ["contacto", "Contacto"],
        ].map(([id, label]) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="footer-link"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Columna 3 – Contacto */}
    <div>
      <h4 className="font-hedvig text-[11px] mb-3 tracking-widest uppercase text-slate-700">
        Contacto
      </h4>

      <ul className="flex flex-col gap-4 text-xs text-slate-600">
        <li>
          <a
            href="https://wa.me/51944794663?text=Hola%20quiero%20hacer%20un%20pedido."
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaWhatsapp/>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/tilico.pe"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <FaInstagram/>
          </a>
        </li>
      </ul>
    </div>

  </div>

  {/* Línea inferior */}
  <div className="border-t border-slate-300 py-4 text-center text-[10px] tracking-widest text-slate-500">
    © {new Date().getFullYear()} TILICO · PANADERÍA ARTESANAL
  </div>
</footer>
  )
}

export default Footer
