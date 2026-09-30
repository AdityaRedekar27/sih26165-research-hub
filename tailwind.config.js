/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050811',
          900: '#070d1d',
          850: '#0a1226',
          800: '#0e172f',
          750: '#121f3f',
          700: '#18274d',
          600: '#233868',
        },
        sif: {
          red: '#ef4444',
          orange: '#f97316',
          amber: '#f59e0b',
          glow: 'rgba(239, 68, 68, 0.15)',
        },
        brand: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          sky: '#38bdf8',
          teal: '#14b8a6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle-glow': '0 0 25px -5px rgba(6, 182, 212, 0.1)',
        'risk-glow': '0 0 25px -5px rgba(239, 68, 68, 0.15)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
