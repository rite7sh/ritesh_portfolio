import { Circle } from "lucide-react";

const currentItems = [
  {
    label: "Exploring",
    text: "OpenTelemetry & Jaeger for distributed tracing",
  },
  {
    label: "Building",
    text: "Production-grade ML pipelines with FastAPI & Docker",
  },
  {
    label: "Learning",
    text: "How large-scale systems fail gracefully",
  },
];

export const CurrentWork = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">What I'm working on</p>
        <div className="space-y-6">
          {currentItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Circle className="h-2 w-2 mt-2.5 text-primary fill-primary flex-shrink-0" />
              <div>
                <span className="mono text-xs text-primary uppercase tracking-wider">
                  {item.label}
                </span>
                <p className="text-foreground mt-0.5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
