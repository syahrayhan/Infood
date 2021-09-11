import notFoundImage from '../../assets/item-not-found.png'

class NotFound extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <div class='block'>
      <img src='${notFoundImage}' class='w-72 mx-auto'>
      <h2 class='text-center mx-auto font-poppins font-semibold text-black opacity-80 text-xl'>Yuk tambahkan dulu resep pilihan kamu</h2>
    </div>
    `
  }
}

customElements.define('not-found', NotFound)
