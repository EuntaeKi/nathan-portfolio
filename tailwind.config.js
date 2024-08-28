/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-red': '#EC7979',
        'app-blue': '#85ECE0',
      },
      fontFamily: {
        'clash-variable': 'ClashDisplay-Variable',
        'clash-extra-light': 'ClashDisplay-Extralight',
        'clash-light': 'ClashDisplay-Light',
        'clash-regular': 'ClashDisplay-Regular',
        'clash-medium': 'ClashDisplay-Medium',
        'clash-semibold': 'ClashDisplay-Semibold',
        'clash-bold': 'ClashDisplay-Bold',
        'inter': 'Inter',
        'bebas-neue': 'Bebas-Neue'
      }
    },
  },
  plugins: [],
}