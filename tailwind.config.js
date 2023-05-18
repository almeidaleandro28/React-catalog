/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      letterSpacing: {
        wide: '0.015em'
      }
    },
  },
  plugins: [],
}

