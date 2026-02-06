import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "PANES CLÁSICOS",
    description:
      "Panes de masa madre elaborados con fermentaciones largas, corteza crujiente y miga profunda.",
    image: "/clasicomm.jpeg",
  },
  {
    title: "BOLLERIA",
    description:
      "Recetas equilibradas donde la masa madre realza sabores suaves y aromas naturales.",
    image: "/briochemm.jpeg",
  },
  {
    title: "CACAO Y CHOCOLATE",
    description:
      "Preparaciones artesanales con cacao seleccionado y procesos cuidados.",
    image: "/cacao.jpeg",
  },
];

const Slide = ({ slide, isMobile = false }) => (
  <div
    className={`
      w-full max-w-6xl flex
      ${isMobile ? "flex-col gap-6" : "flex-col md:flex-row gap-12"}
      items-center px-4
    `}
  >
    <img
      src={slide.image}
      alt={slide.title}
      loading={isMobile ? "lazy" : "eager"}
      decoding="async"
      className={`
        w-full md:w-1/2
        ${isMobile ? "h-64 shadow-md" : "h-80 shadow-xl"}
        object-cover
      `}
    />

    <div className="w-full md:w-1/2 text-left">
      <h4 className="text-2xl md:text-3xl font-hedvig mb-3">
        {slide.title}
      </h4>
      <p className="text-base md:text-lg text-slate-700 leading-relaxed">
        {slide.description}
      </p>
    </div>
  </div>
);


const Products = () => {
  const [current, setCurrent] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [showMobileSlider, setShowMobileSlider] = useState(false);
  const mobileTrackRef = useRef(null);

  const ticking = useRef(false);

  const handleMobileScroll = () => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
       const el = mobileTrackRef.current;
      if (!el) return;

      const index = Math.round(el.scrollLeft / el.clientWidth);
      setMobileIndex(index);
      ticking.current = false;
    });

  };

  useEffect(() => {
    if(window.innerWidth < 768) {
      requestIdleCallback(() => setShowMobileSlider(true));
    }

  }, []);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () =>
    setCurrent((c) => Math.min(c + 1, slides.length - 1));

  return (
    <section className="px-4 md:px-8 py-10" id="productos">
      <h3 className="text-left text-3xl md:text-4xl font-hedvig mb-10 max-w-6xl m-auto">
        Productos
      </h3>

      {/* ===== DESKTOP SLIDER ===== */}
      <div className="relative hidden md:block overflow-hidden max-w-6xl m-auto">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex justify-center">
              <Slide slide={slide} />
            </div>
          ))}
        </div>

        {/* CONTROLES */}
        <div className="flex justify-center gap-6 mt-10 pb-3">
          {current > 0 && (
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition hover:cursor-pointer"
            >
              <FaArrowLeft />
            </button>
          )}
          {current < slides.length - 1 && (
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition hover:cursor-pointer"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>

      {/* ===== MOBILE SLIDER ===== */}
      {showMobileSlider && (
        <div
        ref={mobileTrackRef}
        onScroll={handleMobileScroll}
        className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-2 scroll-smooth"
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full snap-start">
            <Slide slide={slide} />
          </div>
        ))}
      </div>
      )}

      {/* DOTS MOBILE */}
      <div className="md:hidden flex justify-center gap-2 mt-14">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`
              w-2.5 h-2.5 rounded-full
              transition-all duration-300
              ${mobileIndex === i ? "bg-slate-800 scale-110" : "bg-slate-300"}
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
