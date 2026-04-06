import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-hero px-6 sm:px-8">
      <div className="section-container w-full">
        <div className="animate-fade-in">
          <p className="mono text-sm text-muted-foreground mb-6">
            hi, i'm ritesh —
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6 text-balance">
            I build systems that
            <span className="bg-gradient-primary bg-clip-text text-transparent"> think, scale, and ship.</span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-12">
            AI & ML engineer focused on distributed systems, open source, and turning complex ideas into clean, production-ready software.
          </p>
        </div>

        <div className="animate-fade-in-up flex gap-4 items-center" style={{ animationDelay: "0.35s" }}>
          <Button 
            size="lg" 
            className="shadow-glow hover:shadow-soft transition-all rounded-full px-6"
            asChild
          >
            <a href="/RITESH_TRIIPATHI_DEVOPS_RESUME.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost"
            className="text-muted-foreground hover:text-foreground transition-all rounded-full px-6"
            asChild
          >
            <a href="https://github.com/rite7sh" target="_blank" rel="noopener noreferrer">
              GitHub
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
