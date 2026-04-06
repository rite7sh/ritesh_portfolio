import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Thoughts } from "@/components/Thoughts";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <main className="relative">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Thoughts />
      <Contact />
    </main>
  );
};

export default Index;
