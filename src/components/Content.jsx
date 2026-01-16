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
    <section className="p-8 m-auto"
    id="i+d"
    >
      <h3 className="text-left text-3xl p-8 m-auto font-hedvig">
        Investigación y Desarrollo
      </h3>
      <ul className="grid grid-cols-3 gap-8 p-8 m-auto">
        {products.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>
              <div className="flex flex-col gap-6">
                <img
                src={item.img}
                alt={item.alt}
                className="w-full h-96 object-cover 
                transition-all duration-500 ease-out 
                hover:scale-110 shadow-md hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)]"
              />

              <p className="text-lg font-hedvig">{item.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Content;
