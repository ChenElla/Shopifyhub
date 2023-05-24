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
      borderRadius:{
        'sm':'5px'
      },
      colors:{
        'bage':{
          50:'rgba(235, 236, 239, 1)'
        },
        'slate':{
          0:'rgba(255, 255, 255, 1)',
          50:'#F0F0F0'
        },
        'green':{
          1000:"rgba(12, 59, 47, 1)",
          900:'#004B3E',
          800:"rgba(0, 122, 92, 1)"
        }
      }
    },
  },
  plugins: [],
}

