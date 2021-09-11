const cssnano = require('cssnano')
// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-discard-comments'),
    require('postcss-discard-empty'),
    require('tailwindcss'),
    require('autoprefixer'),
    cssnano({ preset: 'default' })
  ],
}
