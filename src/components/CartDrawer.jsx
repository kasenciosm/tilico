import { useCart } from "../context/useCart";
import { FaTimes } from "react-icons/fa";

const CartDrawer = ({ isOpen, onClose }) => {
  const {
    cart,
    increaseQty,
    decreaseQty,
    clearCart,
    total,
  } = useCart();

  const phoneNumber = "51944794663"; // tu número

  const generateWhatsAppMessage = () => {
    let message = "Hola, quiero hacer este pedido:%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.title} x${item.quantity} - S/ ${
        item.price * item.quantity
      }%0A`;
    });

    message += `%0ATotal: S/ ${total}`;

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-xl transform transition-transform duration-300 z-50 text-white
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-900">
          <h3 className="text-lg font-semibold">Tu carrito</h3>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-4 overflow-y-auto h-[68%]">
          {cart.length === 0 && (
            <p className="text-slate-500">Tu carrito está vacío</p>
          )}

          {cart.map((item) => (
            <div key={item.id} className="border-b pb-3">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-slate-300">
                S/ {item.price}
              </p>

              <div className="flex items-center gap-3 mt-2 place-content-center">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-0.5 bg-slate-800 rounded-md hover: cursor-pointer"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-0.5 bg-slate-800 rounded-md hover:cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 border-t bg-gray-900">
          <div className="flex justify-between mb-3">
            <span>Total:</span>
            <span className="font-semibold">S/ {total}</span>
          </div>

          <button
            onClick={clearCart}
            className="w-full mb-2 py-2 border bg-slate-300 text-sm text-slate-950 rounded-md font-semibold hover:cursor-pointer hover:bg-red-400 transition"
          >
            Vaciar carrito
          </button>

          {cart.length > 0 && (
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-2 bg-green-600 text-white rounded-sm"
            >
              Comprar por WhatsApp
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
