/* eslint-disable no-dupe-keys */
module.exports = {
  // mode: 'jit',
  purge: {
    mode: 'all',
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
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      white: '0px 13px 56px 2px rgba(255, 255, 255, 0.3)',
      none: 'none',
    },
    fontFamily: {
      pacifico: ['Pacifico', 'cursive'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      auto: 'auto',
    },
    screens: {
      xs: '360px',

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1190px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/hero-bg.png')",
      }),
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
