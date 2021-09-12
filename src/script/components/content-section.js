import './search-bar'
import './list-item'

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

            <list-item></list-item>

          </div>
        </div>
      </div>
    `
  }
}

customElements.define('content-section', ContentSection)
