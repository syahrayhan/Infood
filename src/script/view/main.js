import '../components/app-bar'
import '../components/slide-over'
import '../components/list-item'
import '../components/item-card'
import '../components/detail-recipie'

import DataSource from '../data/data-source'

const main = async () => {
  const showPanelButton = document.querySelector('#show-panel-button')
  const closePanelButton = document.querySelector('#close-panel-button')
  const panelSavedItems = document.querySelector('#panel-saved-items')
  const listItem = document.querySelector('list-item')
  // const showDetailRecipe = document.querySelector('detail-recipie')

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

  const renderResult = result => {
    listItem.dataRecipe = result
  }

  try {
    const res = await DataSource.getRecipes()
    const result = res.results
    renderResult(result)
  } catch (error) {
    console.log(error)
  }

  // listItem.eventDetail = async function () {
  //   const key = this._dataRecipe.key
  //   console.log(key)
  //   const res = await DataSource.getDetailRecipe(key)
  //   console.log(res.results)
  //   console.log(showDetailRecipe)
  //   renderDetail(res.results)
  // }
}

const detail = async () => {
  const showDetailRecipe = document.querySelector('detail-recipie')

  const renderDetail = result => {
    showDetailRecipe.detailRecipe = result
  }

  try {
    const urlParams = new URLSearchParams(window.location.search)
    const keyParam = urlParams.get('key')
    const res = await DataSource.getDetailRecipe(keyParam)
    console.log(res.results)
    renderDetail(res.results)
  } catch (error) {
    console.log(error)
  }
}

export { main, detail }
