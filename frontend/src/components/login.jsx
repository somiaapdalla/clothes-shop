import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [active ,setactive] = useState("customer")

  const navigate = useNavigate();

  function handleinsert(e) {
    e.preventDefault();
    const url = active === "customer" ? "http://localhost:1000/login/customer" : "http://localhost:1000/login/admin"
    const payload = active === "customer" ? {email:email , password:password } : {email:email , password:password}
    axios.post(url,payload)
    .then((res) => {
      alert(`${active} login  successfully`);
      localStorage.setItem("customer", JSON.stringify(res.data));
      navigate("/");
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message || "Invalid email or password");
      } else {
        alert("Server error, please try again later");
      }
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
          <div className="flex justify-center gap-8">
          <button onClick={()=> setactive("customer")} className={`px-12 py-3 rounded-xl ${active === "customer" ? "bg-purple-500 text-white" : "border-2 to-black text-black"}`}>Customer</button>
          <button onClick={()=> setactive("admin")} className={`px-12 py-3 rounded-xl ${active === "admin" ? "bg-purple-500 text-white" : "border-2 to-black text-black"}`}>Admin</button>
        </div>
        <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleinsert}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
             {active === "customer" ? "Login Customer" : "Login AdminS"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-purple-600 font-semibold cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
