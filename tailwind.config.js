/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0B0B0B',
          800: '#121212',
        },
        gold: {
          DEFAULT: '#a1a1aa',
          bright: '#f4f4f5',
          deep: '#52525b',
        },
        silver: {
          DEFAULT: '#D9D9D9',
        },
        muted: '#A8A8A8',
        line: '#2A2A2A',
      },
      fontFamily: {
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tech: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        gold: '0 12px 44px -14px rgba(0, 0, 0, 0.16)',
        goldsm: '0 4px 22px -8px rgba(0, 0, 0, 0.16)',
        card: '0 24px 60px -30px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'gold-grad': 'linear-gradient(135deg, #F5F5F5 0%, #D4D4D4 100%)',
        'silver-grad': 'linear-gradient(180deg, #FFFFFF 0%, #D9D9D9 100%)',
        'gold-text': 'linear-gradient(115deg, #a1a1aa 0%, #f4f4f5 100%)',
        'silver-text': 'linear-gradient(180deg, #FFFFFF 0%, #D9D9D9 60%, #9d9d9d 100%)',
        panel: 'linear-gradient(160deg, rgba(255,255,255,0.035) 0%, rgba(11,11,11,0) 46%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(26px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 0.7, 0.3, 1) both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 36s linear infinite',
      },
    },
  },
  plugins: [],
};
