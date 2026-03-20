import ScrollReveal from "./ScrollReveal";

const HeritageSection = () => {
  return (
    <section id="heritage" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-caps mb-4">Heritage</p>
            <div className="h-px bg-accent mx-auto w-24 mb-12" />

            {/* Coat of arms illustration */}
            <div className="mb-12 flex justify-center">
              <svg viewBox="0 0 120 160" className="w-28 h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 5 L115 30 L115 95 Q115 140 60 155 Q5 140 5 95 L5 30 Z" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
                <path d="M60 30 L48 65 L53 62 L43 88 L50 84 L38 115 L82 115 L70 84 L77 88 L67 62 L72 65 Z" stroke="hsl(var(--accent))" strokeWidth="0.75" fill="none" />
                <path d="M30 130 L48 115 L60 122 L72 115 L90 130" stroke="hsl(var(--accent))" strokeWidth="0.75" fill="none" />
                <line x1="60" y1="115" x2="60" y2="130" stroke="hsl(var(--accent))" strokeWidth="0.75" />
              </svg>
            </div>

            <h2 className="font-display font-500 text-foreground text-balance leading-[1.15] tracking-[-0.01em] mb-8" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
              Marchesi di Aieta
            </h2>

            <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-8">
              Est. 1624 · Baroni dal XVI Secolo
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg font-body max-w-2xl mx-auto mb-6">
              The Cosentini family — patricians of Bisignano, Cosenza, and Tropea, and nobles of 
              Reggio Calabria — have held the Marquisate of Aieta since the early 17th century. 
              The family coat of arms bears a pine tree on a golden three-peaked mount with a 
              rampant lion, set against an azure field.
            </p>

            <p className="text-muted-foreground leading-relaxed font-body max-w-2xl mx-auto italic">
              "D'azzurro, al pino al naturale nodrito sopra un monte d'oro di tre cime movente 
              dalla punta, sinistrato da un leone dello stesso affrontato al tronco."
            </p>

            <div className="mt-10">
              <a
                href="https://www.nobili-napoletani.it/Cosentino.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-[0.1em] text-accent hover:text-foreground transition-colors relative group inline-block"
              >
                Leggi la storia completa
                <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeritageSection;
