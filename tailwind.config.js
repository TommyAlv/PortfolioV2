/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ['./*.html','./assets/html/*.html'],
  theme: {
    fontFamily: {
      'komet': ['komet', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
