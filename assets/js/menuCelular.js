const categorias = document.querySelector("#categorias");

const menu = document.querySelector("#menuCel");

function showMenu(){
    if(categorias.style.display != "none"){
        categorias.style.display = "none";
        menu.style.color = "#FFF";
    } else {
        categorias.style.display = "block";
        categorias.style.position = "absolute";
        menu.style.color = "var(--rosa)"
    }
}