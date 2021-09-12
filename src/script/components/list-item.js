import './item-card'

class ListItem extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <div class='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4'>
      <item-card></item-card>
    </div>
    `
  }
}

customElements.define('list-item', ListItem)
