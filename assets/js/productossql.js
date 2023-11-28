//alert(sessionStorage.getItem('idSeleccionado'));
let tabla = document.querySelector('.tabla');
const URL = 'http://127.0.0.1:5000/';

fetch(URL + 'productos', {method: 'GET', mode: 'no-cors'})
.then(function (data){
    if (data.ok){return data.json();}
})
.then(function (datos){
    for(let libro of datos){
        let fila = document.createElement('tr');
        fila.innerHTML = `<td>${libro.id}</td><td>${libro.titulo}</td><td>${libro.precio}</td><td>${libro.portada}</td><td>${libro.categoria}</td><td>${libro.autor}</td><td>${libro.paginas}</td><td>${libro.idioma}</td><td>${libro.publicacion}</td><td>${libro.descripcion}</td>`
    }   tabla.appendChild(fila)
    })
.catch(function (error){
    return console.log(error);})

