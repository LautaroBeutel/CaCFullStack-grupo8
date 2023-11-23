let form = document.getElementById("formulario")
let inputs = document.getElementsByClassName("nombrecompleto");
let fecha = document.querySelector("#fecha");
let mail = document.querySelector("#mail");
let checkbox = [document.querySelector("#cat-terror"), document.querySelector("#cat-ficcion"), document.querySelector("#cat-aventura"), document.querySelector("#cat-policial"), document.querySelector("#cat-fantasia"),  document.querySelector("#cat-otros")];
let sexo = [document.querySelector('#masculino'), document.querySelector('#femenino'), document.querySelector('#sexo-otros')];


let sexoElegido = "";
let preferencias = [];
let verificador = 0;

const URL = 'http://127.0.0.1:5000';

function nombreCompletoCheck(e){
  let check = true;
  for(let i = 0; i <= 1; i++){
    if((/[0-9]/i).test(inputs[i].value)){
    alert(`Verifique su ${inputs[i].name}.`);
    inputs[i].classList.add("error");
    check = false;  
    e.preventDefault();  
  } else if (inputs[i].classList.contains("error")){
    inputs[i].classList.remove("error")
  }
  }
  if (check == true){
    verificador += 1
  }
}

function fechaCheck(e){
  let check = true;
  if((new Date().getFullYear())-(parseInt(fecha.value.match(/^[0-9]{4}/))) >= 100){
    alert(`Verifique su fecha de nacimiento.`);
    fecha.classList.add("error");
    check = false;
    e.preventDefault();
  } else if(fecha.classList.contains("error")){
    fecha.classList.remove("error");
  }
  if (check == true){
    verificador += 1
  }
}

function mailCheck(e){
  let check = true;
  if(!((/^[a-z0-9]+\@[a-z0-9]+\.{1}/i)).test(mail.value)){
    alert(`Verifique su direccion de correo electrónico.`);
    mail.classList.add("error");
    check = false;
    e.preventDefault();
  } else if(mail.classList.contains("error")){
    mail.classList.remove("error");
  }
  if (check == true){
    verificador += 1
  }
  }

function boxCheck(e){
  let check = true;
  let contador = 0;
  for(let i in checkbox){
    if (checkbox[i].checked){
      preferencias.push(checkbox[i].id);
      contador += 1;
    }
  }
  if(contador == 0){
      alert("Elije tu o tus caterogías favoritas.");
      check = false;
      e.preventDefault();
    }

    // Elección del sexo
    for(i in sexo){
      if(sexo[i].checked){
        sexoElegido = sexo[i].id
      }
    }
  if (check == true){
    verificador += 1
  }
}

function verificadorFinal(e){
  if (verificador == 4){
    alert('llego')
    e.preventDefault()
    let formData = new FormData();
    formData.append('nombre', document.querySelector('#nombre').value);
    formData.append('apellido', document.querySelector('#apellido').value);
    formData.append('nacimiento', fecha.value);
    formData.append('email', mail.value);
    formData.append('sexo', sexoElegido);
    formData.append('preferencias', preferencias.toString());
    formData.append('comentario', document.querySelector('#comentario'));


    fetch(URL + 'lectores', {method: 'POST', body: formData})
    
    // HASTA ACA LLEGUE - FALTA CODIGO

    }

  }


let sub = function (e){
  verificador = 0;
  nombreCompletoCheck(e);
  fechaCheck(e);
  mailCheck(e);
  boxCheck(e);
  verificadorFinal(e)
}

form.addEventListener("submit", sub);