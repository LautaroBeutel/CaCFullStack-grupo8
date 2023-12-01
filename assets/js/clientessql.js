//alert(sessionStorage.getItem('idSeleccionado'));
let tabla = document.querySelector('.tabla');
const URL = 'http://127.0.0.1:5000/';
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

    for(let clientes of datos){
        let fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${clientes.id}</td>
        <td>${clientes.nombre}</td>
        <td>${clientes.apellido}</td>
        <td>${clientes.nacimiento}</td>
        <td>${clientes.email}</td>
        <td>${clientes.sexo}</td>
        <td>${clientes.preferencias}</td>
        <td>${clientes.comentario}</td>
        <td>
            <input type='button' value='Modificar' class='boton_tabla' onclick='modificar_cliente(${clientes.id}, ${JSON.stringify(datos)})'>
            <input type='button' value='Eliminar' class='boton_tabla' onclick='eliminar_clientes(${clientes.id})'>
        </td>`;
        tabla.appendChild(fila);
    }   
    })
.catch(function (error){
    return console.log(error);})

function modificar_cliente(id, datos) {

    console.log("ID DEL CLIENTE: ", id)
    let cliente = datos.find(cliente => cliente.id === id);


    document.getElementById('nombreEditar').value = cliente.nombre;
    document.getElementById('apellidoEditar').value = cliente.apellido;
    document.getElementById('nacimientoEditar').value = cliente.nacimiento;
    document.getElementById('emailEditar').value = cliente.email;
    document.getElementById('sexoEditar').value = cliente.sexo;
    document.getElementById('preferenciasEditar').value = cliente.preferencias;
    document.getElementById('comentarioEditar').value = cliente.comentario;

    document.getElementById('formularioEdicion').style.display = 'block';
}

function guardarEdicion() {
    let nombre = document.getElementById('nombreEditar').value;
    let apellido = document.getElementById('apellidoEditar').value;
    let nacimiento = document.getElementById('nacimientoEditar').value;
    let email = document.getElementById('emailEditar').value;
    let preferencias = document.getElementById('preferenciasEditar').value;
    let comentario = document.getElementById('comentarioEditar').value;
    let sexo =document.getElementById('sexoEditar').value = cliente.sexo;


    document.getElementById('formularioEdicion').style.display = 'none';
}

function cancelarEdicion() {
    document.getElementById('formularioEdicion').style.display = 'none';
}


function eliminar_clientes(id){
    if(confirm(`Confirme si desea elimiar al contacto con ID ${id}`)){
        fetch(URL + 'lectores', {method: 'DELETE'})
    }
}