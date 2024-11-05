/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Replace 'YourCustomFont' with your font name
      },
      screens: {
        'phone': { 'max': '470px' },
        'sm': { 'max': '700px' },      // Targets screens 576px and below
        'm': { 'min': '471px', 'max': '960px' },  // Targets screens between 577px and 960px
        'md': { 'max': '960px' },  // Targets screens between 577px and 960px
        'mac': { 'min': '961px', 'max': '1200px' },
        'lg': { 'min': '471px', 'max': '1450px' },
      }
    },
  },
  plugins: [],
}