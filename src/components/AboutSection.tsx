import { Globe, Camera, Megaphone, Clapperboard, Phone, Mail, MapPin, Youtube } from "lucide-react";

const pillars = [
  { icon: Clapperboard, label: "Filmmaking" },
  { icon: Camera, label: "Digital Media" },
  { icon: Megaphone, label: "Storytelling" },
  { icon: Globe, label: "Cultural Impact" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 80% 50%, hsl(43 89% 53% / 0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">About Us</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-foreground leading-tight">
              Cloud X{" "}
              <span className="shimmer-text-slow">Creative Hub</span>
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed text-lg">
              <span className="text-gold font-semibold">Cloud X Creative Hub Limited</span> is a social innovation and
              creative communications company committed to transforming complex development challenges into engaging
              stories, campaigns, and cultural movements.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Rooted in Africa's vibrant youth and digital culture, we design strategies that merge media, art, and
              community engagement to drive sustainable change. With expertise in behavioral change communication,
              digital storytelling, environmental advocacy, and creative enterprise development, Cloud X serves as the
              bridge between technical interventions and people-powered ownership.
            </p>

            {/* Pillar tags */}
            <div className="flex flex-wrap gap-3">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-sm"
                >
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: redesigned contact card */}
          <div className="relative rounded-3xl overflow-hidden"
            style={{ background: "hsl(220 22% 8%)", border: "1px solid hsl(43 89% 53% / 0.15)" }}
          >
            {/* Header */}
            <div className="relative px-8 pt-10 pb-8">
              <div className="flex items-end gap-5 mb-1">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gold">
                    <span className="text-background text-2xl font-black tracking-tight" style={{ fontFamily: "Cinzel, serif" }}>CX</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2"
                    style={{ borderColor: "hsl(220 22% 8%)", background: "hsl(var(--gold))" }}
                  />
                </div>
                <div>
                  <div className="text-foreground font-bold text-xl leading-tight" style={{ fontFamily: "Cinzel, serif" }}>Cloud X</div>
                  <div className="shimmer-text font-bold text-xl leading-tight" style={{ fontFamily: "Cinzel, serif" }}>Creative Hub</div>
                </div>
              </div>
              <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mt-4">… re-culturing the world</p>
            </div>

            {/* Divider */}
            <div className="mx-8 h-px bg-gold/10" />

            {/* Contact rows */}
            <div className="px-8 py-6 space-y-1">
              {[
                { Icon: Phone, label: "Phone", value: "(+234) 802 – 603 – 9895", href: null },
                { Icon: Mail, label: "Email", value: "Exceptionalcloud@gmail.com", href: "mailto:Exceptionalcloud@gmail.com" },
                { Icon: MapPin, label: "Location", value: "Abuja, Nigeria", href: null },
                { Icon: Youtube, label: "YouTube", value: "@jefftatv", href: "https://www.youtube.com/@jefftatv" },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] cursor-default">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "hsl(43 89% 53% / 0.08)", border: "1px solid hsl(43 89% 53% / 0.15)" }}
                  >
                    <Icon className="text-gold" size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-foreground text-sm font-medium truncate block hover:text-gold transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <div className="text-foreground text-sm font-medium truncate">{value}</div>
                    )}
                  </div>
                  {href && (
                    <div className="w-5 h-5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                      style={{ background: "hsl(43 89% 53% / 0.15)" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 7L7 1M7 1H3M7 1V5" stroke="hsl(43, 89%, 53%)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, hsl(43 89% 53% / 0.3), transparent)" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
