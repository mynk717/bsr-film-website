/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'marqueeReverse': {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'marquee': "marquee 25s linear infinite",
        'marqueeReverse': "marqueeReverse 25s linear infinite",
      }
    },
  },
  plugins: [],
}
