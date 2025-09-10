// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
      background: '#0B0E11',
      surface: '#181A20',
      primary: '#13181dff',
      text: '#EAECEF',
      muted: '#848E9C',
      border: '#2B3139',
      danger: '#F6465D',
    }
    },
  },
  plugins: [],
};
