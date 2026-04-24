import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useAnimations";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";

const testimonials = [
  {
    name: "Tanvir Hossain",
    role: "Club Captain",
    quote: "UUSC has completely transformed my game. The coaching quality and training facilities are world-class. I went from a recreational player to competing nationally in just 2 years.",
    rating: 5,
  },
  {
    name: "Sarah Khan",
    role: "Player — 3 Years",
    quote: "The community here is incredible. Everyone pushes each other to be better. The coaching staff genuinely cares about each player's development, and it shows in the results.",
    rating: 5,
  },
  {
    name: "Reza Chowdhury",
    role: "Junior Player",
    quote: "As a junior player, I've learned so much at UUSC. The junior development program is structured perfectly, and Coach Fatima has been an amazing mentor.",
    rating: 5,
  },
  {
    name: "Nadia Islam",
    role: "Member — 2 Years",
    quote: "I joined UUSC for fitness, but stayed for the family. The atmosphere during tournaments is electric, and the weekday training sessions keep me motivated.",
    rating: 4,
  },
  {
    name: "Kamal Uddin",
    role: "Doubles Specialist",
    quote: "The doubles training program here is unmatched. The analytical approach with video playback has helped me understand positioning and strategy at a deeper level.",
    rating: 5,
  },
  {
    name: "Fatima Begum",
    role: "New Member",
    quote: "Coming as a complete beginner, I was worried about keeping up. But the welcoming environment and patient coaches made me feel right at home from day one.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isInView, ref } = useInView(0.1);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 380;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-primary font-display text-sm tracking-[0.3em] uppercase block mb-4">
            10 // Voices
          </span>
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-foreground">
            Testimonials
          </h2>
        </div>

        <div className="relative">
          {/* Navigation */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="flex-shrink-0 w-[320px] md:w-[360px] snap-start"
              >
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-6 md:p-8 h-full flex flex-col hover:border-primary/20 transition-colors duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                    <div className="w-10 h-10 bg-secondary border border-border/50 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-foreground text-sm font-medium">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
