// ######## HEADER ########
let menuIcon = document.querySelector(".nav__menu")
let closeIcon = document.querySelector(".nav__close")
let navList = document.querySelector(".nav__list")

// ### SHOW MENU ###

let showMenu = () => {
    navList.classList.add("showMenu")
}

menuIcon.addEventListener("click",showMenu)

// ### HIDE MENU ###

closeIcon.addEventListener("click",()=>{
    if(navList.classList.contains("showMenu")){
        navList.classList.remove("showMenu")
    }
})