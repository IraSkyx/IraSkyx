const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        flatBlack: '#202020',
        ...colors,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
