module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'md2': '930px',
      'lg': '1024px',
      'lg2': '1120px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
