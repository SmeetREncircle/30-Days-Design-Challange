/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ms': '320px',
        'mm': '375px',
        'ml': '425px'
      },
    },
  },
  plugins: [],
}