import githubIcon from '../../assets/github.png'
import instaIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'

class Footer extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = /* html */ `
    <div class='text-center pb-8'>
      <div class='flex flex-row gap-x-5 justify-center'>
        <a href='https://github.com/syahrayhan' class=''>
          <img src='${githubIcon}' width='30' class='opacity-50 hover:opacity-100 '>
        </a>
        <a href='https://www.instagram.com/coderayyy' class=''>
          <img src='${instaIcon}' width='30' class='opacity-50 hover:opacity-100 '>
        </a>
        <a href='https://www.linkedin.com/in/rayhan-aswiansyah/' class=''>
          <img src='${linkedinIcon}' width='30' class='opacity-50 hover:opacity-100 '>
        </a>
      </div>
      <h5 class='font-ubuntu font-medium text-sm mt-5'>Copyright © Infood 2021 by Rayhan</h5>
    </div>
    `
  }
}

customElements.define('footer-app', Footer)
