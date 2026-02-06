import React from 'react'

const Empaque = () => {
  return (
     <main className="w-full">

      {/* HERO */}
      <section className="w-full h-[60vh] md:min-h-screen relative">
        <img
          src="/empaques.jpg"
          alt="Investigación y desarrollo de masa madre"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding='async'
        />

        {/* overlay sutil opcional */}
        <div className="absolute inset-0 bg-black/10"></div>
      </section>

      <div className="flex justify-center py-26 pb-4">
        <span className="block w-60 h-[0.8px] bg-slate-600"></span>
      </div>

      {/* TEXTO */}
      <section className="max-w-4xl mx-auto px-6 md:px-8 py-20">
        <h2 className="text-3xl md:text-4xl font-hedvig text-slate-800 mb-8">
          El Empaque 
        </h2>
  
        <p className="text-lg md:text-xl font-hedvig text-slate-700 leading-relaxed">
          Nuestro empaque está diseñado como una extensión del producto: funcional, simple y responsable. 
          Utilizamos plástico reutilizable para proteger cada pan, conservar su calidad y facilitar su transporte, 
          reduciendo mermas y desperdicio sin comprometer la experiencia del producto.
          <br /><br />
          La elección del material responde a un enfoque práctico y consciente. 
          El empaque está pensado para ser reutilizado, prolongando su vida útil y evitando elementos innecesarios, 
          manteniendo coherencia entre el proceso artesanal, la conservación y el uso responsable de recursos.
        </p>
      </section>

      <div className="flex justify-center py-8 pb-28">
        <span className="block w-60 h-[0.8px] bg-slate-600"></span>
      </div>

      {/* GRID DE IMÁGENES */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <img
            src="/empaque.jpg"
            alt="Masa madre activa"
            loading='lazy'
            decoding='async'
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/empaqueblanco.jpg"
            alt="Fermentación en proceso"
            decoding='async'
            loading='lazy'
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

          <img
            src="/empaquesvarios.jpg"
            alt="Pruebas de horneado"
            decoding='async'
            loading='lazy'
            className="w-full h-72 md:h-96 object-cover shadow-md"
          />

        </div>
      </section>

    </main>
  )
}

export default Empaque
