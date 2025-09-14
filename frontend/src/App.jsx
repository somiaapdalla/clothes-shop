import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import CreateProduct from "./components/product";
import Sadnav from "./components/sidenav";
import Home from "./components/home";
import HeaderBookStore from "./components/headar";
import Footer from "./components/footer";
import AboutUs from "./components/about";
import Contact from "./components/contact";
import Product from "./components/addproduct";
<<<<<<< HEAD
import ProductCards from "./components/productcards";
import Login from "./components/login";
import Register from "./components/registration";
import UpdateProduct from "./components/updateproduc";
import CartPage from "./components/cartpage";
import CustomerView from "./components/customerview";
=======
import ProductCards from "./components/collection";
>>>>>>> cb631bb0496b40dfda33f28432ea9e02de37b85f

function App() {
  return (
    <div className="app">
    <HeaderBookStore/>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add product" element={<Product />} />
          <Route path="/productcard" element={<ProductCards/>} />

          <Route path="/product" element={<CreateProduct />} />
          <Route path="/product" element={<ProductCards />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/customer" element={<CustomerView />} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
