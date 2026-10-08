/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["\"Source Serif 4\"", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "color-mix(in srgb, var(--bg) calc(<alpha-value> * 100%), transparent)",
        surface: "color-mix(in srgb, var(--surface) calc(<alpha-value> * 100%), transparent)",
        raised: "color-mix(in srgb, var(--raised) calc(<alpha-value> * 100%), transparent)",
        line: "color-mix(in srgb, var(--line) calc(<alpha-value> * 100%), transparent)",
        fg: "color-mix(in srgb, var(--fg) calc(<alpha-value> * 100%), transparent)",
        muted: "color-mix(in srgb, var(--muted) calc(<alpha-value> * 100%), transparent)",
        faint: "color-mix(in srgb, var(--faint) calc(<alpha-value> * 100%), transparent)",
        accent: "color-mix(in srgb, var(--accent) calc(<alpha-value> * 100%), transparent)",
      },
    },
  },
  plugins: [],
};
