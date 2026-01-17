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
  {/* Separador decorativo superior */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-slate-300"></div>

  <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

    {/* Marca */}
    <div className="flex flex-col gap-4">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-fit cursor-pointer"
      >
        <Logo />
      </button>

      <p className="text-slate-600 font-hedvig text-sm max-w-xs leading-relaxed">
        Panadería artesanal elaborada con masa madre, respetando los
        tiempos y procesos tradicionales.
      </p>
    </div>

    {/* Navegación */}
    <div>
      <h4 className="font-hedvig text-lg mb-4">Explorar</h4>
      <ul className="flex flex-col gap-3 text-slate-600">
        {[
          ["home", "Inicio"],
          ["nosotros", "Nosotros"],
          ["tilico", "Tilico"],
          ["i+d", "Investigación y Desarrollo"],
          ["productos", "Productos"],
          ["contacto", "Contacto"],
        ].map(([id, label]) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              className="footer-link hover:text-slate-900 transition cursor-pointer"
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* Contacto */}
    <div id="contacto">
      <h4 className="font-hedvig text-lg mb-4">Contacto</h4>

      <ul className="flex flex-col items-center gap-4 text-slate-600">
        <li>
          <a
            href="https://wa.me/51944794663?text=Hola%20quiero%20hacer%20un%20pedido."
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-slate-900 transition-transform duration-300 hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/tilico.pe"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-slate-900 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
        </li>

        <li className="text-sm text-slate-500 tracking-wide">
          Lima, Perú
        </li>
      </ul>
    </div>
  </div>

  {/* Línea inferior */}
  <div className="border-t border-slate-300 py-6 text-center text-xs tracking-widest text-slate-500">
    © {new Date().getFullYear()} TILICO · PANADERÍA ARTESANAL
  </div>
</footer>
  )
}

export default Footer
