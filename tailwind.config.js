/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6464',
        secondary: '#2f0a0a',
        backgroundSecondary: '#421212',
        textPrimary: '#f6cccd'
      },
    },
  },
  plugins: [],
}

