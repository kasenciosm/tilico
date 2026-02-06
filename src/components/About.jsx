import React from "react";

const About = () => {
  return (
    <section
      className="
    min-h-screen w-full
    flex flex-col items-center justify-center
    pt-10 px-4 md:px-8
  "
      id="tilico"
    >
      {/* Contenido */}
      <div
        className="
      flex flex-col-reverse md:flex-row
      w-full max-w-6xl
      gap-12
      items-center justify-center
    "
      >
        {/* Texto con bordes parciales */}
        <div className="w-full md:w-1/2 relative p-6 md:p-8">
          {/* Borde superior izquierdo */}
          <span className="absolute top-0 left-0 w-1/2 h-px bg-slate-300"></span>

          {/* Borde inferior derecho */}
          <span className="absolute bottom-0 right-0 w-1/2 h-px bg-slate-300"></span>

          <p
            className="
          text-lg md:text-2xl
          leading-relaxed
          text-left
          font-hedvig
          text-slate-800
        "
          >
            Kenyi Asencios, el Chef Tilico, con una pasión inigualable por la
            cocina y los procesos artesanales, comenzó esta aventura trabajando
            con masas madre y fermentaciones naturales.
            <br />
            <br />
            Hoy desarrolla una variedad de panes de larga fermentación,
            elaborados con una masa madre activa desde el 2022, cuidada día a
            día como el corazón de Tilico.
          </p>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex justify-center pb-8">
          <img
            className="w-3/4 md:w-full shadow-xl object-cover"
            src="/kenyi.jpeg"
            alt="Chef Tilico"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
