import { useInView } from "@/hooks/useAnimations";
import { Dumbbell, GraduationCap, Building2, CalendarCheck } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Training Programs",
    description:
      "Structured training programs for all levels — from beginner fundamentals to advanced competitive drills designed by certified coaches.",
    color: "primary",
  },
  {
    icon: GraduationCap,
    title: "Professional Coaching",
    description:
      "One-on-one and group sessions with nationally ranked coaches who bring decades of competitive and teaching experience.",
    color: "accent",
  },
  {
    icon: Building2,
    title: "Sports Facilities",
    description:
      "State-of-the-art courts with professional-grade flooring, optimal lighting, and climate control for peak performance.",
    color: "primary",
  },
  {
    icon: CalendarCheck,
    title: "Event Organization",
    description:
      "We host local, regional, and inter-club tournaments with professional scoring, live streaming, and full event management.",
    color: "accent",
  },
];

const ServicesSection = () => {
  const { isInView, ref } = useInView(0.1);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            02 // What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto">
            Everything you need to elevate your badminton journey under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group card-dark p-8 neon-border ${service.color === "accent" ? "neon-border-accent" : ""} flex flex-col transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 120 + 200}ms` }}
            >
              <div
                className={`w-12 h-12 mb-6 flex items-center justify-center ${
                  service.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                } group-hover:${service.color === "accent" ? "bg-accent/20" : "bg-primary/20"} transition-colors duration-300`}
              >
                <service.icon
                  className={`w-6 h-6 ${service.color === "accent" ? "text-accent" : "text-primary"}`}
                />
              </div>
              <h3 className="font-display text-lg uppercase tracking-wider mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <button
                className={`self-start text-xs uppercase tracking-[0.2em] font-bold ${
                  service.color === "accent"
                    ? "text-accent hover:text-accent/80"
                    : "text-primary hover:text-primary/80"
                } transition-colors duration-300 group-hover:translate-x-1 transform inline-flex items-center gap-2`}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
