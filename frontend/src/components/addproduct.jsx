import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product(){
      const [name, setname] = useState("");
      const [quantity, setquantity] = useState("");
      const [price, setPrice] = useState("");
      const [category, setcategory] = useState("");
      const [image, setimage] = useState("");

      const navigate = useNavigate()

       const formData = new FormData();

      formData.append("name",name)
      formData.append("quantity",quantity)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("img",image)

      const handlepost = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/create/product",formData).then(()=>{
            alert("success put data")
            navigate("/product")
        })
      }

      
      return (
        <div className="min-h-screen bg-gray-100 flex ">
    <form
      className="max-w-md mx-auto p-6 bg-green-200 rounded-md shadow-md mt-10 mb-5"
      
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">product form
              </h2>

      <label className="block mb-2 font-medium text-gray-700">Product Name</label>
      <input
        value={name}
        onChange={(e) => setname(e.target.value)}
        type="text"
        placeholder="Enter book name"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        required
      />

      <label className="block mb-2 font-medium text-gray-700">Quantity</label>
      <input
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        type="number"
        placeholder="Enter author name"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        required
      />

      

      <label className="block mb-2 font-medium text-gray-700">Price</label>
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        min="0"
        step="0.01"
        placeholder="Enter price"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        required
      />


      <label className="block mb-2 font-medium text-gray-700">Category</label>
      <input
        value={category}
        onChange={(e) => setcategory(e.target.value)}
        type="text"
        min="0"
        step="0.01"
        placeholder="Enter price"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
        required
      />

      <label className="block mb-2 font-medium text-gray-700">Image</label>
      <input
    className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
    onChange={(e) => setimage(e.target.files[0])} // for file upload
    type="file"
    accept="image/*"
    required
    />


      <button
      onClick={handlepost}
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded w-full hover:bg-green-800"
      >
        submit
        {/* {existingBook ? "Update Book" : "Submit"} */}
      </button>
    </form>
    </div>
      )
}
export default Product