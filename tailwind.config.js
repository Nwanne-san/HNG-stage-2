

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#6D1E6D",
        neutral: "#F5F5F5",
        secondary: "#E4B363",
        gray: '#333333'
      },
      fontFamily: {
        playfair: ["Playfair_Display",'serif'],
        lato: ["Lato", 'sans-serif']
      },
    },
  },
  plugins: [],
};
