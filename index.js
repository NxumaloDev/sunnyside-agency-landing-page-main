let menuBtn = document.querySelector(".menu")
let nav = document.querySelector(".nav-list")

menuBtn.addEventListener("click", ()=> {
    if (nav.style.opacity === "0"){
        nav.style.opacity = "1"
    }
    else {
        nav.style.opacity = "0"
    }
})