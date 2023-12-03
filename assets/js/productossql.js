let tabla = document.querySelector('.tabla');
let idProducto;
let todosLosLibros;

const URL = 'http://127.0.0.1:5000/'
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
        todosLosLibros = datos;
        for(let libro of datos){
            let fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${libro.id}</td>
                <td>${libro.titulo}</td>
                <td>${libro.precio}</td>
                <td><img src="${libro.portada}" alt="portada_libro"></td>
                <td>${libro.categoria}</td><td>${libro.autor}</td>
                <td>${libro.paginas}</td><td>${libro.idioma}</td>
                <td>${libro.publicacion}</td>
                <td class="tabla_descripcion">${libro.descripcion}</td>
                <td>${libro.stock}</td>
                <td>
                    <input type='button' value='Modificar' class='boton_tabla' onclick='modificar_producto(${libro.id})'>
                    <input type='button' value='Eliminar' class='boton_tabla' onclick='eliminar_productos(${libro.id})'>
                </td>`;
            tabla.appendChild(fila);
        } 
    })
    .catch(function (error){
        return console.log(error);
    })

function modificar_producto(idLibro) {
    
    let libro = todosLosLibros.find(libro => libro.id === idLibro);
    idProducto = idLibro;
    document.getElementById('tituloEditar').value = libro.titulo;
    document.getElementById('precioEditar').value = libro.precio;
    document.getElementById('categoriasEditar').value = libro.categoria;
    document.getElementById('autorEditar').value = libro.autor;
    document.getElementById('paginasEditar').value = libro.paginas;
    document.getElementById('idiomaEditar').value = libro.idioma;
    document.getElementById('publicacionEditar').value = libro.publicacion;
    document.getElementById('descripcionEditar').value = libro.descripcion;
    document.getElementById('stockEditar').value = libro.stock;

    document.getElementById('formularioEdicion').style.display = 'block';
}

function guardarEdicion() {

    let producto_actualizado = {
        id: idProducto,
        titulo: document.getElementById('tituloEditar').value,
        precio: document.getElementById('precioEditar').value,
        categoria: document.getElementById('categoriasEditar').value,
        autor: document.getElementById('autorEditar').value,
        paginas: document.getElementById('paginasEditar').value,
        idioma: document.getElementById('idiomaEditar').value,
        publicacion: document.getElementById('publicacionEditar').value,
        descripcion: document.getElementById('descripcionEditar').value,
        stock: document.getElementById('stockEditar').value
    }

    document.getElementById('formularioEdicion').style.display = 'none';

    fetch(`${URL}productos`, {
        method: 'PUT', 
        body: JSON.stringify(producto_actualizado), 
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
        if (response.ok) {
            alert("Producto modificado correctamente!")
            location.reload();
        }
    })
    .catch(function(error){
        console.log(`Error al intentar modificar el producto: ${error}`)
    })

}

function cancelarEdicion() {
    document.getElementById('formularioEdicion').style.display = 'none';
}

    

function eliminar_productos(id){
    if(confirm(`Confirme si desea elimiar al producto con ID ${id}`)){
    fetch(URL + 'productos/' + id, {method: 'DELETE'})
    }
}
