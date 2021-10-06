/* eslint-disable accessor-pairs */
import './slide-over'

import plateIcon from '../../assets/plate.svg'
import timeIcon from '../../assets/time.png'
import notFound from '../../assets/item-not-found.png'

class DetailRecipie extends HTMLElement {
  set detailRecipe (data) {
    this._detailRecipe = data
    this.render()
  }

  render () {
    const { title, thumb, times, servings, author, ingredient, step } = this._detailRecipe
    this.innerHTML = /* html */`
      <div class='w-full h-auto mb-16 bg-orange-soft p-8 xl:p-16'>
        <div class='flex flex-col items-center'>
          <div class='max-w-5xl w-full sm:w-8/12 hover:shadow-orange rounded-xl'>
            <div class='overflow-hidden rounded-xl text-center'>
              <img src='${thumb || notFound}' alt='' width=' ${thumb ? '100%' : '50%'}' class='mx-auto rounded-xl hover:scale-110 transform ease-in-out duration-100 '>
              <h3 class='${thumb ? 'hidden' : ''}'>Mohon maaf saat ini gambar tidak tersedia</h3>
            </div>
            <div class='rounded-xl flex flex-col gap-y-3 bg-white px-4 py-8 mt-4'>
              <h2 class='text-black opacity-80 font-ubuntu font-semibold text-2xl'>${title}</h2>
              <p class='text-black opacity-80 font-poppins font-medium text-base'>${author.user} - ${author.datePublished}</p>
              <div class='inline-flex gap-x-4'>
                <h5 class='bg-orange-secondary text-white font-poppins pl-2 pr-3 py-1 rounded-full inline-flex items-center'><span><img src='${plateIcon}' class='mr-1'></span>${servings}</h5>
                <h5 class='bg-orange-secondary text-white font-poppins pl-2 pr-3 py-1 rounded-full inline-flex items-center'><span><img src='${timeIcon}' class='mr-1'></span>${times}</h5>
              </div>
              <h4 class='text-black opacity-80 font-poppins font-semibold text-lg mt-3'>bahan - bahan :</h4>
             
              <ul class='detail-ingredient flex flex-col gap-y-3'>
                
              </ul>

              <h4 class='text-black opacity-80 font-poppins font-semibold text-lg mt-3'>Cara membuat :</h4>
             
              <ul class='detail-step flex flex-col gap-y-3'>
               
              </ul>

            </div>
          </div>
          <button class='hidden sticky bg-orange-primary opacity-70 font-ubuntu font-bold p-2 hover:opacity-100 hover:shadow-orange rounded-md text-white self-end bottom-5'>Simpan</button>
        </div>
      </div>
    `

    const detailIngredientParent = this.querySelector('.detail-ingredient')
    const detailStep = this.querySelector('.detail-step')

    ingredient.forEach(ingredient => {
      const liDetailIngredient = document.createElement('li')
      liDetailIngredient.className = 'detail-desc'
      liDetailIngredient.innerHTML = ingredient
      detailIngredientParent.appendChild(liDetailIngredient)
    })

    step.forEach(step => {
      const liDetailStep = document.createElement('li')
      liDetailStep.className = 'detail-desc'
      liDetailStep.innerHTML = step
      detailStep.appendChild(liDetailStep)
    })
  }
}
customElements.define('detail-recipie', DetailRecipie)
