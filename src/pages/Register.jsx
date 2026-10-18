import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Register(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
     const navigate = useNavigate();
     const handleRegister = async (e) => {
            e.preventDefault();
    
            try {
                const response = await axios.post(
                    "http://localhost:8080/api/register",
                    {
                        email,
                        password
                    }
                );

                localStorage.setItem("token", response.data);

                navigate("/useracc");

        } catch (error) {

            console.error(error);
            alert("Registration failed!");

        }
    }

return(
 <section className="min-h-screen bg-black flex flex-col justify-center items-center pt-9">

  <div
    className="w-full
    max-w-md
    md:max-w-2xl
    lg:max-w-3xl
    bg-[#0ABAB5]
    rounded-xl
    p-6
     sm:p-8 shadow-lg"
    
  >
    <h1 className="text-2xl font-bold text-center  text-black mb-6">
      Register
    </h1>

    <form
      onSubmit={handleRegister}
      className="space-y-4"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-white text-black"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-3 rounded-lg bg-white text-black"
      />

      <button
        type="submit"
        className="
          w-full
          bg-black
          text-white
          py-3
          rounded-lg
          font-semibold
          hover:bg-gray-900 transtion
        "
      >
      Register
      </button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-6 font-serif">Already have an account?
    <a href="/login"
     className="ml-1 underline hover:text-black">
      Login
     </a>
     </p>
  </div>
   </section>

);


}

export default Register;