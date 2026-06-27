import { ACHIEVEMENTS } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./Shared";

function AchCard({ achievement, index }) {
  const ref = useReveal(index * 0.12);

  return (
    <div
      ref={ref}
      className="reveal bg-bg2 p-8 border-b-[3px] border-transparent
                 transition-all duration-250
                 hover:bg-card hover:border-accent hover:-translate-y-1"
    >
      {/* Icon */}
      <span className="text-3xl mb-5 block">{achievement.icon}</span>

      {/* Title */}
      <h3 className="font-serif font-bold text-base tracking-tight mb-2">
        {achievement.title}
      </h3>

      {/* Description */}
      <p className="text-muted text-sm leading-relaxed">{achievement.desc}</p>

      {/* Links (shown below description if present) */}
      {achievement.links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {achievement.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] text-accent tracking-wide
                         underline underline-offset-2 decoration-transparent
                         transition-all duration-150 hover:decoration-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="px-8 md:px-16 py-24">
      <SectionHeader num="04" title="Achievements" />

      {/* 3-col grid; 1px gaps act as dividers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {ACHIEVEMENTS.map((ach, i) => (
          <AchCard key={ach.title} achievement={ach} index={i} />
        ))}
      </div>
    </section>
  );
}
