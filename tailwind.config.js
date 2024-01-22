/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}", "./src/Components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'groove-grey': '#B3B3B3',
        'walter-white': '#FFFFFF',
        'all-black': '#101010',
        'less-black': '#1E1E1E',
        'spott-green': '#1ED760',
      }
    },
  },
  plugins: [],
}

