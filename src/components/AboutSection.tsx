import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="label-caps mb-4">About</p>
          <div className="h-px bg-border mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal className="lg:col-span-5" delay={100}>
            <h2 className="font-display font-500 text-foreground text-balance leading-[1.15] tracking-[-0.01em]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.5rem)" }}>
              Where heritage
              <br />
              meets engineering
            </h2>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-7" delay={200}>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-body">
              <p>
                I am a Mechanical Engineering student at Politecnico di Milano with a deep passion 
                for programming, fullstack development, and IoT systems. I thrive at the convergence 
                of physical and digital engineering — from designing rocket thrust measurement systems 
                with Arduino sensors to building modern web applications.
              </p>
              <p>
                My family, the Cosentini, have held the title of Marquess of Aieta since 1624 and 
                the title of Baron since the 1500s — a lineage rooted in the noble traditions of 
                Southern Italy. This heritage informs my approach to craftsmanship: precision, 
                permanence, and a commitment to excellence that transcends generations.
              </p>
              <p>
                Based in Piacenza, Italia. Currently studying, building, and experimenting.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
