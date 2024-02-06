//your JS code here. If required.
const hamburgerMenu = document.querySelector('.ham');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
