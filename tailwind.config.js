/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        darkNav: '#10002B',
        light: '#b9f6d2',
        lightBlue:'#b9d6f2'
      }
    },
  },
  darkMode:'class',
  plugins: [],

}