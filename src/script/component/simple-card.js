class SimpleCard extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */ `
      
    `
  }
}

customElements.define('simple-card', SimpleCard)
