const menu = document.getElementById('menu')
 const mainMenu = document.getElementById('main-menu')
const closeMenu = document.getElementById('mobile-menu-close')
const goBack = document.getElementById('mobile-menu-go-back')
const menuTrigger = document.getElementById('mobile-button-trigger')
const menuOverlay = document.getElementById('mobile-menu-overlay')
let subMenu
let isMenuOpen = false

mainMenu.addEventListener('click',(e)=>{
    if(!menu.classList.contains('active')){
        return
    }
    const isChild = e.target.closest('.menu-item-has-child')
    if(isChild){
        showSubMenu(isChild)
    }
})

goBack.addEventListener('click',()=>{
    hideSubMenu()
})

menuTrigger.addEventListener('click',function(){
    toggleMenu()
})

menuOverlay.addEventListener('click',function(){
    toggleMenu()
})

closeMenu.addEventListener('click',function(){
    toggleMenu()
})

function toggleMenu(){
    menu.classList.toggle('active')
    menuOverlay.classList.toggle('active')
}


function showSubMenu(hasSub){
    if(!isMenuOpen){
        subMenu = hasSub.querySelector('.sub-menu')
        const menuTitle = hasSub.querySelector('a').innerText
        subMenu.classList.add('active')
        subMenu.style.animation = 'slideLeft .5s ease'
        menu.querySelector('.current-menu-title').innerText = menuTitle
        menu.querySelector('.mobile-menu-head').classList.add('active')
        isMenuOpen = true
    }
      

}

function hideSubMenu(){
    isMenuOpen = false
    subMenu.style.animation = 'slideRight .5s ease'
    menu.querySelector('.current-menu-title').innerText = ''
    setTimeout(()=>{
        subMenu.classList.remove('active')
    },300)
    menu.querySelector('.mobile-menu-head').classList.remove('active')
}