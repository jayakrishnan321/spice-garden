// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
