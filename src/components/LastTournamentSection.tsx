import { useInView } from "@/hooks/useAnimations";
import { Trophy, User, Medal } from "lucide-react";

const matchResults = [
  { player1: "Tanvir Hossain", player2: "Rafiq Ahmed", score1: 21, score2: 18, round: "Quarter Final" },
  { player1: "Sarah Khan", player2: "Nadia Islam", score1: 21, score2: 15, round: "Semi Final" },
  { player1: "Arif Rahman", player2: "Kamal Uddin", score1: 21, score2: 19, round: "Semi Final" },
  { player1: "Tanvir Hossain", player2: "Sarah Khan", score1: 21, score2: 16, round: "Quarter Final" },
  { player1: "Reza Chowdhury", player2: "Imran Ali", score1: 21, score2: 12, round: "Round of 16" },
  { player1: "Fatima Begum", player2: "Ayesha Siddique", score1: 21, score2: 17, round: "Round of 16" },
];

const LastTournamentSection = () => {
  const { isInView, ref } = useInView(0.1);

  return (
    <section id="last-tournament" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            05 // Latest Results
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Last Tournament
          </h2>
        </div>

        {/* Hero Result Card */}
        <div className={`card-dark p-8 md:p-12 mb-10 relative overflow-hidden transition-all duration-700 delay-200 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-foreground">
                UUSC Open Championship 2025
              </h3>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs uppercase tracking-wider font-bold">
                Completed
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-8">March 15-17, 2025 • UUSC Main Arena</p>

            {/* Winner & Runner-up */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Runner Up */}
              <div className="card-darker p-6 text-center order-2 md:order-1">
                <Medal className="w-8 h-8 text-silver mx-auto mb-3" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Runner-Up</p>
                <div className="w-16 h-16 mx-auto bg-secondary border border-border flex items-center justify-center mb-3">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="font-display text-lg text-foreground uppercase">Arif Rahman</h4>
              </div>

              {/* Winner */}
              <div className="card-darker p-8 text-center border-primary/30 relative order-1 md:order-2">
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-3" />
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2 font-bold">Champion</p>
                <div className="w-20 h-20 mx-auto bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-3">
                  <User className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-display text-2xl text-foreground uppercase neon-text">Tanvir Hossain</h4>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="px-4 py-2 bg-primary/10">
                    <span className="font-display text-2xl text-primary font-bold">21</span>
                    <span className="text-muted-foreground text-lg mx-1">-</span>
                    <span className="font-display text-2xl text-muted-foreground font-bold">18</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10">
                    <span className="font-display text-2xl text-primary font-bold">21</span>
                    <span className="text-muted-foreground text-lg mx-1">-</span>
                    <span className="font-display text-2xl text-muted-foreground font-bold">15</span>
                  </div>
                </div>
              </div>

              {/* 3rd Place */}
              <div className="card-darker p-6 text-center order-3">
                <Medal className="w-8 h-8 text-bronze mx-auto mb-3" />
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">3rd Place</p>
                <div className="w-16 h-16 mx-auto bg-secondary border border-border flex items-center justify-center mb-3">
                  <User className="w-8 h-8 text-muted-foreground" />
                </div>
                <h4 className="font-display text-lg text-foreground uppercase">Sarah Khan</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Match Highlights */}
        <h3 className="font-display text-xl uppercase tracking-wider text-foreground mb-4">
          Match Highlights
        </h3>
        <div className="max-h-[320px] overflow-y-auto custom-scrollbar space-y-2">
          {matchResults.map((match, index) => (
            <div
              key={index}
              className="card-dark p-4 flex items-center justify-between gap-4 hover:border-primary/20 transition-colors"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider w-28 flex-shrink-0 hidden sm:block">
                {match.round}
              </span>
              <div className="flex items-center gap-3 flex-1 justify-end">
                <span className="text-sm text-foreground font-medium text-right">{match.player1}</span>
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 flex-shrink-0">
                  <span className="font-display text-sm font-bold text-primary">{match.score1}</span>
                  <span className="text-muted-foreground text-xs">-</span>
                  <span className="font-display text-sm font-bold text-muted-foreground">{match.score2}</span>
                </div>
                <span className="text-sm text-muted-foreground text-left">{match.player2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastTournamentSection;
