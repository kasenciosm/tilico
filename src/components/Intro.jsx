import React from "react";

const Intro = () => {
  return (
    <section
      className="
    min-h-screen w-full
    flex flex-col items-center justify-center
    px-4 md:px-8
  "
      id="nosotros"
    >
      {/* Título */}
      <h2
        className="
      pt-8 md:pt-2
      pb-12 md:pb-20
      font-semibold font-comfortaa
      text-2xl md:text-4xl
      text-slate-800
      tracking-widest
      text-center
    "
      >
        BIENVENIDO A TILICO
      </h2>

      {/* Contenido */}
      <div
        className="
      flex flex-col md:flex-row
      w-full max-w-6xl
      gap-12
      items-center justify-center
    "
      >
        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="
            w-2/3 md:w-1/2
            drop-shadow-[0_15px_10px_rgba(0,0,0,0.35)]
          "
            src="/masamadre.png"
            loading="lazy"
            decoding="async"
            alt="Tilico masa madre"
          />
        </div>

        {/* Texto con bordes parciales */}
        <div className="w-full md:w-1/2 relative p-6 md:p-8 text-left">
          {/* Borde superior izquierdo */}
          <span className="absolute top-0 left-0 w-1/2 h-px bg-slate-300"></span>

          {/* Borde inferior derecho */}
          <span className="absolute bottom-0 right-0 w-1/2 h-px bg-slate-300"></span>

          <p
            className="
          text-lg md:text-2xl
          leading-relaxed
          font-hedvig
          text-slate-800
        "
          >
            En Tilico elaboramos nuestros panes con masa madre, respetando los
            tiempos de fermentación y los procesos tradicionales que dan como
            resultado sabores profundos, mejor textura y una experiencia
            auténtica. Cada pan es fruto de paciencia, técnica y dedicación al
            buen hacer artesanal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
