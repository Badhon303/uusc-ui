import { useInView, useCountUp } from "@/hooks/useAnimations";
import { Trophy, Medal, TrendingUp, Calendar } from "lucide-react";

const timeline = [
  { year: "2018", event: "Club Founded", description: "UUSC established with 15 founding members" },
  { year: "2019", event: "First Tournament", description: "Hosted inaugural inter-club championship" },
  { year: "2020", event: "Facility Upgrade", description: "Expanded to 8 professional courts" },
  { year: "2022", event: "National Recognition", description: "Ranked among top 10 clubs nationally" },
  { year: "2024", event: "250+ Members", description: "Grew to over 250 active members" },
  { year: "2025", event: "International Debut", description: "First players compete internationally" },
];

const achievements = [
  { icon: Calendar, label: "Founded", value: "2018", color: "primary" },
  { icon: Trophy, label: "Trophies Won", value: "45+", color: "gold" },
  { icon: Medal, label: "National Rankings", value: "Top 10", color: "accent" },
  { icon: TrendingUp, label: "Win Rate", value: "78%", color: "primary" },
];

const AboutSection = () => {
  const { isInView, ref } = useInView(0.1);

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            03 // Our Story
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            About Our Club
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — History & Timeline */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Founded in 2018, UUSC Badminton Club began with a vision to create a
              world-class badminton community. What started as a small group of 15
              passionate players has grown into one of the most respected clubs in the
              region, with over 250 active members, 8 professional courts, and a trophy
              cabinet that speaks to our commitment to excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10 text-base">
              Our coaches have trained national-level athletes, and our facilities
              meet international standards. Whether you're picking up a racket for the
              first time or preparing for competitive tournaments, UUSC is your home.
            </p>

            {/* Timeline */}
            <div className="space-y-0 relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="flex gap-5 pl-0 py-3 group"
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-[15px] h-[15px] bg-secondary border-2 border-primary/50 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 mt-1" />
                  </div>
                  <div>
                    <span className="text-primary font-display text-sm font-bold">{item.year}</span>
                    <span className="text-foreground font-medium text-sm ml-3">{item.event}</span>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Achievement Badges */}
          <div className={`transition-all duration-700 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className="card-dark p-6 md:p-8 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <achievement.icon
                    className={`w-8 h-8 mx-auto mb-4 ${
                      achievement.color === "gold"
                        ? "text-yellow-500"
                        : achievement.color === "accent"
                        ? "text-accent"
                        : "text-primary"
                    }`}
                  />
                  <span className="font-display text-2xl md:text-3xl font-bold text-foreground block mb-1">
                    {achievement.value}
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {achievement.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="card-dark p-8 mt-6 border-l-2 border-primary/40">
              <blockquote className="text-foreground italic leading-relaxed">
                "Our goal has always been to create not just champions on the court, but
                well-rounded individuals who carry the spirit of sportsmanship into every
                aspect of their lives."
              </blockquote>
              <p className="text-primary font-display text-sm mt-4 uppercase tracking-wider">
                — Founding President, UUSC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
