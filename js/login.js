//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("ingresar").addEventListener("click", function () {
        let inputEmail = document.getElementById("usuario");
        let inputPass = document.getElementById("password");
        let camposCompletos = true;

        if (inputEmail.value === '') {
            inputEmail.classList.add("alert-danger");
            camposCompletos = false;
        } else {
            inputEmail.classList.remove("alert-danger");
        }
        if (inputPass.value === '') {
            inputPass.classList.add("alert-danger");
            camposCompletos = false;
        } else {
            inputPass.classList.remove("alert-danger");
    }
    if(camposCompletos){
        window.location = "inicio.html" ;
    }else{
        alert("Para ingresar debes de completar los datos")
    }
    
    
})})
function infoUsuario (){
    inputUsuario = document.getElementById("usuario");
    localStorage.setItem("username", inputUsuario.value);


}