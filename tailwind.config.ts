import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          400: "#FF4500",
          200: "#FFA500"
        },
        dark: "#222"
      },
      fontFamily: {
        roboto: ['var(--font-roboto-slab)']
      }
    }
  },
  plugins: [],
}
export default config
