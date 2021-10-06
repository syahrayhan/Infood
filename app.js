import 'regenerator-runtime'

import './src/styles/style.css'
import './src/script/components/app-bar.js'
import './src/script/components/hero-section'
import './src/script/components/content-section'
import './src/script/components/slide-over'
import './src/script/components/footer'

import { main, detail } from './src/script/view/main'

document.addEventListener('DOMContentLoaded', () => {
  const pathUrl = window.location.pathname.split('/').pop()
  if (pathUrl === 'detail.html') {
    detail()
  } else {
    main()
  }
})
