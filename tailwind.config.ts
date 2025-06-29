import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{html,ts,md,analog,ag}'],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#D97706',
        background: '#ffffff',
        surface: '#f5f5f5',
        onSurface: '#1a1a1a',
        border: '#e5e5e5',
        accent: '#0ea5e9',
        error: '#dc2626',
        success: '#16a34a'
      }
    }
  },
  plugins: []
} satisfies Config;
