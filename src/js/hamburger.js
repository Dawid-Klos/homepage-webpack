const button = document.querySelector('.hamburger--js');
button.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});