import { useEffect, useState } from "react";
import coatOfArms from "@/assets/coat-of-arms-crowned.png";
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

          <div className="lg:col-span-4 hidden lg:flex items-center justify-center">
            <div
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
              }}
            >
              <img
                src={coatOfArms}
                alt="Cosentini di Aieta coat of arms"
                className="w-48 h-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
