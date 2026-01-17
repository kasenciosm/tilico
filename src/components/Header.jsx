import { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // Ajusta este valor según la altura del header
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const showCloseIcon = open && isMobile;

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          fixed top-0 left-0 w-full z-900
          flex justify-between items-center
          px-4 md:px-8 py-3
          transition-all duration-700
          ${
            scrolled
              ? "bg-white/90 backdrop-blur-sm shadow-md"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <button onClick={() => scrollToSection("home")}>
          <Logo />
        </button>
      </header>

      {/* Right controls */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 flex items-center gap-6 z-1100">
        {/* SHOP */}
        <a
          href="https://wa.me/51944794663?text=Hola%20quiero%20hacer%20un%20pedido."
          target="_blank"
          rel="noopener noreferrer"
          className={`
              px-4 py-2 text-sm font-semibold border-2 rounded-sm
              transition-all duration-300
              ${
                open && !scrolled
                  ? "text-white border-white"
                  : "text-slate-400 border-slate-400"
              }
            `}
        >
          SHOP
        </a>

        {/* HAMBURGUESA */}
        <button
          className="relative w-8 h-8 flex items-center cursor-pointer"
          onClick={() => isMobile && setOpen(!open)}
          onMouseEnter={() => !isMobile && setOpen(true)}
        >
          <span
            className={`
      absolute h-[3px] w-8 rounded
      transition-all duration-300 ease-in-out
      ${showCloseIcon ? "rotate-45 bg-white" : "-translate-y-2 bg-slate-800"}
    `}
          />

          {/* Línea del medio */}
          <span
            className={`
      absolute h-[3px] w-8 rounded
      transition-all duration-300 ease-in-out
      ${showCloseIcon ? "opacity-0" : "opacity-100 bg-slate-800"}
    `}
          />

          {/* Línea inferior */}
          <span
            className={`
      absolute h-[3px] w-8 rounded
      transition-all duration-300 ease-in-out
      ${showCloseIcon ? "-rotate-45 bg-white" : "translate-y-2 bg-slate-800"}
    `}
          />
        </button>
      </div>

      {/* PANEL DESPLEGABLE */}
      <div
        className={`
          fixed top-0 right-0 h-full
          w-full md:w-1/3 min-w-[300px]
          bg-black/85 backdrop-blur-md
          p-8 md:p-10 shadow-2xl
          z-1000
          transition-transform duration-500 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        onMouseLeave={() => !isMobile && setOpen(false)}
      >
        <nav className="flex flex-col gap-8 text-2xl md:text-xl mt-24 text-white items-start">
          <button
            className="hover: cursor-pointer hover:text-yellow-200"
            onClick={() => scrollToSection("home")}
          >
            Inicio
          </button>
          <button
            className="hover: cursor-pointer hover:text-yellow-200"
            onClick={() => scrollToSection("nosotros")}
          >
            Nosotros
          </button>
          <button
            className="hover: cursor-pointer hover:text-yellow-200"
            onClick={() => scrollToSection("tilico")}
          >
            Tilico
          </button>
          <button
            className="hover: cursor-pointer hover:text-yellow-200"
            onClick={() => scrollToSection("i+d")}
          >
            Investigación y Desarrollo
          </button>
          <button
            className="hover: cursor-pointer hover:text-yellow-200"
            onClick={() => scrollToSection("productos")}
          >
            Productos
          </button>
          <button
            className="hover: cursor-pointer hover:text-yellow-200"
            onClick={() => scrollToSection("contacto")}
          >
            Contacto
          </button>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
