/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./assets/html/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
