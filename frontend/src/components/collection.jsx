import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { use } from "react";

function ProductCards() {
  const [products, setProducts] = useState([]);
  const [category ,setcategory] = useState()


  const handlestoredata = (data)=>{
    const newdata = JSON.parse(localStorage.getItem("product")) || []


    //check id 

    const existid = newdata.some((item)=>item._id === data._id)
    if(!existid){
      newdata.push(data)
    localStorage.setItem("product" ,JSON.stringify(newdata)) 
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("http://localhost:1000/read/product",{
      "category":category
    })
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
      console.log(category)
  }, [category]);

  const handleEdit = (id) => navigate(`/updateproduct/${id}`);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:1000/delete/product/${id}`)
      .then(() => setProducts(products.filter(p => p._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
    
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="space-x-5 text-2xl text-center mb-5" > 
      <input name="category" value= "samrt phone"  onChange={()=> setcategory ("smart phone")} type="radio" /> Smart Phones 
      <input name="category" value="Laptops" onChange={()=> setcategory ("laptops")} type="radio" /> Laptops 
      <input name="category" value="Tv" onChange={()=> setcategory ("tv")} type="radio" /> Tv 
      <input name="category" value="Desktop" onChange={()=> setcategory ("desktop")} type="radio" /> Desktop 
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* الصورة الرئيسية */}
            <img
              src={`http://localhost:1000/alldocs/${product.primage}`}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <div className="flex justify-between">
              <p className="text-gray-600 mb-1">Price: ${product.price}</p>
              {/* <p className="text-gray-600 mb-1">Quantity: {product.quantity}</p> */}
              <p className={`mb-2 ${product.status === "avariable" ? "text-green-600" : "text-red-600"}`}>
              {product.status}
              </p>
              </div>

              {/* كل المستندات */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.docs?.map((doc, idx) => (
                  <img
                    key={idx}
                    src={`http://localhost:1000/alldocs/${doc}`}
                    alt={`Doc ${idx + 1}`}
                    className="w-16 h-16 object-cover rounded"
                  />
                ))}
              </div>

              <div className="flex justify-between">
             
              <button onClick={ ()=> handlestoredata(product) } disabled={product.status !== "avariable" } className={`${product.status !== "avariable" ? "bg-gray-600 text-white px-3 py-1 rounded text line-through " : "bg-purple-600 text-white px-3 py-1 rounded hover:bg-green-700 transition" }bg-purple-600 text-white px-3 py-1 rounded hover:bg-green-700 transition`}>add</button>

             
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        
        </div>
  );
}

export default ProductCards;