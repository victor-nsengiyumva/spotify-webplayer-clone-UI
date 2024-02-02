/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,jsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#121212', // the grey of containers
        'custom-color-2':'#242323', // the lighter gray of the create playlist container
        'custom-color-3':'#070708',  // the nav bar color on the home outlet
        'custom-color-4' :'#1b1c1c' // music card bg b4 hover
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
        "53.3px": "53.3px",
        "163.63px":"163.63px",
        '273px':'273px',

      },
      width:{
        "73%":"73%",
        "27%":"27%",
        "163.63px":"163.63px",
        "196px": "196px",



      },
      minHeight:{
        "560":"560px",
        "163.63px":"163.63px",

      },
  
      maxHeight:{
        "163.63px":"163.63px",

      }
   
    },
  },
  plugins: [],
}

