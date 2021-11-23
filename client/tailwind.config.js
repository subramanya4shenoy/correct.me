module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      body: '#FDF7F2',
      textCommon: '#343433'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
