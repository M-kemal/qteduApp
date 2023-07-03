/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : "jit",
  purge : ["./src/**/*.vue"],
  theme: {
    darkMode: 'class',
    extend: {
      container : true,
      fontFamily : {
        'playFlair' : ['Playfair Display', 'serif'],
        'avenirAlter': ['Barlow', 'sans-serif']
      },
      screens: { // px
        'h4': '400px',
        'h6': '600px',
        'h8': '800px',
        'k1': '1000px',
        'k15': '1500px',
        'k2': '2000px',
        'k25': '2500px',
        'k3': '3000px',
        'k35': '3500px',
    },
    extend: {
        animation: {
            'wiggle': 'wiggle 0.5s ease-in-out',
        },
        colors: {
            neutral: '#e5e7eb',
            tileBackground: '#d5fff7',
            digiPurple: '#6f00ff',
        },
        keyframes: {
            wiggle: {
                '0%': {transform: 'rotate(0deg)'},
                '33%': {transform: 'rotate(-3deg)'},
                '66%': {transform: 'rotate(3deg)'},
                '100%': {transform: 'rotate(0deg)'},
            },

            flash: {
                '0%': {opacity: "0"},
                '50%': {opacity: "100"},
                '100%': {opacity: "0"},
            }

        },
    },
    },
  },
  plugins: [],
}