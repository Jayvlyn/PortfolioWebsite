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
        'surface': '#2f2f2f',
        'surface-dark': '#222222',
        'text': '#aeb1b9',
        'primary': '#f45353',
      },
    },
  },
  plugins: [],
}
export default config 