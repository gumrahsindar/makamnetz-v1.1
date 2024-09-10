/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inder: ['Inder', 'sans-serif'],
        baskerville: ['Liber Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}
