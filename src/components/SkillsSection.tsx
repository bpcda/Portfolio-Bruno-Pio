import ScrollReveal from "./ScrollReveal";

const skills = [
  {
    category: "Engineering",
    items: ["Mechanical Design", "CAD / CAM", "3D Printing", "Arduino / Electronics", "Sensor Systems"],
  },
  {
    category: "Development",
    items: ["TypeScript", "React", "Node.js", "Python", "C/C++"],
  },
  {
    category: "IoT & Hardware",
    items: ["Arduino", "Embedded Systems", "Data Acquisition", "Serial Communication", "Sensor Integration"],
  },
  {
    category: "Tools & Methods",
    items: ["Git / GitHub", "Linux", "Fullstack Architecture", "REST APIs", "Agile Workflow"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <p className="label-caps mb-4">Competenze</p>
          <div className="h-px bg-border mb-12" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 80}>
              <h3 className="font-body font-medium text-foreground text-lg mb-6">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="font-mono text-xs uppercase tracking-[0.05em] text-muted-foreground py-2 border-b border-border last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
