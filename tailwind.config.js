/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0162e6',
        'secondary': '#2d3748',
        'accent': '#4a5568',
        gray: {
          200: '#f5f5f5',
          300: '#e6e6e6',
          400: '#a0aec0',
          500: '#718096',
          600: '#555',
          700: '#2d3748',
          800: '#333',
          900: '#171923',
        },
      },
      fontFamily: {
        custom: [
          'Arial', 'sans-serif',
          '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          'sans-serif'
        ],
        code: [
          'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
          'monospace'
        ],
      },
    },
  },
  plugins: [],
}


