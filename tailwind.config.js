/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./assets/html/*.html'],
  theme: {
    fontFamily: {
      'komet': ['komet', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
