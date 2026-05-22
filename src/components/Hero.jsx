import { useState, useEffect, useCallback } from "react";
import photo from "/src/assets/photo.png";

const EYEBROW = "Full-Stack Developer · DSA Enthusiast";

const BUTTONS = [
  {
    href: "#projects",
    label: "View work",
    icon: "fas fa-arrow-down",
    accent: true,
    blank: false,
  },
  {
    href: "https://github.com/Kumargaurav126",
    label: "GitHub",
    icon: "fab fa-github",
    accent: false,
    blank: true,
  },
  {
    href: "#resume",
    label: "Resume",
    icon: "fas fa-file-lines",
    accent: false,
    blank: false,
  },
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [mousePos, setMousePos] = useState({ x: -300, y: -300 });

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(EYEBROW.slice(0, ++i));
      if (i >= EYEBROW.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, []);

  const onMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-center px-8 md:px-16 py-24 overflow-hidden"
    >
      {/* Pulsing grid background */}
      <div
        className="absolute inset-0 pointer-events-none animate-grid-pulse"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Cursor glow */}
      <div
        className="fixed w-[420px] h-[420px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)",
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
          transition: "left 0.1s, top 0.1s",
        }}
      />

      {/* Layout: stacked on mobile, two-column on md+ */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* PHOTO — mobile only (centered above text) */}
        <div className="relative flex md:hidden items-center justify-center p-6">
          <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent" />
          <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent" />
          <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent" />
          <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent" />
          <div
            className="w-[180px] h-[180px] rounded-full border-2 border-accent overflow-hidden"
            style={{ boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
          >
            <img
              src={photo}
              alt="Kumar Gaurav"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* LEFT — text content */}
        <div className="flex-1">
          {/* Eyebrow */}
          <p className="flex items-center gap-3 font-mono text-[12px] tracking-[0.2em] text-accent uppercase mb-6 animate-fade-up animation-delay-100">
            <span className="inline-block w-8 h-px bg-accent" />
            {typed}
            <span className="animate-blink text-accent">|</span>
          </p>

          {/* Main heading */}
          <h1 className="font-serif font-black leading-[0.92] tracking-tight mb-8 text-[clamp(4rem,11vw,8.5rem)] animate-fade-up animation-delay-200">
            KUMAR
            <br />
            <span className="gradient-text">GAURAV</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted text-lg leading-relaxed max-w-[520px] mb-12 animate-fade-up animation-delay-300">
            Final-year CSE student building production-grade apps with{" "}
            <strong className="text-ink">Java, Spring Boot &amp; React</strong>.
            600+ DSA problems solved. I ship real things that work.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up animation-delay-400">
            {BUTTONS.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.blank ? "_blank" : undefined}
                rel={btn.blank ? "noopener noreferrer" : undefined}
                className={
                  "btn-clip inline-flex items-center gap-2 px-9 py-[0.9rem] font-mono text-[12px] font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:-translate-y-0.5 " +
                  (btn.accent
                    ? "bg-accent text-bg hover:bg-white"
                    : "bg-transparent text-ink border border-border2 hover:border-accent hover:text-accent")
                }
              >
                <i className={btn.icon} />
                {btn.label}
              </a>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-3 mt-16 font-mono text-[11px] text-muted2 tracking-widest uppercase animate-fade-up animation-delay-500">
            Scroll to explore
            <span className="inline-block w-12 h-px bg-muted2" />
          </div>
        </div>

        {/* RIGHT — photo on md+ */}
        <div className="relative flex-shrink-0 hidden md:flex items-center justify-center animate-fade-up animation-delay-300 p-8">
          <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent" />
          <div
            className="w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] xl:w-[340px] xl:h-[340px] rounded-full border-2 border-accent overflow-hidden"
            style={{ boxShadow: "0 0 40px rgba(0,212,255,0.15)" }}
          >
            <img
              src={photo}
              alt="Kumar Gaurav"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
