let tituloCategoria = document.querySelector("#prod_group");
let productos = document.querySelector("#articles");
let more = document.querySelector(".more");
let botonCategoria = document.querySelectorAll(".boton_cat");

//const URL_productos = 'http://127.0.0.1:5000/'
const URL_productos = 'https://grupo8.pythonanywhere.com/'

const requestOptions_productos = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  },
};

eleccion();

function terror(){
  sessionStorage.setItem("eleccion_cat", botonCategoria[0].textContent);
  sessionStorage.setItem("eleccion_user", "terror");
}

function cFiccion(){
    sessionStorage.setItem("eleccion_cat", botonCategoria[1].textContent);
    sessionStorage.setItem("eleccion_user", "ciencia ficcion");
  }

  function aventura(){
    sessionStorage.setItem("eleccion_cat", botonCategoria[2].textContent);
    sessionStorage.setItem("eleccion_user", "aventura");
  }
  
  function policial(){
      sessionStorage.setItem("eleccion_cat", botonCategoria[3].textContent);
      sessionStorage.setItem("eleccion_user", "policial");
    }

    function autoayuda(){
        sessionStorage.setItem("eleccion_cat", botonCategoria[4].textContent);
        sessionStorage.setItem("eleccion_user", "autoayuda");
      }
      
      function otros(){
          sessionStorage.setItem("eleccion_cat", botonCategoria[5].textContent);
          sessionStorage.setItem("eleccion_user", "otros");
        }

      if (tituloCategoria.textContent == ""){
        tituloCategoria.textContent = "Elige una categoría";
      }

async function eleccion(){
    let eleccion_usuario = sessionStorage.getItem("eleccion_user");
tituloCategoria.textContent = sessionStorage.getItem("eleccion_cat")

fetch(URL_productos + "productos", requestOptions_productos)
  .then(data => data.json())
  .then(function (datos){
  for(let i = 0; i < datos.length; i++){
    if(datos[i].categoria == eleccion_usuario){
     productos.insertAdjacentHTML("beforeend",`<a href="./articulo.html" class="articulo" onclick="eleccionIndex('${datos[i].titulo}')"><article><img src="${datos[i].portada}" alt="foto_producto"><h3 class="prod_name">${datos[i].titulo}</h3><p class="prod_price">${datos[i].precio}</p></article></a>`);}
    }
})
  .catch(error => console.error(error))
}

function eleccionIndex(text){
  sessionStorage.setItem("articuloElegido", text)
}
