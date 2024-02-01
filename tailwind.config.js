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
      },
      height: {
        "85%":"85%",
        "70%":"70%"
      },
      width:{
        "73%":"73%"
      }
    },
  },
  plugins: [],
}

