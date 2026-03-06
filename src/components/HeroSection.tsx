import heroBg from "@/assets/hero-bg.jpg";
import { Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="X-Cloud Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(ellipse, hsl(43 89% 53% / 0.12) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 mb-8 animate-fade-up">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs tracking-widest uppercase font-medium">Launching Soon — Join the Waitlist</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="shimmer-text">Re-Culturing</span>
          <br />
          <span className="text-foreground">the World Through</span>
          <br />
          <span className="text-gold glow-gold">Clean Media</span>
        </h1>

        {/* Sub headline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          A new generation social and streaming platform for inspiring stories,
          safe entertainment, and creative expression.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <a
            href="#waitlist"
            className="px-8 py-4 rounded-full bg-gradient-gold text-background font-bold tracking-wide text-base hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-gold"
          >
            Join the Waitlist
          </a>
          <a
            href="#vision"
            className="px-8 py-4 rounded-full bg-black text-gold font-semibold tracking-wide text-base hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play size={16} fill="currentColor" />
            Explore the Vision
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {[
            { value: "2025", label: "Launch Year" },
            { value: "100%", label: "Family Friendly" },
            { value: "∞", label: "Inspiring Stories" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gold glow-gold" style={{ fontFamily: "Cinzel, serif" }}>{stat.value}</div>
              <div className="text-muted-foreground text-sm tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#problem" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors animate-float">
        <ChevronDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;
