/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        'primary': '#0D1117',
        'secondary': '#010409',
        "blue": "#0969DA",
        'gray': '#636C76',
        'gray-light': '#FCFCFC',
      },
      boxShadow: {
        'custom-border': '0 0 1px 0 rgba(0, 0, 0, 0.5)',
        'custom-border-white': '0 0 1px 0 rgba(255, 255, 255, 1)'
      }
    },
  },
  plugins: [],
}

