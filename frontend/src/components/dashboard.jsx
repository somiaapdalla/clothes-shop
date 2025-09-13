import { useState } from "react";

function Dashboard() {
  const [isopen, setisopent] = useState(false);

  const handlingopen = () => {
    if (isopen === true) {
      setisopent(false);
    } else {
      setisopent(true);
    }
  };

  const handlingclose = () => {
    if (isopen === true) {
      setisopent(false);
    } else {
      setisopent(true);
    }
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`bg-blue-950 h-screen transition-all duration-300 ${isopen ? "w-52" : "w-16"
          } overflow-hidden`}
      >
        {/* Toggle (top-right) */}
        <div className="flex justify-end p-3">
          {isopen ? (
            <i
              onClick={handlingclose}
              className="fa-solid fa-chevron-left text-white text-2xl cursor-pointer"
            ></i>
          ) : (
            <i
              onClick={handlingopen}
              className="fa-solid fa-chevron-right text-white text-2xl cursor-pointer"
            ></i>
          )}
        </div>

        {/* Menu items */}
        <nav className="pt-10 space-y-6">
            <div className="flex items-center gap-3 pl-5 text-2xl cursor-pointer">
            <i class=" text-white fa-solid fa-table-columns"></i>
            {isopen && <h1 className="text-white">Dashboard</h1>}
          </div>


          <div className="flex items-center gap-3 pl-5 text-2xl cursor-pointer">
            <i className="text-white fa-solid fa-house"></i>
            {isopen && <h1 className="text-white">Home</h1>}
          </div>

          <div className="flex items-center gap-3 pl-5 text-2xl cursor-pointer">
           <i className="text-white fa-brands fa-product-hunt"></i>
            {isopen && <h1 className="text-white">Product</h1>}
          </div>

          <div className="flex items-center gap-3 pl-5 text-2xl cursor-pointer">
            <i className="text-white fa-solid fa-plus"></i>
            {isopen && <h1 className="text-white">Add Product</h1>}
          </div>

          <div className="flex items-center gap-3 pl-5 text-2xl cursor-pointer">
            <i className="text-white fa-solid fa-user"></i>
            {isopen && <h1 className="text-white">Customer</h1>}
          </div>

          <div className="flex items-center gap-3 pl-5 text-2xl cursor-pointer">
            <i className="text-white fa-solid fa-flag"></i>
            {isopen && <h1 className="text-white">Report</h1>}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
