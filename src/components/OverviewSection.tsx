import { useCountUp, useInView } from "@/hooks/useAnimations";
import { Target, Users, Trophy } from "lucide-react";

const coreValues = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in training, competition, and sportsmanship.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a family of passionate players united by their love for badminton.",
  },
  {
    icon: Trophy,
    title: "Growth",
    description: "Continuous improvement through world-class coaching and competitive exposure.",
  },
];

const StatCounter = ({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) => {
  const { count, elementRef } = useCountUp(target, 2500);
  return (
    <div ref={elementRef} className="text-center">
      <span className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary neon-text tabular-nums">
        {count}{suffix}
      </span>
      <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-foreground mt-3">{label}</p>
    </div>
  );
};

const OverviewSection = () => {
  const { isInView, ref } = useInView(0.15);

  return (
    <section id="overview" className="section-padding relative overflow-hidden">
      {/* Neon ambient glow */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Mission statement */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            01 // Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6 text-foreground">
            UUSC
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
            "Where Champions Are Made" — We are dedicated to nurturing talent,
            fostering competitive spirit, and building a premier badminton community
            that excels at every level of the sport.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20 md:mb-28">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={`card-dark p-8 md:p-10 text-center hover:border-primary/30 transition-all duration-500 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150 + 200}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-6 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wider mb-3 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter target={250} label="Active Members" suffix="+" />
          <StatCounter target={8} label="Professional Courts" />
          <StatCounter target={45} label="Tournaments Won" />
          <StatCounter target={7} label="Years Active" />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
