let nav = document.getElementById("nav");

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
