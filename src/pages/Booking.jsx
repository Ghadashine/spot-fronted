import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
import { useNavigate} from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../component/Navbar";
import axios from "axios";
import TeamsL from "../component/TeamsL";
import Footer from "../component/Footer";
function Booking() {
  const items = [
    {
      image: "/image.png",
    },
    {
      image: "/image1.png",
    },
    {
      image: "/image2.png",
    },
    {
      image: "/image3.png",
    },
  ];

  const leagues = ["King Cup", "Super Cup", "SPL"];

  const [matches, setMatches] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("All");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get( `${import.meta.env.VITE_API_URL}`)
      .then((response) => {
        console.log("MATCHES FROM BACKEND:", response.data);
        setMatches(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredMatches =
    selectedLeague === "All"
      ? matches
      : matches.filter((match) => match.category === selectedLeague);

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
      <div className="min-h-screen overflow-hidden bg-black text-white">

      {/* =====================================================
          BACKGROUND NOISE
      ====================================================== */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/noise.png')] opacity-[0.06]" />

    

<section
  className="
    relative
    min-h-[650px]
    overflow-hidden
    px-5
    py-20
    md:min-h-[750px]
    md:px-10
    md:py-28
    lg:px-16
  "
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1745997632578-d973c2cec775?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=80&w=3000')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70" />

  {/* LEFT → RIGHT GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-black/10" />

  {/* BOTTOM GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

  {/* TURQUOISE GLOW */}
  <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#0ABAB5]/10 blur-[120px]" />

  {/* CONTENT */}
  <div className="relative z-10">

    {/* TOP LINE */}
    <div className="mb-16 flex items-center justify-between border-b border-white/15 pb-5">

      <div className="flex items-center gap-3">

        <span className="h-2 w-2 rounded-full bg-[#0ABAB5] shadow-[0_0_15px_#0ABAB5]" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
          Matchday
        </span>

      </div>

      

    </div>

    {/* HERO CONTENT */}
    <div className="max-w-6xl">

      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#0ABAB5]">
        Find your next match
      </p>

      <h1 className="font-serif text-[19vw] leading-[0.75] tracking-[-0.06em] md:text-[9rem] lg:text-[11rem]">

        LIVE

        <span className="text-[#0ABAB5]">.</span>

        <br />

        MATCHES

      </h1>

    </div>


    {/* BOTTOM INFO */}
    <div className="mt-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

      <p className="max-w-md text-sm leading-7 text-white/60 md:text-base">
        Discover upcoming football matches, choose your competition,
        and secure your seat in seconds.
      </p>

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur">
          <span className="text-[#0ABAB5]">✦</span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em]">
            Matchday
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
            Your seat is waiting
          </p>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* =====================================================
          FILTERS
      ====================================================== */}
      <section className="relative z-10 mb-16 px-6 md:px-12 lg:px-20">

        <div className="flex flex-col gap-6 border-y border-white/10 py-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500">
              Competition
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {/* ALL */}
            <button
              onClick={() => setSelectedLeague("All")}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                selectedLeague === "All"
                  ? "bg-[#0ABAB5] text-black"
                  : "border border-white/15 text-white hover:border-[#0ABAB5] hover:text-[#0ABAB5]"
              }`}
            >
              All
            </button>

            {/* LEAGUES */}
            {leagues.map((league) => (
              <button
                key={league}
                onClick={() => setSelectedLeague(league)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedLeague === league
                    ? "bg-[#0ABAB5] text-black"
                    : "border border-white/15 text-white hover:border-[#0ABAB5] hover:text-[#0ABAB5]"
                }`}
              >
                {league}
              </button>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          MATCHES
      ====================================================== */}
      <section className="relative z-10 px-6 pb-32 md:px-12 lg:px-20">

        {/* Section heading */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-[#0ABAB5]">
              Upcoming
            </p>

            <h2 className="font-serif text-5xl leading-none md:text-7xl">
              Matches
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Choose a match below and reserve your seat before tickets run out.
          </p>

        </div>

        {/* Match grid */}
        <div className="grid gap-5 md:grid-cols-2">

          {filteredMatches.map((match) => (

            <article
              key={match.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                bg-[#e6dde6]
                p-6
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                md:p-8
              "
            >

              {/* TOP */}
              <div className="flex items-start justify-between gap-4">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/45">
                    Match
                  </p>

                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em]">
                    {match.date}
                  </p>

                </div>

                <span className="rounded-full bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  {match.category}
                </span>

              </div>

              {/* MATCH INFO */}
              <div className="mt-12">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-black/40">
                  Kickoff {match.matchTime}
                </p>

                <h3 className="font-serif text-xl leading-tight md:text-4xl">
                  <TeamsL match={match.match} /> 
                </h3>

              </div>

              {/* BOTTOM */}
              <div className="mt-12 flex items-center justify-between border-t border-black/10 pt-5">

                <span className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                  Official Match Ticket
                </span>

                <button
                   onClick={() => handleBooking(match.id)}
                  className="
                    rounded-full
                    bg-[#0ABAB5]
                    px-6
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >
                  Book →
                </button>

              </div>

            </article>

          ))}

        </div>

        {/* No matches */}
        {filteredMatches.length === 0 && (
          <div className="border border-white/10 py-20 text-center">

            <p className="font-serif text-3xl text-white/70">
              No matches found.
            </p>

            <p className="mt-3 text-sm text-gray-500">
              Try selecting another competition.
            </p>

          </div>
        )}

      </section>

      {/* =====================================================
          SEASON TICKETS
      ====================================================== */}
      <section className="relative z-10 px-6 pb-32 md:px-12 lg:px-20">

        {/* Heading */}
        <div className="flex flex-col gap-6 border-t border-white/10 py-16 md:flex-row md:items-end md:justify-between">

          <div>

            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#0ABAB5]">
              Never miss a match
            </p>

            <h2 className="font-serif text-5xl leading-[0.9] md:text-7xl">
              SEASON
              <br />
              TICKETS
            </h2>

          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Follow the entire season with one pass and keep your seat
            for the biggest moments.
          </p>

        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-7xl">

          {/* LEFT ARROW */}
          <button
            className="
              season-prev
              absolute
              left-2
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/70
              text-white
              backdrop-blur
              transition-all
              duration-300
              hover:border-[#0ABAB5]
              hover:text-[#0ABAB5]
              md:left-[-55px]
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}
          <button
            className="
              season-next
              absolute
              right-2
              top-1/2
              z-20
              flex
              h-10
              w-10
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/70
              text-white
              backdrop-blur
              transition-all
              duration-300
              hover:border-[#0ABAB5]
              hover:text-[#0ABAB5]
              md:right-[-55px]
            "
          >
            <ChevronRight size={20} />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".season-prev",
              nextEl: ".season-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >

            {items.map((item) => (

              <SwiperSlide key={item.image}>

                <div
                  className="
                    group
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-white/10
                    bg-[#0a0a0a]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                  "
                >

                  {/* IMAGE */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-black">

                    <img
                      src={item.image}
                      alt="Season ticket"
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-5">

                    <div className="mb-5 flex items-center justify-between">

                      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">
                        Season Pass
                      </p>

                      <span className="h-2 w-2 rounded-full bg-[#0ABAB5]" />

                    </div>

                    <button
                      onClick={() => navigate("/booking")}
                      className="
                        w-full
                        rounded-xl
                        bg-[#0ABAB5]
                        py-3.5
                        font-semibold
                        text-black
                        transition-all
                        duration-300
                        hover:bg-white
                        active:scale-[0.98]
                      "
                    >
                      Book Season Ticket →
                    </button>

                  </div>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 text-center md:px-12 md:py-36">

        <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#0ABAB5]">
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
          className="
            mt-10
            rounded-full
            bg-white
            px-8
            py-4
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-[#0ABAB5]
          "
        >
          Find a Match →
        </button>

      </section>
    <Footer  />
    </div>
    </>
  );
}

export default Booking