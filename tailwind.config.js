/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'honey-gold': '#FFB800',
        'honey-dark': '#B45309',
        'nature-white': '#FDFBF7',
      },
    },
  },
  plugins: [],
}