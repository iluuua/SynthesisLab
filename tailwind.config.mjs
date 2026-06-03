/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md}'],
  theme: {
    extend: {
      colors: {
        ink: '#3D5377',
        periwinkle: '#9DB0D6',
        surface: '#F4F6FA',
        accent: '#E8924A',
        muted: '#6B7689',
        line: '#E4E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};