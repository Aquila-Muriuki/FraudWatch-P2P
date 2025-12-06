/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: "#22d3ee",
      },
      backgroundImage: {
        "grid-noise": "radial-gradient(circle at 10% 10%, rgba(34,211,238,0.03), transparent 8%), radial-gradient(circle at 90% 90%, rgba(139,92,246,0.02), transparent 12%)"
      }
    },
  },
  plugins: [],
};
