import './item-card'
import './search-bar'

class ContentSection extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */ `
      <div class='relative h-auto w-full'>
        <div class='w-auto bg-orange-soft negative rounded-t-3xl p-16 relative'>
          <div class='max-w-xl mx-auto text-center relative mt-10'>
            <h1 class='text-orange-alternative font-pacifico text-3xl sm:text-5xl'>Mau masak apa ?</h1>
           
            <search-bar></search-bar>

          </div>
          <div class='mt-20'>
            <div class='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>

              <item-card></item-card>

            </div>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('content-section', ContentSection)
