/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gym-red': '#ff4d4d',
        'gym-black': '#1a1a1a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-radial': 'linear-gradient(45deg, #1a0000 0%, #3d0000 25%, #700000 50%, #3d0000 75%, #1a0000 100%)',
      },
    },
  },
  plugins: [],
}
