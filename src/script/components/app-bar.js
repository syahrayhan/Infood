import logo from '../../assets/infood.png'

class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    console.log(logo)
    this.innerHTML = /* html */ `
      <img src='${logo}'>
    `
  }
}

customElements.define('app-bar', AppBar)
