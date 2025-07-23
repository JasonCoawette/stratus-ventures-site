import type { Config } from 'tailwindcss'
import lineClamp from '@tailwindcss/line-clamp'

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'], // tell Tailwind what to scan
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
    },
  },
}

export default config