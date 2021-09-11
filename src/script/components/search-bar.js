class SearchBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */ `
    <div class='relative text-center mt-12'>
      <input placeholder='Resep soto sedap' class='w-full rounded-full p-4 font-medium pr-28 focus:text-black-alternative focus:outline-none focus:shadow-xl'>
      <button type='submit' class='px-6 inset-y-0 absolute right-0 m-2 rounded-full bg-orange-primary text-white font-semibold'>Cari</button>
    </div>
    `
  }
}

customElements.define('search-bar', SearchBar)
