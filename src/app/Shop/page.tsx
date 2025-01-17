"use client";
import Image from "next/image";
import React, { useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

const Food = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const shops: Product[] = [
    { id: "1", name: "Fresh Lime", price: 38.0, image: "/image/shop1.png" },
    { id: "2", name: "Chocolate Muffin", price: 28.0, image: "/image/shop2.png" },
    { id: "3", name: "Burger", price: 21.0, image: "/image/shop3.png" },
    { id: "4", name: "Country Burger", price: 45.0, image: "/image/shop4.png" },
    { id: "5", name: "Drink", price: 23.0, image: "/image/shop5.png" },
    { id: "6", name: "Pizza", price: 43.0, image: "/image/shop6.png" },
    { id: "7", name: "Cheese Butter", price: 10.0, image: "/image/shop7.png" },
    { id: "8", name: "Sandwiches", price: 25.0, image: "/image/shop8.png" },
    { id: "9", name: "Chicken Chup", price: 12.0, image: "/image/shop9.png" },
    { id: "10", name: "Country Burger", price: 45.0, image: "/image/shop4.png" },
    { id: "11", name: "Drink", price: 23.0, image: "/image/shop5.png" },
    { id: "12", name: "Pizza", price: 43.0, image: "/image/shop6.png" },
    { id: "13", name: "Cheese Butter", price: 10.0, image: "/image/shop7.png" },
    { id: "14", name: "Sandwiches", price: 25.0, image: "/image/shop8.png" },
    { id: "15", name: "Chicken Chup", price: 12.0, image: "/image/shop9.png" },
  ];

  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if product exists
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Add new product to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Show the popup
    setShowPopup(true);

    // Hide the popup after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const incrementQuantity = (id: string) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setShowCustomerForm(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo({
      ...customerInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted with the following information: " + JSON.stringify(customerInfo));
    
  };

  return (
    <div>
      <div>
        <Image src="/image/menu.header.png" alt="" width={1960} height={410} />
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold">Our Shop</h1>
          <p className="mt-2">
            Home {'>'} <span className="text-orange">Shop</span>
          </p>
        </header>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white p-4 rounded-md shadow-lg"
          style={{ zIndex: 1000 }}
        >
          <p>Your item has been added to the cart!</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
        {shops.map((shop) => (
          <div
            key={shop.id}
            className="bg-white p-5 rounded-md shadow-md text-center"
          >
            <img
              src={shop.image}
              alt={shop.name}
              className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
            />
            <h3 className="mt-4 text-2xl font-bold">{shop.name}</h3>
            <p className="text-orange text-xl font-semibold mt-2">$ {shop.price}</p>
            <button
              onClick={() => addToCart(shop)}
              className="mt-4 px-4 py-2 bg-orange text-white rounded-md hover:bg-[#8A6342]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
      <div className="px-10 my-10">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-4 rounded-md shadow-sm"
              >
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-orange">Price: $ {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded-full"
                  >
                    +
                  </button>
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded-full"
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-1 bg-gray-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
                <p className="text-gray-600 font-bold">
                  Total: $ {item.price * item.quantity}
                </p>
              </div>
            ))}
            <div className="text-right font-bold text-lg">
              Grand Total: $
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </div>
          </div>
        )}
      </div>

      {/* Checkout Button */}
      <div className="flex justify-center">
        <button
          onClick={handleCheckout}
          className="bg-orange text-2xl font-semibold w-80 mb-8 rounded-lg h-16 text-white mt-8"
        >
          Checkout
        </button>
      </div>

      {/* Customer Info Form */}
      {showCustomerForm && (
        <div className="px-10 my-10">
          <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerInfo.name}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerInfo.email}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={customerInfo.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={customerInfo.address}
                onChange={handleFormChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-orange text-white px-6 py-2 rounded-md"
              >
                Submit Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Food;
