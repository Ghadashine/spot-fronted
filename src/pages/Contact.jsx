import { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "How do I book a match?",
      answer:
        "Choose the match you want to attend, select your preferred tickets, and complete the booking process. Your confirmation will be sent to your email.",
    },
    {
      question: "Can I cancel or change my booking?",
      answer:
        "Booking changes depend on the ticket and event. If you need help with an existing booking, contact our support team and include your booking details.",
    },
    {
      question: "When will I receive my tickets?",
      answer:
        "Your tickets will be delivered to the email address used during checkout. Delivery times can vary depending on the event.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We support the payment methods available during checkout. All available options will be displayed before you complete your purchase.",
    },
    {
      question: "I have a problem with my booking. What should I do?",
      answer:
        "Send us a message using the form above with your booking information and a short description of the problem. Our team will help you resolve it.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      {/* =========================
          CONTACT HERO
      ========================= */}
      <section className=" px-6 pb-28 pt-36 md:px-12 md:pb-36 md:pt-44 lg:px-20">
        <div className=" mx-auto max-w-[1500px]">

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-7 text-[10px] uppercase tracking-[0.35em] text-white/35">
                Contact SPOT
              </p>

              <h1 className="font-serif text-[5rem] leading-[0.82] tracking-[-0.06em] sm:text-8xl md:text-[9rem] lg:text-[10rem]">
                LET'S
                <br />
                <span className="text-[#0ABAB5]">TALK.</span>
              </h1>
            </div>

            <div className="md:col-span-3 md:col-start-10 md:pb-2">
              <p className="text-sm leading-7 text-white/45">
                Need help with a booking or have a question about SPOT?
                Start here and we'll help you find the right answer.
              </p>
            </div>
          </div>

          {/* =========================
              CONTACT FORM
          ========================= */}
          <div className="mt-24 grid gap-16 border-t border-white/10 pt-10 md:mt-32 md:grid-cols-12">

            {/* INFO / SUPPORT */}
<div className="md:col-span-4">
  <div className="border border-white/10 bg-white/[0.035] p-7 md:p-8">

    {/* EMAIL */}
    <div>
      <div className="mb-5 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#0ABAB5] shadow-[0_0_12px_rgba(10,186,181,0.7)]" />

        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45">
          Email Support
        </p>
      </div>

      <a
        href="mailto:hello@spot.com"
        className="group block"
      >
        <span className="block break-all text-xl font-medium tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#0ABAB5] sm:text-2xl">
          hello@spot.com
        </span>

        <span className="mt-3 inline-flex items-center gap-2 text-xs text-white/30 transition-colors group-hover:text-white/60">
          Send us an email
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>
    </div>

    {/* DIVIDER */}
    <div className="my-8 h-px bg-white/10" />

    {/* RESPONSE */}
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
          Response Time
        </p>

        <span className="rounded-full border border-[#0ABAB5]/20 bg-[#0ABAB5]/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.15em] text-[#0ABAB5]">
          Active
        </span>
      </div>

      <p className="text-sm leading-6 text-white/65">
        We usually reply as soon as possible during support hours.
      </p>
    </div>

    {/* HELPFUL TIP */}
    <div className="mt-8 border-l-2 border-[#0ABAB5] pl-4">
      <p className="text-xs leading-5 text-white/40">
        Looking for a quick answer?
        <span className="text-white/65"> Check the FAQ below </span>
        before sending a message.
      </p>
    </div>

  </div>
</div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-7 md:col-start-6"
            >
              <div className="group border-b border-white/15 pb-6 transition-colors focus-within:border-[#0ABAB5]">
                <label className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-white/20"
                />
              </div>

              <div className="group border-b border-white/15 py-7 transition-colors focus-within:border-[#0ABAB5]">
                <label className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-transparent text-lg outline-none placeholder:text-white/20"
                />
              </div>

              <div className="group border-b border-white/15 py-7 transition-colors focus-within:border-[#0ABAB5]">
                <label className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full resize-none bg-transparent text-lg outline-none placeholder:text-white/20"
                />
              </div>

              <div className="mt-8 flex items-center justify-between gap-6">
                <p className="hidden max-w-xs text-xs leading-5 text-white/25 sm:block">
                  We'll use your email only to respond to your enquiry.
                </p>

                <button
                  type="submit"
                  className="ml-auto inline-flex items-center gap-5 rounded-full bg-[#0ABAB5] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-white"
                >
                  Send Message
                  <span className="text-base">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================
          FAQ
      ========================= */}
      <section className="border-t border-white/10 bg-[#f1eaf1] px-6 py-24 text-black md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1500px]">

          {/* FAQ HEADER */}
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-black/40">
                Before You Ask
              </p>

              <h2 className="font-serif text-[5rem] leading-[0.82] tracking-[-0.06em] sm:text-7xl md:text-8xl">
                GOT
                <br />
                <span className="text-[#0ABAB5]">QUESTIONS?</span>
              </h2>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <p className="max-w-md text-sm leading-7 text-black/55">
                Most questions can be answered here. Browse the topics below
                before sending us a message.
              </p>
            </div>
          </div>

          {/* FAQ LIST */}
          <div className="mt-20 border-t border-black/15">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-black/15"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-6 py-7 text-left md:py-9"
                  >
                    {/* NUMBER */}
                    <span className="pt-1 font-mono text-[10px] tracking-widest text-black/35">
                      0{index + 1}
                    </span>

                    {/* QUESTION */}
                    <span
                      className={`flex-1 text-lg font-medium transition-colors md:text-xl ${
                        isOpen ? "text-[#008f8b]" : "text-black"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* ICON */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[#0ABAB5] bg-[#0ABAB5]"
                          : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] pb-8 opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="ml-12 max-w-2xl pr-10 text-sm leading-7 text-black/55 md:ml-[4.5rem]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FAQ FOOTER */}
          <div className="mt-12 flex flex-col gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-black/35">
              Still need help?
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-4 text-sm font-medium"
            >
              Contact our team
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER CTA
      ========================= */}
      <section className="px-6 pb-28 pt-24 md:px-12 md:pb-36 md:pt-32 lg:px-20">
        <div className="mx-auto max-w-[1500px] border-t border-white/10 pt-10">

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-white/30">
                SPOT
              </p>

              <h2 className="font-serif text-6xl leading-[0.85] tracking-[-0.05em] sm:text-7xl md:text-8xl">
                WE'RE
                <br />
                <span className="text-[#0ABAB5]">HERE.</span>
              </h2>
            </div>

            <div className="md:col-span-3 md:col-start-10">
              <p className="text-sm leading-7 text-white/35">
                Questions, bookings, or anything else —
                we're here when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer  />
    </main>
  );
}

export default Contact;