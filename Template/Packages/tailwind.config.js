/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../Pages/*.html",
    "../Dist/js/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
  ],
}

