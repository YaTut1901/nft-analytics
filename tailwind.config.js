/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'modal-animation': 'modal-animation 0.3s ease-in-out',
        'spin-slow': 'spin-slow 3s linear infinite',
        'shine': 'shine 2s infinite'
      },
      keyframes: {
        'modal-animation': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shine': {
          '0%': { 'background-position': '-100px' },
          '100%': { 'background-position': '200px' },
        }
      },
    },
  }
}