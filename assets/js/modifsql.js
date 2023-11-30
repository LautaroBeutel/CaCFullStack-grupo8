//Botones
let selecBusqueda = document.querySelector('#admin_buscar')
let selecModificar = document.querySelector('#admin_modif')
let selecEliminar = document.querySelector('#admin_eliminar')
let eleccionBuscar = document.querySelector('#eleccion_buscar')
let eleccionModif = document.querySelector('#eleccion_modificar')
let eleccionEliminar = document.querySelector('#eleccion_eliminar')

//Inputs texto
let idBusqueda = document.querySelector('#id-busqueda')
let idModif = document.querySelector('#id-modif')
let idEliminar = document.querySelector('#id-eliminar')


//Contenedores

let buscarCont = document.querySelector('.buscar')
let modifCont = document.querySelector('.modif')
let eliminarCont = document.querySelector('.eliminar')


let tabla = document.querySelector('.tabla')
const URL = 'http://127.0.0.1:5000/'

function busqueda(){
    buscarCont.style.display= 'block';
    modifCont.style.display = 'none';
    eliminarCont.style.display = 'none';
};

function modif(){
    buscarCont.style.display= 'none';
    modifCont.style.display = 'block';
    eliminarCont.style.display = 'none';
};

function eliminar(){
    buscarCont.style.display= 'none';
    modifCont.style.display = 'none';
    eliminarCont.style.display = 'block';
};

function buscarCliente(id){
    fetch(URL + 'lectores/' + id, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then(function (data){
        if (data.ok){return data.json()}
    })
    .then(function (clientes){
            let fila = document.createElement('tr');
            fila.innerHTML = `<td>${clientes.id}</td><td>${clientes.nombre}</td><td>${clientes.apellido}</td><td>${clientes.nacimiento}</td><td>${clientes.email}</td><td>${clientes.sexo}</td><td>${clientes.preferencias}</td><td>${clientes.comentario}</td>`;
           tabla.appendChild(fila);
        })
    .catch(function (error){
        return console.log(error);})
}

function modificarCliente(id){
    fetch(URL + 'lectores/' + id, {method: 'PUT', headers: {'Content-Type': 'application/json'}})
    /* FUNCION EN CONSTRUCCION*/
}