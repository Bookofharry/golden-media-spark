import { Film, Globe, Zap } from "lucide-react";

const VisionSection = () => {
  return (
    <section id="vision" className="relative py-32 px-6 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, hsl(43 89% 53% / 0.08) 0%, transparent 60%)" }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Our Vision</span>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-6 mb-8 leading-tight">
          <span className="shimmer-text">Stories That</span>
          <br />
          <span className="text-foreground">Shape Culture</span>
        </h2>

        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          We believe that media is the most powerful force for cultural transformation in the world today.
          X-Cloud is our platform to harness that power — channeling it toward unity, healing, inspiration,
          and purpose-driven storytelling.
        </p>

        <p className="text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed">
          From short films and documentaries to social posts and community campaigns — every story shared
          on X-Cloud is a seed planted in the soil of a better future. We are building the infrastructure
          for the next generation of culture-shapers.
        </p>

        {/* Vision pillars */}
        <div className="grid sm:grid-cols-3 gap-6 text-left">
          {[
            { emoji: "🎬", title: "Media as Mission", desc: "Using film, digital content, and social platforms to spark meaningful change." },
            { emoji: "🌍", title: "Culture-First Design", desc: "Every feature is built to celebrate diversity while uniting humanity around shared values." },
            { emoji: "✨", title: "The Next Generation", desc: "Empowering young creators to define the cultural narrative of tomorrow." },
          ].map(({ emoji, title, desc }) => (
            <div key={title} className="card-dark rounded-2xl p-6 transition-all duration-300">
              <div className="text-3xl mb-4">{emoji}</div>
              <h4 className="text-foreground font-semibold mb-2" style={{ fontFamily: "Cinzel, serif" }}>{title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
