import Navbar from './frontend/navbar';
import Dropdown from './frontend/dropdown';

// activate navbar
const navbar = new Navbar(document.querySelector('nav'));
navbar.init();

// activate dropdown
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});