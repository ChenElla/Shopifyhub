/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,jsx}',
    './src/styling/global.scss'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors:{
        'slate':{
          50:'#f8fafc'
        }
      }
    },
  },
  plugins: [],
}

