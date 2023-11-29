//alert(sessionStorage.getItem('idSeleccionado'));
let tabla = document.querySelector('.tabla');
const URL = 'http://127.0.0.1:5000/';

fetch(URL + 'lectores', {method: 'GET', mode: 'no-cors'})
.then(function (data){
    if (data.ok){return data.json();}
})
.then(function (datos){
    for(let clientes of datos){
        let fila = document.createElement('tr');
        fila.innerHTML = `<td>${clientes.id}</td><td>${clientes.nombre}</td><td>${clientes.apellido}</td><td>${clientes.nacimiento}</td><td>${clientes.email}</td><td>${clientes.sexo}</td><td>${clientes.preferencias}</td><td>${clientes.comentario}</td>`
    }   tabla.appendChild(fila)
    })
.catch(function (error){
    return console.log(error);})