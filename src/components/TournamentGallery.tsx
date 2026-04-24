import { useState, useEffect, useCallback } from "react";
import { useInView } from "@/hooks/useAnimations";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { caption: "Finals Match — UUSC Open 2025", color: "from-primary/40" },
  { caption: "Award Ceremony — Champion Celebration", color: "from-yellow-500/40" },
  { caption: "Doubles Action — Semi Finals", color: "from-accent/40" },
  { caption: "Team Photo — All Participants", color: "from-primary/40" },
  { caption: "Smash Shot — Quarter Finals", color: "from-emerald-500/40" },
  { caption: "Crowd Cheering — Main Arena", color: "from-accent/40" },
  { caption: "Trophy Presentation — Winners", color: "from-yellow-500/40" },
  { caption: "Warm Up Session — Before Finals", color: "from-primary/40" },
  { caption: "Medal Winners — Podium Ceremony", color: "from-accent/40" },
];

const TournamentGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { isInView, ref } = useInView(0.1);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="tournament-gallery" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            07 // Moments
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Tournament Gallery
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden relative">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              >
                {/* Placeholder with gradient */}
                <div className="w-full h-full bg-secondary flex items-center justify-center relative">
                  <div className={`absolute inset-0 bg-gradient-to-t ${image.color} to-transparent opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  <div className="relative z-10 text-center space-y-3">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto text-muted-foreground/30">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <p className="text-muted-foreground/50 text-sm">Tournament Photo</p>
                  </div>
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <p className="text-foreground font-display text-lg md:text-xl uppercase tracking-wide">
                      {image.caption}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {index + 1} / {galleryImages.length}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentGallery;
