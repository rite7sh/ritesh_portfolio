const milestones = [
  {
    phase: "Foundation",
    period: "Early days",
    text: "Started with C++ and Python. Built small tools, broke things, learned how computers actually work.",
  },
  {
    phase: "Going deeper",
    period: "ML & systems",
    text: "Dove into machine learning, NLP, and computer vision. Started building full-stack apps that connected AI to real interfaces.",
  },
  {
    phase: "Open source",
    period: "Building in public",
    text: "Started shipping projects on GitHub — recommender systems, blockchain apps, CV tools. Learning by building, contributing, and iterating.",
  },
  {
    phase: "Now",
    period: "Distributed systems",
    text: "Focused on observability, tracing, and understanding how production systems behave. Working with OpenTelemetry, Jaeger, and cloud-native tooling.",
  },
];

export const Journey = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          How I Got Here
        </h2>

        <div className="space-y-0">
          {milestones.map((m, i) => (
            <div
              key={m.phase}
              className="relative pl-8 pb-10 last:pb-0 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {i < milestones.length - 1 && (
                <div className="absolute left-[5px] top-3 bottom-0 w-px bg-border" />
              )}
              
              <div className={`absolute left-0 top-2 w-[11px] h-[11px] rounded-full border-2 ${
                i === milestones.length - 1
                  ? 'border-primary bg-primary'
                  : 'border-muted-foreground/30 bg-background'
              }`} />

              <div>
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className="text-sm font-medium text-foreground">{m.phase}</span>
                  <span className="text-xs text-muted-foreground">{m.period}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
