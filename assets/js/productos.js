let tituloCategoria = document.querySelector("#prod_group");
let productos = document.querySelector("#articles");
let more = document.querySelector(".more");
let botonCategoria = document.querySelectorAll(".boton_cat");

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

fetch("https://mocki.io/v1/61e0a2c5-ecd2-4916-9b5c-b49a47a4069c")
  .then(data => data.json())
  .then(function (datos){
  for(let i = 0; i < datos.result.length; i++){
    if(datos.result[i].categoria == eleccion_usuario){
     productos.insertAdjacentHTML("beforeend",`<a href="./articulo.html" class="articulo" onclick="eleccionArticulo(${i})"><article><img src="${datos.result[i].portada}" alt="foto_producto"><h3 class="prod_name">${datos.result[i].titulo}</h3><p class="prod_price">${datos.result[i].precio}</p></article></a>`);}
    }
})
  .catch(error => console.error(error))
}

async function eleccionArticulo(index){
 fetch("https://mocki.io/v1/61e0a2c5-ecd2-4916-9b5c-b49a47a4069c")
  .then(data => data.json())
  .then(function (datos){  
  for(let i = 0; i < datos.result.length; i++){
    if(i == index){
     sessionStorage.setItem("articuloElegido", `${(datos.result[i].titulo)}`)}
    }
})
  .catch(error => console.error(error))
}
