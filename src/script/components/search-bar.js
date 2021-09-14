/* eslint-disable accessor-pairs */
class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get searchValue () {
    return this.querySelector('#search-element').value
  }

  render () {
    this.innerHTML = /* html */ `
    <div class='relative text-center'>
      <input id='search-element' placeholder='Resep soto sedap' class='w-full rounded-full p-4 font-medium pr-28 text-black opacity-80 focus:outline-none focus:shadow-xl'>
      <button id='search-button' type='submit' class='absolute right-0 inset-y-0 bg-orange-primary px-5 my-1 mr-1 rounded-full font-ubuntu font-semibold text-white'>Cari</button>
    </div>
    `

    this.querySelector('#search-button').addEventListener('click', this._clickEvent)
  }
}

customElements.define('search-bar', SearchBar)
