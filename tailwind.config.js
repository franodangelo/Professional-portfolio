/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      montserrat: "'Montserrat', sans-serif",
      hind: "'Hind', sans-serif"
    }
  },
  plugins: [],
}