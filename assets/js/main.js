const hamburgerMenuBtn = document.querySelector('.hamburgerMenuBtn .hamburger');
const MobileOpenMenu = document.querySelector('.MobileOpenMenu');
hamburgerMenuBtn.addEventListener("click" , (e) => {
    hamburgerMenuBtn.classList.toggle("is-active")
    MobileOpenMenu.classList.toggle('active')
})