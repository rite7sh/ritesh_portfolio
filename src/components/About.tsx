export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">About</p>
        <div className="space-y-5">
          <p className="text-lg sm:text-xl text-foreground leading-relaxed font-light">
            I'm an AI & ML engineer who cares about building things that actually work in production — not just in notebooks.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Most of my time goes into distributed systems, open source tooling, and figuring out how to make AI useful at scale. I like working across the stack — from training pipelines to the API layer to the frontend that real people use.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Right now I'm deep into observability, tracing, and understanding how complex systems behave under pressure. I learn by building, contributing, and breaking things.
          </p>
        </div>
      </div>
    </section>
  );
};
