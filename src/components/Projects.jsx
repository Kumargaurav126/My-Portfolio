import { PROJECTS } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./Shared";

function ProjectCard({ project, index }) {
  const ref = useReveal(index * 0.1);

  return (
    <div
      ref={ref}
      className="reveal project-card bg-bg2 p-10 transition-colors duration-200 hover:bg-card"
    >
      {/* Top row: number + name + links */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] text-accent tracking-[0.1em]">
            {project.num}
          </span>
          <h3 className="font-serif font-bold text-2xl tracking-tight">
            {project.name}
          </h3>
        </div>

        {/* External links */}
        {project.links.length > 0 && (
          <div className="flex gap-2">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5
                           font-mono text-[10px] font-bold tracking-[0.1em] uppercase
                           text-muted border border-border2 px-3 py-1.5
                           transition-all duration-200 hover:text-accent hover:border-accent"
              >
                <i className={link.icon} />
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Subtitle */}
      <p className="font-mono text-[11px] text-muted tracking-[0.05em] mb-5">
        {project.sub}
      </p>

      {/* Description bullets */}
      <ul className="text-muted text-sm leading-relaxed mb-5 pl-4 space-y-1.5 list-disc">
        {project.desc.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wide
                       px-2.5 py-1 bg-dim text-accent
                       border border-[rgba(0,212,255,0.15)]
                       transition-colors duration-150 hover:bg-[rgba(0,212,255,0.15)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 py-24 bg-bg2">
      <SectionHeader num="02" title="Projects" />

      {/* Cards with 1px gap acting as dividers */}
      <div className="flex flex-col gap-px bg-border">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
