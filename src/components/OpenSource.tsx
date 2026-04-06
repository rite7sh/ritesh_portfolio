import { ArrowUpRight } from "lucide-react";

const contributions = [
  {
    title: "NFT Ticketing DApp",
    description: "Full-stack decentralized app for minting verifiable NFT event tickets with embedded QR codes. Smart contracts on Ethereum, IPFS for metadata, MetaMask integration.",
    tech: ["Solidity", "Hardhat", "React", "IPFS", "Ethers.js"],
    link: "https://github.com/rite7sh/nft-ticketing-dapp",
    impact: "End-to-end Web3 workflow",
  },
  {
    title: "Product Recommender System",
    description: "Hybrid recommender using vector similarity search and semantic embeddings with Qdrant. Full-stack with FastAPI backend and React frontend, containerized with Docker.",
    tech: ["FastAPI", "Qdrant", "Docker", "Sentence Transformers"],
    link: "https://github.com/rite7sh/qdrant-product-recommender",
    impact: "Semantic search at scale",
  },
  {
    title: "Blue Enigma — Hybrid AI",
    description: "Knowledge system combining Neo4j graph reasoning with Pinecone vector search and GPT models. Real-time streaming chat with modular APIs.",
    tech: ["Neo4j", "Pinecone", "OpenAI", "FastAPI", "React"],
    link: "https://github.com/rite7sh/blue-enigma-hybrid-ai",
    impact: "Graph + vector retrieval",
  },
  {
    title: "Air Lasso Tool",
    description: "Real-time gesture-based drawing tool using webcam and OpenCV for hand tracking. Touchless interaction for selection and annotation.",
    tech: ["Python", "OpenCV"],
    link: "https://github.com/rite7sh/air-lasso-tool",
    impact: "Computer vision interface",
  },
];

export const OpenSource = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">Work & Contributions</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">
          A mix of open source projects and explorations — focused on real systems, not toy demos.
        </p>

        <div className="space-y-8">
          {contributions.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 -mx-6 rounded-2xl transition-all duration-300 hover:bg-muted/50 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 flex-shrink-0 mt-1" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="mono text-xs text-primary/80">{project.impact}</span>
                <span className="text-border">·</span>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
