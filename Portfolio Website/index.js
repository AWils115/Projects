const openBtn = document.getElementById('menuOpen');
const closeBtn = document.getElementById('menuClose');
const links = document.querySelector('.header__links');
const linkItems = document.querySelectorAll('.header__link')

openBtn.addEventListener('click', function  () {
    openBtn.classList.remove('header__main-ham-menu-open');
    closeBtn.classList.add('header__main-ham-menu-close');
    links.classList.toggle('show-links');

})

closeBtn.addEventListener('click', function  () {
    openBtn.classList.add('header__main-ham-menu-open');
    closeBtn.classList.remove('header__main-ham-menu-close');
    links.classList.toggle('show-links');
})

linkItems.forEach((link) => {
    link.addEventListener('click', () => {
        links.classList.toggle('show-links')
        if(!openBtn.classList.contains('header__main-ham-menu-open')) {
            openBtn.classList.add('header__main-ham-menu-open');
        }
        if(closeBtn.classList.contains('header__main-ham-menu-close')) {
            closeBtn.classList.remove('header__main-ham-menu-close');
        }
    })
})