import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";
import { Check, Send } from "lucide-react";

const benefits = [
  "Access to world-class courts and facilities",
  "Professional coaching from certified trainers",
  "Regular competitive tournaments",
  "Community of passionate players",
  "Structured training programs for all levels",
  "Video analysis and performance tracking",
  "Member-exclusive events and social gatherings",
  "Discounts on equipment and merchandise",
];

const JoinSection = () => {
  const { isInView, ref } = useInView(0.1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    category: "",
    courtTime: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your interest! We'll get back to you soon.");
  };

  return (
    <section id="join" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            13 // Get Started
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Join Our Club
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <h3 className="font-display text-2xl uppercase tracking-wide text-foreground mb-2">
              Why Join UUSC?
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Become part of an elite badminton community that's dedicated to helping you achieve your best.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="card-dark p-8 space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="category" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  >
                    <option value="">Select category</option>
                    <option value="student">Student</option>
                    <option value="member">Member</option>
                    <option value="coach">Coach</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="courtTime" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                    Preferred Court Time
                  </label>
                  <select
                    id="courtTime"
                    name="courtTime"
                    value={formData.courtTime}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none"
                  >
                    <option value="">Select time slot</option>
                    <option value="morning">Morning (6AM - 10AM)</option>
                    <option value="midday">Midday (10AM - 2PM)</option>
                    <option value="afternoon">Afternoon (2PM - 6PM)</option>
                    <option value="evening">Evening (6PM - 10PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-secondary border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your badminton experience..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-display text-sm uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_hsl(var(--primary)_/_0.2)] hover:shadow-[0_0_30px_hsl(var(--primary)_/_0.3)]"
              >
                <Send className="w-4 h-4" />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
