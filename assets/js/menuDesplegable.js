const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu__header');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
