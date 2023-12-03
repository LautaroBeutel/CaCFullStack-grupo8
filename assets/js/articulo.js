let titulo = document.querySelector("#titulo");
let portada = document.querySelector("#portada_libro");
let precio = document.querySelector("#precio");
let tabla = document.querySelectorAll(".celda_articulo");
let about = document.querySelector("#description_text");
let addCarrito = document.querySelector("#add_carrito");
let refCarrito = document.querySelector("#refCarrito");

const URL = 'http://127.0.0.1:5000/';
const requestOptions = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  },
};

let articuloElegido = sessionStorage.getItem("articuloElegido");
console.log(sessionStorage.getItem("articuloElegido"))

articulo()

async function articulo(){
fetch(URL + "productos", requestOptions)
  .then(data => data.json())
  .then(function (datos){  
  for(let i = 0; i < datos.length; i++){
    if(datos[i].titulo == articuloElegido){
     titulo.textContent = datos[i].titulo;
     portada.src = datos[i].portada;
     precio.textContent = `$${datos[i].precio}`;
     tabla[0].textContent = datos[i].titulo;
     tabla[1].textContent = datos[i].autor;
     tabla[2].textContent = datos[i].idioma;
     tabla[3].textContent = datos[i].paginas;
     tabla[4].textContent = datos[i].publicacion;
     about.textContent = datos[i].descripcion;
     if(datos[i].stock == 0){
      addCarrito.value = "No hay stock";
      refCarrito.href = "#";
    };
    }
}})
  .catch(error => console.error(error))
}