import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // ── Custom colour palette ──────────────────────────────────────────
      colors: {
        bg: "#080b10",
        bg2: "#0d1117",
        bg3: "#111820",
        card: "#131b26",
        accent: "#00d4ff",
        dim: "rgba(0,212,255,0.08)",
        glow: "rgba(0,212,255,0.18)",
        border: "rgba(255,255,255,0.07)",
        border2: "rgba(255,255,255,0.13)",
        ink: "#e8edf5",
        muted: "#7a8899",
        muted2: "#4a5568",
      },

      // ── Custom fonts ───────────────────────────────────────────────────
      fontFamily: {
        serif: ["Unbounded", ...defaultTheme.fontFamily.serif],
        sans: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        mono: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },

      // ── Custom animations ──────────────────────────────────────────────
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gridPulse: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        revealUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "grid-pulse": "gridPulse 6s ease-in-out infinite",
        blink: "blink 1s infinite",
        reveal: "revealUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
      },

      // ── Clip path utility ──────────────────────────────────────────────
      clipPath: {
        btn: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
      },
    },
  },
  plugins: [],
};
