import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Products = () => {
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

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setCurrent((current + 1) % slides.length);
    }
  ;

  return (
    <section className="px-4 md:px-8 py-12 m-auto" id="productos">
  <h3 className="text-left text-3xl md:text-4xl font-hedvig mb-10 max-w-6xl m-auto">
    Productos
  </h3>

  <div className="relative overflow-hidden max-w-6xl m-auto">
    {/* SLIDES */}
    <div
      className="flex transition-transform duration-700 ease-out"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="
            min-w-full
            flex flex-col md:flex-row
            items-center
            gap-8 md:gap-12
            px-2 md:px-8
          "
        >
          {/* Imagen */}
          <img
            src={slide.image}
            alt={slide.title}
            className="
              w-full md:w-1/2
              h-64 md:h-80
              object-cover
              shadow-xl
            "
          />

          {/* Texto */}
          <div className="w-full md:w-1/2 text-left">
            <h4 className="text-2xl md:text-3xl font-hedvig mb-4">
              {slide.title}
            </h4>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* CONTROLES */}
    <div className="flex justify-center gap-6 mt-10 pb-2">
      {current > 0 && (
        <button
          onClick={prev}
          className="
            bg-white/80 backdrop-blur
            w-12 h-12
            rounded-full
            flex items-center justify-center
            shadow-md
            hover:bg-white
            transition
            hover: cursor-pointer
          "
        >
          <FaArrowLeft />
        </button>
      )}

      {current < slides.length - 1 && (
        <button
          onClick={next}
          className="
            bg-white/80 backdrop-blur
            w-12 h-12
            rounded-full
            flex items-center justify-center
            shadow-md
            hover:bg-white
            transition
            hover: cursor-pointer
          "
        >
          <FaArrowRight />
        </button>
      )}
    </div>
  </div>
</section>
  );
}
;

export default Products;
