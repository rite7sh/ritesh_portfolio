import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ritesh-tripathi" },
  { label: "Email", href: "mailto:ritesh6263tripathi@gmail.com" },
  { label: "GitHub", href: "https://github.com/rite7sh" },
  { label: "Phone", href: "tel:+916263406688" },
];

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="section-container">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's connect</h2>
        <p className="text-muted-foreground mb-10 max-w-md">
          Open to conversations about systems, open source, or interesting problems. No spam, I promise.
        </p>

        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-1.5 px-4 py-2 rounded-full text-sm text-foreground/80 bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
            </a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ritesh Tripathi. Built with care.
          </p>
        </div>
      </div>
    </section>
  );
};
