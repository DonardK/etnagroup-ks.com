/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'creamy': '#F8F2DD',
        'green': '#657432',
      },
    },
  },
  plugins: [],
}
