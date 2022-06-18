//selectors 

let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click',function(){
    header.classList.toggle('menu-open');
})

window.addEventListener('scroll',function() {
    let windowPosition = window.scroll > 0;
    header.classList.toggle('active',windowPosition)
})
