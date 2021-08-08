const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  important: true,
  theme: {
    extend: {
      colors: {
        flatBlack: '#121212',
        ...colors,
      },
      minHeight: {
        64: '64px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
