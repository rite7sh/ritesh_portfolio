import { Button } from "@/components/ui/button";
import { Download, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full text-center">
        {/* Animated greeting */}
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 text-sm sm:text-base tracking-wide uppercase">
            Welcome to my portfolio
          </p>
        </div>

        {/* Main heading */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Ritesh Tripathi
          </h1>
        </div>

        {/* Title */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
            AI & ML Engineer | Full-Stack Developer
          </h2>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed px-4">
            I build intelligent, scalable, and user-focused systems that connect AI with real-world products.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="w-full sm:w-auto shadow-glow hover:shadow-soft transition-all hover:scale-105"
            asChild
          >
            <a href="/RITESH_TRIIPATHI_DEVOPS_RESUME.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
            asChild
          >
            <a href="https://github.com/rite7sh" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </a>
          </Button>
        </div>

        {/* Floating decoration */}
        <div className="mt-16 flex justify-center">
          <div className="w-2 h-12 rounded-full bg-gradient-primary animate-float" />
        </div>
      </div>
    </section>
  );
};
