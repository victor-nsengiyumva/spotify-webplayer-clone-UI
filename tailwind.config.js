/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#121212',
      },
      minWidth:{
        'custom1':'680px'
      },
      fontFamily:{
        body:"Roboto, sans-serif"
      }
    },
  },
  plugins: [],
}

