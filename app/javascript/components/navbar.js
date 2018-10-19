function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-wagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 200) {
        navbar.classList.add('navbar-wagon-grey');
        navbar.classList.add('navbar-name-scroll');

      } else {
        navbar.classList.remove('navbar-wagon-grey');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
