import './ingredient-section'
import './step-section'

import plateIcon from '../../assets/plate.svg'
import timeIcon from '../../assets/time.png'

class DetailRecipie extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
      <div class='w-full h-auto mb-16 bg-orange-soft p-8 xl:p-16'>
        <div class='flex flex-col items-center'>
          <div class='max-w-5xl w-full sm:w-8/12 hover:shadow-orange rounded-xl'>
            <div class='overflow-hidden rounded-xl'>
              <img src='https://www.masakapahariini.com/wp-content/uploads/2018/08/nugget-tempe-MAHI-780x440.jpg' alt='' class='rounded-xl scale-125 hover:scale-110 transform ease-in-out duration-100 '>
            </div>
            <div class='rounded-xl flex flex-col gap-y-3 bg-white px-4 py-8 mt-4'>
              <h2 class='text-black opacity-80 font-ubuntu font-semibold text-2xl'>Resep Nugget Tempe Mozzarella, Camilan Baru untuk Keluarga di Rumah</h2>
              <p class='text-black opacity-80 font-poppins font-medium text-base'>Tim MAHI - Agustus 13, 2018</p>
              <div class='inline-flex gap-x-8'>
                <h5 class='bg-orange-secondary text-white font-poppins pl-2 pr-3 py-1 rounded-full inline-flex items-center'><span><img src='${plateIcon}' class='mr-1'></span>2 Porsi</h5>
                <h5 class='bg-orange-secondary text-white font-poppins pl-2 pr-3 py-1 rounded-full inline-flex items-center'><span><img src='${timeIcon}' class='mr-1'></span>40mnt</h5>
              </div>
              <h4 class='text-black opacity-80 font-poppins font-semibold text-lg mt-3'>bahan - bahan :</h4>
             
              <ingredient-section></ingredient-section>

              <h4 class='text-black opacity-80 font-poppins font-semibold text-lg mt-3'>Cara membuat :</h4>
             
              <step-section></step-section>

            </div>
          </div>
          <button class='sticky bg-orange-primary opacity-70 font-ubuntu font-bold p-2 hover:opacity-100 hover:shadow-orange rounded-md text-white self-end bottom-5'>Simpan</button>
        </div>
      </div>
    `
  }
}

customElements.define('detail-recipie', DetailRecipie)
