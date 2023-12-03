let add_titulo = document.querySelector('#add_titulo')
let add_precio = document.querySelector('#add_precio')
let add_portada = document.querySelector('#add_portada')
let add_categoria = document.querySelector('#add_categoria')
let add_autor = document.querySelector('#add_autor')
let add_paginas = document.querySelector('#add_paginas')
let add_idioma = document.querySelector('#add_idioma')
let add_publicacion = document.querySelector('#add_publicacion')
let add_descripcion = document.querySelector('#add_descripcion')
let add_stock = document.querySelector('#add_stock')
let form = document.getElementById("formulario")

const URL = 'http://127.0.0.1:5000/'

function agregar_producto(e){
    e.preventDefault();
    const datos = {
        titulo: add_titulo.value.toUpperCase(),
        precio: add_precio.value,
        portada: add_portada.value,
        categoria: add_categoria.value,
        autor: add_autor.value,
        paginas: add_paginas.value,
        idioma: add_idioma.value,
        publicacion: add_publicacion.value,
        descripcion: add_descripcion.value,
        stock: add_stock.value
      }
        fetch(URL + 'productos', {method: 'POST', body: JSON.stringify(datos), headers: {'Content-Type': 'application/json'}})
        .then(data => data.json())
        .then(function (datos){
          alert('Producto agregado correctamente')
        //Limpieza del formulario
          add_titulo.value = '';
          add_precio.value = '';
          add_portada.value = '';
          add_categoria.value = '';
          add_autor.value = '';
          add_paginas.value = '';
          add_idioma.value = '';
          add_publicacion.value = '';
          add_descripcion.value = '';
          add_stock.value = '';       
        })
        .catch(function(error){
          console.log(`Error al intentar agregar al producto: ${error}`)
        })
  }

  function sub(e){
    agregar_producto(e)
  }
  
  form.addEventListener("submit", sub);