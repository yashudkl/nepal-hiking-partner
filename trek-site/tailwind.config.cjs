module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Zodiak', 'serif']
      },
      colors: {
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490'
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          500: '#737373',
          700: '#404040',
          900: '#171717'
        }
      }
    }
  },
  plugins: []
}
