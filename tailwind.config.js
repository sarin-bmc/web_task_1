/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bmcbg:{
          200: '#f1edfd',
          400: '#EEE9FC',
          600: '#e4dbfa',
        },
        bmc:{
          'yellow': '#FFDD00',
          'fuchsia': '#ce30ff',
          'indigo': '#667EF7',
          'orange': '#F66140',
          secondary:{
            'font':'#222222B2'
          }
        }
      },
      fontFamily:{
        'circular':['Circular','sans-serif']
      },
      animation:{
        fadeIn: "fadeIn 1s ease-in forwards",
        popUp: "popUp 1s ease-in forwards",
      },
      keyframes:{
        fadeIn:{
          "0%":{opacity:0},
          "100%":{opacity:1}
        }
      }
    },
  },
  variants:{
    animation:["motion-safe"]
  },
  plugins: [],
}