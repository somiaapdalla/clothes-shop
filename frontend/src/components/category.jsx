import React from "react";
import { Link } from "react-router-dom";


// Category images
import ShirtImg from "../assets/img1.png";
import DressImg from "../assets/img1.png";
import JacketImg from "../assets/img1.png";
import PantsImg from "../assets/img1.png";

export default function CategoriesPage() {
  const categories = [
    { name: "Shirts", img: ShirtImg },
    { name: "Dresses", img: DressImg },
    { name: "Jackets", img: JacketImg },
    { name: "Pants", img: PantsImg },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-12">latest collection</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              to={`/category/${cat.name.toLowerCase()}`}
              key={i}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
              />
              <div className="p-4 text-center font-semibold text-gray-900">{cat.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
