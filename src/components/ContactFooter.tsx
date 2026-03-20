import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/bpcda", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bpcda/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/BPCosentini", label: "X / Twitter" },
  { icon: Instagram, href: "https://instagram.com/bpcda_", label: "Instagram" },
];

const ContactFooter = () => {
  return (
    <>
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="label-caps mb-4">Contact</p>
            <div className="h-px bg-border mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-6">
                <h2 className="font-display font-500 text-foreground text-balance leading-[1.15] tracking-[-0.01em] mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)" }}>
                  Let's build
                  <br />
                  something together.
                </h2>
                <p className="text-muted-foreground text-lg font-body">
                  Whether it's an engineering project, a web application, or an IoT system — 
                  I'm always open to interesting collaborations.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-6">
                <div className="flex gap-6">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-muted-foreground hover:text-accent transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p className="font-mono text-xs text-muted-foreground tracking-wide">
                  Piacenza, Italia
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground tracking-[0.05em]">
            Marchese di Aieta · Est. 1624
          </p>
          <p className="font-mono text-xs text-muted-foreground tracking-[0.05em]">
            Politecnico di Milano · {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
