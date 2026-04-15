import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b0b",
        "bg-card": "#141414",
        "bg-card-hover": "#1a1a1a",
        surface: "#1e1e1e",
        border: "rgba(255,255,255,0.08)",
        "border-hover": "rgba(255,255,255,0.15)",
        text: "#f0f0f0",
        "text-muted": "rgba(240,240,240,0.55)",
        "text-secondary": "rgba(240,240,240,0.75)",
        orange: {
          DEFAULT: "#e8650a",
          soft: "rgba(232,101,10,0.12)",
          glow: "rgba(232,101,10,0.06)"
        },
        white: "#ffffff"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
