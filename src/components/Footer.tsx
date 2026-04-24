import { useState } from "react";
import { Instagram, Facebook, Youtube, Twitter, Send, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Schedule", href: "#schedule" },
  { label: "Tournaments", href: "#tournaments" },
  { label: "Leaderboard", href: "#leaderboard" },
  { label: "Members", href: "#members" },
  { label: "Pricing", href: "#membership" },
  { label: "Shop", href: "#shop" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter/X" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <footer id="footer" className="relative overflow-hidden">
      {/* Neon ambient glow effects */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-accent/15 via-accent/5 to-transparent pointer-events-none" />
      {/* Main footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo & About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center shadow-[0_0_15px_hsl(var(--primary)_/_0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display text-lg tracking-tighter uppercase font-bold text-foreground">
                UUSC
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-[30ch]">
              Where Champions Are Made. An elite badminton club dedicated to excellence,
              community, and the pursuit of greatness.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-secondary/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-[0_0_10px_hsl(var(--primary)_/_0.2)] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">UUSC Badminton Arena, Sports Complex, Dhaka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">+880 1XXX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">info@uusc.club</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-foreground mb-6">
              Newsletter
            </h4>
            <p className="text-muted-foreground text-sm mb-4">
              Stay updated with the latest news, events, and results.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="flex-1 bg-secondary/80 border border-border/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:shadow-[0_0_10px_hsl(var(--primary)_/_0.1)] transition-all min-w-0"
              />
              <button
                type="submit"
                className="px-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-[0_0_12px_hsl(var(--primary)_/_0.3)]"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-muted-foreground/50 text-xs">
          <span>© 2025 UUSC Badminton Club. All rights reserved.</span>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
