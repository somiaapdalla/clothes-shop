import axios from "axios";
import { useEffect, useState } from "react";

function CartPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getdata = JSON.parse(localStorage.getItem("product")) || [];
    const updatedata = getdata.map(item=>({
      ...item, quantity: 1, maxquantity: item.quantity
    }))
    setProducts(updatedata);
  }, []);


  const handleincreament = (id)=>{
    setProducts(prd => prd.map(
      item => item._id === id ?
       {...item, quantity: item.quantity < item.maxquantity ? item.quantity + 1: item.quantity }
       : 
       item 
      ))
  }

  const handledecreament = (id)=>{
    setProducts(prd => prd.map(item => 
      item._id === id ?
      {...item , quantity: item.quantity > 1 ? item.quantity -1 : 1}
      :
      item
    ))
  }

 const customer = localStorage.getItem("customer");

let customerOrder = "";

if (customer) {
  const parsed = JSON.parse(customer);

  customerOrder =
    parsed?.data?.customer?.name ||  
    parsed?.customer?.name ||       
    parsed?.name ||                 
    "";  
    console.log(customerOrder);  
}

  const handleorder = ()=>{
    if(!customerOrder){
      alert("customer is required please log in or registration")
      return
    }
    axios.post("http://localhost:1000/create/order",{
      "customer":customerOrder,
      "products":products.map(item =>({
        "productId": item._id,
        "quantity": item.quantity
      }))
    }).then((res)=>{
      if(res.data.error){
        alert(res.data.error)
      }
      else{
        alert("success order")
        localStorage.removeItem("product")
        setProducts(res.data)
      }
    }).catch(error => console.log(error))
  }
  
  const totalprice = products.reduce((sum, item) => sum + (Number(item.price) *(Number(item.quantity))), 0);

  const handleDeleteItem = (id) => {
    const deleteData = products.filter((item) => String(item._id) !== String(id));
    localStorage.setItem("product", JSON.stringify(deleteData));
    setProducts(deleteData); 
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Cart Items */}
        <div className="w-full lg:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-6 text-purple-700">Shopping Cart</h2>

          {products.length === 0 ? (
            <p className="text-gray-500 text-center py-10">🛒 Your cart is empty</p>
          ) : (
            <>
              <div className="hidden md:flex justify-between text-gray-500 font-medium border-b pb-3 mb-4 text-sm">
                <span className="w-1/3">PRODUCT DETAILS</span>
                <span>QUANTITY</span>
                <span>PRICE</span>
                <span>TOTAL</span>
              </div>

              {products.map((product, index) => (
                <div
                  key={product._id || index}
                  className="flex flex-col md:flex-row justify-between items-center py-5 border-b hover:bg-gray-50 transition"
                >
                  {/* Product Details */}
                  <div className="flex items-center gap-4 w-full md:w-1/3">
                    <img
                      src={`http://localhost:1000/allDocs/${product.primage}`}
                      alt={product.name}
                      className="w-20 h-20 object-contain rounded-lg border"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{product.name}</h4>
                      <p className="text-sm text-purple-600">{product.catogory}</p>
                      <button
                        onClick={() => handleDeleteItem(product._id)}
                        className="text-red-500 text-xs hover:underline mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="mt-4 md:mt-0 flex items-center gap-2">
                    <button onClick={()=> handledecreament(product._id)} className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded">-</button>
                    <span className="font-semibold">{product.quantity}</span>
                    <button onClick={()=> handleincreament(product._id)} className="bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded">+</button>
                  </div>

                  {/* Price */}
                  <div className="mt-4 md:mt-0 text-gray-700 font-medium">${product.price }</div>

                  {/* Total per item */}
                  <div className="mt-4 md:mt-0 text-gray-700 font-medium">${product.price * product.quantity}</div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 p-6 border-l">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h3>

          <div className="flex justify-between mb-3 text-gray-600 text-sm">
            <span>ITEMS</span>
            <span>{products.length}</span>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">SHIPPING</label>
            <select className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option>Choose delivery option</option>
              <option>Standard - Free</option>
              <option>Express - $10</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="text-sm text-gray-600">PROMO CODE</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="Enter your code"
                className="border px-3 py-2 flex-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 rounded">APPLY</button>
            </div>
          </div>

          <div className="flex justify-between font-semibold text-lg text-gray-800 border-t pt-4 mb-6">
            <span>TOTAL COST</span>
            <span>${totalprice}</span>
          </div>

          <button onClick={handleorder} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg shadow transition">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
