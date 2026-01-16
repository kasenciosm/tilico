import React from 'react'

const Logo = () => {
  return (
    // <div className=''>
    //   {/* <img src="/tilico.jpeg" alt="Tilico Logo" className="w-48 h-20"/> */}
    // </div>
    <div className="flex flex-col items-center select-none pt-2 pb-2">

  {/* TILICO */}
  <h1 className="text-[32px] font-comfortaa font-ligth tracking-[0.3em] text-[#1a1a1a] mb-1.5">
    T&nbsp;I&nbsp;L&nbsp;I&nbsp;C&nbsp;O
  </h1>

  {/* Subtítulo */}
  <span className="font-mulish text-[10px] tracking-[0.12em] text-[#2f2f2f] -mt-2 mb-0.5">
    Panadería Artesanal
  </span>

  {/* Línea punteada */}
  <p className="text-[#444] font-light text-[20px] tracking-[0.2em] -mt-3">
    ------------------
  </p>
</div>
  )
}

export default Logo
