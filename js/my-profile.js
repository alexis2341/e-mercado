//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});

function infoUsuario(){
    inputNombre = document.getElementById("nombre");
    inputEdad = document.getElementById("edad");
    inputTel  = document.getElementById("telefono");
    inputEmail = document.getElementById("email");
    localStorage.setItem("nombre", inputNombre.value);
    localStorage.setItem("edad", inputEdad.value);
    localStorage.setItem("telefono", inputTel.value);
    localStorage.setItem("email", inputEmail.value);
    location.reload();
}
document.getElementById("username").innerHTML = localStorage.getItem("nombre");
document.getElementById("edadcard").innerHTML = localStorage.getItem("edad");
document.getElementById("emailcard").innerHTML = localStorage.getItem("email");
document.getElementById("telcard").innerHTML = localStorage.getItem("telefono");
