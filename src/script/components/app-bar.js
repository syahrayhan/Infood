/* eslint-disable accessor-pairs */
import logo from '../../assets/infood.png'

class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  set cardCountRecipie (cardCountRecipie) {
    this._cardCountRecipie = cardCountRecipie
    this.render()
  }

  render () {
    console.log(logo)
    this.innerHTML = /* html */`
      <nav class='py-4 px-8 sm:px-16 z-100'>
        <div class='flex justify-between items-center'>
          <div>
            <a href='../../'>
              <img src='${logo}' alt='logo infood' width='90px'>
            </a>
          </div>
          <div>
            <ul>
              <li class='hidden'>
                <button id='show-panel-button' class='flex flex-col text-orange-primary text-lg font-medium text-center'>
                Tersimpan
                <span class='bg-orange-primary rounded-full text-white w-full hover:shadow-orange'>0</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `
  }
}

customElements.define('app-bar', AppBar)
