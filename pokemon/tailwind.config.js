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
        'poke-grayblue': 'rgb(141, 177, 213)',
        'poke-lightyellow': 'rgb(255, 220, 135)',
        'poke-whiteyellow': 'rgb(255, 228, 168)',
        'normal': '#F5F5DC', 
        'fighting' : '#D3D3D3',
        'flying': '#87CEEB',
        'poison': '#8A2BE2',
        'ground': '#D2B48C',
        'rock': '#664228',
        'bug': '#008080',
        'ghost': '#D8BFD8',
        'steel': '#C0C0C0',
        'fire': '#FF4500',  
        'water': '#0000FF',
        'grass': '#008000',
        'electric': '#FFFF00',
        'psychic': '#FFC0CB',
        'ice': '#E0FFFF',
        'dragon': '#00CED1',
        'dark': '#A9A9A9',
        'fairy': '#FFC0CB'
      }
    },
  },
  plugins: [],
}

