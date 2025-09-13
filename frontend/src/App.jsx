import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import CreateProduct from "./components/product";
import Sadnav from "./components/sidenav";
import Home from "./components/home";
import HeaderBookStore from "./components/headar";

function App() {
  return (
    <div className="app">
    <HeaderBookStore/>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
