import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";

function HeaderBookStore() {
  return (
    <header className="w-full bg-white shadow-md px-6 md:px-48 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-600 cursor-pointer">
        valora<span className="text-gray-800">fashion</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="/" className="hover:text-green-600 transition">Home</a>
        <a href="/productcard" className="hover:text-green-600 transition">collection</a>
        <a href="about" className="hover:text-green-600 transition">about us</a>
        <a href="/contact" className="hover:text-green-600 transition">Contact</a>
      </nav>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        <div className="flex gap-4">
          <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition border border-green-500 px-3 py-1 rounded">
            logout
          </button>

          <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition">
            <FaUser />
            Login
          </button>

          <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition border border-green-500 px-3 py-1 rounded">
            Register Customer
          </button>
        </div>

        <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded text-sm shadow hover:bg-green-600 transition">
          <FaShoppingCart />
          Cart
        </button>
      </div>
    </header>
  );
}

export default HeaderBookStore;
