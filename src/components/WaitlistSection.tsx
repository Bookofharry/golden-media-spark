import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const WaitlistSection = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;

    setLoading(true);
    // Simulate API call (ready to connect to Express API)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(43 89% 53% / 0.07) 0%, transparent 60%)" }}
      />

      <div className="max-w-2xl mx-auto text-center">
        <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Early Access</span>

         <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-foreground leading-tight">
           Be Among the First to{" "}
           <span className="shimmer-text-slow">Experience X-Cloud</span>
         </h2>

        <p className="text-muted-foreground text-lg mb-10">
          Join our founding community. Get early access, exclusive updates, and be part of shaping
          the future of clean media.
        </p>

        {submitted ? (
          <div className="card-dark rounded-2xl p-12 animate-scale-in">
            <CheckCircle className="text-gold mx-auto mb-4" size={56} />
            <h3 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: "Cinzel, serif" }}>
              You're on the List!
            </h3>
            <p className="text-muted-foreground">
              Welcome to the X-Cloud community, <span className="text-gold font-semibold">{form.name}</span>.
              We'll reach out to <span className="text-gold font-semibold">{form.email}</span> when it's time.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card-dark rounded-2xl p-8"
          >
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-left text-muted-foreground text-sm mb-2 tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-left text-muted-foreground text-sm mb-2 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-gold text-background font-bold tracking-wide text-base hover:opacity-90 transition-all duration-300 shadow-gold hover:scale-[1.02] disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Join the Waitlist
                </>
              )}
            </button>

            <p className="text-muted-foreground text-xs mt-4">
              No spam. Just meaningful updates about X-Cloud's launch. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default WaitlistSection;
