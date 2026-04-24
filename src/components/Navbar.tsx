import { useState, useEffect } from "react"

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#schedule", label: "Schedule" },
  { href: "#tournaments", label: "Tournaments" },
  { href: "#leaderboard", label: "Leaderboard" },
  { href: "#members", label: "Members" },
  { href: "#membership", label: "Pricing" },
  { href: "#join", label: "Join" },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? // Dark green tinted glass with a subtle lime border at the bottom
            "bg-[#0a0f0a]/80 backdrop-blur-md border-b border-[#bef264]/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          {/* Matching the lime green square logo in your image */}
          <div className="w-10 h-10 bg-[#bef264] flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-black"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-display text-xl tracking-tighter uppercase font-bold text-white">
            UUSC
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex gap-8 text-[10px] font-bold tracking-[0.25em] uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-[#bef264] transition-colors duration-300 py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#join"
          className="hidden lg:inline-block px-6 py-2 bg-[#bef264] text-black font-display text-[11px] uppercase font-black tracking-[0.1em] hover:bg-white transition-colors duration-300"
        >
          Join Now
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-[#bef264] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu - Dark tinted glass */}
      <div
        className={`lg:hidden bg-[#0a0f0a]/95 backdrop-blur-2xl border-t border-[#bef264]/10 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-10 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 font-bold tracking-[0.3em] uppercase text-xs hover:text-[#bef264] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full py-4 bg-[#bef264] text-black font-display text-xs uppercase font-black tracking-[0.2em] text-center"
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
