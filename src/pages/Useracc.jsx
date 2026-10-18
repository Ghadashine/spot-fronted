import {
  Calendar,
  Ticket,
  Trash2,
  Eye,
  CircleUser,
  LogOut,
  Settings,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import Footer from "../component/Footer";
import axios from "axios";
import TeamsL from "../component/TeamsL";
import Navbar from "../component/Navbar";

function Useracc() {
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const navigate = useNavigate();

  // ================= USER =================

  const token = localStorage.getItem("token");

  let email = "";

  if (token) {
    try {
      const decoded = jwtDecode(token);
      email = decoded.sub;
    } catch (err) {
      console.error("Invalid token", err);
    }
  }

  // ================= LOGOUT =================

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // ================= DELETE ACCOUNT =================

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");



      
      await axios.delete("http://localhost:8080/api/users/delete", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Delete failed", error);
    }
  };





  
useEffect(() => {
  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get(
  "http://localhost:8080/api/bookings",
  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }
);
console.log("BOOKINGS FROM DATABASE:", response.data);

      setBookings(response.data);
    } catch (error) {
      console.error(
        "Failed to fetch bookings:",
        error.response?.data || error.message
      );
    }
  };
  fetchBookings();
}, [navigate]);

  const deleteBooking = (id) => {
    setBookings((currentBookings) =>
      currentBookings.filter((booking) => booking.id !== id)
    );
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white pt-24 pb-20">

        {/* ================================================= */}
        {/* DASHBOARD HEADER */}
        {/* ================================================= */}

        <section className="px-6 md:px-10 lg:px-16">

          <div className="max-w-7xl mx-auto">

            <div className="flex items-center justify-between">

              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-2">
                  Account
                </p>

                <h1 className="font-serif text-4xl md:text-5xl">
                  Dashboard
                </h1>
              </div>

              {/* PROFILE BUTTON */}

              <div className="relative">

                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-3 bg-[#111111] border border-zinc-800 rounded-full px-3 py-2 hover:border-[#0ABAB5] transition"
                >

                  <div className="w-10 h-10 rounded-full bg-[#0ABAB5] text-black flex items-center justify-center">
                    <CircleUser size={23} />
                  </div>

                  <div className="hidden sm:block text-left pr-2">

                    <p className="text-xs text-gray-500">
                      Signed in
                    </p>

                    <p className="text-sm max-w-[160px] truncate">
                      {email}
                    </p>

                  </div>

                  <ArrowRight
                    size={16}
                    className={`text-gray-500 transition ${
                      open ? "rotate-90" : ""
                    }`}
                  />

                </button>


                {/* PROFILE DROPDOWN */}

                {open && (
                  <div className="absolute right-0 top-14 w-72 bg-[#111111] border border-zinc-800 rounded-2xl shadow-2xl p-4 z-50">

                    <div className="flex items-center gap-3 px-2 pb-4 border-b border-zinc-800">

                      <div className="w-11 h-11 rounded-full bg-[#0ABAB5] text-black flex items-center justify-center">
                        <CircleUser size={24} />
                      </div>

                      <div className="min-w-0">

                        <p className="text-xs uppercase tracking-wider text-gray-500">
                          Account
                        </p>

                        <p className="text-sm truncate">
                          {email}
                        </p>

                      </div>

                    </div>


                    <div className="mt-3 space-y-1">

                      <button
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition text-sm"
                      >
                        <Settings size={17} />
                        Edit Profile
                      </button>

                      <button
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition text-sm"
                      >
                        <Shield size={17} />
                        Password Settings
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition text-sm"
                      >
                        <LogOut size={17} />
                        Logout
                      </button>

                      <div className="border-t border-zinc-800 my-2" />

                      <button
                        onClick={handleDeleteAccount}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-950/40 text-red-400 transition text-sm"
                      >
                        <Trash2 size={17} />
                        Delete Account
                      </button>

                    </div>

                  </div>
                )}

              </div>

            </div>

            <div className="h-px bg-zinc-800 mt-8" />

          </div>

        </section>


        {/* ================================================= */}
        {/* WELCOME */}
        {/* ================================================= */}

        <section className="px-6 md:px-10 lg:px-16 mt-8">

          <div className="max-w-7xl mx-auto">

            <div className="bg-[#0ABAB5] text-black rounded-3xl px-7 py-7 md:px-10 md:py-9">

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                <div>

                  <p className="uppercase tracking-[0.25em] text-xs mb-2">
                    Welcome back
                  </p>

                  <h2 className="font-serif text-3xl md:text-4xl">
                    Ready for your next match?
                  </h2>

                  <p className="mt-2 text-sm md:text-base max-w-xl">
                    Manage your tickets and keep track of your upcoming
                    matchday experiences.
                  </p>

                </div>

                <button
                  onClick={() => navigate("/booking")}
                  className="bg-black text-white rounded-full px-7 py-3.5 font-semibold whitespace-nowrap hover:scale-105 transition"
                >
                  Browse Matches →
                </button>

              </div>

            </div>

          </div>

        </section>


        {/* ================================================= */}
        {/* STATISTICS */}
        {/* ================================================= */}

        <section className="px-6 md:px-10 lg:px-16 mt-8">

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* TOTAL */}

            <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Total Bookings
                  </p>

                  <p className="font-serif text-4xl mt-4">
                    {bookings.length}
                  </p>
                    <div className="grid gap-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-[#111111] border border-zinc-800
                       rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold">
              {booking.match.match}
            </h3>

            <p className="text-gray-400 mt-2">
              Booking ID: {booking.id}
            </p>

           
          </div>
        ))}
      </div>
   
  
                </div>

                <div className="w-10 h-10 rounded-full bg-[#0ABAB5] text-black flex items-center justify-center">
                  <Ticket size={20} />
                </div>
              </div>

            </div>


            {/* UPCOMING */}

            <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Upcoming
                  </p>

                  <p className="font-serif text-4xl mt-4">
                    {bookings.length}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#e6dde6] text-black flex items-center justify-center">
                  <Calendar size={20} />
                </div>

              </div>

            </div>


            {/* STATUS */}

            <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-6">

              <div className="flex justify-between items-start">

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Account Status
                  </p>

                  <p className="font-serif text-3xl mt-4">
                    ACTIVE
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-green-400 text-black flex items-center justify-center">
                  <CircleUser size={20} />
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================================================= */}
        {/* MAIN DASHBOARD */}
        {/* ================================================= */}

        <section className="px-6 md:px-10 lg:px-16 mt-12">

          <div className="max-w-5xl mx-auto">



            {/* ================= BOOKINGS ================= */}

            <div>

              <div className="flex items-end justify-between mb-5">

                <div>

                  <p className="uppercase tracking-[0.25em] text-xs text-gray-500 mb-2">
                    Reservations
                  </p>

                  <h2 className="font-serif text-3xl md:text-4xl">
                    Your Bookings
                  </h2>

                </div>

                {bookings.length > 0 && (
                  <span className="text-xs text-gray-500">
                    {bookings.length} total
                  </span>
                )}

              </div>


              {/* BOOKING LIST */}

              <div className="space-y-4">

                {bookings.map((booking) => (

                  <div
                    key={booking.id}
                    className="bg-[#e6dde6] text-black rounded-2xl p-6"
                  >

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                      <div>

                        <div className="flex flex-wrap items-center gap-3 mb-3">

                          <span className="text-xs uppercase tracking-[0.2em] font-bold">
                            {booking.match.date}
                          </span>

                         

                        </div>

                        <h3 className="font-serif text-2xl md:text-3xl">
                         <TeamsL match={booking.match.match} /> 
                        </h3>

                        <div className="flex gap-5 mt-4 text-sm">

                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            {booking.date}
                          </div>

                          <div className="flex items-center gap-2">
                            <Ticket size={16} />
                            {booking.ticket}
                          </div>

                        </div>

                      </div>


                      <div className="flex gap-2">

                        <button
                        
                          className="bg-[#0ABAB5] text-black rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2 hover:bg-black hover:text-white transition"
                        >
                          <Eye size={16} />
                          View
                        </button>

                        <button
                          onClick={() => deleteBooking(booking.id)}
                          className="border border-black rounded-full px-5 py-2.5 text-sm font-semibold flex items-center gap-2 hover:bg-red-500 hover:border-red-500 transition"
                        >
                          <Trash2 size={16} />
                          Cancel
                        </button>

                      </div>

                    </div>

                  </div>

                ))}


                {/* EMPTY STATE */}

                {bookings.length === 0 && (

                  <div className="bg-[#111111] border border-zinc-800 rounded-2xl p-10 md:p-14 text-center">

                    <div className="w-14 h-14 mx-auto rounded-full bg-[#0ABAB5] text-black flex items-center justify-center">
                      <Ticket size={25} />
                    </div>

                    <h3 className="font-serif text-2xl mt-5">
                      No bookings yet
                    </h3>

                    <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto">
                      You haven't booked a match yet. Find your next game
                      and secure your ticket.
                    </p>

                    <button
                      onClick={() => navigate("/booking")}
                      className="mt-6 bg-[#0ABAB5] text-black rounded-full px-6 py-3 font-semibold hover:scale-105 transition"
                    >
                      Find Matches →
                    </button>

                  </div>

                )}

              </div>

            </div>


            {/* ================= ACCOUNT CARD ================= */}

           
          </div>

        </section>


        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <section className="px-6 md:px-10 lg:px-16 mt-20">

          <div className="max-w-7xl mx-auto border-t border-zinc-800 pt-6 flex flex-col sm:flex-row justify-between gap-2">

            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Account Dashboard
            </p>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              Spot Booking
            </p>

          </div>

        </section>
     <Footer  />
      </main>
    </>
  );
}

export default Useracc;
