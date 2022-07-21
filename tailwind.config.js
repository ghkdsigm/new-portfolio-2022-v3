module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: false,
  darkMode: "class", // Tailwindcss 3.0 default is 'media',  'class'
  theme: {
    extend: {
      colors:{
        //primary: '#1DA1F2',
        primary: '#ffb300',
        secondary: '#fff',
        third: '#11216b',
        dark: '#1a91da',
        light: '#a5d0f5',
        lighter: '#D4E5F4',
        bgWhite: '#e1e1e1',

        'primary-dark': '#0D2438',
				'secondary-dark': '#000',
        'third-dark': '#ffb300',
				'ternary-dark': '#1E3851',
        'bgDark': '#35353C'
      },
      container: {
        // screen: {
        //   '3xl': { max: '1800px' },
        // },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '0rem',
        },
        margin: {
          '35vh': '35vh',
        },
        fontSize:{
          '17vh' : '17vh',
          '16vh' : '16vh',
          '15vh' : '15vh',
          '14vh' : '14vh',
          '13vh' : '13vh',
          '12vh' : '12vh',
          '11vh' : '11vh',
          '10vh' : '10vh',
          '9vh' : '9vh',
          '8vh' : '8vh',
          '7vh' : '7vh',
          '6vh' : '6vh',
          '5vh' : '5vh',
          '4vh' : '4vh',
          '3vh' : '3vh'
        }
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1600px',
          },
          '@screen 2xl': {
            maxWidth: '2900px',
          }
        }
      })
    }
  ]
}
