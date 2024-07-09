/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        xl: '1400px',
        '2xl': '1530px',
      },
    },
  },
  plugins: [],
}
