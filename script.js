let nav = document.getElementById("nav");
let navContainer = document.getElementById("navContainer");
let hamburgerContainer = document.getElementById("hamburgerContainer");
let hamburger = document.getElementById("hamburger");

hamburgerContainer.addEventListener("click", () => {
    if(navContainer.style.display != "flex"){
        navContainer.style.display = "flex";
        hamburger.classList.toggle("active");
    } else {
        navContainer.style.display = "none";
        hamburger.classList.remove("active");
    }
});

navContainer.addEventListener("click", (e) => {
    if(e.target.classList.value === "navlink"){
        navContainer.style.display = "none";
        hamburger.classList.remove("active");
    }
});

nav.addEventListener("click", (e) => {
    let targetClass = e.target.closest("li").className;
    let targetElement = document.getElementById(`${targetClass}`);

    if (targetElement) {
        document.querySelectorAll('.active').forEach(content => {
            content.classList.remove('active');
        });
        targetElement.classList.add('active');
    }
});
