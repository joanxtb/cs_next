/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,tsx,mdx}",
      "./components/**/*.{js,ts,tsx,mdx}",
      "./app/**/*.{js,ts,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {},
          secondary: {},
          black: {
            DEFAULT: "#000000"
          },
          white: {
            "100": "#E5E5E5",
            DEFAULT: "#FFFFFF"
          },
          red: {
            "400": "#0000FF",
            DEFAULT: "#DC3545"
          },
          green: {
            "400": "#00CC00",
            DEFAULT: "#00CC00"
          }
        },
        fontFamily: {
          "montserrat": ["var(--font-montserrat-sans)"]
        }
      }
    },
    plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/typography")
    ]
  };
  