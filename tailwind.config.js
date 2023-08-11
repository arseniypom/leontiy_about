/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './pages/**/*.html',
    './src/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      customBlue: '#01007f',
      ytRed: '#ff0000',
    },
    fontFamily: {
      shoika: ['Shoika', 'sistem-ui', 'sans-serif'],
    },
  },
  plugins: [require('flowbite/plugin')],
};
