import './styles/navbar.css'

class Navbar {
  constructor(container) {
    this.container = container;
    this.trigger = container.querySelector('.menu-toggle');
    this.toggle = this.container.querySelector('ul');
  }
  init() {
    this.trigger.addEventListener('click', () => {
      this.toggle.classList.toggle('active');
    })
  }
}

export { Navbar as default }