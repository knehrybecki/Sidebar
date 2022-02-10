const openMenu = document.querySelector('.fas.fa-bars');
const closeMenu = document.querySelector('.fa-solid.fa-xmark');
const menu = document.querySelector('.card__sidebar');
const nav = document.querySelector('.navigation');
const menuItem = document.querySelector('.sidebar__menu');
const logoItem = document.querySelector('.navigation__logo');

openMenu.addEventListener('click', function()
{
        menu.classList.add('showMenu')
        nav.classList.add('showMenu')
        menuItem.classList.add('showMenu')
        logoItem.classList.add('showMenu')
        closeMenu.style.display = 'block'
        openMenu.style.display = 'none'
})
closeMenu.addEventListener('click', function()
{       
        menu.classList.remove('showMenu')
        nav.classList.remove('showMenu')
        menuItem.classList.remove('showMenu')
        logoItem.classList.remove('showMenu')
        openMenu.style.display = 'block'
        closeMenu.style.display = 'none'
})
