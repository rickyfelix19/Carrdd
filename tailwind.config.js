/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#f36163'
      }
    }
  },
  plugins: []
};
