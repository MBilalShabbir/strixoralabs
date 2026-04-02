import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight:   "-0.02em",
      },
      colors: {
        // ── Primary — Indigo. Authority, intelligence, precision.
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",   // primary interactive
          600: "#4f46e5",   // hover / CTA
          700: "#4338ca",   // active / pressed
          800: "#3730a3",   // deep accent
          900: "#312e81",
          950: "#1e1b4b",   // near-black tint
        },
        // ── Secondary — Violet. AI, ML, intelligence contexts.
        violet: {
          50:  "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",   // AI/ML accent
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        // ── Dark surfaces — fine-grained depth scale.
        surface: {
          DEFAULT: "#080810",  // true base
          "1":     "#0d0d14",  // card background
          "2":     "#111119",  // elevated card
          "3":     "#16161f",  // highest elevation
          border:  "#1c1c28",  // structural borders
        },
      },
      backgroundImage: {
        // Subtle grid — reduced opacity for premium feel
        "grid-fine":
          "linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
        // Hero aurora glow
        "aurora":
          "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(99,102,241,.18) 0%, rgba(139,92,246,.08) 40%, transparent 70%)",
        // Spotlight from top-right
        "spotlight":
          "radial-gradient(600px circle at 100% 0%, rgba(99,102,241,.12), transparent 50%)",
        // CTA inner glow
        "cta-radial":
          "radial-gradient(ellipse 70% 70% at 50% 100%, rgba(99,102,241,.14), transparent)",
        // Noise (faked with CSS, real noise via SVG filter in globals)
        "noise":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        "grid-fine": "32px 32px",
      },
      animation: {
        "fade-up":    "fadeUp .55s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in":    "fadeIn .4s ease forwards",
        "float":      "float 7s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "pulse-dot":  "pulseDot 2.5s ease-in-out infinite",
        "shimmer":    "shimmer 2.2s linear infinite",
        "beam":       "beam 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%":      { opacity: "0.5", transform: "scale(0.85)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        beam: {
          "0%":   { transform: "translateX(-100%) rotate(45deg)" },
          "100%": { transform: "translateX(400%) rotate(45deg)" },
        },
      },
      boxShadow: {
        // Glow rings
        "glow-xs":  "0 0 0 1px rgba(99,102,241,.18), 0 0 12px rgba(99,102,241,.1)",
        "glow-sm":  "0 0 0 1px rgba(99,102,241,.22), 0 0 24px rgba(99,102,241,.14)",
        "glow-md":  "0 0 0 1px rgba(99,102,241,.28), 0 0 40px rgba(99,102,241,.18)",
        // Card elevations
        "card-xs":  "0 1px 2px rgba(0,0,0,.4)",
        "card-sm":  "0 2px 8px rgba(0,0,0,.35), 0 1px 2px rgba(0,0,0,.3)",
        "card-md":  "0 4px 20px rgba(0,0,0,.45), 0 1px 3px rgba(0,0,0,.3)",
        "card-lg":  "0 12px 40px rgba(0,0,0,.55), 0 2px 8px rgba(0,0,0,.3)",
        // Inset highlight (top edge light)
        "inset-t":  "inset 0 1px 0 rgba(255,255,255,.07)",
        "inset-t-brand": "inset 0 1px 0 rgba(99,102,241,.2)",
      },
      // Apple/Stripe use very specific, restrained transition curves
      transitionTimingFunction: {
        "spring":     "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-spring":  "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
