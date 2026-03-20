import ScrollReveal from "./ScrollReveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Rocket Thrust Plotter",
    description:
      "Measurement and visualization of model rocket impulse using Arduino sensors and 3D-printed components. Includes firmware, STL files, and experimental data.",
    tech: ["C++", "Arduino", "3D Printing", "Data Visualization"],
    link: "https://github.com/bpcda/rocket-thrust-plotter",
  },
  {
    title: "Engineering Portfolio",
    description:
      "A TypeScript-based personal portfolio showcasing engineering projects and technical writing. Built with modern web technologies and clean architecture.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    link: "https://github.com/bpcda/ing-portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="label-caps mb-4">Projects</p>
          <div className="h-px bg-border mb-16" />
        </ScrollReveal>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 120}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                <div className={`${i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6"}`}>
                  <div className="border border-border p-10 hover:bg-secondary transition-colors duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="font-body font-medium text-foreground text-xl">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-8 font-body">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                        <span key={t} className="font-mono text-xs uppercase tracking-[0.08em] text-accent border border-accent/30 px-3 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
