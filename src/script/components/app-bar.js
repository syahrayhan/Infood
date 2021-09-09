import logo from '../../assets/infood.png'

class AppBar extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
      <nav class='py-4 px-16'>
        <div class='flex justify-between'>
          <div>
            <a href='#'>
              <img src='${logo}' alt='logo infood' width='90px'>
            </a>
          </div>
          <div>
            <ul>
              <li><a href='' class=''>Tersimpan</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `
  }
}

customElements.define('app-bar', AppBar)
