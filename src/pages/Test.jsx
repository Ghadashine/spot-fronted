import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Minus,
  Plus,
} from "lucide-react";

export default function Test() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Back */}
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
          <ArrowLeft size={18} />
          Back to Matches
        </button>

        {/* Heading */}
        <div className="mt-10 mb-10 md:mb-14">
          <span className="bg-[#0ABAB5]  text-black px-4 py-2 rounded-full font-bold text-sm">
            FINAL STEP
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none">
            BOOK
            <br />
            YOUR TICKET
          </h1>

          <p className="text-zinc-400 mt-5 max-w-xl">
            Review your booking details before confirming your reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-10">
          {/* LEFT */}
          <div className="space-y-8">
            {/* Event Card */}
            <div className="border border-zinc-800 rounded-3xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
                  alt="Raw Energy"
                  className="w-full sm:w-40 md:w-44 h-64 sm:h-56 object-cover rounded-2xl rotate-[-2deg]"
                />

              </div>
            </div>

            {/* Ticket Selection */}
        </div>
          {/* RIGHT */}
          <div>
            <div className="lg:sticky lg:top-8 border border-zinc-800 bg-zinc-950 rounded-3xl p-6 sm:p-8">
              <h2 className="text-3xl font-black mb-8">
                ORDER SUMMARY
              </h2>

              <div className="space-y-5">
                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Ticket
                  </span>

                  <span>VIP</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Quantity
                  </span>

                  <span>2</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Ticket Price
                  </span>

                  <span>$100</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-400">
                    Service Fee
                  </span>

                  <span>$5</span>
                </div>

                <div className="border-t border-zinc-800 pt-6 flex justify-between items-center">
                  <span className="text-2xl font-black">
                    Total
                  </span>

                  <span className="text-3xl font-black text-[#0ABAB5] ">
                    $105
                  </span>
                </div>
              </div>

              <button className="w-full mt-8 bg-[#0ABAB5]  hover:scale-105 transition  duration-300 text-black font-black py-4 rounded-full text-lg">
                Confirm Booking
              </button>

              <div className="mt-6 space-y-2 text-sm text-zinc-500">
                <p>✓ Secure booking</p>
                <p>✓ Instant confirmation after payment</p>
                <p>✓ Digital ticket delivered by email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}