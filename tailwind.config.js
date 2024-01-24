/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#121212',
      },
      minWidth:{
        'custom1':'680px'
      }
    },
  },
  plugins: [],
}

