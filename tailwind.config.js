/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif']
      },
    },
    colors: {
      'rust': '#b7410e',
    },
    listStyleType:{
      square: 'square',
      roman: 'upper-roman',
      disc: 'disc',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}