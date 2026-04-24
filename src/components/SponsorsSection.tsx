import { useInView } from "@/hooks/useAnimations";

type SponsorTier = "Gold" | "Silver" | "Bronze";

interface Sponsor {
  name: string;
  tier: SponsorTier;
}

const sponsors: Sponsor[] = [
  { name: "SportsTech Inc.", tier: "Gold" },
  { name: "AeroFlight", tier: "Gold" },
  { name: "VeloGrip", tier: "Silver" },
  { name: "ProCourt", tier: "Silver" },
  { name: "NetEdge Sports", tier: "Silver" },
  { name: "ShuttlePro", tier: "Bronze" },
  { name: "RacketWorld", tier: "Bronze" },
  { name: "FitZone", tier: "Bronze" },
  { name: "EliteWear", tier: "Bronze" },
];

const tierColors: Record<SponsorTier, { label: string; border: string; text: string }> = {
  Gold: { label: "text-yellow-500 bg-yellow-500/10", border: "border-yellow-500/30 hover:border-yellow-500/60", text: "text-yellow-500/40 hover:text-yellow-500" },
  Silver: { label: "text-gray-400 bg-gray-400/10", border: "border-gray-400/20 hover:border-gray-400/50", text: "text-gray-400/40 hover:text-gray-400" },
  Bronze: { label: "text-amber-700 bg-amber-700/10", border: "border-amber-700/20 hover:border-amber-700/50", text: "text-amber-700/40 hover:text-amber-700" },
};

const SponsorsSection = () => {
  const { isInView, ref } = useInView(0.1);

  const tiers: SponsorTier[] = ["Gold", "Silver", "Bronze"];

  return (
    <section id="sponsors" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            16 // Partners
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Our Sponsors
          </h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto">
            Proudly supported by industry leaders in sports and fitness.
          </p>
        </div>

        {tiers.map((tier) => {
          const tierSponsors = sponsors.filter((s) => s.tier === tier);
          const colors = tierColors[tier];
          return (
            <div key={tier} className="mb-12 last:mb-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <span className={`px-4 py-1 text-[10px] uppercase tracking-[0.3em] font-bold ${colors.label}`}>
                  {tier} Sponsors
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className={`grid gap-4 ${
                tier === "Gold" ? "grid-cols-1 sm:grid-cols-2" : tier === "Silver" ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"
              }`}>
                {tierSponsors.map((sponsor, index) => (
                  <div
                    key={sponsor.name}
                    className={`group bg-secondary/50 border ${colors.border} p-6 md:p-8 flex items-center justify-center transition-all duration-500 cursor-pointer ${
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 60 + 200}ms` }}
                  >
                    {/* Logo placeholder — grayscale to color on hover */}
                    <div className={`text-center transition-all duration-500 grayscale group-hover:grayscale-0`}>
                      <div className={`font-display text-lg md:text-xl uppercase tracking-wider ${colors.text} transition-colors duration-500`}>
                        {sponsor.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SponsorsSection;
