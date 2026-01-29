/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function Page() {
  const [cartCount, setCartCount] = useState<number>(0);

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 130,
      image: "/Wireless headphones.jpg",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 190,
      image: "/Smart watch.jpg",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 70,
      image: "/Gaming mouse.jpg",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 150,
      image: "/Mechanical keyboard.jpg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 100,
      image: "/Bluetooth speaker.jpg",
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 45,
      image: "/USB-C Hub.avif",
    },
  ];

  return (
    <main className="text-gray-900">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MyShop</h1>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>

            <div className="relative text-lg">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-36 pb-28 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-center"
      >
        <h2 className="text-5xl font-bold mb-6">
          Premium Tech Products
        </h2>
        <p className="max-w-xl mx-auto text-lg opacity-90">
          Upgrade your lifestyle with modern & reliable gadgets.
        </p>
        <button className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
          Explore Products
        </button>
      </section>

      {/* Products */}
      <section id="products" className="py-28 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border rounded-xl p-6 shadow-sm hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-44 w-full object-cover rounded-lg mb-6"
              />

              <h3 className="text-xl font-semibold">
                {product.name}
              </h3>

              <p className="text-blue-600 font-bold mt-2">
                ${product.price}
              </p>

              <button
                onClick={() => setCartCount((prev) => prev + 1)}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 bg-gray-100 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 text-lg">
            We provide high-quality tech products, fast shipping,
            and customer-first support with secure payments.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Get in Touch
        </h2>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-4 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-4 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="w-full border p-4 rounded-lg h-36"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        © {new Date().getFullYear()} MyShop — Built with Next.js
      </footer>

    </main>
  );
}
