import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TeamsL from "../component/TeamsL";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Smartphone,
} from "lucide-react";

function Tobook() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [match, setMatch] = useState(null);

  // Seats selected on the previous page
 
const [seat, setSeat] = useState(
  location.state?.seats ?? []
);

const [standard] = useState(
  location.state?.standard ?? 0
);

const [vip] = useState(
  location.state?.vip ?? 0
);

const [ticketType, setTicketType] = useState(
  vip > 0 ? "VIP" : "Standard"
);

  const [paymentMethod, setPaymentMethod] = useState("");

  const [bookingError, setBookingError] = useState("");
  const [loading, setLoading] = useState(false);

const standardPrice = 45;
const vipPrice = 120;
const serviceFee = 5;

const ticketPrice =
  standard * standardPrice +
  vip * vipPrice;

const quantity = seat.length;

const total = ticketPrice + serviceFee;

  useEffect(() => {
    axios
      .get( `${import.meta.env.VITE_API_URL}/api/matches/${id}`)
      .then((response) => {
        setMatch(response.data);
      })
      .catch((error) => {
        console.error("Error fetching match:", error);
      });
  }, [id]);

  const handleBooking = async (e) => {
    e.preventDefault();

    setBookingError("");

    const token = localStorage.getItem("token");

    if (!token) {
      setBookingError("You must be logged in to continue.");
      return;
    }

    if (!match) {
      setBookingError("Match information is unavailable.");
      return;
    }

    if (seat.length === 0) {
      setBookingError(
        "Please select at least one seat before continuing."
      );
      return;
    }

    if (quantity !== seat.length) {
      setBookingError(
        "The quantity does not match the selected seats."
      );
      return;
    }

    if (!paymentMethod) {
      setBookingError(
        "Please select a payment method."
      );
      return;
    }

    /*
      IMPORTANT:

      For the moment, this is where payment processing
      will eventually happen.

      We should NOT create the booking before
      successful payment.
    */

    console.log("Payment method:", paymentMethod);
    console.log("Seats:", seat);
    console.log("Total:", total);

    /*
      Once the payment succeeds, THEN we call:

      POST /api/bookings
    */

    try {
      setLoading(true);

      // Temporary:
      // This will later be replaced by the real
      // payment integration.

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/bookings`,
        {
          seats: seat.join(","),
          match: {
            id: match.id,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Booking successful!");

    } catch (error) {
      console.error("Booking failed:", error);
      setBookingError(
        "Booking failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!match) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }
console.log("Selected seats:", seat);
  return (
   <>
       <Navbar  />
   
   <div className="min-h-screen bg-[#212020] text-white">
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-10">

        {/* Back */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2  text-zinc-200 hover:text-[#0ABAB5] transition-colors"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Header */}
        <div className="mt-10 mb-10 md:mb-14">

          <span className="bg-[#0ABAB5] text-black px-4 py-2 rounded-full font-bold text-sm">
            FINAL STEP
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none">
            REVIEW
            <br />
            YOUR BOOKING
          </h1>

          <p className="text-zinc-400 mt-5 max-w-xl">
            Check your seats and payment details before
            confirming your reservation.
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10">

          {/* LEFT */}
          <div className="space-y-8">

            {/* Match Information */}
            <div className="border border-zinc-300 rounded-3xl p-6">

              <div className="flex items-start justify-between gap-6">

                <div>

                 
                  <h2 className="text-2xl text-center md:text-3xl font-black mt-2">
                    <TeamsL match={match.match} /> 
                  </h2>

                </div>

               

              </div>

              <div className="grid sm:grid-cols-3 gap-5 mt-8 text-zinc-300">

                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  <div>
                    <p className="text-xs text-zinc-500">
                      DATE
                    </p>
                    <p>{match.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={18} />
                  <div>
                    <p className="text-xs text-zinc-500">
                      TIME
                    </p>
                    <p>{match.matchTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <div>
                    <p className="text-xs text-zinc-500">
                      STADIUM
                    </p>
                    <p>{match.stadium}</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Ticket Type */}
           <div className="border border-zinc-300 rounded-3xl p-6">
  <h2 className="text-3xl font-black mb-6">
    YOUR TICKETS
  </h2>

  <div className="space-y-4">

    {standard > 0 && (
      <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
        <div>
          <p className="font-bold text-lg">Standard</p>
          <p className="text-sm text-zinc-400">
            SAR {standardPrice} × {standard}
          </p>
        </div>

        <p className="font-bold text-[#0ABAB5]">
          SAR {standard * standardPrice}
        </p>
      </div>
    )}

    {vip > 0 && (
      <div className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
        <div>
          <p className="font-bold text-lg">VIP</p>
          <p className="text-sm text-zinc-400">
            SAR {vipPrice} × {vip}
          </p>
        </div>

        <p className="font-bold text-[#0ABAB5]">
          SAR {vip * vipPrice}
        </p>
      </div>
    )}

    {quantity === 0 && (
      <p className="text-zinc-400">
        No tickets selected.
      </p>
    )}

    <div className="border-t border-zinc-800 pt-4 flex justify-between">
      <span className="text-zinc-400">
        Total tickets
      </span>
      <span className="font-black">{quantity}</span>
    </div>

  </div>
</div>

            {/* Selected Seats */}
            <div className="border border-zinc-300 rounded-3xl p-6">

              <h2 className="text-3xl font-black mb-6">
                YOUR SEATS
              </h2>

              {seat.length === 0 ? (

                <div className="border border-[#0ABAB5]/30 bg-[#0ABAB5]/10 rounded-2xl p-5">
                  <p className="text-[#0ABAB5] font-medium">
                    No seats selected.
                  </p>

                  <p className="text-zinc-500 text-sm mt-1">
                    Go back and select your seats before continuing.
                  </p>
                </div>

              ) : (

                <>
                  <div className="flex flex-wrap gap-3">

                    {seat.map((selectedSeat) => (

                      <div
                        key={selectedSeat}
                        className="px-4 py-3 rounded-xl border border-zinc-700 bg-zinc-900"
                      >
                        <span className="text-zinc-400 text-sm">
                          Seat
                        </span>

                        <p className="font-bold">
                          {selectedSeat}
                        </p>
                      </div>

                    ))}

                  </div>

                  <div className="border-t border-zinc-800 mt-6 pt-5 flex justify-between">

                    <span className="text-zinc-400">
                      Quantity
                    </span>

                    <span className="font-black">
                      {quantity}
                    </span>

                  </div>
                </>

              )}

            </div>

            {/* Payment */}
            <div className="border border-zinc-300 rounded-3xl p-6">

              <h2 className="text-3xl font-black mb-6">
                PAYMENT METHOD
              </h2>

              <div className="space-y-3">

                <button
                  type="button"
                  onClick={() => setPaymentMethod("MADA")}
                  className={`w-full flex items-center gap-4 text-left border rounded-2xl p-5 transition ${
                    paymentMethod === "MADA"
                      ? "border-[#0ABAB5] bg-[#0ABAB5]/20"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <CreditCard size={22} />

                  <div>
                    <p className="font-bold">
                      Mada
                    </p>

                    <p className="text-sm text-zinc-500">
                      Pay securely with Mada
                    </p>
                  </div>

                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("CARD")}
                  className={`w-full flex items-center gap-4 text-left border rounded-2xl p-5 transition ${
                    paymentMethod === "CARD"
                      ? "border-[#0ABAB5] bg-[#0ABAB5]/10"
                      : "border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <CreditCard size={22} />

                  <div>
                    <p className="font-bold">
                      Visa / Mastercard
                    </p>

                    <p className="text-sm text-zinc-500">
                      Pay with your card
                    </p>
                  </div>

                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("APPLE_PAY")}
                  className={`w-full flex items-center gap-4 text-left border rounded-2xl p-5 transition ${
                    paymentMethod === "APPLE_PAY"
                      ? "border-[#0ABAB5] bg-[#0ABAB5]/10"
                      : "border-zinc-300 hover:border-zinc-600"
                  }`}
                >
                  <Smartphone size={22} />

                  <div>
                    <p className="font-bold">
                      Apple Pay
                    </p>

                    <p className="text-sm text-zinc-500">
                      Pay with Apple Pay
                    </p>
                  </div>

                </button>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="lg:sticky lg:top-8 border border-zinc-800 bg-zinc-950 rounded-3xl p-6 sm:p-8">

              <h2 className="text-3xl font-black mb-8">
                ORDER SUMMARY
              </h2>

              <div className="space-y-5">

             
               <div className="flex justify-between">
  <span className="text-zinc-400">Standard tickets</span>
  <span>{standard}</span>
</div>

<div className="flex justify-between">
  <span className="text-zinc-400">VIP tickets</span>
  <span>{vip}</span>
</div>

<div className="flex justify-between">
  <span className="text-zinc-400">Tickets subtotal</span>
  <span>SAR {total}</span>
</div>

<div className="flex justify-between">
  <span className="text-zinc-400">Service fee</span>
  <span>SAR {serviceFee}</span>
</div>

<div className="border-t border-zinc-800 pt-5 flex justify-between">
  <span className="text-2xl font-black">Total</span>
  <span className="text-2xl font-black text-[#0ABAB5]">
    SAR {total}
  </span>

                </div>

                <div className="border-t border-[#042a29] pt-6 flex justify-between items-center">

                  
                
                 

                </div>

              </div>

              {bookingError && (
                <div className="sticky mt-6 rounded-xl border border-[#0ABAB5]/30 bg-[#0ABAB5]/10 px-4 py-3">
                  <p className="text-sm text-[#0ABAB5]">
                    {bookingError}
                  </p>
                </div>
              )}

              <button
                onClick={handleBooking}
                disabled={loading}
                className="w-full mt-8 bg-[#0ABAB5] hover:bg-[#078b87] disabled:opacity-50 transition-all duration-300 text-black font-black py-4 rounded-full text-lg"
              >
                {loading
                  ? "PROCESSING..."
                  : "CONFIRM & PAY"}
              </button>

              <div className="mt-6 space-y-2 text-sm text-zinc-500">
                <p>✓ Secure booking</p>
                <p>✓ Payment confirmation</p>
                <p>✓ Digital ticket after successful payment</p>
              </div>
</div>
            </div>

          </div>

        </div>
   <Footer  />
      </div>

    
    </>
  );
}

export default Tobook;