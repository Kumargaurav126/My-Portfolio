import { useState, useEffect } from "react";

const NAV_LINKS = ["about", "projects", "achievements", "resume", "contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 flex justify-between items-center
        px-8 md:px-16 py-5
        border-b border-border
        backdrop-blur-md
        transition-all duration-300
        ${
          scrolled ? "bg-bg/95 shadow-[0_2px_30px_rgba(0,0,0,0.4)]" : "bg-bg/88"
        }
      `}
    >
      {/* Logo */}
      <div className="font-mono text-[13px] text-muted flex items-center gap-2">
        <strong className="text-ink font-bold">KG</strong>
        <span className="text-accent">·</span>
        <span>kumar gaurav</span>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="nav-link font-mono text-[12px] tracking-widest text-muted uppercase
                         transition-colors duration-200 hover:text-accent"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <button
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
        className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-[22px] h-px bg-ink transition-all duration-300"
            style={{
              transform: menuOpen
                ? i === 0
                  ? "rotate(45deg) translate(4px,4px)"
                  : i === 2
                  ? "rotate(-45deg) translate(4px,-4px)"
                  : "none"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 backdrop-blur-md
               border-b border-border flex flex-col gap-5 p-6 z-50
               shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          style={{ backgroundColor: "#080b10" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-widest text-muted uppercase
                         hover:text-accent transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
