/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#050816",          // dark background
        card: "#0f172a",        // dark surface
        bgLight: "#f5f5f7",     // light background
        cardLight: "#ffffff",   // light surface
        accent: "#6366f1",      // main accent
      },
    },
  },
  plugins: [],
};
