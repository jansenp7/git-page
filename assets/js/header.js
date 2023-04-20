const header = document.querySelector("header");
const logoImg = document.querySelector("#logo-img");

window.addEventListener("scroll", diminuiHeader);

function diminuiHeader() {
    if(window.pageYOffset > 170 && header.classList.contains("menu1")) {
        header.classList.remove("menu1");
        header.classList.add("menu2");
        logoImg.getElementsByClassName.width = "150px";
    } else if (window.pageYOffset < 170 && header.classList.contains("menu2")) {
        header.classList.add("menu1");
        header.classList.remove("menu2");
        logoImg.getElementsByClassName.width = "180px";
    }
}