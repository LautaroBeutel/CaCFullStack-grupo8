//alert(sessionStorage.getItem('idSeleccionado'));
let tabla = document.querySelector('.tabla');
const URL = 'http://127.0.0.1:5000/';
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
  };
fetch(URL + 'productos', requestOptions)
.then(function (data){
    if (data.ok){return data.json()}
})
.then(function (datos){
    for(let libro of datos){
        let fila = document.createElement('tr');
        fila.innerHTML = `<td>${libro.id}</td><td>${libro.titulo}</td><td>${libro.precio}</td><td><img src="${libro.portada}" alt="portada_libro"></td><td>${libro.categoria}</td><td>${libro.autor}</td><td>${libro.paginas}</td><td>${libro.idioma}</td><td>${libro.publicacion}</td><td class="tabla_descripcion">${libro.descripcion}</td><td>${libro.stock}</td><td><input type='button' value='Modificar' class='boton_tabla'><input type='button' value='Eliminar' class='boton_tabla' onclick='eliminar_productos(${libro.id})'></td>`;
        tabla.appendChild(fila);
    } 
    })
.catch(function (error){
    return console.log(error);})

    function eliminar_productos(id){
        if(confirm(`Confirme si desea elimiar al producto con ID ${id}`)){
            fetch(URL + 'productos/' + id, {method: 'DELETE'})
        }
    }