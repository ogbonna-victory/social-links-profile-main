/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      height: {
        '128': '28rem',
      },
      colors: {
        green: "hsl(75, 94%, 57%)",
        whiteshade: "hsl(0, 0%, 100%)",
        lightgrey: "hsl(0, 0%, 20%)",
        grey800: "hsl(0, 0%, 12%)",
        grey900: "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: ["inter" , "sans-serif"],
      },
      fontSize:{
        small: ["14px"]
      }
    },
  },
  plugins: [],
}

