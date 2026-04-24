import { useInView } from "@/hooks/useAnimations";

const updates = [
  { tag: "RESULT", text: "Tanvir Hossain wins the UUSC Open Championship 2025!", time: "2 hours ago", tagColor: "bg-emerald-500/10 text-emerald-400" },
  { tag: "UPCOMING", text: "UUSC Summer Smash 2025 — Registration opens June 1st", time: "1 day ago", tagColor: "bg-yellow-500/10 text-yellow-400" },
  { tag: "REGISTRATION OPEN", text: "Inter-Club Championship slots filling fast. Register today!", time: "2 days ago", tagColor: "bg-primary/10 text-primary" },
  { tag: "RESULT", text: "Sarah Khan & Kamal Uddin clinch Mixed Doubles title", time: "3 days ago", tagColor: "bg-emerald-500/10 text-emerald-400" },
  { tag: "UPCOMING", text: "Junior Rising Stars tournament — August 5-6, 2025", time: "4 days ago", tagColor: "bg-yellow-500/10 text-yellow-400" },
  { tag: "RESULT", text: "UUSC finishes 2nd at National Inter-Club League", time: "1 week ago", tagColor: "bg-emerald-500/10 text-emerald-400" },
  { tag: "REGISTRATION OPEN", text: "New batch of evening training sessions — Limited spots!", time: "1 week ago", tagColor: "bg-primary/10 text-primary" },
  { tag: "UPCOMING", text: "Annual Awards Night — April 30, 2025", time: "2 weeks ago", tagColor: "bg-yellow-500/10 text-yellow-400" },
];

const tickerItems = [
  "🏸 Tanvir Hossain wins UUSC Open 2025",
  "🔥 Summer Smash Registration Opens June 1",
  "🏆 Sarah Khan — National Ranking #4",
  "📢 Junior Camp Starting August 5",
  "⚡ New Evening Batch — Register Now",
];

const TournamentUpdatesSection = () => {
  const { isInView, ref } = useInView(0.1);

  return (
    <section id="updates" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-8 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            11 // News
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Tournament Updates
          </h2>
        </div>

        {/* Animated Ticker */}
        <div className="relative overflow-hidden bg-primary/5 py-3 mb-10">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={index} className="mx-8 text-sm text-primary font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Updates List */}
        <div className="space-y-3">
          {updates.map((update, index) => (
            <div
              key={index}
              className={`card-dark p-4 md:p-5 flex flex-col sm:flex-row sm:items-center gap-3 hover:border-primary/20 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 60 + 200}ms` }}
            >
              <span className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold flex-shrink-0 w-fit ${update.tagColor}`}>
                {update.tag}
              </span>
              <p className="text-foreground text-sm flex-1">{update.text}</p>
              <span className="text-muted-foreground/50 text-xs whitespace-nowrap">{update.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentUpdatesSection;
