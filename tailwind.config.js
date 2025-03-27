/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        shine: {
          '0%': { transform: 'translateX(-100%) rotate(30deg)' },
          '100%': { transform: 'translateX(100%) rotate(30deg)' }
        }
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        shine: 'shine 3s linear infinite'
      },
      rotate: {
        '30': '30deg'
      }
    },
  },
  plugins: [],
}
