import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation ,  useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";



function Navbar() {
   
  const location = useLocation();
  const isBooking = location.pathname.startsWith("/booking");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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

  return (
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

    {/* ACCOUNT / JOIN US */}
    {isLoggedIn ? (
      <button
        type="button"
        onClick={() => navigate("/useracc")}
        className="flex items-center justify-center py- hover:scale-95 transition"
        aria-label="User account"
      >
        <CircleUser className="size-9  " />
      </button>
    ) : (
      <button
        type="button"
        className="bg-[#0ABAB5] text-black rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-white transition"
        onClick={() => navigate("/register")}
      >
        Join Us
      </button>
    )}
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
  )
}
export default Navbar; 