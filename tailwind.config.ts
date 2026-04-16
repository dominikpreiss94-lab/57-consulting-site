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
        bg: "#ffffff",
        "bg-card": "#f7f7f7",
        "bg-card-hover": "#f0f0f0",
        surface: "#f2f2f2",
        border: "rgba(0,0,0,0.08)",
        "border-hover": "rgba(0,0,0,0.15)",
        text: "#1a1a1a",
        "text-muted": "rgba(26,26,26,0.55)",
        "text-secondary": "rgba(26,26,26,0.75)",
        orange: {
          DEFAULT: "#e8650a",
          soft: "rgba(232,101,10,0.08)",
          glow: "rgba(232,101,10,0.05)"
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
