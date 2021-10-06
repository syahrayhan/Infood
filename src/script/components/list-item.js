/* eslint-disable accessor-pairs */
import './item-card'

class ListItem extends HTMLElement {
  set dataRecipe (data) {
    this._dataRecipe = data
    this.render()
  }

  render () {
    this.innerHTML = /* html */''
    this._dataRecipe.forEach(data => {
      const recipeItem = document.createElement('item-card')
      recipeItem.dataRecipe = data
      recipeItem.eventDetail = this._eventDetail
      this.appendChild(recipeItem)
    })
  }
}

customElements.define('list-item', ListItem)
