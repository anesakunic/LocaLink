/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'urbanist': ['Urbanist', 'sans-serif'],
    },
    colors: {
      'transparent': 'transparent',
      'nav': '#8794ba',
      'blue':'#172755',
      'font': '#FFFFFF',
      'pink': '#EF2A82'
    },
  },
  plugins: [],
}