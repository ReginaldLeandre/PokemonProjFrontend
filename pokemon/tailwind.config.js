/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'poke-yellow': 'rgb(255, 195, 48)',
        'poke-blue': 'rgb(33, 86, 158)',
        'poke-darkblue':'rgb(14, 37, 81)', 
        'poke-lightblue': 'rgb(183, 222, 253)', 
        'poke-lightyellow': 'rgb(255, 220, 135)'
      }
    },
  },
  plugins: [],
}

