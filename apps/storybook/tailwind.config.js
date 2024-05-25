import { fontFamily } from 'tailwindcss/defaultTheme'
import neumorphism from 'tailwindcss-neumorphism-ui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./.storybook/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [neumorphism],
}
