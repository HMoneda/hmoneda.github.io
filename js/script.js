window.onload = () => {
  const menu = document.getElementById('mobile-nav-menu');
  const close = document.getElementById('mobile-nav-close');

  function showMobileNav() {
    const nav = document.getElementById('mobile-nav');

    if (!nav.classList.contains('mobile-nav-active')) {
      nav.classList.add('mobile-nav-active');
      close.classList.add('mobile-nav-active');
      menu.classList.add('mobile-nav-inactive');
    } else {
      nav.classList.remove('mobile-nav-active');
      close.classList.remove('mobile-nav-active');
      menu.classList.remove('mobile-nav-inactive');
    }
  }

  menu.addEventListener('click', (e) => {
    showMobileNav();
  });

  close.addEventListener('click', (e) => {
    showMobileNav();
  });
};
