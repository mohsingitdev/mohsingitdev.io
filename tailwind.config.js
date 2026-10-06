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
          DEFAULT: 'var(--bg-canvas, #121110)',
          subtle: 'var(--bg-canvas-subtle, #181715)',
          surface: 'var(--bg-canvas-surface, #1E1D1A)',
          card: 'var(--bg-canvas-card, #24221E)',
          cardElevated: 'var(--bg-canvas-card-elevated, #2E2A24)',
          border: 'var(--border-canvas, rgba(240, 230, 215, 0.08))',
          borderSubtle: 'var(--border-canvas-subtle, rgba(240, 230, 215, 0.04))',
          borderHover: 'var(--border-canvas-hover, rgba(217, 119, 87, 0.35))',
        },
        luxury: {
          gold: '#DA7756',
          amber: '#E28743',
          bronze: '#BF5634',
          champagne: '#F5EBE6',
          platinum: '#EDE4DE',
          silver: '#A8A199',
          charcoal: '#282522',
          indigo: '#D97757',
          violet: '#C15F3D',
        },
        terracotta: {
          DEFAULT: '#D97757',
          dark: '#B85D3E',
          deep: '#8A3E25',
          light: '#E88E72',
          soft: '#F5B8A5',
          glow: 'rgba(217, 119, 87, 0.35)',
        },
        cardLight: {
          DEFAULT: '#FAF7F2',
          surface: '#F2EDE4',
          hover: '#FFFFFF',
          textMain: '#1C1917',
          textMuted: '#78716C',
          border: 'rgba(28, 25, 23, 0.08)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'luxury-glow': '0 0 35px -5px rgba(217, 119, 87, 0.25)',
        'apple-card': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
        'apple-elevated': '0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.06)',
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
