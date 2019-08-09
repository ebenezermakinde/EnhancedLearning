import Dropdown from './dropdown';
import './styles/contact.css';

class Service extends Dropdown {
  constructor(container) {
    super(container)
    this.container = container;
    this.trigger = container.querySelector('.service');
    this.content = this.container.querySelector('.show-service');
    this.trip = this.content.querySelector('.trip-options');
    this.ticket = this.content.querySelector('.ticket-options');
  }

  init() {
    this.trigger.addEventListener('change', (event) => {
      event.preventDefault();
      const option = event.target.selectedIndex;
      if ((option === 1 && !this.trip.classList.contains('active') && !this.ticket.classList.contains('active'))) {
        this.trip.classList.add('active');
        this.ticket.classList.add('hidden');
        this.content.classList.add('active');
      } else if ((option === 2 && !this.ticket.classList.contains('active') && this.trip.classList.contains('active'))) {
        this.trip.classList.remove('active');
        this.ticket.classList.remove('hidden')
        this.ticket.classList.add('active');
        this.content.classList.add('active');
      } else if ((option === 1 && !this.trip.classList.contains('active') && this.ticket.classList.contains('active'))) {
        this.trip.classList.add('active');
        this.ticket.classList.remove('active');
        this.content.classList.add('active');
      } else {
        this.content.classList.remove('active');
      }
    })
  }
}

export { Service as default };
