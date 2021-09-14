/* eslint-disable accessor-pairs */
import starIcon from '../../assets/star.png'
import timeIcon from '../../assets/time.png'

class ItemCard extends HTMLElement {
  set dataRecipe (data) {
    this._dataRecipe = data
    this.render()
  }

  render () {
    const { title, thumb, times, key } = this._dataRecipe
    const baseUrl = '../../detail'
    this.innerHTML = /* html */`
    <div class='max-w-sm hover:shadow-2xl rounded-xl'>
      <div class='relative'>
        <div class='overflow-hidden rounded-xl'>
          <img src='${thumb}' alt='' class='rounded-xl hover:scale-110 transform ease-in-out duration-100 '>
        </div>
        <button class='absolute right-0 top-0 mt-2 mr-2 px-3 bg-yellow-400 bg-opacity-50 hover:bg-opacity-100 rounded-md text-white font-ubuntu'>Simpan</button>
      </div>
      <div class='bg-white p-4 mt-2 rounded-xl '>
        <a class='title-recipe-card' href='${baseUrl}?key=${key}'>
          <h4 class='font-ubuntu font-semibold text-black opacity-80 hover:text-orange-alternative transform ease-linear duration-100'>${title}</h4>
        </a>
          <div class='mt-8 flex justify-between'>
            <h5 class='text-white font-poppins px-2 py-1 rounded-full text-sm bg-orange-secondary self-center inline-flex gap-1'><span><img src='${timeIcon}' class='w-5'></span> ${times}</h5>
            <div class='self-center'><img src='${starIcon}' class='w-20'></div>
          </div>
      </div>
    </div>
    `
  }
}

customElements.define('item-card', ItemCard)
