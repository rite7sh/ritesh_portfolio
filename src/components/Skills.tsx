const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "C++", "JavaScript", "SQL"],
  },
  {
    label: "Web & APIs",
    skills: ["React", "FastAPI", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "ML & AI",
    skills: ["OpenAI API", "Sentence Transformers", "OpenCV", "Pinecone", "Neo4j"],
  },
  {
    label: "Infra & Tools",
    skills: ["Docker", "Git", "MySQL", "Qdrant", "GitHub Actions"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">Skills</p>
        
        <div className="space-y-8">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="mono text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-foreground/80 bg-muted rounded-full transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
