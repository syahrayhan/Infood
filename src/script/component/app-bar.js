class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */ `
    <h1 class="my-4 py-2 text-left pl-16 text-3xl text-white font-extrabold italic">24Up</h1>
    `
  }
}

customElements.define('app-bar', AppBar)
