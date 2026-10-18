import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const steps = [
  {
    number: "01",
    title: "FIND",
    text: "Discover the match you want to experience.",
  },
  {
    number: "02",
    title: "CHOOSE",
    text: "Find the seat that feels right for you.",
  },
  {
    number: "03",
    title: "EXPERIENCE",
    text: "Show up. Be there. Make it count.",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#050505] text-white overflow-hidden">
     
<Navbar />
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-screen border-b border-white/10">
        <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-6 pb-7 pt-28 md:px-12 lg:px-20">

          

          {/* Main title */}
          <div className="py-20">
            <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Football · Tickets · Experience
            </p>

            <h1 className="max-w-[1250px] font-serif text-[clamp(4.5rem,13vw,12.5rem)] leading-[0.76] tracking-[-0.06em]">
              THE
              <br />
              GAME
              <br />
              <span className="text-[#0ABAB5]">STARTS</span>
              <br />
              HERE.
            </h1>
          </div>

          {/* Bottom information */}
        
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-[#0ABAB5] text-black">
  <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="grid gap-16 md:grid-cols-12">

      {/* Label */}
      <div className="md:col-span-3">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          What is SPOT?
        </span>
      </div>

      {/* Main content */}
      <div className="md:col-span-8 md:col-start-5">

        <h2 className="max-w-5xl font-serif text-[clamp(3.5rem,7vw,7.5rem)] leading-[0.86] tracking-[-0.05em]">
          A place to find
          <br />
          your <em>next match.</em>
        </h2>

        {/* Story */}
        <div className="mt-20 grid gap-12 border-t border-black/20 pt-8 md:grid-cols-12">

          {/* Year */}
          <div className="md:col-span-3">
            <span className="font-serif text-5xl tracking-[-0.04em]">
              2019
            </span>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50">
              Where it began
            </p>
          </div>

          {/* Copy */}
          <div className="md:col-span-8 md:col-start-5">
            <p className="text-lg leading-8 tracking-[-0.01em] md:text-xl">
              SPOT was founded with a clear purpose: to make football
              experiences more accessible, intuitive, and connected.
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/60">
              Since 2019, SPOT has evolved around the way fans experience
              the game — from discovering fixtures and exploring matches
              to choosing exactly where they want to be when the whistle
              blows.
            </p>

            <p className="mt-7 max-w-xl text-base leading-7 text-black/60">
              Today, SPOT brings that experience together in one place,
              making every step from finding the match to finding your
              seat feel simple.
            </p>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40 lg:px-20">

          <div className="grid gap-16 md:grid-cols-12">

            {/* Statement */}
            <div className="md:col-span-7">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                The idea
              </span>

              <h2 className="mt-10 font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.78] tracking-[-0.055em]">
                MORE
                <br />
                THAN
                <br />
                A TICKET.
              </h2>
            </div>

            {/* Copy */}
            <div className="flex items-end md:col-span-4 md:col-start-9">
              <div>
                <p className="text-xl leading-8 text-white/80 md:text-2xl">
                  The experience starts long before the referee
                  blows the whistle.
                </p>

                <div className="mt-10 space-y-5 text-sm leading-7 text-white/40">
                  <p>
                    Finding the right match.
                  </p>

                  <p>
                    Choosing your seat.
                  </p>

                  <p>
                    Anticipating the day.
                  </p>

                  <p>
                    Walking into the stadium.
                  </p>
                </div>

                <p className="mt-12 border-t border-white/10 pt-8 font-serif text-2xl leading-tight text-white/80">
                  The ticket is only the beginning.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MATCHDAY
      ===================================================== */}
      <section className="px-4 py-4 md:px-6 lg:px-8">
        <div className="relative min-h-[650px] overflow-hidden bg-[#e6dde6] text-black md:min-h-[800px]">

          {/* Background typography */}
          <div className="pointer-events-none absolute bottom-[-5%] left-[-2%] select-none">
            <span className="font-serif text-[18rem] leading-none tracking-[-0.1em] text-black/[0.055] md:text-[32rem] lg:text-[42rem]">
              90
            </span>
          </div>

          <div className="relative z-10 flex min-h-[650px] flex-col justify-between p-8 md:min-h-[800px] md:p-14 lg:p-20">

            <div className="flex items-start justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                Matchday
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em] text-black/40">
                90 MINUTES
              </span>
            </div>

            <div className="max-w-xl self-end">
              <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-black/40">
                The experience
              </p>

              <h3 className="font-serif text-[clamp(4rem,7vw,7rem)] leading-[0.8] tracking-[-0.05em]">
                MAKE THEM
                <br />
                COUNT.
              </h3>

              <p className="mt-8 max-w-md text-sm leading-7 text-black/55 md:text-base">
                Every match has its own atmosphere, its own story,
                and its own moments. Your seat is where you become
                part of it.
              </p>
            </div>

          </div>
        </div>
      </section>
   
     <Footer  />
      
    </main>
  );
}

export default About;