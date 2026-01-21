import React from 'react'

const Investigacion = () => {
  return (
    <main className="w-full">

      {/* HERO */}
      <section className="w-full h-[60vh] md:min-h-screen relative">
        <img
          src="/masamadrei.jpg"
          alt="Investigación y desarrollo de masa madre"
          className="w-full h-full object-cover"
        />

        {/* overlay sutil opcional */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      {/* TEXTO */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-hedvig text-slate-800 mb-8">
          Investigación y Desarrollo
        </h2>

        <p className="text-lg md:text-xl font-hedvig text-slate-700 leading-relaxed">
          En Tilico, la masa madre no es solo un ingrediente, es un organismo vivo
          que estudiamos y cuidamos día a día. Nuestro proceso de investigación
          se basa en comprender el comportamiento de las fermentaciones naturales,
          el impacto del tiempo, la temperatura y la hidratación sobre el sabor,
          la textura y la digestibilidad del pan.
          <br /><br />
          Cada prueba, cada reposo y cada horneado forman parte de un trabajo
          constante de observación y ajuste, buscando siempre panes más complejos,
          honestos y fieles a la tradición artesanal.
        </p>
      </section>

      {/* GRID DE IMÁGENES */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <img
            src="/mminicio.jpg"
            alt="Masa madre activa"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/mmsemi.jpg"
            alt="Fermentación en proceso"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/mmpan.jpg"
            alt="Pruebas de horneado"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/panlisto.jpg"
            alt="Resultados finales"
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

        </div>
      </section>

    </main>
  );
}

export default Investigacion
