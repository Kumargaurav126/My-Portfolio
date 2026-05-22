import { useRef, useEffect, useState } from "react";

// ─── useReveal ────────────────────────────────────────────────────────────────
// Attaches an IntersectionObserver to a ref.
// Adds the "visible" class once the element scrolls into view,
// triggering the .reveal.visible CSS transition defined in index.css.
//
// Usage:
//   const ref = useReveal();
//   <div ref={ref} className="reveal"> ... </div>

export function useReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

// ─── useCounter ───────────────────────────────────────────────────────────────
// Animates a number from 0 to `target` with an ease-out cubic curve.
// Starts when `active` flips to true (triggered externally via IntersectionObserver).
//
// Usage:
//   const [active, setActive] = useState(false);
//   const count = useCounter(600, active);

export function useCounter(target, active) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration  = 1500;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [active, target]);

  return value;
}
