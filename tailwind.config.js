/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}","./presentation/**/*.{js,ts,jsx,tsx}" ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors: {
        primary: '#49129c',
        secondary: {
          DEFAULT: '#b40086',
          100: '#c51297',
          200: '#831266',
        },
        tertiary: '#EF2967'

      },

      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

