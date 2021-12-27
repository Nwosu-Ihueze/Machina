module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      fontFamily : {
        sans : [ 'Machina', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["stylelint-css"],
  "rules" : {
    "at-rule-no-unknown" : null,
    "scss/at-rule-no-unknown" : true,
  }
}
