/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        component: '#1B1B1B',
        border: '#282828',
        text: '#DDDEEE'
      },
      fontSize: {
        title: '2rem',
        link: '1rem',
        body: '0.875rem',
        small: '0.75rem'
      }
    }
  },
  plugins: []
};
