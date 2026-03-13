/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // body: Inter — sharpest UI font, exceptional small-size legibility
        sans:    ["Inter", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
        // heading: Plus Jakarta Sans — modern, professional, tight tracking
        heading: ["Plus Jakarta Sans", "Helvetica Neue", "system-ui", "sans-serif"],
        // display: Cormorant Garamond — editorial serif for large hero titles only
        display: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        gold: {
          300: "#f0cc60",
          400: "#d9a820",
          500: "#c09018",
          600: "#a07812",
          700: "#826010",
        },
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight:   "-0.025em",
        snug:    "-0.015em",
        normal:  "-0.011em",
        wide:     "0.04em",
        wider:    "0.08em",
        widest:   "0.16em",
        caps:     "0.35em",
      },
    },
  },
  plugins: [],
};
