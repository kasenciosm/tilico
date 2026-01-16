import React from "react";

const Intro = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center"
    id="nosotros"
    >
      {/* Título */}
      <h2 className="pt-2 pb-20 font-semibold font-comfortaa text-4xl text-slate-800">
        BIENVENIDO A TILICO
      </h2>

      {/* Contenido */}
      <div className="flex w-full max-w-6xl gap-12 items-center justify-center px-8">

        {/* Imagen */}
        <div className="w-1/2 flex justify-center">
          <img
            className="w-1/2 drop-shadow-[0_10px_5px_rgba(0,0,0,0.38)]"
            src="/masamadre.png"
            alt="Tilico"
          />
        </div>

        {/* Texto con bordes parciales */}
        <div className="w-1/2 relative p-8 text-left">

          {/* Borde superior izquierdo (50%) */}
          <span className="absolute top-0 left-0 w-1/2 h-0.5 bg-slate-300"></span>
          {/* <span className="absolute top-0 left-0 h-1/2 w-0.5 bg-slate-300"></span> */}

          {/* Borde inferior derecho (50%) */}
          <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-slate-300"></span>
          {/* <span className="absolute bottom-0 right-0 h-1/2 w-0.5 bg-slate-300"></span> */}
          <p className="text-2xl font-hedvig text-slate-800">
            En Tilico elaboramos nuestros panes con masa madre, 
            respetando los tiempos de fermentación y los procesos tradicionales 
            que dan como resultado sabores profundos, mejor textura y una experiencia auténtica.
            Cada pan es fruto de paciencia, técnica y dedicación al buen hacer artesanal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
