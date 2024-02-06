/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'modal-animation': 'modal-animation 0.3s ease-in-out',
      },
      keyframes: {
        'modal-animation': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  }
}
