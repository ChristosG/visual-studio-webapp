/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pageContent/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        vsBackground: '#1E1E1E',
        vsForeground: '#F5F5F5',
        primary: '#FCD34D',  // Example gold/yellow
        primaryDark: '#EAB308', // Slightly darker shade
        accent: '#FFD700',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // '6xl': ['3.75rem', { lineHeight: '1.2' }],
        // '7xl': ['4.5rem', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
};
