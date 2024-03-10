/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'modal-animation': 'modal-animation 0.3s ease-in-out',
        'slide-in': 'slide-in 0.5s forwards',
      },
      keyframes: {
        'modal-animation': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: 0},
          '100%': { transform: 'translateX(0)', opacity: 1},
        },
      },
    },
  }
}