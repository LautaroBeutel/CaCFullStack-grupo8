let titulo = document.querySelector("#titulo");
let portada = document.querySelector("#portada_libro");
let precio = document.querySelector("#precio");
let tabla = document.querySelectorAll(".celda_articulo");
let about = document.querySelector("#description_text");
let addCarrito = document.querySelector("#add_carrito");
let refCarrito = document.querySelector("#refCarrito");

let articuloElegido = sessionStorage.getItem("articuloElegido");

articulo()

async function articulo(){
fetch("https://mocki.io/v1/61e0a2c5-ecd2-4916-9b5c-b49a47a4069c")
  .then(data => data.json())
  .then(function (datos){  
  for(let i = 0; i < datos.result.length; i++){
    if(datos.result[i].titulo == articuloElegido){
     titulo.textContent = datos.result[i].titulo;
     portada.src = datos.result[i].portada;
     precio.textContent = `$${datos.result[i].precio}`;
     tabla[0].textContent = datos.result[i].titulo;
     tabla[1].textContent = datos.result[i].autor;
     tabla[2].textContent = datos.result[i].idioma;
     tabla[3].textContent = datos.result[i].paginas;
     tabla[4].textContent = datos.result[i].year;
     about.textContent = datos.result[i].about;
     if(datos.result[i].stock == 0){
      addCarrito.value = "No hay stock";
      refCarrito.href = "#";
    };
    }
}})
  .catch(error => console.error(error))
}