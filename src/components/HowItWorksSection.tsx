import { Upload, Search, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Creators Upload Inspiring Content",
    desc: "Artists, filmmakers, educators, and storytellers share their work on a platform built to amplify purpose-driven creativity.",
  },
  {
    icon: Search,
    step: "02",
    title: "Community Discovers Clean Entertainment",
    desc: "Families and communities browse curated feeds, channels, and streaming libraries — all guaranteed family-friendly.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Stories Inspire Change Across Cultures",
    desc: "Meaningful narratives travel the globe, reshaping culture one story at a time — building a more inspired world.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">How It Works</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Simple. Purposeful.{" "}
          <span className="text-gold glow-gold">Transformative.</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16 text-lg">
          X-Cloud works in three powerful steps that connect creators with communities around the world.
        </p>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[16.666%] right-[16.666%] h-px bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative text-center group">
                {/* Step circle */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full transition-all duration-500" />
                  <div className="absolute inset-3 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <Icon className="text-gold mb-1 group-hover:scale-110 transition-transform duration-300" size={28} />
                  </div>
                  {/* Outer glow on hover */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: "0 0 30px hsl(43 89% 53% / 0.3)" }}
                  />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "Cinzel, serif" }}>
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
