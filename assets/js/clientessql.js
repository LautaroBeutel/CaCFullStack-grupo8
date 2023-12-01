//alert(sessionStorage.getItem('idSeleccionado'));
let tabla = document.querySelector('.tabla')
const URL = 'http://127.0.0.1:5000/'
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
  };

fetch(URL + 'lectores', requestOptions)

.then(function (data){
    if (data.ok){return data.json()}
})
.then(function (datos){
    console.log(datos)
    for(let clientes of datos){
        let fila = document.createElement('tr');
        fila.innerHTML = `<td>${clientes.id}</td><td>${clientes.nombre}</td><td>${clientes.apellido}</td><td>${clientes.nacimiento}</td><td>${clientes.email}</td><td>${clientes.sexo}</td><td>${clientes.preferencias}</td><td>${clientes.comentario}</td><td><input type='button' value='Modificar' class='boton_tabla'><input type='button' value='Eliminar' class='boton_tabla' onclick='eliminar_clientes(${clientes.id})'></td>`;
        tabla.appendChild(fila);
    }   
    })
.catch(function (error){
    return console.log(error);})

function eliminar_clientes(id){
    if(confirm(`Confirme si desea elimiar al contacto con ID ${id}`)){
        fetch(URL + 'lectores/' + id, {method: 'DELETE'})
    }
}