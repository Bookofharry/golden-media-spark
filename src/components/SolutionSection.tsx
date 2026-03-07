import { Heart, Tv2, Users, Star, Film, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Family-Friendly Content",
    desc: "Every piece of content is curated and verified to be safe for all ages — zero compromises.",
  },
  {
    icon: Tv2,
    title: "Creator Channels",
    desc: "Build your audience with purpose-driven channels. Monetize impact, not outrage.",
  },
  {
    icon: Film,
    title: "Film & Documentary Streaming",
    desc: "Watch inspiring films, documentaries, and series that celebrate culture and humanity.",
  },
  {
    icon: Users,
    title: "Safe Community",
    desc: "A moderated, positive community where people connect around shared values and stories.",
  },
  {
    icon: Star,
    title: "Positive Storytelling",
    desc: "An algorithm that rewards meaningful, uplifting content — not just what goes viral.",
  },
  {
    icon: MessageCircle,
    title: "Cultural Connection",
    desc: "Bridging cultures and communities through shared stories, art, and creative expression.",
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="relative py-24 px-6 overflow-hidden">
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, hsl(43 89% 53% / 0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-4">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">The Solution</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Introducing{" "}
          <span className="shimmer-text inline-block animate-rotate-y" style={{ perspective: "1000px" }}>X-Cloud</span>
        </h2>

        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 text-lg leading-relaxed">
          X-Cloud is more than a platform — it's a movement. A creator-first media ecosystem
          designed to amplify positive voices and meaningful stories worldwide.
        </p>

        {/* Platform type pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["Safe Social Media", "Clean Streaming", "Creator Ecosystem"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full text-gold text-sm font-medium bg-gold/5">
              {tag}
            </span>
          ))}
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="card-dark rounded-2xl p-7 group hover:border-gold/40 transition-all duration-500 hover:shadow-gold hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="text-gold" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "Cinzel, serif" }}>
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
