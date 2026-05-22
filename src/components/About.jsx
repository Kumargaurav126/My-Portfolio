import { SKILLS } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader, StatBox } from "./Shared";

export default function About() {
  const leftRef = useReveal();
  const rightRef = useReveal(0.15);

  return (
    <section id="about" className="px-8 md:px-16 py-24">
      <SectionHeader num="01" title="About" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* ── Left: bio + stats ── */}
        <div ref={leftRef} className="reveal">
          <div className="space-y-5 text-muted text-base leading-loose">
            <p>
              I'm a{" "}
              <strong className="text-ink">
                final-year Computer Science student
              </strong>{" "}
              at Lakshmi Narain College of Technology, Bhopal, with a CGPA of{" "}
              <strong className="text-ink">8.15</strong>. I specialise in
              building production-grade, full-stack applications —
              backend-first.
            </p>
            <p>
              My stack is Java + Spring Boot on the server, React on the client.
              I've shipped systems with real-time WebSocket, Gemini AI
              integration, and OAuth 2.0 secured endpoints — all deployed and
              live.
            </p>
            <p>
              Outside of shipping projects, I actively compete in DSA —{" "}
              <strong className="text-ink">600+ problems</strong> solved across
              LeetCode, GFG, and Code360.
            </p>
          </div>

          {/* 2×2 stat grid */}
          <div className="grid grid-cols-2 gap-px mt-8 border border-border overflow-hidden">
            <StatBox count={600} label="DSA problems" />
            <StatBox val="8.15" label="CGPA (B.Tech CSE)" />
            <StatBox count={3} label="Deployed projects" />
            <StatBox val="5★" label="Java · HackerRank" />
          </div>
        </div>

        {/* ── Right: skills panel ── */}
        <div
          ref={rightRef}
          className="reveal bg-card border border-border p-8 space-y-6"
        >
          {/* Heading */}
          <h3 className="font-serif font-black text-xl text-ink tracking-tight">
            Technical Skills
          </h3>
          {SKILLS.map(({ cat, tags }) => (
            <div key={cat}>
              {/* Category label */}
              <p className="font-mono text-[10px] text-accent tracking-[0.15em] uppercase mb-2">
                {cat}
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-muted border border-border2
                               px-3 py-1 cursor-default tracking-wide
                               transition-all duration-150
                               hover:border-accent hover:text-accent hover:bg-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
