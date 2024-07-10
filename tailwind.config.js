/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react"

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  plugins: [nextui()],
}
