import { 
  Code2, 
  Database, 
  FileJson, 
  FileCode,
  Wind,
  Brain,
  Pin,
  Network,
  MessageSquare,
  Eye,
  GitBranch,
  Github,
  Package,
  Zap,
  Palette
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "C++", icon: Code2, category: "Programming Languages" },
  { name: "Python", icon: FileCode, category: "Programming Languages" },
  { name: "JavaScript", icon: FileJson, category: "Programming Languages" },
  { name: "SQL", icon: Database, category: "Programming Languages" },
  
  { name: "React.js", icon: Code2, category: "Web Development" },
  { name: "FastAPI", icon: Zap, category: "Web Development" },
  { name: "HTML", icon: FileCode, category: "Web Development" },
  { name: "CSS", icon: Palette, category: "Web Development" },
  { name: "Tailwind CSS", icon: Wind, category: "Web Development" },
  
  { name: "OpenAI API", icon: Brain, category: "Machine Learning" },
  { name: "Pinecone", icon: Pin, category: "Machine Learning" },
  { name: "Neo4j", icon: Network, category: "Machine Learning" },
  { name: "Sentence Transformers", icon: MessageSquare, category: "Machine Learning" },
  { name: "OpenCV", icon: Eye, category: "Machine Learning" },
  
  { name: "MySQL", icon: Database, category: "Tools & Technologies" },
  { name: "Git", icon: GitBranch, category: "Tools & Technologies" },
  { name: "GitHub", icon: Github, category: "Tools & Technologies" },
  { name: "Docker", icon: Package, category: "Tools & Technologies" },
  { name: "Qdrant", icon: Database, category: "Tools & Technologies" },
];

const categories = [
  "Programming Languages",
  "Web Development",
  "Machine Learning",
  "Tools & Technologies"
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            return (
              <Card
                key={category}
                className="animate-fade-in-up hover-scale border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {categorySkills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <span
                          key={skill.name}
                          className="px-3 py-2 bg-primary/10 text-primary rounded-full text-sm flex items-center gap-2"
                        >
                          <Icon className="h-4 w-4" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
