/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur-pattern': "url('/background.png')", // <- use / for public folder
      },
      colors: {
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
      fontFamily: {
        delta: ['DeltaGothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
