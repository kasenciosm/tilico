import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const products = [
    {
      img: "masamadrejar.jpg",
      title: "INVESTIGACIÓN",
      alt: "Masa madre en proceso de fermentación",
      href: "/investigacion",
    },
    {
      img: "banetones.jpg",
      title: "DESARROLLO",
      alt: "Banetones con masa madre",
      href: "/desarrollo",
    },
    {
      img: "packaging.jpg",
      title: "EL EMPAQUE",
      alt: "Empaque ecológico para pan",
      href: "/empaque",
    },
  ];

  return (
    <section className="px-4 py-12 md:p-8 m-auto" id="i+d">
  <h3 className="
    text-center md:text-left
    text-2xl md:text-3xl
    font-hedvig
    mb-8 md:mb-12
  ">
    Investigación y Desarrollo
  </h3>

  <ul className="
    grid grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-8
    max-w-6xl
    mx-auto
  ">
    {products.map((item, index) => (
      <li key={index}>
        <Link to={item.href}>
          <div className="flex flex-col gap-4 md:gap-6 group">
            <img
              src={item.img}
              alt={item.alt}
              className="
                w-full
                h-56 md:h-80 lg:h-96
                object-cover
                transition-all duration-500 ease-out
                md:group-hover:scale-110
                shadow-md
                md:group-hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]
              "
            />

            <p className="
              text-center md:text-left
              text-base md:text-lg
              font-hedvig
            ">
              {item.title}
            </p>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</section>
  );
};

export default Content;
