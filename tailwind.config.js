/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
  plugins: [],
}