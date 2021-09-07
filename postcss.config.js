const cssnano = require('cssnano')
const purgecss = require('@fullhuman/postcss-purgecss')
// postcss.config.js
module.exports = {
  plugins: [
    // require('postcss-discard-comments'),
    // require('postcss-discard-empty'),
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production'
      ? cssnano({ preset: 'default' })
      : null,
    purgecss({
      content: [
        './src/**/**/*.js',
        './src/*.html',
        './*.js'
      ],
    })
  ],
}
