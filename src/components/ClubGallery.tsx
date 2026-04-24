import { useState } from "react";
import { useInView } from "@/hooks/useAnimations";

type GalleryFilter = "All" | "Courts" | "Training" | "Events" | "Tournaments";

interface GalleryItem {
  caption: string;
  category: GalleryFilter[];
  aspectClass: string;
  gradientColor: string;
}

const galleryItems: GalleryItem[] = [
  { caption: "Main Arena — Court 1", category: ["Courts"], aspectClass: "row-span-2", gradientColor: "from-primary/30" },
  { caption: "Group Training Session", category: ["Training"], aspectClass: "", gradientColor: "from-accent/30" },
  { caption: "Annual Awards Night", category: ["Events"], aspectClass: "", gradientColor: "from-yellow-500/30" },
  { caption: "Professional Court Setup", category: ["Courts"], aspectClass: "", gradientColor: "from-primary/30" },
  { caption: "Intensive Coaching Camp", category: ["Training"], aspectClass: "row-span-2", gradientColor: "from-emerald-500/30" },
  { caption: "Championship Final 2024", category: ["Tournaments"], aspectClass: "", gradientColor: "from-accent/30" },
  { caption: "Member Social Evening", category: ["Events"], aspectClass: "", gradientColor: "from-yellow-500/30" },
  { caption: "Junior Training Academy", category: ["Training"], aspectClass: "", gradientColor: "from-primary/30" },
  { caption: "Inter-Club Tournament", category: ["Tournaments"], aspectClass: "", gradientColor: "from-accent/30" },
  { caption: "Outdoor Courts Aerial View", category: ["Courts"], aspectClass: "", gradientColor: "from-emerald-500/30" },
  { caption: "Team Building Workshop", category: ["Events"], aspectClass: "", gradientColor: "from-yellow-500/30" },
  { caption: "Doubles Match Action", category: ["Tournaments"], aspectClass: "", gradientColor: "from-primary/30" },
];

const ClubGallery = () => {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const { isInView, ref } = useInView(0.1);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category.includes(filter));

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            14 // Gallery
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Club Gallery
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(["All", "Courts", "Training", "Events", "Tournaments"] as GalleryFilter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
                filter === tab
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {filtered.map((item, index) => (
            <div
              key={`${item.caption}-${filter}`}
              className={`group relative bg-secondary overflow-hidden cursor-pointer ${item.aspectClass} transition-all duration-500 ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 50 + 100}ms` }}
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradientColor} to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              {/* Icon placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>

              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-foreground text-xs md:text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClubGallery;
