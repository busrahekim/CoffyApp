/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#333C4B", 
        secondary: "#D4A056", 
        textColorMuted: "#4A4C5C",
        textColor: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        spaceMono: ['SpaceMono', 'monospace'],
      },
    },
  },
  plugins: [],
}

