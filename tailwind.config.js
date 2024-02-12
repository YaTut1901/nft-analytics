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