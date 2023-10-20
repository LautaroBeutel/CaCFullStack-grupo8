let contenedorOfertas = document.querySelector("#contenedorOfertas");

let precios = [];
let ofertas = [];

fetch("https://mocki.io/v1/b3f6b230-ed47-4fc6-a43a-7d26e5de10e9")
  .then(data => data.json())
  .then(function (datos){
    for(let i = 0; i < datos.result.length; i++){
        precios.push(datos.result[i].precio)
      }      
    precios.sort((a,b) => a -b);
    for(let i = 0; i <= 2; i++){
        for(let z = 0; z < datos.result.length; z++){
          if(precios[i] == datos.result[z].precio){
            ofertas.push(datos.result[z])
  }    
          }
        }
  
    for(let i = 0; i < ofertas.length; i++){
        contenedorOfertas.insertAdjacentHTML("beforeend",`<a href="./articulo.html" onclick="eleccionIndex('${ofertas[i].titulo}')"><div class="block2-ofertas"><img src="${ofertas[i].portada}" alt="foto_producto"><h3>${ofertas[i].titulo}</h3><p>$${ofertas[i].precio}</p></div></a>`);
    }
  
      }
  )
  .catch(error => console.error(error))



function eleccionIndex(text){
  sessionStorage.setItem("articuloElegido", text)
}

  
  
  
