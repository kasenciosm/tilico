import React from "react";

const Desarrollo = () => {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="w-full h-[60vh] md:min-h-screen relative">
        <img
          src="/panesportada.jpg"
          alt="Investigación y desarrollo de masa madre"
          className="w-full h-full object-cover"
        />

        {/* overlay sutil opcional */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>
      <div className="flex justify-center py-20 pb-10">
        <span className="block w-60 h-[0.8px] bg-slate-600"></span>
      </div>

      {/* TEXTO */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-10">
        <h2 className="text-3xl md:text-4xl font-hedvig text-slate-800 mb-8">
          Desarrollo del producto
        </h2>

        <p className="text-lg md:text-xl font-hedvig text-slate-700 leading-relaxed">
          Cada producto nace de un proceso de desarrollo cuidadoso, donde la
          técnica, el tiempo y la materia prima marcan la diferencia. Trabajamos
          con masa madre viva, fermentaciones controladas y pruebas constantes
          hasta lograr el equilibrio justo entre sabor, textura y
          digestibilidad. Los panes clásicos se desarrollan a partir de recetas
          base afinadas con el tiempo, buscando cortezas bien formadas, migas
          profundas y perfiles de sabor limpios. En los panes de granos y
          semillas, el desarrollo se enfoca en la correcta hidratación,
          activación y tostado previo de cada grano, integrándolos sin alterar
          la estructura ni la fermentación. Para los panes dulces y bollería, el
          proceso exige un ajuste fino de tiempos, temperaturas y proporciones,
          permitiendo que la masa madre aporte complejidad sin opacar sabores
          suaves como mantequilla, cacao o frutas. Cada nueva preparación pasa
          por una etapa de prueba, ajuste y validación, respetando siempre
          procesos artesanales y evitando atajos.
          <br />
          <br />
          El desarrollo no se detiene en una receta final: evoluciona con cada
          horneada, manteniendo coherencia, calidad y carácter propio en toda la
          línea de productos.
        </p>
      </section>

      <div className="flex justify-center py-16">
        <span className="block w-60 h-[0.7px] bg-slate-600"></span>
      </div>

      {/* GRID DE IMÁGENES */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <img
            src="/mmbutter.jpg"
            alt="pan de masa madre con mantequilla"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/briochebuns.jpg"
            alt="Pan brioche cortado"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/baguette.jpg"
            alt="Pruebas de horneado"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/mmbutters.jpg"
            alt="Resultados finales"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />
        </div>
      </section>
    </main>
  );
};

export default Desarrollo;
