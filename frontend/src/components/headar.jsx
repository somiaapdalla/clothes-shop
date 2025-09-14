import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function HeaderBookStore() {
  const navigate = useNavigate();
  const customer = localStorage.getItem("customer"); // ✅ نجيب بيانات المستخدم لو موجودة

  // دالة تسجيل الخروج
  const handleLogout = () => {
    localStorage.removeItem("customer"); // ✅ مسح بيانات المستخدم
    alert("You have logged out ✅");
    navigate("/login"); // ✅ رجوع لصفحة تسجيل الدخول
  };

  return (
    <header className="w-full bg-white shadow-md px-6 md:px-48 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-600 cursor-pointer">
        valora<span className="text-gray-800">fashion</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="/" className="hover:text-green-600 transition">Home</a>
        <a href="#categories" className="hover:text-green-600 transition">Collection</a>
        <a href="/about" className="hover:text-green-600 transition">About Us</a>
        <a href="/contact" className="hover:text-green-600 transition">Contact</a>
      </nav>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        <div className="flex gap-4">
          {customer ? (
            // ✅ لو المستخدم مسجل دخول
            <button
              onClick={handleLogout}
              className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-red-600 transition border border-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          ) : (
            // ✅ لو ما فيه مستخدم → عرض تسجيل الدخول والتسجيل
            <>
              <Link to="/login">
                <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition">
                  <FaUser />
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-green-600 transition border border-green-500 px-3 py-1 rounded">
                  Register Customer
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Cart Button يظهر دائماً */}
       <Link to="/cart"> <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded text-sm shadow hover:bg-green-600 transition">
          <FaShoppingCart />
          Cart
        </button></Link>
      </div>
    </header>
  );
}

export default HeaderBookStore;
