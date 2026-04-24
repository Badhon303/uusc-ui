import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";

type FilterTab = "Members" | "Students" | "Coaches";
type EventType = "Training" | "Match" | "Open Court";

interface ScheduleItem {
  time: string;
  events: Record<string, { type: EventType; label: string } | null>;
  availableTo: FilterTab[];
}

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const schedule: ScheduleItem[] = [
  {
    time: "06:00 - 08:00",
    events: {
      Mon: { type: "Training", label: "Morning Drills" },
      Tue: { type: "Open Court", label: "Open Play" },
      Wed: { type: "Training", label: "Morning Drills" },
      Thu: { type: "Open Court", label: "Open Play" },
      Fri: { type: "Training", label: "Morning Drills" },
      Sat: { type: "Match", label: "Weekend Match" },
      Sun: { type: "Open Court", label: "Free Play" },
    },
    availableTo: ["Members", "Students", "Coaches"],
  },
  {
    time: "08:00 - 10:00",
    events: {
      Mon: { type: "Training", label: "Footwork Clinic" },
      Tue: { type: "Training", label: "Smash Training" },
      Wed: { type: "Training", label: "Footwork Clinic" },
      Thu: { type: "Training", label: "Smash Training" },
      Fri: { type: "Match", label: "Internal Match" },
      Sat: { type: "Training", label: "Intensive Camp" },
      Sun: { type: "Training", label: "Recovery Session" },
    },
    availableTo: ["Members", "Students", "Coaches"],
  },
  {
    time: "10:00 - 12:00",
    events: {
      Mon: { type: "Open Court", label: "Open Play" },
      Tue: { type: "Training", label: "Junior Coaching" },
      Wed: { type: "Open Court", label: "Open Play" },
      Thu: { type: "Training", label: "Junior Coaching" },
      Fri: { type: "Open Court", label: "Open Play" },
      Sat: { type: "Match", label: "Inter-Club" },
      Sun: null,
    },
    availableTo: ["Members", "Students"],
  },
  {
    time: "14:00 - 16:00",
    events: {
      Mon: { type: "Training", label: "Advanced Drills" },
      Tue: { type: "Open Court", label: "Open Court" },
      Wed: { type: "Training", label: "Advanced Drills" },
      Thu: { type: "Match", label: "Practice Match" },
      Fri: { type: "Training", label: "Advanced Drills" },
      Sat: { type: "Match", label: "Tournament Prep" },
      Sun: null,
    },
    availableTo: ["Members", "Coaches"],
  },
  {
    time: "16:00 - 18:00",
    events: {
      Mon: { type: "Training", label: "Group Session" },
      Tue: { type: "Training", label: "Doubles Tactics" },
      Wed: { type: "Training", label: "Group Session" },
      Thu: { type: "Training", label: "Doubles Tactics" },
      Fri: { type: "Open Court", label: "Free Play" },
      Sat: { type: "Open Court", label: "Open Court" },
      Sun: { type: "Open Court", label: "Open Court" },
    },
    availableTo: ["Members", "Students", "Coaches"],
  },
  {
    time: "18:00 - 20:00",
    events: {
      Mon: { type: "Match", label: "Club Match" },
      Tue: { type: "Training", label: "Elite Training" },
      Wed: { type: "Match", label: "Club Match" },
      Thu: { type: "Training", label: "Elite Training" },
      Fri: { type: "Match", label: "Friday League" },
      Sat: null,
      Sun: null,
    },
    availableTo: ["Members", "Coaches"],
  },
];

const typeColors: Record<EventType, { bg: string; text: string; dot: string }> = {
  Training: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400" },
  Match: { bg: "bg-yellow-500/10", text: "text-yellow-400", dot: "bg-yellow-400" },
  "Open Court": { bg: "bg-zinc-500/10", text: "text-zinc-400", dot: "bg-zinc-500" },
};

const ScheduleSection = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>("Members");
  const { isInView, ref } = useInView(0.1);

  const filteredSchedule = schedule.filter((item) => item.availableTo.includes(activeTab));

  return (
    <section id="schedule" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            04 // Training Times
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Weekly Schedule
          </h2>
          <p className="text-muted-foreground max-w-[50ch] mx-auto">
            Plan your week with our structured schedule.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(["Members", "Students", "Coaches"] as FilterTab[]).map((tab) => (
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

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-6 text-xs">
          {Object.entries(typeColors).map(([type, colors]) => (
            <div key={type} className="flex items-center gap-2">
              <div className={`w-2.5 h-2.5 rounded-full ${colors.dot}`} />
              <span className="text-muted-foreground uppercase tracking-wider">{type}</span>
            </div>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium border-b border-border w-[120px]">
                  Time
                </th>
                {days.map((day) => (
                  <th
                    key={day}
                    className="py-4 px-3 text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium border-b border-border text-center"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredSchedule.map((row) => (
                <tr key={row.time} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-3 px-4 text-sm text-muted-foreground font-mono border-b border-border/50 whitespace-nowrap">
                    {row.time}
                  </td>
                  {days.map((day) => {
                    const event = row.events[day];
                    if (!event) {
                      return (
                        <td key={day} className="py-3 px-3 border-b border-border/50 text-center">
                          <span className="text-muted-foreground/30 text-xs">—</span>
                        </td>
                      );
                    }
                    const colors = typeColors[event.type];
                    return (
                      <td key={day} className="py-3 px-3 border-b border-border/50">
                        <div className={`${colors.bg} px-3 py-2 text-center`}>
                          <span className={`block text-[11px] font-semibold uppercase tracking-wider ${colors.text}`}>
                            {event.label}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
