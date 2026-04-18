/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'brand': {
          'bg': '#F7F6F1',
          'dark': '#111111',
          'pink': '#FCBAF8',
          'blue': '#0A84FF',
          'green': '#24D39A',
          'orange': '#FF5828',
          'gray': '#D6D6D6',
        }
      },
      fontFamily: {
        heading: ["Syne", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'brutal': '4px 4px 0px rgba(0,0,0,1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      }
    },
  },
  plugins: [],
};
