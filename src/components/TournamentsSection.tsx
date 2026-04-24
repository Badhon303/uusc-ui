import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";
import { CalendarDays, MapPin, Tag, Users } from "lucide-react";

type TournamentTab = "Upcoming" | "Past";

interface Tournament {
  name: string;
  date: string;
  venue: string;
  category: string;
  status: string;
  statusColor: string;
}

const upcomingTournaments: Tournament[] = [
  {
    name: "UUSC Summer Smash 2025",
    date: "June 20-22, 2025",
    venue: "UUSC Main Arena",
    category: "Open Category",
    status: "Registration Open",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    name: "Inter-Club Championship",
    date: "July 15-17, 2025",
    venue: "National Sports Complex",
    category: "Senior",
    status: "Coming Soon",
    statusColor: "text-yellow-400 bg-yellow-400/10",
  },
  {
    name: "Junior Rising Stars",
    date: "August 5-6, 2025",
    venue: "UUSC Court B",
    category: "Junior (U-18)",
    status: "Registration Open",
    statusColor: "text-emerald-400 bg-emerald-400/10",
  },
  {
    name: "UUSC Mixed Doubles Open",
    date: "September 10-12, 2025",
    venue: "UUSC Main Arena",
    category: "Mixed Doubles",
    status: "Coming Soon",
    statusColor: "text-yellow-400 bg-yellow-400/10",
  },
];

const pastTournaments: Tournament[] = [
  {
    name: "UUSC Open Championship 2025",
    date: "March 15-17, 2025",
    venue: "UUSC Main Arena",
    category: "Open Category",
    status: "Completed",
    statusColor: "text-muted-foreground bg-muted",
  },
  {
    name: "Winter Invitational 2024",
    date: "December 8-10, 2024",
    venue: "City Sports Hall",
    category: "Invitational",
    status: "Completed",
    statusColor: "text-muted-foreground bg-muted",
  },
  {
    name: "Autumn Cup 2024",
    date: "October 20-22, 2024",
    venue: "UUSC Main Arena",
    category: "Senior",
    status: "Completed",
    statusColor: "text-muted-foreground bg-muted",
  },
  {
    name: "UUSC Junior Championship 2024",
    date: "August 12-13, 2024",
    venue: "UUSC Court B",
    category: "Junior (U-18)",
    status: "Completed",
    statusColor: "text-muted-foreground bg-muted",
  },
];

const TournamentsSection = () => {
  const [activeTab, setActiveTab] = useState<TournamentTab>("Upcoming");
  const { isInView, ref } = useInView(0.1);

  const tournaments = activeTab === "Upcoming" ? upcomingTournaments : pastTournaments;

  return (
    <section id="tournaments" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            06 // Compete
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Tournaments
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {(["Upcoming", "Past"] as TournamentTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tournament Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tournaments.map((tournament, index) => (
            <div
              key={tournament.name}
              className={`card-dark p-6 md:p-8 neon-border flex flex-col transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-lg md:text-xl uppercase tracking-wide text-foreground flex-1">
                  {tournament.name}
                </h3>
                <span className={`px-3 py-1 text-[10px] uppercase tracking-wider font-bold flex-shrink-0 ml-3 ${tournament.statusColor}`}>
                  {tournament.status}
                </span>
              </div>

              <div className="space-y-2 mb-6 flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 text-primary/60" />
                  {tournament.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary/60" />
                  {tournament.venue}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Tag className="w-4 h-4 text-primary/60" />
                  {tournament.category}
                </div>
              </div>

              {activeTab === "Upcoming" && (
                <button className="w-full py-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300">
                  Register Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;
