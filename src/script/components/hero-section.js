import heroModel from '../../assets/hero-model.png'
import chefIcon from '../../assets/chef.png'
import menuIcon from '../../assets/menu.png'
import foodIcon from '../../assets/food.png'

class HeroSection extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <div class='hero w-full bg-cover '>
      <div class='px-8 flex flex-col lg:flex-row items-center justify-center py-6 md:px-16'>
        <div class='flex flex-col'>
          <div class='max-w-3xl mt-6'>
            <h1 class='font-pacifico text-white text-5xl text-center lg:text-left'>Hello foodfans !</h1>
            <h2 class='font-poppins text-white text-2xl md:text-3xl mt-16 leading-normal italic text-center lg:text-left'>Galau masakan kamu kurang lezat ?
              <br>cukup temukan dan <b>ikuti resepnya</b> hidangan kamu akan <b>terasa lebih lezat</b>
            </h2>
          </div>
          <div class='mt-16 flex flex-row flex-wrap gap-4 z-0 justify-center lg:justify-start'>
            <div class='card-icon w-auto'>
              <div class='flex flex-col xl:flex-row items-center p-5'>
                <img src='${chefIcon}' alt='' width='60'>
                <h4 class='text-white opacity-80 text-lg font-medium'>Profesional</h4>
              </div>
            </div>
            <div class='card-icon w-auto'>
              <div class='flex flex-col  xl:flex-row items-center p-5 '>
                <img src='${menuIcon}' alt='' width='60'>
                <h4 class='text-white opacity-80 text-lg font-medium'>Semua bisa</h4>
              </div>
            </div>
            <div class='card-icon w-auto'>
              <div class='flex flex-col xl:flex-row  items-center p-5 '>
                <img src='${foodIcon}' alt='' width='60'>
                <h4 class='text-white opacity-80 text-lg font-medium'>Pasti Lezat</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src='${heroModel}' alt='' class='object-contain' width='600'>
        </div>
      </div>    
    </div>
    `
  }
}

customElements.define('hero-section', HeroSection)
