let sucTapaDura = document.querySelectorAll(".sucTapaDura");
let ubicame = document.querySelector("#ubicame");

function cambioMapa(num){
    switch(num){
        case 1: ubicame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016888186392!2d-58.38414532470355!3d-34.60373445749834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1697956319309!5m2!1ses-419!2sar";
        break;
        case 2: ubicame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.12501388407!2d-60.63304072479113!3d-32.94770867194144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab1dc9b6d36f%3A0x97b9e9584d94d851!2sMonumento%20Hist%C3%B3rico%20Nacional%20a%20la%20Bandera!5e0!3m2!1ses-419!2sar!4v1697956419771!5m2!1ses-419!2sar";
        break;
    }
}