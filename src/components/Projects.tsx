import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "NFT Ticketing DApp",
    description: "Developed a full-stack decentralized application (DApp) for minting verifiable NFT event tickets with embedded QR codes.",
    technologies: ["Solidity", "Hardhat", "IPFS", "React.js", "Ethers.js", "MetaMask", "QR Code", "jsPDF"],
    highlights: [
      "Implemented smart contracts on Ethereum using Solidity and Hardhat, and integrated IPFS for decentralized metadata storage.",
      "Enabled secure, automated ticket distribution through MetaMask, Ethers.js, and PDF generation using jsPDF for user-facing digital tickets.",
    ],
    link: "https://github.com/rite7sh/nft-ticketing-dapp",
  },
  {
    title: "Product Recommendation System",
    description: "Developed a hybrid product recommender system, using vector similarity search, and semantic embeddings (MiniLM) with Qdrant to enhance product discovery.",
    technologies: ["FastAPI", "React.js", "Tailwind", "Qdrant", "Docker", "Sentence Transformers"],
    highlights: [
      "Designed and integrated a FastAPI backend for embedding indexing and querying; built a React.js frontend with Tailwind CSS for a responsive UI.",
      "Deployed the full-stack application using Docker with persistent storage volumes to ensure scalable and reliable performance.",
    ],
    link: "https://github.com/rite7sh/qdrant-product-recommender",
  },
  {
    title: "Blue Enigma Hybrid AI System",
    description: "Developed a Hybrid Knowledge AI System integrating Neo4j (graph) and Pinecone (vector) databases with OpenAI GPT models for contextual travel recommendations.",
    technologies: ["FastAPI", "React", "Neo4j", "Pinecone", "OpenAI API", "Python"],
    highlights: [
      "Enhanced retrieval accuracy by combining semantic search and graph reasoning, improving response coherence and contextual relevance.",
      "Built an end-to-end FastAPI–React application featuring real-time streaming chat, scalable data pipelines, and modular APIs for future expansion.",
    ],
    link: "https://github.com/rite7sh/blue-enigma-hybrid-ai",
  },
  {
    title: "Air Lasso Tool",
    description: "Developed a real-time gesture-based drawing tool using webcam input and OpenCV for hand tracking, enabling freehand object selection.",
    technologies: ["Python", "OpenCV"],
    highlights: [
      "Simulated a virtual pen using color or gesture-based detection, allowing touchless interaction for selection and annotation tasks.",
      "Designed for accessibility and contactless control in digital art, UI navigation, and computer vision-based interfaces.",
    ],
    link: "https://github.com/rite7sh/air-lasso-tool",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="animate-fade-in-up hover-scale border-border/50 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4 flex-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
