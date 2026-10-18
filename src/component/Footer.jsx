
import { Link } from "react-router-dom";

const footerLinks = {
  Explore: [
    { label: "Home", href: "/" },
    { label: "Matches", href: "/#matches" },
    { label: "About SPOT", href: "/about" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "My Account", href: "/useracc" },
  ],
  Information: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#0ABAB5] hover:bg-[#0ABAB5] hover:text-black"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1600px] px-6 pb-12 pt-16 md:px-12 md:pt-20 lg:px-20">

        {/* Brand + Description */}
        <div className="grid gap-14 border-b border-white/15 pb-14 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block text-4xl  font-serif tracking-[-0.08em] md:text-5xl"
            >
              SPOT<span className="text-[#0ABAB5]">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              Your seat. Your team. Your moment.
              Discover upcoming matches and secure your place
              in the action with SPOT.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex items-center gap-3">
              <SocialIcon href="#" label="Instagram">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-5 w-5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="X">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.35L5.62 22H2.5l7.25-8.29L1.8 2h6.4l4.43 6.78L18.9 2Zm-1.1 18h1.73L7.27 3.89H5.42L17.8 20Z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="TikTok">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M19.6 7.2a6.5 6.5 0 0 1-4-1.4v8.1a6.4 6.4 0 1 1-6.4-6.4c.4 0 .8 0 1.2.1v3.5a3 3 0 1 0 1.8 2.8V2h3.5a6.5 6.5 0 0 0 3.9 4v1.2Z" />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0ABAB5]">
                {heading}
              </h3>

              <ul className="mt-6 space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SPOT. All rights reserved.
          </p>

          <p className="tracking-wide">
            MADE FOR THE LOVE OF THE GAME<span className="ml-1 text-[#0ABAB5]">.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}