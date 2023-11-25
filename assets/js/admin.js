let btnVer = document.querySelector('#admin_ver');
let btnBuscar = document.querySelector('#admin_buscar');
let btnBorrar = document.querySelector('#admin_borrar');
let btnModif = document.querySelector('#admin_modif')
let btnCompras = document.querySelector('#admin_compras');
let titulo = document.querySelector('.titulo_main');
let btnProd = document.querySelector('#admin_prod');


function pedirId(){
    let respuesta = prompt('Introduzca la ID del cliente');
    if(parseInt(respuesta)){
        respuesta = parseInt(respuesta);
        sessionStorage.setItem('idSeleccionado', respuesta)
    } else{
        alert('Introduzca un número mayor a 0')
        pedirId()
    }
};

