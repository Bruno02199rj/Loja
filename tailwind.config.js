/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
 
    plugins: [require('flowbite/plugin')],
  
  theme: {
    extend: { 
      zIndex:{
        '1': '-1'
      },
      rotate:{
        'negativedeg': '-2deg'
      },
      colors:{
        'color-main' : '#fef8f1',
        'figma-color': '#F4F6F5'
    }},
  },

  
}