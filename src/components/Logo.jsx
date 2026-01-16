import React from 'react'

const Logo = () => {
  return (
    <div className="flex flex-col items-center select-none leading-none pt-2">

  {/* TILICO */}
  <h1 className="text-[18px] md:text-[32px] font-comfortaa font-ligth tracking-[0.3em] text-[#1a1a1a] mb-2.5 md:mb-1.5">
    T&nbsp;I&nbsp;L&nbsp;I&nbsp;C&nbsp;O
  </h1>

  {/* Subtítulo */}
  <span className="font-mulish text-[8px] md:text-[10px] tracking-[0.12em] text-[#2f2f2f] -mt-2 mb-1.5">
    Panadería Artesanal
  </span>

  {/* Línea punteada */}
  <p className="text-[#444] font-light text-[16px] md:text-[20px] tracking-[0.2em] -mt-3">
    ------------------
  </p>
</div>
  )
}

export default Logo
