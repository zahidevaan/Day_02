const menuWrapper = document.querySelector('.menu-wrapper');
const menuBtn = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.menu-close-btn');


menuBtn.addEventListener('click',() => {
    menuWrapper.style.transform = `translateX(0%)`;
})
menuClose.addEventListener('click',() => {
    menuWrapper.style.transform = `translateX(150%)`;
})