const menu = document.getElementById('hamburger-icon');
const navMenu = document.querySelector('.nav-menu');
menu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
