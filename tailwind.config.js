/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Change these tokens to re-skin the whole app.
        accent: '#1DB954',
        'accent-hover': '#1ED760',
        base: '#000000',
        panel: '#121212',
        raised: '#1A1A1A',
        hover: '#2A2A2A',
        muted: '#B3B3B3',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
