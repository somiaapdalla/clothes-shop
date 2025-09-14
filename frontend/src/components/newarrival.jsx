import React from "react";
import { motion } from "framer-motion";

// Product images
import Product1 from "../assets/img1.png";
import Product2 from "../assets/img1.png";
import Product3 from "../assets/img1.png";
import Product4 from "../assets/img1.png";

export default function NewArrivals() {
  const products = [
    { name: "Green Shirt", price: "$49", img: Product1 },
    { name: "Red Dress", price: "$79", img: Product2 },
    { name: "Blue Jacket", price: "$99", img: Product3 },
    { name: "Black Pants", price: "$59", img: Product4 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">best sellers</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-green-600 font-bold mt-1">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
