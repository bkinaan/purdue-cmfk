import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'ss3': ['Source Sans 3', 'sans-serif'],
        'grandstander': ['Grandstander', 'cursive'],
        'rock-salt': ['Rock Salt', 'cursive'],
        'gloria-hallelujah': ['Gloria Hallelujah', 'cursive'],
        'permanent-marker': ['Permanent Marker', 'cursive'],
        'nova-square': ['Nova Square', 'sans-serif'],
        'kanit': ['Kanit', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'rubik-bubbles': ['Rubik Bubbles', 'cursive'],
        'zeyada': ['Zeyada', 'cursive'],
      },
      colors: {
        'custom-green': '#8ED081',
        // 'custom-green': '#000000',
        'custom-gold': '#cd9e39',
        'custom-light-orange': '#faf0dc'

      },
    },
    variants: {
      extend: {
        translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        rotate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      },
    },
  },
  plugins: [],
}
export default config
