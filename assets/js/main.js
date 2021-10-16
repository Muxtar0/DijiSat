/*-------------------------------- Haburger Menu ----------------------------------------*/
const hamburgerMenuBtn = document.querySelector('.hamburgerMenuBtn .hamburger');
const MobileOpenMenu = document.querySelector('.MobileOpenMenu');
const closeMobileOpenMenuDiv = document.querySelector('.closeMobileOpenMenuDiv')
hamburgerMenuBtn.addEventListener("click" , (e) => {
    hamburgerMenuBtn.classList.toggle("is-active")
    MobileOpenMenu.classList.toggle('active')
})
closeMobileOpenMenuDiv.addEventListener('click' ,(e) => {
    hamburgerMenuBtn.classList.remove("is-active")
    MobileOpenMenu.classList.remove('active')

})
/*-------------------------------- Dark Mode ----------------------------------------*/
const changeThemeBtn = document.querySelectorAll('.changeThemeBtn');
let theme = "light";
for(let i=0;i<changeThemeBtn.length;i++){
    changeThemeBtn[i].addEventListener('click' , (e) =>  {
        document.body.classList.toggle('active');
        if(theme == "dark"){
            changeThemeBtn.innerHTML = '<i class="fas fa-moon"></i>'
            theme = 'light'
        }    
        else{
            changeThemeBtn.innerHTML = '<i class="fas fa-sun"></i>'
            theme = 'dark'
        }
    })
}
