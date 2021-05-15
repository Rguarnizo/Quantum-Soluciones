module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nikon': ['nikon'],
        'sony': ['sony'],
        'canon': ['canon'],
        'go-pro': ['go-pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
