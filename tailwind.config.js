/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope-Regular"],
        manrope_light: ["Manrope-Light"],
        manrope_medium: ["Manrope-Medium"],
        manrope_bold: ["Manrope-Bold"],
      },
      colors: {
        primary: '#C4E703'
      }
      
    },
  },
  plugins: [],
}