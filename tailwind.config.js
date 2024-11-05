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
        'sm': { 'max': '576px' },
        'md': { 'max': '960px' },
        'lg': { 'max': '1440px' },
      }
    },
  },
  plugins: [],
}