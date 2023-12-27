module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        Dancing: [ '"Dancing Script"','Open Sans']
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};


