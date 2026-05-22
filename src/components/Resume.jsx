import { RESUME_LINK } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./Shared";

const MOCK_SECTIONS = [
  { title: "Education", lines: [90, 70] },
  { title: "Skills", chips: true },
  { title: "Projects", lines: [85, 60, 80, 55] },
  { title: "Certifications", lines: [70] },
];

function ResumeMockup() {
  const ref = useReveal(0.15);

  return (
    <div
      ref={ref}
      className="reveal relative overflow-hidden min-h-[420px] flex flex-col
                 bg-card border border-border2"
    >
      {/* Fake browser chrome */}
      <div className="flex items-center justify-between bg-bg3 border-b border-border px-5 py-3">
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div
              key={c}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>
        <span className="font-mono text-[11px] text-muted tracking-wide">
          Kumar_Gaurav_Resume.pdf
        </span>
        <span />
      </div>

      {/* Skeleton body */}
      <div className="p-8 flex-1">
        <p className="font-serif font-black text-2xl tracking-tight mb-0.5">
          Kumar Gaurav
        </p>
        <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-6">
          Full-Stack Java Developer · B.Tech CSE
        </p>

        {MOCK_SECTIONS.map((sec) => (
          <div key={sec.title} className="mb-5">
            <p
              className="font-mono text-[9px] tracking-[0.15em] text-muted2 uppercase
                          mb-2 pb-1.5 border-b border-border"
            >
              {sec.title}
            </p>

            {sec.chips ? (
              <div className="flex flex-wrap gap-1">
                {[50, 60, 55, 65, 50, 58].map((w, i) => (
                  <div
                    key={i}
                    className="h-2 bg-dim border border-[rgba(0,212,255,0.1)]"
                    style={{ width: w }}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-1.5">
                {sec.lines.map((w, i) => (
                  <div
                    key={i}
                    className="h-[7px] rounded-sm bg-border2"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Gradient overlay + CTA */}
      <div
        className="absolute inset-0 flex items-end justify-center pb-6"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, #131b26 100%)",
        }}
      >
        <a
          href={RESUME_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[11px] text-accent
                     tracking-widest uppercase hover:text-white transition-colors duration-200"
        >
          <i className="fas fa-expand" />
          View full resume
        </a>
      </div>
    </div>
  );
}

export default function Resume() {
  const leftRef = useReveal();

  const BUTTONS = [
    { icon: "fas fa-download", label: "Download PDF", accent: true },
    { icon: "fas fa-eye", label: "View in browser", accent: false },
  ];

  return (
    <section id="resume" className="px-8 md:px-16 py-24 bg-bg2">
      <SectionHeader num="04" title="Resume" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        {/* Left: text + buttons */}
        <div ref={leftRef} className="reveal">
          <h3 className="font-serif font-bold text-xl tracking-tight mb-3">
            Download or view my full resume
          </h3>
          <p className="text-muted text-sm leading-loose mb-7">
            Covers education, technical skills, full project details, and
            certifications. Updated for 2025 — ready for internship and
            full-time applications.
          </p>

          <div className="flex flex-col gap-3">
            {BUTTONS.map((btn) => (
              <a
                key={btn.label}
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  btn-clip inline-flex items-center gap-3
                  px-7 py-4
                  font-mono text-[12px] font-bold tracking-[0.08em] uppercase
                  transition-all duration-200 hover:-translate-y-0.5
                  ${
                    btn.accent
                      ? "bg-accent text-bg hover:bg-white"
                      : "bg-transparent text-ink border border-border2 hover:border-accent hover:text-accent"
                  }
                `}
              >
                <i className={btn.icon} />
                {btn.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: mockup */}
        <ResumeMockup />
      </div>
    </section>
  );
}
