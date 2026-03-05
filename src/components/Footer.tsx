const Footer = () => {
  const year = new Date().getFullYear();

  const links = {
    Platform: ["About X-Cloud", "Features", "How It Works", "Creators"],
    Company: ["About Us", "Vision", "Contact", "Press"],
  };

  return (
    <footer className="relative bg-secondary/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                <span className="text-background font-bold text-base" style={{ fontFamily: "Cinzel, serif" }}>CX</span>
              </div>
              <div>
                <div className="text-gold font-bold tracking-widest text-sm" style={{ fontFamily: "Cinzel, serif" }}>CLOUD X CREATIVE HUB</div>
                <div className="text-muted-foreground text-xs tracking-wider">Re-Culturing the World Through Clean Media</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">
              A social innovation and creative communications company building the next generation
              of family-friendly media and storytelling platforms.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {["𝕏", "in", "▶", "📷"].map((social) => (
                <button
                  key={social}
                  className="w-9 h-9 rounded-full text-gold text-sm flex items-center justify-center hover:bg-gold/10 transition-all duration-300"
                >
                  {social}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-foreground font-semibold text-sm tracking-widest uppercase mb-4" style={{ fontFamily: "Cinzel, serif" }}>
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-gold transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {year} Cloud X Creative Hub Limited. Reg. No. 8383318. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="mailto:cloudxcreativehub@gmail.com" className="text-gold text-sm hover:underline">
              cloudxcreativehub@gmail.com
            </a>
            <span className="text-muted-foreground text-sm">+234 802 603 9895</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
