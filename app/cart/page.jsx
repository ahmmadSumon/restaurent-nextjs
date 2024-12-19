"use client";
import { useState } from "react";
import Link from "next/link";
import useCartStore from "../store/cartstore";
import Image from "next/image";

const Cart = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleOrder = () => {
    console.log("Order confirmed", customerDetails, cartItems);
    clearCart();
    setOrderConfirmed(true);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const deliveryCharge = totalPrice > 500 ? 0 : 50; // Delivery charge logic
  const finalPrice = totalPrice + deliveryCharge; // Final price including delivery charge

  return (
    <div className="container mx-auto my-20 py-5 bg-transparent text-white shadow-xl rounded-lg">
      <div className="text-center animate-fadeInUp">
        <h5 className="font-secondary py-3 text-lg font-semibold uppercase tracking-widest text-[#F14321]">
          Your Cart
        </h5>
        <h2 className="mb-5 text-3xl font-bold text-gray-200">Cart Items</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-transparent text-gray-100 rounded-lg shadow-lg p-6 w-full md:w-2/3 lg:w-1/2">
          {orderConfirmed ? (
            <div className="text-center">
              <p className="text-2xl font-semibold text-green-500 mb-4">
                Order Confirmed!
              </p>
              <p className="text-lg text-gray-300">
                Wait for our response. Thank you!
              </p>
            </div>
          ) : (
            <>
              {cartItems.length === 0 ? (
                <p className="text-gray-400 text-center">Your cart is empty</p>
              ) : (
                <ul className="divide-y divide-gray-700">
                  {cartItems.map((item, index) => (
                    <li
                      key={index}
                      className="py-4 flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-cover rounded-lg border border-gray-600"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                            <span className="text-gray-500 text-sm">
                              No Image
                            </span>
                          </div>
                        )}
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-200">
                            {item.title}
                          </span>
                          <span className="text-gray-400">{item.price} TK</span>
                          <span className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item.title)}
                          className="px-2 py-1 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-white transition"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <button
                          onClick={() => increaseQuantity(item.title)}
                          className="px-2 py-1 bg-gray-700 text-gray-400 rounded hover:bg-gray-600 hover:text-white transition"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {cartItems.length > 0 && (
                <>
                  <div className="mt-6 text-lg font-semibold text-gray-200">
                    Subtotal: <span className="text-[#F14321]">{totalPrice} TK</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-300">
                    Delivery Charge:{" "}
                    <span className="text-[#F14321]">
                      {deliveryCharge === 0 ? "Free" : `${deliveryCharge} TK`}
                    </span>
                  </div>
                  <div className="mt-4 text-lg font-bold text-gray-200">
                    Final Price:{" "}
                    <span className="text-[#F14321]">{finalPrice} TK</span>
                  </div>
                  <button
                    className="mt-4 w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </>
              )}
              <Link href="/menu">
                <button className="mt-4 w-full py-2 bg-[#F14321] text-white rounded hover:bg-gray-300 hover:text-[#000] transition">
                  Continue Shopping
                </button>
              </Link>
              {cartItems.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-gray-200 mb-3">
                    Customer Details
                  </h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={customerDetails.name}
                    onChange={handleChange}
                    className="w-full mb-3 px-4 py-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring focus:ring-[#F14321]"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={customerDetails.address}
                    onChange={handleChange}
                    className="w-full mb-3 px-4 py-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring focus:ring-[#F14321]"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={customerDetails.phone}
                    onChange={handleChange}
                    className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring focus:ring-[#F14321]"
                  />
                  <button
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={handleOrder}
                  >
                    Order Now
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
