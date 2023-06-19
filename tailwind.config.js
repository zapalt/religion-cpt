/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      fontFamily:
      {
        'SpaceGrotesk': ['"Space Grotesk"'],
        'Unbounded': ['"Unbounded"'],
        'PlayfairDisplay': ['"Playfair Display"'],
        'Montserrat': ['"Montserrat"'],
        'Vollkorn': ['"Vollkorn"'],
      },
      colors: {
        'c0': {
          100: '#EAE2B7',
          200: '#FCBF49',
          300: '#F77F00',
          400: '#D62828',
          500: '#003049'
        },
        'c1': {
          100: '#CAD2C5',
          200: '#84A98C',
          300: '#52796F',
          400: '#354F52',
          500: '#2F3E46'
        },
        'c2': {
          100: '#E0FBFC',
          200: '#98C1D9',
          300: '#3D5A80',
          400: '#EE6C4D',
          500: '#293241'
        },
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'islam': "url('media/islam/islam.jpg')",
        'judaism': "url('media/judaism/judaism.jpg')",
        'statue': "url('media/christianity/statue.jpg')",
        'img1': "url('media/home/religions.jpg')",
        'img0': "url('media/home/aerial.jpg')",
        'map': "url('media/home/map.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('preline/plugin'),
  ],
}