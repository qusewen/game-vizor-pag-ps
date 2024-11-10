/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Montserrat', 'sans-serif'] },
      colors: {
        bgButtonContained: '#b74020',
        bgButtonOutlined: 'rgba(255,255,255,0)',
        bgButtonDefault: 'rgba(255,255,255,0)',
        textButtonColor: 'white',
      },
      backdropBlur: { 'none': '0', 'sm': '4px', 'md': '8px', 'lg': '16px', 'xl': '24px', '2xl': '40px', '3xl': '64px' },
      backgroundPosition: { 'custom-right': '10% center' },
      keyframes: {
        wiggle: { '0%, 100%': { transform: 'rotate(0deg)' }, '25%': { transform: 'rotate(-5deg)' }, '75%': { transform: 'rotate(5deg)' } },
      },
      animation: { wiggle: 'wiggle 0.5s infinite' },
    },
  },
  plugins: [],
}
