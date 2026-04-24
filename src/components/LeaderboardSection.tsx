import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";
import { Trophy, Medal, Award } from "lucide-react";

type LeaderboardFilter = "Singles" | "Doubles" | "Mixed";
type CategoryFilter = "All" | "Junior" | "Senior";

interface Player {
  rank: number;
  name: string;
  matchesPlayed: number;
  wins: number;
  points: number;
  category: "Junior" | "Senior";
  type: LeaderboardFilter[];
}

const players: Player[] = [
  { rank: 1, name: "Tanvir Hossain", matchesPlayed: 48, wins: 42, points: 2850, category: "Senior", type: ["Singles", "Doubles"] },
  { rank: 2, name: "Sarah Khan", matchesPlayed: 45, wins: 39, points: 2720, category: "Senior", type: ["Singles", "Mixed"] },
  { rank: 3, name: "Arif Rahman", matchesPlayed: 42, wins: 36, points: 2580, category: "Senior", type: ["Singles", "Doubles"] },
  { rank: 4, name: "Nadia Islam", matchesPlayed: 40, wins: 33, points: 2410, category: "Senior", type: ["Singles", "Mixed"] },
  { rank: 5, name: "Kamal Uddin", matchesPlayed: 38, wins: 30, points: 2250, category: "Senior", type: ["Doubles", "Mixed"] },
  { rank: 6, name: "Reza Chowdhury", matchesPlayed: 35, wins: 28, points: 2100, category: "Junior", type: ["Singles"] },
  { rank: 7, name: "Fatima Begum", matchesPlayed: 33, wins: 26, points: 1950, category: "Junior", type: ["Singles", "Mixed"] },
  { rank: 8, name: "Imran Ali", matchesPlayed: 30, wins: 23, points: 1800, category: "Junior", type: ["Singles", "Doubles"] },
  { rank: 9, name: "Ayesha Siddique", matchesPlayed: 28, wins: 21, points: 1650, category: "Senior", type: ["Doubles", "Mixed"] },
  { rank: 10, name: "Habib Mia", matchesPlayed: 25, wins: 18, points: 1500, category: "Junior", type: ["Singles"] },
];

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Trophy className="w-5 h-5 text-yellow-500" />;
  if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
  if (rank === 3) return <Award className="w-5 h-5 text-amber-700" />;
  return null;
};

const getRankStyle = (rank: number) => {
  if (rank === 1) return "border-l-2 border-l-yellow-500 bg-yellow-500/5";
  if (rank === 2) return "border-l-2 border-l-gray-400 bg-gray-400/5";
  if (rank === 3) return "border-l-2 border-l-amber-700 bg-amber-700/5";
  return "";
};

const LeaderboardSection = () => {
  const [typeFilter, setTypeFilter] = useState<LeaderboardFilter>("Singles");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const { isInView, ref } = useInView(0.1);

  const filtered = players.filter(
    (p) =>
      p.type.includes(typeFilter) &&
      (categoryFilter === "All" || p.category === categoryFilter)
  );

  return (
    <section id="leaderboard" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            08 // Rankings
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Leaderboard
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex gap-2">
            {(["Singles", "Doubles", "Mixed"] as LeaderboardFilter[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setTypeFilter(tab)}
                className={`px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  typeFilter === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            {(["All", "Junior", "Senior"] as CategoryFilter[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setCategoryFilter(tab)}
                className={`px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                  categoryFilter === tab
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium w-16">Rank</th>
                <th className="text-left py-4 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Player</th>
                <th className="text-center py-4 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Played</th>
                <th className="text-center py-4 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Wins</th>
                <th className="text-center py-4 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Points</th>
                <th className="text-center py-4 px-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Category</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((player, index) => (
                <tr
                  key={player.name}
                  className={`border-b border-border/50 hover:bg-white/[0.02] transition-colors ${getRankStyle(index + 1)}`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      {getRankIcon(index + 1)}
                      <span className={`font-display text-lg font-bold ${index < 3 ? "text-foreground" : "text-muted-foreground"}`}>
                        {index + 1}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`font-medium text-sm ${index < 3 ? "text-foreground" : "text-muted-foreground"}`}>
                      {player.name}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground tabular-nums">
                    {player.matchesPlayed}
                  </td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground tabular-nums">
                    {player.wins}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`font-display text-sm font-bold tabular-nums ${index < 3 ? "text-primary" : "text-muted-foreground"}`}>
                      {player.points}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`px-2 py-1 text-[10px] uppercase tracking-wider font-bold ${
                      player.category === "Junior"
                        ? "text-accent bg-accent/10"
                        : "text-primary bg-primary/10"
                    }`}>
                      {player.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;
