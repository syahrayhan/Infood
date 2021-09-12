import './not-found'
import './list-item'

class SlideOver extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */`
    <div class="fixed inset-0 overflow-hidden z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div class="fixed inset-x-0 bottom-0 h-4/5 max-w-full flex">
          <div class="relative w-screen max-w-full">
            <div class="absolute top-0 right-0 pt-2 pr-2 flex sm:-ml-10 sm:pr-4">
              <button type="button" class="rounded-full p-2 bg-orange-close text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white">
                <span class="sr-only">Close panel</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
    
            <div class="h-full flex flex-col py-8 bg-orange-soft shadow-xl rounded-t-3xl hscroll">
              <div class="px-4 sm:px-6">
                <h2 class="text-orange-alternative text-center font-semibold font-ubuntu text-3xl" id="slide-over-title">
                  Resep Tersimpan
                </h2>
              </div>
              <div class="mt-6 relative flex-1 px-4 sm:px-6 overflow-y-scroll ">
                <!-- Replace with your content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                    <not-found class='hidden'></not-found>
                    <list-item></list-item>
                </div>
                <!-- /End replace -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

customElements.define('slide-over', SlideOver)
