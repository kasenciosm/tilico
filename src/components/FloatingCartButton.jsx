import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/useCart";
import { Link } from "react-router-dom";

const FloatingCartButton = ({ onClick }) => {
  const { totalItems } = useCart();

  if (totalItems === 0) return null;

  return (
    <Link
      onClick={onClick}
      to="/catalogo"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative bg-slate-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
        <FaShoppingCart size={20} />

        {/* Badge */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
        )}
      </div>
    </Link>
  );
};

export default FloatingCartButton;
