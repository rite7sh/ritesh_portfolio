import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          I'm always open to discussing new projects, opportunities, or collaborations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
            asChild
          >
            <a href="https://www.linkedin.com/in/ritesh-tripathi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
            asChild
          >
            <a href="mailto:ritesh6263tripathi@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary/30 hover:bg-primary/5 transition-all hover:scale-105"
            asChild
          >
            <a href="tel:+916263406688">
              <Phone className="mr-2 h-5 w-5" />
              +91-6263406688
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
