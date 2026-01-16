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
    <section className="p-8 m-auto"
    id="productos"
    >
      <h3 className="text-left text-3xl p-8 m-auto font-hedvig">Productos</h3>
      <div className="relative overflow-hidden max-w-6xl m-auto">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex items-center gap-12 p-8"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-1/2 h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="w-1/2">
                <h4 className="text-2xl font-hedvig mb-4">{slide.title}</h4>
                <p className="text-lg text-slate-700">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute left-4 bottom-1 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-white transition cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-4 bottom-1 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-white transition cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
;

export default Products;
