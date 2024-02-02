/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#121212', // the grey of containers
        'custom-color-2':'#242323', // the lighter gray of the create playlist container
        'custom-color-3':'#070708'  // the nav bar color on the home outlet
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

