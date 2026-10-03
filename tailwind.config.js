/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#08090C',
          surface: '#0F1318',
          card: '#151921',
          border: '#222936',
          muted: '#8A94A6',
          green: '#00FF87',
          'green-glow': 'rgba(0, 255, 135, 0.15)',
          cyan: '#60EFFF',
          purple: '#A78BFA',
          accent: '#00FF87'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'neon': '0 0 20px -3px rgba(0, 255, 135, 0.25)',
        'neon-strong': '0 0 35px -2px rgba(0, 255, 135, 0.45)',
        'cyan-glow': '0 0 25px -3px rgba(96, 239, 255, 0.25)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
