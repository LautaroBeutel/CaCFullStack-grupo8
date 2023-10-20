let contenedorOfertas = document.querySelector("#contenedorOfertas");

let contenedorPaginas = document.querySelector("#contenedorPaginas");

let precios = [];
let paginas = [];
let ofertas = [];
let mayoresPaginas = [];

fetch("https://mocki.io/v1/b3f6b230-ed47-4fc6-a43a-7d26e5de10e9")
  .then(data => data.json())
  .then(function (datos){
    for(let i = 0; i < datos.result.length; i++){
        precios.push(datos.result[i].precio);
        paginas.push(datos.result[i].paginas)
      }      
    precios.sort((a,b) => a - b);
    paginas.sort((a,b) => b - a);   


    for(let i = 0; i <= 4; i++){
        for(let z = 0; z < datos.result.length; z++){
          if(precios[i] == datos.result[z].precio){
            ofertas.push(datos.result[z]);
          }    
          if(paginas[i] == datos.result[z].paginas){
            mayoresPaginas.push(datos.result[z]);
          }
          }
        }
  
    for(let i = 0; i < ofertas.length; i++){
        contenedorOfertas.insertAdjacentHTML("beforeend",`<a href="./articulo.html" onclick="eleccionIndex('${ofertas[i].titulo}')"><div class="grid-item-ofertas"><img src="${ofertas[i].portada}" alt="foto_producto"><h3>${ofertas[i].titulo}</h3><p>$${ofertas[i].precio}</p></div></a>`);
        contenedorPaginas.insertAdjacentHTML("beforeend",`<a href="./articulo.html" onclick="eleccionIndex('${mayoresPaginas[i].titulo}')"><div class="grid-item-ofertas"><img src="${mayoresPaginas[i].portada}" alt="foto_producto"><h3>${mayoresPaginas[i].titulo}</h3><p>$${mayoresPaginas[i].precio}</p></div></a>`);

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
