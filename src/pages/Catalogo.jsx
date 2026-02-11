import React from "react";
import { useCart } from "../context/useCart";
import CatalogoHeader from "../components/CatalogoHeader";
import products from "../utils/products";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-slate-200 shadow-sm hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        decoding="async"
        className="w-full h-56 object-cover aspect-4/3 md:aspect-4/3"
      />

      <div className="p-4 flex flex-col gap-3">
        <h4 className="text-lg font-hedvig">{product.title}</h4>

        <p className="text-slate-700 font-bold">S/ {product.price}</p>

        <button
          className="mt-auto border border-slate-800 py-2 text-sm hover:bg-slate-800 hover:text-white transition hover:cursor-pointer"
          onClick={() => addToCart(product)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

const Catalogo = () => {
  return (
    <>
      <CatalogoHeader />
      <section className="py-8 text-left">
        <div className="max-w-2xl mx-6">
          <p className="text-sm md:text-xl font-hedvig tracking-wide text-slate-800 leading-relaxed">
            Masa madre viva. <br />
            Granos seleccionados. <br />
            Horneado consciente.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Catalogo;
