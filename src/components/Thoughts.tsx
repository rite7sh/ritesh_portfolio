const notes = [
  {
    text: "The best ML models are useless if you can't observe them in production. Tracing > guessing.",
    tag: "observability",
  },
  {
    text: "Writing clean APIs is an underrated skill. If your interface is confusing, your system is confusing.",
    tag: "engineering",
  },
  {
    text: "Open source taught me more about real-world engineering than any course. The codebase is the curriculum.",
    tag: "open source",
  },
];

export const Thoughts = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">Notes & Thoughts</p>
        
        <div className="space-y-6">
          {notes.map((note, i) => (
            <div
              key={i}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <p className="text-foreground/90 leading-relaxed italic">
                "{note.text}"
              </p>
              <span className="mono text-xs text-muted-foreground mt-2 inline-block">
                — {note.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
