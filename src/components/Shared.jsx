import { useRef, useEffect, useState } from "react";
import { useReveal, useCounter } from "../hooks/useReveal";

// ─── SectionHeader ────────────────────────────────────────────────────────────
// Numbered section heading with a horizontal rule.
// Example:  01  About  ─────────────────────────────────────────────────────

export function SectionHeader({ num, title, delay = 0 }) {
  const ref = useReveal(delay);

  return (
    <div ref={ref} className="reveal section-header">
      {/* Number */}
      <span className="font-mono text-[11px] text-accent tracking-[0.15em]">
        {num}
      </span>

      {/* Title */}
      <h2 className="font-serif font-bold text-2xl md:text-4xl tracking-tight whitespace-nowrap">
        {title}
      </h2>

      {/* Decorative rule */}
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

// ─── StatBox ─────────────────────────────────────────────────────────────────
// A single stat tile. If `count` is provided the number counts up from 0
// when scrolled into view. Otherwise `val` is rendered as a static string.
//
// Props:
//   val   — static string (e.g. "8.15", "5★")
//   label — description under the number
//   count — numeric target for animation (optional)

export function StatBox({ val, label, count }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const counted = useCounter(count || 0, active && !!count);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card border border-border px-7 py-6 transition-colors duration-200 hover:bg-bg3"
    >
      {/* Value */}
      <span className="font-serif font-black text-4xl text-accent tracking-tight block mb-1">
        {count ? (active ? `${counted}+` : "0") : val}
      </span>

      {/* Label */}
      <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}
