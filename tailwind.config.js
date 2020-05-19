module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.js'],
  theme: {
    fontFamily: {
      tufc_sans: ['Open Sans', 'sans-serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        tufc_yellow: '#ffd900',
        tufc_black: '#343434',
        tufc_red: '#aa4243',
        tufc_blue: '#213166',
        // white: '#fff',
      },
    },
    listStyleType: {
      square: 'square',
      roman: 'upper-roman',
    },
  },
  variants: {},
  plugins: [],
};
