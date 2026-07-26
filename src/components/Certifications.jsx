import { SectionHeader } from "./Shared";

const CERTIFICATIONS = [
  {
    title: "Java Full Stack Development",
    issuer: "Wipro TalentNext Program",
    icon: "fas fa-certificate",
    link: "https://drive.google.com/file/d/1R4Yynhh-yy2Ff27d1rJqzo1L9770-foO/view?usp=sharing",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "Infosys Springboard",
    icon: "fas fa-certificate",
    link: "https://drive.google.com/file/d/1jjuMFxQbzN7YtfZq4mtBVtG2ETriO7ro/view?usp=sharing",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-8 md:px-16 py-24 bg-bg">
      <SectionHeader num="05" title="Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={cert.title}
            className="project-card bg-card border border-border p-6 animate-reveal"
            style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
          >
            <div className="flex items-start justify-between gap-4">

              {/* Left — icon + title + issuer */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-sm border border-border2 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,212,255,0.06)" }}
                >
                  <i className={`${cert.icon} text-accent text-sm`} />
                </div>
                <div>
                  <h3 className="font-serif font-black text-base text-ink tracking-tight leading-snug">
                    {cert.title}
                  </h3>
                  <p className="font-mono text-[10px] text-accent tracking-[0.1em] uppercase mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Right — view link */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 font-mono text-[11px] text-muted
                           border border-border2 px-3 py-1.5
                           hover:border-accent hover:text-accent
                           transition-all duration-200"
              >
                <i className="fas fa-external-link-alt text-[9px]" />
                View
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
