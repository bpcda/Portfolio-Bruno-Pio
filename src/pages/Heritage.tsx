import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import coatOfArms from "@/assets/coat-of-arms-crowned.png";

const Heritage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <Link
            to="/"
            className="font-mono text-xs uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors"
          >
            ← Back
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
            Heritage
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              {/* Coat of arms */}
              <div className="flex justify-center mb-16">
                <img
                  src={coatOfArms}
                  alt="Coat of arms of the Cosentini family — azure field with pine tree on golden mount and rampant lion, crowned with a marquess coronet"
                  className="w-48 md:w-56 h-auto drop-shadow-lg"
                />
              </div>

              <div className="text-center mb-16">
                <p className="label-caps mb-4">Marchesi di Aieta</p>
                <div className="h-px bg-accent mx-auto w-24 mb-8" />
                <h1
                  className="font-display font-500 text-foreground text-balance leading-[1.1] tracking-[-0.01em]"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                >
                  Cosentini di Aieta
                </h1>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mt-4">
                  Est. 1624 · Baroni dal XVI Secolo
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-2xl mx-auto space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg font-body">
                The Cosentini family — patricians of Bisignano, Cosenza, and Tropea, and nobles of
                Reggio Calabria — have held the Marquisate of Aieta since the early 17th century.
                The family coat of arms bears a pine tree on a golden three-peaked mount with a
                rampant lion, set against an azure field.
              </p>

              <div className="h-px bg-border w-full" />

              <blockquote className="border-l-2 border-accent pl-6">
                <p className="text-muted-foreground leading-relaxed font-body italic">
                  "D'azzurro, al pino al naturale nodrito sopra un monte d'oro di tre cime movente
                  dalla punta, sinistrato da un leone dello stesso affrontato al tronco."
                </p>
              </blockquote>

              <div className="h-px bg-border w-full" />

              <div className="pt-4">
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
      </main>
    </div>
  );
};

export default Heritage;
