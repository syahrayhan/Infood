
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
      orange: {
        primary: 'var(--orange-primary)',
        secondary: 'var(--orange-secondary)',
        alternative: 'var(--orange-opacity)',
        soft: 'var(--orange-soft)',
      },
      yellow: {
        primary: 'var(--yellow-primary)',
        alternative: 'var(--yellow-opacity)',
      },
      black: {
        alternative: 'var(--black-opacity)',
      },
      white: {
        primary: 'var(--white-primary)',
        alternative: 'var(--white-opacity)',
      },
      gray: {
        alternative: 'var(--gray-opacity)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
