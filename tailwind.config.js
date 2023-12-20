/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        "header-color":"#fff3e4",
        "skilline":"#65daff",
        "login":"#e68406",
        'footer':"#252641"
      },
      width:{
        "hero-45":"40%",
        "hero-55":"60%",
      },
      textColor:{
        "org":"#e68406",
      },
      borderRadius:{
        "custom":"10% 14% 50% 48% / 0% 0% 13% 16%",
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1440px',
      },
      translate:{
        "card":"950px",
      }
    },
  },
  plugins: [],
}

