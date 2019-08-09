import Navbar from './frontend/navbar';
import Dropdown from './frontend/dropdown';
import Service from './frontend/contact';

// activate navbar
const navbar = new Navbar(document.querySelector('nav'));
navbar.init();

// activate dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

//active contact options
const serviceOption = new Service(document.querySelector('form'));
serviceOption.init();