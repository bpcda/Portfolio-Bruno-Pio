import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <p
              className="label-caps mb-6"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
              }}
            >
              Mechanical Engineering · Fullstack Development · IoT
            </p>
            <h1
              className="font-display font-600 text-foreground text-balance leading-[1.05] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
                lineHeight: 1.05,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
              }}
            >
              Bruno Pio
              <br />
              Cosentini
              <br />
              <span className="text-accent">di Aieta</span>
            </h1>
            <div
              className="mt-8 h-px bg-accent origin-left"
              style={{
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transition: "transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s",
              }}
            />
            <p
              className="mt-6 text-muted-foreground text-lg max-w-xl font-body"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 1.1s",
              }}
            >
              BSc student in Mechanical Engineering at Politecnico di Milano.
              Building at the intersection of hardware and software.
            </p>
          </div>

          {/* Decorative heraldic element */}
          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <div
              className="relative w-64 h-80"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
              }}
            >
              <svg viewBox="0 0 200 260" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Shield shape */}
                <path d="M100 10 L190 50 L190 150 Q190 220 100 250 Q10 220 10 150 L10 50 Z" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
                {/* Pine tree */}
                <path d="M100 60 L80 120 L90 115 L75 155 L88 148 L70 190 L130 190 L112 148 L125 155 L110 115 L120 120 Z" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
                {/* Mountain */}
                <path d="M55 210 L80 190 L100 200 L120 190 L145 210" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
                {/* Tree trunk */}
                <line x1="100" y1="190" x2="100" y2="210" stroke="hsl(var(--accent))" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
