/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
     },
     fontWeight: {
       'normal': 400,
       'bold': 700,
     },
    },
  },
  plugins: [],
}
