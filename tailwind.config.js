/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    fontFamily: {
      'display': ['Arimo', 'sans-serif'],
      'body': ['PT Serif']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}