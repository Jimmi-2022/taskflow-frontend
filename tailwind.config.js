/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'max-content': 'max-content',
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
      colors: {
        'primary': '#0162e6',
        'secondary': '',
        'accent': '',
        gray: {
          100: '#f1f3f4',
          200: '#f5f5f5',
          300: '#e6e6e6',
          400: '#a0aec0',
          500: '#718096',
          600: '#555',
          700: '#2d3748',
          800: '#333',
          900: '#171923',
        },
        cyan: {
          100: '#e0f7fa',
        },
        yellow: {
          500: '#ffbc5a',
        },
        blue: {
          500: '#2196f3',
        },
      },
    },
  },
  plugins: [],
}


