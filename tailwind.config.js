/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atomic_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "lg": {'max': '1025px'},

        "md": {'max': '769px'},

        "sm": {'max': '426px'},
      },
      fontFamily: {
        body: ['"Open Sans"', "sans"],
        marker: ['"Permanent Marker"', "cursive"],
      },
      backgroundImage: {
        'hero': 'url("/public/amtesSwe.png")', 
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary1: "#EA843A",
        primary2: "#00BC99",
        primary3: "#918DFF"
      },
      spacing: {
        xPadding: "5%",
        sPadding: "2rem"
      }
    },
  },
  plugins: [],
}
