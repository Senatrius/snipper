/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        component: '#1B1B1B',
        border: '#282828',
        text: '#DDDEEE',
        languages: {
          javascript: '#F1E05A',
          typescript: '#3178C6',
          c: '#989898',
          cplusplus: '#F34B7D',
          php: '#4F5D95',
          python: '#3572A5',
          ruby: '#E81518',
          rust: '#DEA584',
          csharp: '#219B07',
          css: '#7642C5',
          csv: '#419766',
          docker: '#5697AC',
          html: '#E34C26',
          vue: '#41B883',
          angular: '#D82530'
        }
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
