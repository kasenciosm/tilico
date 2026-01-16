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
    <footer className="bg-white border-t border-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Marca */}
        <div className="flex flex-col gap-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-fit hover: cursor-pointer">
            <Logo />
          </button>

          <p className="text-slate-600 font-hedvig text-sm max-w-xs">
            Panadería artesanal elaborada con masa madre, respetando los
            tiempos y procesos tradicionales.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-hedvig text-lg mb-4">Explorar</h4>
          <ul className="flex flex-col gap-2 text-slate-600">
            <li><button onClick={() => scrollToSection("home")} className="hover:text-slate-900 hover:cursor-pointer">Inicio</button></li>
            <li><button onClick={() => scrollToSection("nosotros")} className="hover:text-slate-900 hover:cursor-pointer">Nosotros</button></li>
            <li><button onClick={() => scrollToSection("tilico")} className="hover:text-slate-900 hover:cursor-pointer">Tilico</button></li>
            <li><button onClick={() => scrollToSection("i+d")} className="hover:text-slate-900 hover:cursor-pointer">Investigación y Desarrollo</button></li>
            <li><button onClick={() => scrollToSection("productos")} className="hover:text-slate-900 hover:cursor-pointer">Productos</button></li>
            <li><button onClick={() => scrollToSection("contacto")} className="hover:text-slate-900 hover:cursor-pointer">Contacto</button></li>
          </ul>
        </div>

        {/* Contacto */}
        <div id="contacto">
          <h4 className="font-hedvig text-lg mb-4">Contacto</h4>

          <ul className="flex flex-col items-center gap-2 text-slate-600">
            <li>
              <a
                href="https://wa.me/51944794663?text=Hola%20quiero%20hacer%20un%20pedido."
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                <FaWhatsapp></FaWhatsapp>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/tilico.pe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900"
              >
                <FaInstagram/>
              </a>
            </li>

            <li className="text-sm text-slate-500">
              Lima, Perú
            </li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Tilico. Panadería artesanal.
      </div>
    </footer>
  )
}

export default Footer
