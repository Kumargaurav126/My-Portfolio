import { CONTACT_LINKS } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { SectionHeader } from "./Shared";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="px-8 md:px-16 py-24">
      <SectionHeader num="05" title="Contact" />

      <div
        ref={ref}
        className="reveal relative overflow-hidden bg-card border border-border
                   grid grid-cols-1 lg:grid-cols-2 gap-16 items-center
                   p-10 md:p-20"
      >
        {/* Decorative top-right radial glow */}
        <div
          className="absolute -top-28 -right-28 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Left: heading */}
        <div className="relative z-10">
          <h2
            className="font-serif font-black tracking-tight leading-none mb-4
                         text-[clamp(2rem,4vw,3.5rem)]"
          >
            Let's build
            <br />
            <span className="text-accent">something</span>
            <br />
            great.
          </h2>
          <p className="text-muted text-sm leading-loose max-w-sm">
            Open to internships, full-time roles, and interesting
            collaborations. Especially excited about backend-heavy or full-stack
            opportunities with Java and Spring Boot.
          </p>
        </div>

        {/* Right: contact links */}
        <div className="relative z-10 flex flex-col gap-3">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted no-underline
                         font-mono text-[13px] tracking-wide
                         px-5 py-4 border border-border
                         transition-all duration-200
                         hover:text-ink hover:border-border2 hover:bg-bg3 hover:translate-x-1"
            >
              <i className={`${link.icon} text-accent w-[18px] text-center`} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
