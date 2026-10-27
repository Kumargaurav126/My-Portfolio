const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lakshmi Narain College of Technology, Bhopal",
    year: "2022 – 2026",
    grade: "CGPA: 8.19 / 10.00",
    icon: "fas fa-graduation-cap",
    current: false,
    graduated: true,
  },
  {
    degree: "Class XII — CBSE",
    institution: "R.O.S Public School",
    year: "2021",
    grade: "76.8%",
    icon: "fas fa-school",
    current: false,
    graduated: false,
  },
  {
    degree: "Class X — CBSE",
    institution: "Modern Indian School",
    year: "2019",
    grade: "90.6%",
    icon: "fas fa-school",
    current: false,
    graduated: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="px-8 md:px-16 py-24 bg-bg2">

      {/* Section header */}
      <div className="section-header">
        <span className="font-mono text-[11px] text-accent tracking-[0.2em] uppercase">
          03
        </span>
        <span className="flex-1 h-px bg-border" />
        <h2 className="font-serif font-black text-3xl md:text-4xl text-ink tracking-tight">
          Education
        </h2>
        <span className="flex-1 h-px bg-border" />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-px bg-border">
        {EDUCATION.map((edu, i) => (
          <div
            key={edu.institution}
            className="project-card bg-card p-6 md:p-8 relative animate-reveal"
            style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
          >
            {/* Top row — icon + degree + year/grade */}
            <div className="flex items-start justify-between gap-4">

              {/* Left — icon + degree + institution */}
              <div className="flex items-start gap-3 min-w-0">
                <div
                  className="w-9 h-9 rounded-sm border border-border2 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,212,255,0.06)" }}
                >
                  <i className={`${edu.icon} text-accent text-xs`} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-black text-base md:text-lg text-ink tracking-tight leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-[10px] text-accent tracking-[0.1em] uppercase mt-1 break-words">
                    {edu.institution}
                  </p>
                </div>
              </div>

              {/* Right — year + grade */}
              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase whitespace-nowrap">
                  {edu.year}
                </span>
                <span
                  className="font-mono text-[11px] font-bold px-2.5 py-0.5 border whitespace-nowrap"
                  style={{
                    color: "#00d4ff",
                    borderColor: "rgba(0,212,255,0.3)",
                    background: "rgba(0,212,255,0.06)",
                  }}
                >
                  {edu.grade}
                </span>
              </div>

            </div>

            {/* Status badge — only for B.Tech */}
            {(edu.current || edu.graduated) && (
              <div className="mt-4 pt-4 border-t border-border">
                {edu.current ? (
                  <span className="font-mono text-[10px] tracking-widest uppercase text-accent flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Currently enrolled
                  </span>
                ) : (
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase text-accent flex items-center gap-1.5"
                    style={{ textShadow: "0 0 8px rgba(0,212,255,0.6)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent"
                      style={{ boxShadow: "0 0 6px rgba(0,212,255,0.8)" }}
                    />
                    Graduated
                  </span>
                )}
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
}
