const { colors } = require('tailwindcss/defaultTheme')

const appColors = {
  appOrange: '#FD8224',
  appPurple: '#9062F7',
  appBlue: '#22B1EF',
  appPink: '#BB6EA2',
}

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
        ...appColors,
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
