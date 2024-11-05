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
        'sm': { 'max': '376px' },      // Targets screens 576px and below
        'md': { 'min': '0px', 'max': '960px' },  // Targets screens between 577px and 960px
        'mac': { 'min': '961px', 'max': '1200px' },
        'lg': { 'max': '1450px' },
      }
    },
  },
  plugins: [],
}