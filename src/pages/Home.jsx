import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { motion } from "framer-motion";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Navbar from "../component/Navbar";
import TeamsL from "../component/TeamsL"
import Footer from "../component/Footer";

function Home() {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/matches`)
    .then((response) => {
      console.log("Matches response:", response.data);
      console.log("Response is array:", Array.isArray(response.data));

      if (Array.isArray(response.data)) {
        setMatches(response.data);
      } else {
        console.error("Expected an array of matches, received:", response.data);
        setMatches([]);
      }
    })
    .catch((error) => {
      console.error("Failed to fetch matches:", error);
      setMatches([]);
    });
}, []);
  const handleBooking = (matchId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/register");
      return;
    }

    navigate(`/viewmatch/${matchId}`);
  };

  return (
    <>
      <Navbar />

      <div className="home bg-black text-white overflow-hidden">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative min-h-[92vh] md:min-h-screen overflow-hidden">

          {/* Hero image */}
          <img
            src="/g6.JPG"
            alt="Football stadium"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

          {/* Small turquoise glow */}
          <div className="absolute right-[-150px] top-[20%] h-[400px] w-[400px] rounded-full bg-[#0ABAB5]/20 blur-[120px]" />

          {/* Hero content */}
          <div className="relative z-10 flex min-h-[92vh] md:min-h-screen flex-col justify-between px-6 py-8 md:px-12 lg:px-20 md:py-10">

            {/* Top information */}
            <div className="flex items-center justify-between">

              

            </div>

            {/* Main hero */}
            <div className="max-w-6xl">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-5 text-xs md:text-sm uppercase tracking-[0.35em] text-[#0ABAB5]"
              >
                Your seat is waiting
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-serif text-[18vw] md:text-[10rem] lg:text-[12rem] leading-[0.78] tracking-[-0.06em]"
              >
                SPOT
                <br />
                BOOKING
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
              >

                <p className="max-w-md text-sm md:text-base leading-relaxed text-white/65">
                  Find your next match, choose your seat and experience
                  football the way it was meant to be experienced.
                </p>

                

              </motion.div>
            </div>

            {/* Bottom hero information */}
            <div className="flex items-end justify-between border-t border-white/20 pt-5">

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Book. Arrive. Experience.
              </p>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Scroll to explore ↓
              </p>

            </div>

          </div>
        </section>

        {/* =====================================================
            INTRO / MISSION
        ====================================================== */}
        <section className="px-5 py-20 md:px-12 md:py-32 lg:px-20">

          <div className="grid gap-10 lg:grid-cols-[0.3fr_1fr] lg:items-start">

            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#0ABAB5]">
                Why Spot
              </p>
            </div>

            <div>

              <h2 className="max-w-5xl font-serif text-4xl leading-tight text-white md:text-6xl lg:text-7xl">
                Football is better when you're{" "}
                <span className="text-[#0ABAB5]">
                  there.
                </span>
              </h2>

              <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-start md:justify-between">

                <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base">
                  We provide a simple platform for football fans to discover
                  and book match tickets without the unnecessary hassle.
                </p>

                <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                  Discover
                  <br />
                  Book
                  <br />
                  Experience
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* =====================================================
            MATCHES
        ====================================================== */}
        <section className="px-5 pb-24 md:px-12 lg:px-20">

          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#0ABAB5]">
                Upcoming
              </p>

              <h2 className="font-serif text-5xl md:text-7xl">
                Matches
              </h2>
            </div>

            <button
              onClick={() => navigate("/booking")}
              className="group flex w-fit items-center gap-3 border-b border-[#0ABAB5] pb-2 text-sm font-semibold text-white transition-all hover:gap-5"
            >
              View all tickets
              <MdOutlineKeyboardDoubleArrowRight size={20} />
            </button>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {matches.slice(0, 4).map((match, index) => (

              <motion.article
                key={match.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[28px] bg-[#e6dde6] p-6 text-black md:p-8"
              >

                {/* Number */}
                <div className="mb-10 flex items-start justify-between">

                 

                  <span className="rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    {match.category}
                  </span>

                </div>

                {/* Match */}
                <div>

                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                    {match.date}
                  </p>

                  <h3 className="max-w-lg font-serif text-2]xl leading-tight  md:text-3xl">
                 <TeamsL match={match.match} />  
                  </h3>

                </div>

                {/* Bottom */}
                <div className="mt-14 flex items-center justify-between border-t border-black/10 pt-5">

                  <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                    Match ticket
                  </p>

                  <button
                    onClick={() => handleBooking(match.id)}
                    className="rounded-full bg-[#0ABAB5] px-6 py-3 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-black hover:text-white"
                  >
                    Book
                  </button>

                </div>

              </motion.article>

            ))}

          </div>
        </section>

        {/* =====================================================
            SEASON TICKETS
        ====================================================== */}
        <section className="bg-[#0ABAB5] px-5 py-20 text-black md:px-12 md:py-28 lg:px-20">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">

            <div>

              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-black/60">
                For the whole season
              </p>

              <h2 className="font-serif text-6xl leading-[0.85] tracking-tight md:text-8xl lg:text-9xl">
                Season
                <br />
                Tickets
              </h2>

            </div>

            <div className="lg:pb-3">

              <p className="max-w-xl text-lg leading-relaxed md:text-2xl">
                One pass. Every home match. Follow your team throughout the
                season without booking every game separately.
              </p>

              <button
                onClick={() => navigate("/booking")}
                className="group mt-8 flex items-center gap-4 rounded-full bg-black px-7 py-4 font-semibold text-white transition-all hover:bg-white hover:text-black"
              >
                Get your season pass

                <MdOutlineKeyboardDoubleArrowRight
                  size={21}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </div>

          </div>

        </section>

        {/* =====================================================
            VIP
        ====================================================== */}
        <section className="bg-[#0b0b0b] px-5 py-20 md:px-12 md:py-28 lg:px-20">

          <div className="relative min-h-[650px] overflow-hidden rounded-[35px]">

            {/* Existing VIP image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.openai.com/static-rsc-4/9Q9R8KcLK8VBzumjw9wuDbfF7rChAkIortP9vaKEB51bweQ98OJH9IVzCXUxqwsuhGmP4x5Zgmkbs5Lff4mnKfhKxLq5YoZ2La4SqIdouhifa_A6GsYgWOvMYifFGpzCGTQqviX32HbbjTchdvH7ynjseuXYrHku2htIOG0L7I7ihnbjEmZenkUQ5nIR5NuJ?purpose=fullsize')",
              }}
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

            <div className="relative z-10 flex min-h-[650px] flex-col justify-between p-7 md:p-12 lg:p-16">

              <div className="flex justify-between">

                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Premium Matchday
                </p>

                <span className="rounded-full border border-white/20 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70">
                  VIP
                </span>

              </div>

              <div>

                <h2 className="font-serif text-5xl leading-[0.85] tracking-tight md:text-8xl lg:text-[9rem]">
                  VIP
                  <br />
                  EXPERIENCES
                </h2>

                <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                  <p className="max-w-lg text-sm leading-7 text-white/65 md:text-base">
                    Premium seating, exclusive hospitality and unforgettable
                    matchday moments.
                  </p>

                  <button
                    onClick={() => navigate("/booking")}
                    className="w-fit rounded-full bg-[#0ABAB5] px-7 py-4 text-sm font-bold text-black transition-all hover:bg-white"
                  >
                    Explore VIP Packages
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}
        <section className="px-5 py-24 text-center md:px-12 md:py-36">

          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#0ABAB5]">
            Your next match
          </p>

          <h2 className="mx-auto max-w-4xl font-serif text-5xl leading-tight md:text-7xl">
            Don't just watch football.
            <br />
            <span className="text-[#0ABAB5]">
              Be there.
            </span>
          </h2>

          <button
            onClick={() => navigate("/booking")}
            className="mt-10 rounded-full bg-white px-9 py-4 font-semibold text-black transition-all hover:bg-[#0ABAB5]"
          >
            Find a Match →
          </button>

        </section>
         <Footer />
      </div>
    </>
  );
}

export default Home;
