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

//Editor
let seleccionador = document.querySelector('#seleccionador_modif')
//Cotenedores de editor
let nuevo_nombreCont = document.querySelector('#nombre_modif')
let nueva_fechaCont = document.querySelector('#nacimiento_modif')
let nuevo_emailCont = document.querySelector('#email_modif')
let nuevo_sexoCont = document.querySelector('#sexo_modif')
let nueva_preferenciaCont = document.querySelector('#preferencias_modif')
let nuevo_comentarioCont = document.querySelector('#comentarios_modif')
//Inputs del editor
let nuevo_nombre = document.querySelector('#nuevo_nombre')
let nuevo_nacimiento = document.querySelector('#nuevo_nacimiento')
let nuevo_email = document.querySelector('#nuevo_email')
let nuevo_sexo = [document.querySelector('#masculino'), document.querySelector('#femenino'), document.querySelector('#sexo-otros')]
let nueva_preferencia = [document.querySelector("#cat-terror"), document.querySelector("#cat-ficcion"), document.querySelector("#cat-aventura"), document.querySelector("#cat-policial"), document.querySelector("#cat-fantasia"),  document.querySelector("#cat-otros")];
let nuevo_comentario = document.querySelector('#nuevo_comentario')

//Formularios editor
let formulario_nuevo_nombre = document.querySelector('#formulario_nuevo_nombre')
let formulario_nueva_fecha = document.querySelector('#formulario_nuevo_nacimiento')
let formulario_nuevo_email = document.querySelector('#formulario_nuevo_email')
let formulario_nuevo_sexo = document.querySelector('#formulario_nuevo_sexo')
let formulario_nueva_preferencia = document.querySelector('#formulario_nueva_preferencia')
let formulario_nuevo_comentario = document.querySelector('#formulario_nuevo_comentario')

let tabla = document.querySelector('.tabla')

//const URL = 'http://127.0.0.1:5000/'
const URL = 'https://grupo8.pythonanywhere.com/'

function busqueda(){
    buscarCont.style.display= 'block';
    modifCont.style.display = 'none';
    eliminarCont.style.display = 'none';
    nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
};

function modif(){
    buscarCont.style.display= 'none';
    modifCont.style.display = 'block';
    eliminarCont.style.display = 'none';
};

function seleccionadorSwitch(){
    switch(seleccionador.value){
        case 'nombre': nuevo_nombreCont.style.display = 'block'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
            break
        case 'apellido': nuevo_nombreCont.style.display= 'block'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
            break
        case 'nacimiento': nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'block'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
            break
        case 'email': nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'block'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
            break
        case 'sexo': nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'block'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
            break
        case 'preferencias': nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'block'; nuevo_comentarioCont.style.display= 'none';
            break
        case 'comentario': nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'block';
            break
    }
}

function eliminar(){
    buscarCont.style.display= 'none';
    modifCont.style.display = 'none';
    eliminarCont.style.display = 'block';
    nuevo_nombreCont.style.display= 'none'; nueva_fechaCont.style.display= 'none'; nuevo_emailCont.style.display= 'none'; nuevo_sexoCont.style.display= 'none'; nueva_preferenciaCont.style.display= 'none'; nuevo_comentarioCont.style.display= 'none';
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

//Eliminar clientes

function eliminar_clientes(id){
    if(confirm(`Confirme si desea elimiar al contacto con ID ${id}`)){
        fetch(URL + 'lectores', {method: 'DELETE'})
    }
}