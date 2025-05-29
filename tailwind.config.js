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
        primary: {
          light: '#f8fafc',
          dark: '#1e293b',
        },
        secondary: {
          light: '#f1f5f9',
          dark: '#334155',
        },
        accent: {
          light: '#e2e8f0',
          dark: '#475569',
        },
        text: {
          light: '#334155',
          dark: '#e2e8f0',
        },
        highlight: {
          light: '#3b82f6',
          dark: '#60a5fa',
        }
      }
    },
  },
  plugins: [],
}