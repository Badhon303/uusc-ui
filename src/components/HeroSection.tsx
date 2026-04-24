import heroImage from "@/assets/hero-shuttlecock.png"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-20 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Shuttlecock in flight"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" /> */}
      </div>

      {/* Kinetic light lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-0 w-px h-full glow-line" />
        <div className="absolute right-1/3 top-0 w-px h-full glow-line-accent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] blur-glow" />
      </div>

      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Club badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
          <div className="w-2 h-2 bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary">
            Est. 2018 — Elite Badminton
          </span>
        </div>

        <h1 className="font-display text-[13vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] uppercase tracking-tighter">
          <span className="block text-foreground">UUSC</span>
          <span className="block text-stroke text-[8vw] md:text-[6vw] lg:text-[5vw]">
            Badminton Club
          </span>
        </h1>

        <div className="flex flex-col items-center gap-6 pt-4">
          <p className="max-w-[50ch] text-base md:text-lg text-muted-foreground font-medium text-balance">
            Where Champions Are Made. Elevate your game with world-class
            coaching, premium facilities, and a community of passionate players.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#join"
              className="group relative inline-block px-8 py-4 overflow-hidden bg-primary hover:bg-primary/90 transition-colors duration-300"
            >
              <span className="relative z-10 font-display text-sm uppercase font-bold tracking-[0.2em] text-primary-foreground">
                Join The Club
              </span>
            </a>
            <a
              href="#services"
              className="group relative inline-block px-8 py-4 overflow-hidden border border-foreground/20 hover:border-primary/60 transition-all duration-300"
            >
              <span className="relative z-10 font-display text-sm uppercase font-bold tracking-[0.2em] text-foreground group-hover:text-primary transition-colors duration-300">
                Explore Services
              </span>
            </a>
          </div>

          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-primary to-transparent animate-pulse-glow mt-6" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
