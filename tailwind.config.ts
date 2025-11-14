import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2a7ae2',
      },
      fontFamily: {
        'kc': ['KC', 'sans-serif'],
        'spring': ['spring', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

