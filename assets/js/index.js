let contenedorOfertas = document.querySelector("#contenedorOfertas");

let contenedorPaginas = document.querySelector("#contenedorPaginas");

let precios = [];
let paginas = [];
let ofertas = [];
let mayoresPaginas = [];

//const URL = 'http://127.0.0.1:5000/'
const URL = 'https://grupo8.pythonanywhere.com/'

const requestOptions = {
  method: 'GET',
  headers: {
      'Content-Type': 'application/json'
  },
};

fetch( URL + "productos", requestOptions)
  .then(data => data.json())
  .then(function (datos){
    console.log(datos)
    for(let i = 0; i < datos.length; i++){
        precios.push(datos[i].precio);
        paginas.push(datos[i].paginas)
      }      
    precios.sort((a,b) => a - b);
    paginas.sort((a,b) => b - a);   


    for(let i = 0; i < 8; i++){
        for(let z = 0; z < datos.length; z++){
          if(precios[i] == datos[z].precio){
            ofertas.push(datos[z]);
          }    
          if(paginas[i] == datos[z].paginas){
            mayoresPaginas.push(datos[z]);
          }
          }
        }
  
    for(let i = 0; i < ofertas.length; i++){
        contenedorOfertas.insertAdjacentHTML("beforeend",
          `<div class="container-card ">
            <a href="./articulo.html" onclick="eleccionIndex('${ofertas[i].titulo}')">
              <div class="card">
                <div class="card-header">
                  <img src="${ofertas[i].portada}" alt="foto_producto">
                </div>
                <div class="card-body">
                  <span class="tag tag-teal">${ofertas[i].categoria}</span>
                  <h3>${ofertas[i].titulo}</h3>
                  <p>Precio: $ <span class="precio-card">${ofertas[i].precio}</span</p>
                  <p>Autor: ${ofertas[i].autor}</p>
                  <p>Páginas: ${ofertas[i].paginas}</p>
                  <p>Idioma: ${ofertas[i].idioma}</p>
                </div>
              </div>
              </a>
            </div>`
        )
        contenedorPaginas.insertAdjacentHTML("beforeend",
        `<div class="container-card ">
            <a href="./articulo.html" onclick="eleccionIndex('${mayoresPaginas[i].titulo}')">
              <div class="card">
                <div class="card-header">
                <img src="${mayoresPaginas[i].portada}" alt="foto_producto">
                </div>
                <div class="card-body">
                  <span class="tag tag-teal">${mayoresPaginas[i].categoria}</span>
                  <h3>${mayoresPaginas[i].titulo}</h3>
                  <p>Precio: $ <span class="precio-card">${mayoresPaginas[i].precio}</span</p>
                  <p>Autor: ${mayoresPaginas[i].autor}</p>
                  <p>Páginas: ${mayoresPaginas[i].paginas}</p>
                  <p>Idioma: ${mayoresPaginas[i].idioma}</p>
                </div>
              </div>
            </a>
          </div>`
        )

    }
  
      }
  )
  .catch(error => console.error(error))



function eleccionIndex(text){
  sessionStorage.setItem("articuloElegido", text)
}


function terrorIndex(){
  sessionStorage.setItem("eleccion_cat", "Terror");
  sessionStorage.setItem("eleccion_user", "terror");
}

function cFiccionIndex(){
    sessionStorage.setItem("eleccion_cat", "Ciencia Ficción");
    sessionStorage.setItem("eleccion_user", "ciencia ficcion");
  }

  function aventuraIndex(){
    sessionStorage.setItem("eleccion_cat", "Aventura");
    sessionStorage.setItem("eleccion_user", "aventura");
  }
  
  function policialIndex(){
      sessionStorage.setItem("eleccion_cat", "Policial");
      sessionStorage.setItem("eleccion_user", "policial");
    }

    function autoayudaIndex(){
        sessionStorage.setItem("eleccion_cat", "Autoayuda");
        sessionStorage.setItem("eleccion_user", "autoayuda");
      }
