const openMenu = document.querySelector('.fas.fa-bars')
const closeMenu = document.querySelector('.fa-solid.fa-xmark')
const menu = document.querySelector('.card__navigation')

openMenu.addEventListener("click", () => {
        menu.classList.add('showMenu')
        closeMenu.style.display = 'block'
        openMenu.style.display = 'none'
})
closeMenu.addEventListener("click", () => {       
        menu.classList.remove('showMenu')
        openMenu.style.display = 'block'
        closeMenu.style.display = 'none'
})
