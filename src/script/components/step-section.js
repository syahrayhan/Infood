class StepSection extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <ul class='flex flex-col gap-y-3'>
      <li class='text-base opacity-80 font-medium font-poppins'>1 Kukus tempe sampai lunak.</li>
      <li class='text-base opacity-80 font-medium font-poppins'>2 Masukkan semua bahan kecuali putih telur ke dalam food processor atau ulekan. Haluskan.</li>
      <li class='text-base opacity-80 font-medium font-poppins'>3 Bentuk seperti nugget, celup ke dalam putih telur dan tepung panir. Sisipkan keju mozarella yang sudah dipotong dadu.</li>
      <li class='text-base opacity-80 font-medium font-poppins'>4 Goreng tempe hingga keemasan. Angkat dan sisihkan.</li>
      <li class='text-base opacity-80 font-medium font-poppins'>5 Sajikan dengan saus tomat serta labu siam dan wortel berukuran mini yang telah kukus.</li>
    </ul>
    `
  }
}

customElements.define('step-section', StepSection)
