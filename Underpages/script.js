let hamburger = document.getElementById("hamburger");
let hamburgerContainer = document.getElementById("hamburgerContainer");
let menuContainer = document.getElementById("menuContainer");
let navContainer = document.getElementById("navContainer");
let body = document.getElementById('body');
let popupBox = document.querySelectorAll('.popupBox');

hamburgerContainer.addEventListener("click", () => {
    if(menuContainer.style.display != "flex"){
        menuContainer.style.display = "flex";
        hamburger.classList.toggle("active");
        body.style.overflow = "hidden";
    } else {
        menuContainer.style.display = "none";
        hamburger.classList.remove("active");
        body.style.overflow = "auto";
    }
});

menuContainer.addEventListener("click", (e) => {
    if(e.target.classList.value === "menuLink"){
        menuContainer.style.display = "none";
        hamburger.classList.remove("active");
        body.style.overflow = "auto";
    }
});

popupBox.forEach(e => {
    e.addEventListener('click', () => {
        let popupContent = e.querySelector('.popupContent');
        if (popupContent) {
            popupContent.classList.toggle('active');
            e.classList.toggle('active');
        }
        if(popupContent.className === 'popupContent active'){
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    });
});
