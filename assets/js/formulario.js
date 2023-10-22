let form = document.getElementById("formulario")
let inputs = document.getElementsByClassName("nombrecompleto");
let fecha = document.querySelector("#fecha");
let mail = document.querySelector("#mail");
let categoria = document.getElementsByName("categoria");

function nombreCompletoCheck(e){
  for(let i = 0; i <= 1; i++){
    if((/[0-9]/i).test(inputs[i].value)){
    alert(`Verifique su ${inputs[i].name}.`);
    inputs[i].classList.add("error");  
    e.preventDefault();  
  } else if (inputs[i].classList.contains("error")){
    inputs[i].classList.remove("error")
  }
  }
}

function fechaCheck(e){
  if((new Date().getFullYear())-(parseInt(fecha.value.match(/^[0-9]{4}/))) >= 100){
    alert(`Verifique su fecha de nacimiento.`);
    fecha.classList.add("error");
    e.preventDefault();
  } else if(fecha.classList.contains("error")){
    fecha.classList.remove("error");
  }
}

function mailCheck(e){
  if(!((/^[a-z0-9]+\@[a-z0-9]+\.{1}/i)).test(mail.value)){
    alert(`Verifique su direccion de correo electrónico.`);
    mail.classList.add("error");
    e.preventDefault();
  } else if(mail.classList.contains("error")){
    mail.classList.remove("error");
  }
  }

function boxCheck(e){
  let contador = 0;
  for(let i in categoria){
    if(categoria[i].checked){
      contador += 1
    }  
  }
  if(contador == 0){
      alert("Elije tu o tus caterogías favoritas.");
      e.preventDefault();
    }   
}

let sub = function (e){
  nombreCompletoCheck(e);
  fechaCheck(e);
  mailCheck(e);
  boxCheck(e);
}

form.addEventListener("submit", sub);