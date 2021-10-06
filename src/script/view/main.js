import 'regenerator-runtime'
import '../components/app-bar'
import '../components/slide-over'
import '../components/list-item'
import '../components/detail-recipie'
import '../components/search-bar'

import DataSource from '../data/data-source'

// dijalankan ketika halaman utama dimuat

const main = async () => {
  const showPanelButton = document.querySelector('#show-panel-button')
  const closePanelButton = document.querySelector('#close-panel-button')
  const panelSavedItems = document.querySelector('#panel-saved-items')
  const listItem = document.querySelector('list-item')
  const searchElement = document.querySelector('search-bar')

  const renderResult = result => {
    listItem.dataRecipe = result
  }

  // const fallbackResult = message => {
  //   listItem.renderError = message
  // }

  showPanelButton.addEventListener('click', () => {
    let ctr = 0
    window.setTimeout(() => {
      panelSavedItems.classList.remove('hidden')
      fadein()
    }, 0)

    function fadein () {
      panelSavedItems.style.opacity = ctr !== 10 ? '0.' + ctr : 1
      ctr++

      if (ctr < 11) { requestAnimationFrame(fadein) } else { ctr = 0 }
    }
  })

  closePanelButton.addEventListener('click', () => {
    let ctr = 0
    fadeout()
    window.setTimeout(() => {
      panelSavedItems.classList.add('hidden')
    }, 100)

    function fadeout () {
      panelSavedItems.style.opacity = 1 - ('0.' + ctr)
      ctr++
      console.log(ctr)
      if (ctr < 10) { requestAnimationFrame(fadeout) } else { ctr = 0 }
    }
  })

  const onButtonSearchClicked = async () => {
    try {
      console.log(searchElement)
      const req = await DataSource.getSearchRecipe(searchElement.searchValue)
      const results = req.results
      if (!results.length) {
        alert('Maaf data yang kamu cari tidak ada, coba resep lain yuk')
      }
      renderResult(results)
    } catch (message) {
      alert(message)
    }
  }

  try {
    const res = await DataSource.getRecipes()
    renderResult(res.results)
  } catch (error) {
    console.log(error)
  }

  searchElement.clickEvent = onButtonSearchClicked
}

// dijalankan ketika page detail dimuat

const detail = async () => {
  const showDetailRecipe = document.querySelector('detail-recipie')

  const renderDetail = result => {
    showDetailRecipe.detailRecipe = result
  }

  try {
    const urlParams = new URLSearchParams(window.location.search)
    const keyParam = urlParams.get('key')
    const res = await DataSource.getDetailRecipe(keyParam)
    renderDetail(res.results)
  } catch (error) {
    console.log(error)
  }
}

export { main, detail }
