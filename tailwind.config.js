
module.exports = {
  mode: 'jit',
  purge: {
    // mode: 'all',
    content: [
      './src/**/**/*.js',
      './src/*.html',
      './*.js'
    ],
    options: {
      keyframes: true,
    },
  },
  corePlugins: {
    float: false,
  },
  darkMode: false,
  theme: {
    colors: {
      white: '#ffffff',
      gray: {
        primary: '##8c8c91',
      },
      black: {
        primary: '#050505',
      },
      red: {
        primary: '#fb1514',
        secondary: '#cf1811',
        alternative: '#990000',
      },
      yellow: {
        primary: '#24a164',
      },
      green: {
        primary: '#26aa69',
      },
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url("/src/img/hero.jpg")',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
