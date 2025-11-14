/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',// mobile
      'md': '1024px',// tablet
      'lg': '1280px',// desktop
    },
  },
  plugins: [],
}

