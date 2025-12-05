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
        primary: "#00C2FF",
        darkbg: "#0E1217"
      },
      backdropBlur: {
        xs: "2px"
      }
    }
  },
  plugins: [],
};
