import React, { useState } from "react";
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

const Slide = ({ slide }) => (
  <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 px-6">
    <img
      src={slide.image}
      alt={slide.title}
      className="w-full md:w-1/2 h-72 md:h-80 object-cover shadow-xl"
    />

    <div className="w-full md:w-1/2 text-left">
      <h4 className="text-3xl font-hedvig mb-4">{slide.title}</h4>
      <p className="text-lg text-slate-700 leading-relaxed">
        {slide.description}
      </p>
    </div>
  </div>
);

const Products = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1));

  return (
    <section className="px-4 md:px-8 py-12" id="productos">
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
        <div className="flex justify-center gap-6 mt-10">
          {current > 0 && (
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition"
            >
              <FaArrowLeft />
            </button>
          )}
          {current < slides.length - 1 && (
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur shadow-md flex items-center justify-center hover:bg-white transition"
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      </div>

      {/* ===== MOBILE SLIDER ===== */}
      <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-2">
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full snap-start">
            <Slide slide={slide} />
          </div>
        ))}
      </div>

      {/* Hint mobile */}
      <p className="md:hidden text-center text-sm text-slate-400 mt-4">
        Desliza para ver más →
      </p>
    </section>
  );
};

export default Products;
