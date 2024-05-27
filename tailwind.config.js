/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      aspectRatio: {
        none: 0,
        square: [1, 1],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "21/9": [21, 9]
      },


      fontFamily: {
        'sans': ["REM", ],
      'serif':  ["Playfair Display"],
      'mono':  ["Reddit Mono"],
      'accent':  ["Anton"],
      'body':  ["Monsterrat"],

      },

      colors: {
        "main-bg": "#fffffe",
        "headline": "#2b2c34",
        "paragraph": "#2b2c34",
        "text-secondary": "#fffffe",
        "text-primary": "#2b2c34",
        "highlight": "#6246ea",
        "secondary": "#d1d1e9",
        "tertiary": "#e45858",
        "accent-primary": "#72757e",
        "accent-secondary": "#303633",
      },
    },
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {},
  }, 
  plugins: [
  ],
}

