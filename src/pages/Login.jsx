   
import { useState, } from "react";
import { useEffect } from "react";
import axios from "axios";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useLocation ,  useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const navigate = useNavigate();


  const location = useLocation();
  const isBooking = location.pathname.startsWith("/booking");

  const [menuOpen, setMenuOpen] = useState(false);
  
  const [scrolled, setScrolled] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [button, setButton] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8080/api/login",
                {
                    email: email,
                    password: password
                }
            );
localStorage.setItem("token", response.data);
            console.log(response.data);
            console.log("After login:", localStorage.getItem("token"));

      navigate("/useracc");


        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    };







  return (
    <>
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-black text-white border-b border-zinc-800"
      : "bg-transparent text-white"
  }`}
>
  {/* TOP BAR */}
  <div className="px-8 md:px-12 py-6 flex items-center justify-between">

    {/* MOBILE MENU */}
    <button
      type="button"
      className="md:hidden flex  text-2xl items-center justify-center"
      onClick={() => setMenuOpen((open) => !open)}
      aria-label="Toggle menu"
    >
      ☰
    </button>
     
    {/* LOGO */}
    <Link
      to="/"
      className="font-serif text-2xl md:text-3xl tracking-tight"
    >
      {/* Your logo */}
    </Link>

    {/* DESKTOP NAVIGATION */}
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">

      <Link
        to="/"
        className="text-xs uppercase tracking-[0.25em] hover:text-[#0ABAB5] transition"
      >
        Home
      </Link>

      <Link
        to="/booking"
        className="text-xs uppercase tracking-[0.25em] hover:text-[#0ABAB5] transition"
      >
        Matches
      </Link>

      <Link
        to="/about"
        className="text-xs uppercase tracking-[0.25em] hover:text-[#0ABAB5] transition"
      >
        About
      </Link>

      <Link
        to="/contact"
        className="text-xs uppercase tracking-[0.25em] hover:text-[#0ABAB5] transition"
      >
        Contact
      </Link>
    </div>

    
  </div>

  {/* MOBILE MENU */}
{menuOpen && (
  <div className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center"
  onClick={() => setMenuOpen(false)}
  
  >
    <div className="flex flex-col items-center justify-center gap-6">
      
      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className="text-xs uppercase tracking-[0.25em] text-white hover:text-[#0ABAB5] transition"
      >
        Home
      </Link>

      <Link
        to="/booking"
        onClick={() => setMenuOpen(false)}
        className="text-xs uppercase tracking-[0.25em] text-white hover:text-[#0ABAB5] transition"
      >
        Matches
      </Link>

      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className="text-xs uppercase tracking-[0.25em] text-white hover:text-[#0ABAB5] transition"
      >
        About
      </Link>

      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className="text-xs uppercase tracking-[0.25em] text-white hover:text-[#0ABAB5] transition"
      >
        Contact
      </Link>

    </div>
  </div>
)}

</nav>



  <section className="min-h-screen bg-black flex items-center justify-center px-4">
    <div className=" w-full
    max-w-md
    md:max-w-2xl
    lg:max-w-3xl
    bg-[#0ABAB5]
    rounded-xl
    p-6
   
     sm:p-8 shadow-lg">
      <h1 className="text-2xl font-bold text-black mb-6 text-center">
        Login
      </h1>

      <form onSubmit={handleLogin} className="space-y-4">
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
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
        >
          Login
        </button>
      </form>

      <p className="text-center text-sm text-gray-700 mt-6 font-serif">
        Don't have an account?
        <a
          href="/register"
          className="ml-1 underline hover:text-black"
        >
          Register
        </a>
      </p>
    </div>
  </section>
    </>
);
}

export default Login;