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
              <span className="shimmer-text">Creative Hub</span>
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed text-lg">
              <span className="text-gold font-semibold">Cloud X Creative Hub Limited</span> is a social innovation and
              creative communications company committed to transforming complex development challenges into engaging
              stories, campaigns, and cultural movements.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Rooted in Africa's vibrant youth and digital culture, we design strategies that merge media, art, and
              community engagement to drive sustainable change. With expertise spanning behavioral change communication,
              digital storytelling, environmental advocacy, and creative enterprise development — Cloud X serves as the
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

          {/* Right: card with contact info */}
          <div className="card-dark rounded-2xl p-8">
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center mb-6 mx-auto">
              <span className="text-background text-2xl font-bold" style={{ fontFamily: "Cinzel, serif" }}>CX</span>
            </div>

            <div className="text-center mb-2">
              <div className="text-foreground font-bold text-lg" style={{ fontFamily: "Cinzel, serif" }}>Cloud X Creative Hub</div>
              <p className="text-gold text-xs tracking-[0.2em] uppercase mt-1">… re-culturing the world</p>
            </div>

            <div className="h-px bg-gold/10 my-6" />

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="text-gold" size={15} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs tracking-wide mb-0.5">Phone</div>
                  <div className="text-foreground font-medium text-sm">(+234) 802 – 603 – 9895</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="text-gold" size={15} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs tracking-wide mb-0.5">Email</div>
                  <a href="mailto:Exceptionalcloud@gmail.com" className="text-gold font-medium text-sm hover:underline">
                    Exceptionalcloud@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="text-gold" size={15} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs tracking-wide mb-0.5">Address</div>
                  <div className="text-foreground font-medium text-sm">Abuja, Nigeria</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Youtube className="text-gold" size={15} />
                </div>
                <div>
                  <div className="text-muted-foreground text-xs tracking-wide mb-0.5">YouTube</div>
                  <a href="https://www.youtube.com/@jefftatv" target="_blank" rel="noopener noreferrer" className="text-gold font-medium text-sm hover:underline">
                    youtube.com/@jefftatv
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
