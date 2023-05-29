/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {      // 'md': {'max': '768px'},

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      boxShadow: {
        '3xl': '0 0 2px'
      },
      spacing: {
        '20px' : '20px',
        'card-margin' : '10px 15px 40px 10px'
      }
    },
  },
  plugins: [],
}

