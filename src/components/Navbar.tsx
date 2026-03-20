import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <button onClick={() => scrollTo("hero")} className="font-mono text-xs uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors">
          B.P.C.A.
        </button>
        <div className="hidden md:flex items-center gap-8">
          {["about", "skills", "projects", "heritage", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-accent transition-colors relative group"
            >
              {section}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
