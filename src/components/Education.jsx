const EDUCATION = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Lakshmi Narain College of Technology, Bhopal",
    year: "2022 – 2026",
    grade: "CGPA: 8.15 / 10.00",
    icon: "fas fa-graduation-cap",
    current: true,
  },
  {
    degree: "Class XII — CBSE",
    institution: "R.O.S Public School",
    year: "2021",
    grade: "76.8%",
    icon: "fas fa-school",
    current: false,
  },
  {
    degree: "Class X — CBSE",
    institution: "Modern Indian School",
    year: "2019",
    grade: "90.6%",
    icon: "fas fa-school",
    current: false,
  },
];

export default function Education() {
  return (
    <section id="education" className="px-8 md:px-16 py-24 bg-bg2">
      <div className="max-w-4xl mx-auto">

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

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border2 hidden md:block" />

          <div className="space-y-6">
            {EDUCATION.map((edu, i) => (
              <div
                key={edu.institution}
                className="project-card bg-card border border-border p-6 md:p-8 md:ml-12 relative animate-reveal"
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex absolute -left-[49px] top-8 w-[22px] h-[22px] rounded-full border-2 border-accent bg-bg2 items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                  {/* Left — degree + institution */}
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-sm border border-border2 flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,212,255,0.06)" }}
                    >
                      <i className={`${edu.icon} text-accent text-sm`} />
                    </div>
                    <div>
                      <h3 className="font-serif font-black text-lg text-ink tracking-tight leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Right — year + grade */}
                  <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                    <span className="font-mono text-[11px] text-muted tracking-widest uppercase">
                      {edu.year}
                    </span>
                    <span
                      className="font-mono text-[12px] font-bold px-3 py-1 border"
                      style={{
                        color: "#00d4ff",
                        borderColor: "rgba(0,212,255,0.3)",
                        background: "rgba(0,212,255,0.06)",
                      }}
                    >
                      {edu.grade}
                    </span>
                    {edu.current && (
                      <span className="font-mono text-[10px] tracking-widest uppercase text-accent flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Currently enrolled
                      </span>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
