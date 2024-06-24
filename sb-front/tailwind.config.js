/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
    screens: {
      sm:'576px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
      xxl:'1700px'
    }
  },
  plugins: [],
}

