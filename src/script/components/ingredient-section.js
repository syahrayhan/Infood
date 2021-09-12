class IngredientSection extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <ul class='flex flex-col gap-y-3'>
      <li class='text-base opacity-80 font-medium font-poppins'>1 papan tempe</li>
      <li class='text-base opacity-80 font-medium font-poppins'>3 siung bawang putih, cincang</li>
      <li class='text-base opacity-80 font-medium font-poppins'>1 batang seledri, cincang</li>
      <li class='text-base opacity-80 font-medium font-poppins'>1 butir kuning telur</li>
      <li class='text-base opacity-80 font-medium font-poppins'>2 sdm Royco Kaldu Ayam</li>
      <li class='text-base opacity-80 font-medium font-poppins'>1 batang daun ketumbar, cincang</li>
      <li class='text-base opacity-80 font-medium font-poppins'>minyak goreng</li>
      <li class='text-base opacity-80 font-medium font-poppins'>1 butir putih telur</li>
      <li class='text-base opacity-80 font-medium font-poppins'>1 kotak keju mozzarella</li>
      <li class='text-base opacity-80 font-medium font-poppins'>100 g tepung panir</li>
    </ul>
    `
  }
}

customElements.define('ingredient-section', IngredientSection)
