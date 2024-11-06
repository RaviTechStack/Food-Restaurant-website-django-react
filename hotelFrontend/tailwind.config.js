/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./restroBg.jpg')",
      },
      fontFamily: {
        "header" : ["inter", "sans-serif"],
        "textFont" : ["poppins", "sans-serif"],
        "normalText" : ["Heebo", "sans-serif"],
        "funky" : ["Cormorant Garamond", "sans-serif"]
      },
    },
  },
  plugins: [],
}

