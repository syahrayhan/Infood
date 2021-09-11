class ItemCard extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <div class='max-w-sm hover:shadow-2xl rounded-xl'>
      <div class='relative'>
        <div class='overflow-hidden rounded-xl'>
          <img src='https://www.masakapahariini.com/wp-content/uploads/2018/08/nugget-tempe-MAHI-400x240.jpg' alt='' class='rounded-xl hover:scale-110 transform ease-in-out duration-100 '>
        </div>
        <button class='absolute right-0 top-0 mt-2 mr-2 px-3 bg-yellow-alternative rounded-md text-white-primary'>Simpan</button>
      </div>
      <div class='bg-white-primary p-4 mt-2 rounded-xl'>
        <a href='#'>
          <h4 class='font-ubuntu font-semibold text-black-alternative hover:text-orange-alternative transform ease-linear duration-100'>Resep Nugget Tempe Mozzarella, Camilan Baru untuk Keluarga di Rumah</h4>
        </a>
          <div class='mt-8 flex justify-between'>
            <h5 class='text-white-primary font-poppins px-2 py-1 rounded-full text-sm bg-orange-secondary self-center'>1jam 30mnt</h5>
            <div class='self-center'>hh</div>
          </div>
      </div>
    </div>
    `
  }
}

customElements.define('item-card', ItemCard)
