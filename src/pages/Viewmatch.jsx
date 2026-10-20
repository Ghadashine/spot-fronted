
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Stadium from "./Stadium";
import { ArrowLeft, Calendar, Clock3, MapPin } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";
import TeamsL from "../component/TeamsL";
import Footer from "../component/Footer";
const Viewmatch = () => {

const navigate = useNavigate();
  const { id } = useParams();
  const [seatError, setSeatError] = useState(false);
  const [match, setMatch] = useState(null);
   const [selectedSeat, setSelectedSeat] = useState([]);
  const [seat, setSeat] = useState([]);
  const [matchtime, setmatchTime] = useState([]);
  const [staduim, setStadium] = useState();

  const [bookedseat, setBookedseat] = useState([]);
  const [ticketno, setTicketno] = useState(1);

  const [standard, setStandard] = useState(1);
  const [vip, setVip] = useState(0);

  const standardPrice = 45;
  const vipPrice = 120;

  const total = standard * standardPrice + vip * vipPrice;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/matches/${id}`)
      .then((response) => {
        console.log("MATCH DETAILS:", response.data);
        setMatch(response.data);
      })
      .catch((error) => {
        console.error("ERROR FETCHING MATCH:", error);
      });
  }, [id]);

  if (!match) {


    
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading match...
      </div>
    );
  }
const handleSeatChange = (updater) => {
  setSelectedSeat((current) => {
    const updatedSeats =
      typeof updater === "function"
        ? updater(current)
        : updater;

    if (updatedSeats.length > 0) {
      setSeatError(false);
    }

    return updatedSeats;
  });
};


 return(
    <>
    <Navbar  />

    <div className="min-h-screen bg-black py-7 text-white overflow-x-hidden">
      {/* Background Noise */}
      <div className="fixed inset-0 opacity-10 bg-[url('/noise.png')]" />

      {/* Glow */}
      <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-[#0ABAB5]/20 blur-[180px]" />

      <div className="relative z-10 px-8 md:px-16 py-10">

        {/* Back */}
        <a href="/" className="flex items-center gap-2 text-gray-400 hover:text-[#0ABAB5] mb-12">
          <ArrowLeft size={18} />
          Back
        </a>

        {/* Hero */}
        <section className="mb-24">


          <h1 className=" font-serif text-xl md:text-[5rem] leading-none mt-4">
           <TeamsL match={match.match} /> 
          </h1>

        </section>

        {/* Image + Details */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-28">

          <div
            className="
            border-[10px]
            border-[#0ABAB5]
            rotate-[-2deg]
            overflow-hidden
            hover:rotate-0
            transition
          "
          >
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[550px] w-full object-cover grayscale"
            />
          </div>

          <div className="space-y-8">

            <div className="border border-gray-800 p-8">
              <Calendar className="text-[#0ABAB5] mb-4" />

              <h3 className="text-gray-500 uppercase text-sm">
                Date
              </h3>

              <p className="text-3xl font-serif">
               {match.date}
              </p>
            </div>

            <div className="border border-gray-800 p-8">
              <Clock3 className="text-[#0ABAB5] mb-4" />

              <h3 className="text-gray-500 uppercase text-sm">
               Kick off
              </h3>

              <p className="text-3xl font-serif">
                {match.matchTime}
              </p>
            </div>

            <div className="border border-gray-800 p-8">
              <MapPin className="text-[#0ABAB5] mb-4" />

              <h3 className="text-gray-500 uppercase text-sm">
                staduim
              </h3>

              <p className="text-3xl font-serif">
              {match.stadium}
              </p>
            </div>

          </div>
        </section>

        {/* About */}
        <section className="mb-28 max-w-5xl">

          <h2 className="font-serif text-5xl mb-8">
            About the Match
          </h2>

          <p className="text-gray-400 text-lg leading-9">
    Get ready for an exciting football match between{" "}
    <span className="text-white">{match.match}</span>.
    Experience the intensity of live football from the stands,
    with passionate supporters, competitive action, and an
    unforgettable atmosphere at {match.stadium}. Secure your
    seats and be part of the matchday experience from the first
    whistle to the final minute.
  </p>
        </section>

        {/* Tickets */}
        <section className="grid lg:grid-cols-3 gap-10 pb-24">

          {/* Ticket Cards */}
          <div className="lg:col-span-2 space-y-8">

            <h2 className="font-serif text-5xl mb-10">
              Select Tickets
            </h2>

            {/* General */}
            <div className="border border-gray-800 p-8 rotate-[-1deg] hover:rotate-0 transition">

              <div className="flex justify-between">

                <div>
                  <h3 className="text-3xl font-serif">
                    Standard
                  </h3>

                </div>

                <span className="text-[#0ABAB5] text-4xl font-bold">
                  SAR {standardPrice}
                </span>

              </div>

              <div className="flex items-center gap-4 mt-8">

                <button
                  onClick={() =>
                    setStandard(Math.max(0, standard - 1))
                  }
                  className="w-12 h-12 rounded-full bg-[#0ABAB5] text-black text-xl"
                >
                  -
                </button>

                <span className="text-3xl font-bold">
                  {standard}
                </span>

                <button
                  onClick={() => setStandard(standard + 1)}
                  className="w-12 h-12 rounded-full bg-[#0ABAB5] text-black text-xl"
                >
                  +
                </button>

              </div>

            </div>

            {/* VIP */}
            <div className="border border-gray-800 p-8 rotate-[1deg] hover:rotate-0 transition">

              <div className="flex justify-between">

                <div>
                  <h3 className="text-3xl font-serif">
                    VIP 
                  </h3>

                 
                </div>

                <span className="text-[#0ABAB5] text-4xl px-5 font-bold">
                 SAR {vipPrice} 
                </span>
                

              </div>

              <div className="flex items-center gap-4 mt-8">

                <button
                  onClick={() =>
                    setVip(Math.max(0, vip - 1))
                  }
                  className="w-12 h-12 rounded-full bg-[#0ABAB5] text-black text-xl"
                >
                  -
                </button>

                <span className="text-3xl font-bold">
                  {vip}
                </span>

                <button
                  onClick={() => setVip(vip + 1)}
                  className="w-12 h-12 rounded-full bg-[#0ABAB5] text-black text-xl"
                >
                  +
                </button>

              </div>

            </div>

          </div>

          {/* Summary */}
          <div className="h-fit sticky top-10 border border-zinc-800 bg-zinc-950 rounded-3xl p-6 sm:p-8">

            <h2 className="text-3xl font-black mb-8">
                ORDER 
              </h2>

            <div className="space-y-4 text-lg">

              <div className="flex justify-between text-zinc-300">
                <span>Standard</span>
                <span>{standard}</span>
              </div>

              <div className="flex justify-between text-zinc-300 ">
                <span>VIP</span>
                <span>{vip}</span>
              </div>

            </div>

            <div className="border-t border-gray-800 my-8" />

            <div className="flex justify-between text-3xl font-black">

              <span>Total</span>

              <span className="text-[#0ABAB5]">
                SAR {total}
              </span>

            </div>

          {seatError && (
  <div className="mb-4 flex items-start gap-3 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3">
    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-red-400 text-red-400 text-sm font-semibold">
      !
    </div>

    <div>
      <p className="text-sm font-medium text-white">
        No seat selected
      </p>

      <p className="mt-1 text-xs leading-5 text-gray-400">
        Please select at least one seat before continuing.
      </p>
    </div>
  </div>
)}



            <button
           onClick={() => {
  if (selectedSeat.length === 0) {
    setSeatError(true);
    return;
  }

  setSeatError(false);

  navigate(`/tobook/${match.id}`, {
    state: {
      seats: selectedSeat,
    standard,
    vip,
    standardPrice,
    vipPrice,
    total,
    },
  });
}}


          
className="w-full mt-10 bg-[#0ABAB5]  hover:scale-105 transition  duration-300 text-black font-black py-4 rounded-full text-lg">
              CONTINUE →
            </button>

          </div>

        </section>
 <section className="mb-28">

 <Stadium 
  selectedSeat={selectedSeat}
  setSelectedSeat={handleSeatChange}
/>

</section>

      </div>
      <Footer  />
    </div>
  </>
  );

}


export default  Viewmatch;