import React from 'react'

const About = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center pt-10"
    id="tilico"
    >
      {/* Contenido */}
      <div className="flex w-full max-w-6xl gap-12 items-center justify-center px-8">

        {/* Imagen */}

        {/* Texto con bordes parciales */}
        <div className="w-1/2 relative p-8 ">

          {/* Borde superior izquierdo (50%) */}
          <span className="absolute top-0 left-0 w-1/2 h-0.5 bg-slate-300"></span>
          {/* <span className="absolute top-0 left-0 h-1/2 w-0.5 bg-slate-300"></span> */}

          {/* Borde inferior derecho (50%) */}
          <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-slate-300"></span>
          {/* <span className="absolute bottom-0 right-0 h-1/2 w-0.5 bg-slate-300"></span> */}
          <p className='text-2xl text-left font-hedvig text-slate-800'>
            Kenyi Asencios, el Chef Tilico... con una pasión inigualable por la cocina y los procesos
            artesanales.
            Comenzó esta aventura trabajando con masas madre y
            fermentaciones naturales. Actualmente trabajando con una variedad de 
            panes de larga fermentación con una masa madre que lleva activa desde el 2022!.
          </p>
        </div>
        <div className="w-1/2 flex justify-center pb-8">
          <img
            className="w-full rounded-lg shadow-lg"
            src="/kenyi.jpeg"
            alt="Chef Tilico"
          />
        </div>
      </div>
    </section>
  )
}

export default About
