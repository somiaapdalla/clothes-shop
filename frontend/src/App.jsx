import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import CreateProduct from "./components/product";
import Sadnav from "./components/sidenav";
import Home from "./components/home";
import HeaderBookStore from "./components/headar";
import Footer from "./components/footer";
import AboutUs from "./components/about";
import Contact from "./components/contact";

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

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
