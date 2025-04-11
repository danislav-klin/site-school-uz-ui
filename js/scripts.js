const header = document.querySelector('.header__inner');

window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        header.classList.add('header--dark');
    } else {
        header.classList.remove('header--dark');
    }
});

const burgerBtn = document.getElementById('burgerBtn');
const burgerMenu = document.getElementById('burgerMenu');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.toggle('burger__menu--active');
});