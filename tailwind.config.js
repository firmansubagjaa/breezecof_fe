/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FFBA33",
          secondary: "#6A4029",
          accent: "#F8F8F8",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/assets/png/herobanner1.png')",
        'auth-banner': "url('/src/assets/png/bannerAuth.png')",
        'map-banner': "url('/src/assets/svg/map.svg')"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [require('daisyui')],
}
