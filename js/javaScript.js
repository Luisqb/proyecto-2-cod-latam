
const itemMenu = document.querySelectorAll(".iten-menu");

itemMenu.forEach(function(iten) {
    iten.addEventListener("click", function (e){
        const itemActual = document.querySelector(".active");
        itemActual.classList.remove("active");
        e.target.classList.add("active");
    });
});