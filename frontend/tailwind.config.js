/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Retro arcade palette (OKLCH for vivid neon)
      colors: {
        space: {
          950: "oklch(0.14 0.02 260)",   // deep space bg
          900: "oklch(0.18 0.03 260)",
        },
        neon: {
          blue:  "oklch(0.76 0.20 240)", // player bolts / accents
          cyan:  "oklch(0.82 0.13 220)",
          purple:"oklch(0.62 0.23 304)", // enemies / UI glow
          magenta:"oklch(0.70 0.22 330)",
          lime:  "oklch(0.80 0.20 135)", // score pop
          gold:  "oklch(0.82 0.18 95)",  // coins / CTA
        },
      },
      boxShadow: {
        glow: "0 0 20px rgba(120, 82, 255, .6), 0 0 40px rgba(0, 180, 255, .35)",
      },
      backgroundImage: {
        starfield:
          "radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,.35), transparent 60%), radial-gradient(1px 1px at 70% 60%, rgba(255,255,255,.28), transparent 60%), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,.20), transparent 60%)",
      },
    },
  },
  plugins: [],
}
