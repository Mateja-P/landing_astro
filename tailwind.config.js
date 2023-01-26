/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '380px' },
    },
    extend: {
      colors: {
        'dark-bg': '#222222',
        'light-color': '#5B254B',
        'dark-color': '#2D2763',
        'light-text': '#666666',
        'light-input': 'rgba(255, 255, 255, 0.25)',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
