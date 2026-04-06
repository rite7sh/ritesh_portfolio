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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Notes & Thoughts
        </h2>
        
        <div className="space-y-8">
          {notes.map((note, i) => (
            <div
              key={i}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-lg text-foreground/90 leading-relaxed italic">
                "{note.text}"
              </p>
              <span className="text-xs text-primary mt-2 inline-block font-medium uppercase tracking-wide">
                — {note.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
