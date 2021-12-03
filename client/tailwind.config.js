module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': {'max': '640px'},
      'desktop': {'min': '641px'}
    },
    extend: {},
    colors: {
      body: '#FDF7F2',
      textCommon: '#343433',
      primarylightest: '#E2EFE1',
      primarylighter: '#C8FACD',
      primarylight: '#5BE584',
      primarymain: '#00AB55',
      primarydark: '#007B55',
      primarydarker: '#005249',
      primarycontrastText: '#fff',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
