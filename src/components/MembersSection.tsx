import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";
import { User, Instagram, ExternalLink } from "lucide-react";

type MemberTab = "Players" | "Coaches" | "Staff";

interface Member {
  name: string;
  role: string;
  specialty: string;
  tab: MemberTab;
}

const members: Member[] = [
  { name: "Tanvir Hossain", role: "Captain", specialty: "Singles Specialist", tab: "Players" },
  { name: "Sarah Khan", role: "Vice Captain", specialty: "Mixed Doubles", tab: "Players" },
  { name: "Arif Rahman", role: "Player", specialty: "Doubles Expert", tab: "Players" },
  { name: "Nadia Islam", role: "Player", specialty: "Defense Specialist", tab: "Players" },
  { name: "Kamal Uddin", role: "Player", specialty: "All-Rounder", tab: "Players" },
  { name: "Reza Chowdhury", role: "Junior Player", specialty: "Rising Star", tab: "Players" },
  { name: "Coach Rahman", role: "Head Coach", specialty: "15+ Years Experience", tab: "Coaches" },
  { name: "Coach Fatima", role: "Assistant Coach", specialty: "Junior Development", tab: "Coaches" },
  { name: "Coach Imran", role: "Fitness Coach", specialty: "Athletic Performance", tab: "Coaches" },
  { name: "Habib Mia", role: "Manager", specialty: "Operations", tab: "Staff" },
  { name: "Ayesha Siddique", role: "Coordinator", specialty: "Event Management", tab: "Staff" },
  { name: "Rafiq Ahmed", role: "Admin", specialty: "Member Relations", tab: "Staff" },
];

const MembersSection = () => {
  const [activeTab, setActiveTab] = useState<MemberTab>("Players");
  const { isInView, ref } = useInView(0.1);

  const filtered = members.filter((m) => m.tab === activeTab);

  return (
    <section id="members" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            09 // Our Team
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Club Members
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {(["Players", "Coaches", "Staff"] as MemberTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Member Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((member, index) => (
            <div
              key={member.name}
              className={`card-dark p-6 group hover:border-primary/30 transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 transition-colors">
                  <User className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base uppercase tracking-wide text-foreground mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-primary text-xs uppercase tracking-[0.15em] font-bold mb-1">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs">{member.specialty}</p>
                </div>
              </div>
              <div className="flex gap-3 mt-4 pt-4 border-t border-border/50">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersSection;
