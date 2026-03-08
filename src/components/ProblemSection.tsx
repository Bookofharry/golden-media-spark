import { AlertTriangle, TrendingDown, Shield } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Toxic Content Overload",
    desc: "Major platforms profit from outrage, division, and harmful content. They prioritize engagement over the wellbeing of real people.",
  },
  {
    icon: TrendingDown,
    title: "Declining Family Values",
    desc: "Parents struggle to find safe, age-appropriate entertainment. Children are exposed to content that quietly erodes their values.",
  },
  {
    icon: Shield,
    title: "Creators Without Purpose",
    desc: "Talented creators who want to inspire are drowned out by algorithms that reward shock value over substance and meaning.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-24 px-6 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">The Problem</span>
        </div>

         <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
           The Internet Needs{" "}
           <span className="shimmer-text-slow">Better Stories</span>
         </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
          Most platforms are engineered for addiction, not inspiration. Millions of families, creators,
          and communities are searching for something different. Something real, safe, and uplifting.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="card-dark rounded-2xl p-8 group hover:border-gold/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="text-destructive" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3" style={{ fontFamily: "Cinzel, serif" }}>
                {title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold text-sm tracking-widest uppercase">Until Now</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
