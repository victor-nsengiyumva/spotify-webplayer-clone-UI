/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#121212',
        'custom-color-2':'#242323'
      },
      minWidth:{
        'custom1':'680px',
        
      },
      fontFamily:{
        body:"Roboto, sans-serif"
      },
      height: {
        "85%":"85%",
        "70%":"70%",
        "90%":"90%",
        "87%":"87%",
        "27%":"27%",
        "53.3px": "53.3px"
      },
      width:{
        "73%":"73%",
        "27%":"27%"
      },
      minHeight:{
        "560":"560px"
      },
   
   
    },
  },
  plugins: [],
}

