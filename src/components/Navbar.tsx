import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Vision", href: "#vision" },
    { label: "Platform", href: "#solution" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(220_25%_3%)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
            <span className="text-background font-bold text-sm" style={{ fontFamily: "Cinzel, serif" }}>CX</span>
          </div>
          <div>
            <span className="text-gold font-bold text-sm tracking-widest" style={{ fontFamily: "Cinzel, serif" }}>CLOUD X</span>
            <div className="text-muted-foreground text-xs tracking-wider">CREATIVE HUB</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#waitlist"
            className="px-5 py-2 rounded-full bg-gradient-gold text-background font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground hover:text-gold transition-colors text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#waitlist"
            className="mt-2 px-5 py-3 rounded-full bg-gradient-gold text-background font-semibold text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
