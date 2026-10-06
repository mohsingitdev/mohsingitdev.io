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
        canvas: {
          DEFAULT: '#090A0E',
          subtle: '#0D0F14',
          surface: '#12151D',
          card: '#161922',
          cardElevated: '#1B1F2A',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderHover: 'rgba(255, 255, 255, 0.18)',
        },
        luxury: {
          gold: '#E5C07B',
          amber: '#F59E0B',
          bronze: '#D97706',
          champagne: '#F3E8D6',
          platinum: '#E2E8F0',
          silver: '#94A3B8',
          charcoal: '#27272A',
          indigo: '#6366F1',
          violet: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'luxury-glow': '0 0 35px -5px rgba(229, 192, 123, 0.15)',
        'indigo-glow': '0 0 35px -5px rgba(99, 102, 241, 0.18)',
        'subtle-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
        'portrait-shadow': '0 25px 60px -15px rgba(0, 0, 0, 0.9)'
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
