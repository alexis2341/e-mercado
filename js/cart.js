
function showCartInfo(array){
    for (let i = 0; i < array.articles.length; i++) {
        let carrito = array.articles[i]
    document.getElementById("cart").innerHTML += 
    `<div class="row">
    <div id="col1" class="col-12 col-md-9 mb-1">
    <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-3">
            <img src=" ${carrito.src} " class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title">${carrito.name}</h5>
              <p class="card-text">Costo: ${carrito.currency} ${carrito.unitCost} </p>
              <input id="campoNumerico" onchange="cuentaSubTotal()" type="number" value="${carrito.count}">

            </div>
          </div>
        </div>
      </div>
      </div>
       
      <div class="col-12 col-md-3">
   
 
      <div id="col2" class="  col-12 mb-3"> <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">COSTO DE ENVÍO:</h5>
          <h6 class="card-subtitle mb-5 text-muted">Elegí entre las opciones :)</h6>
          
          <select onchange="cuentaEnvio()" id="envios" class="col">
          <option value="0">---Opciones de envío---</option>
            <option value="standard">Standard (12 a 15 días) - Costo del 5% sobre el subtotal.</option>
            <option value="express">Express (5-8 días) - Costo del 7% sobre el subtotal.</option>
            <option value="premium">Premium (2-5 días) - Costo del 15% sobre el subtotal.</option>
          </select>
  
        </div>
      </div> </div>
  
  
      <div id="col3" class="  col-12"> <div class="card" style="width: 18rem;">
        <div class="card-body">
        <div class="row">


          <h5 class="card-title col">Subtotal:</h5>
          <p id="subTotal" class="col"></p>
          </div>
          <div class="row">
          <h6 class="card-subtitle mb-2 text-muted col">Costo envío:</h6>
          <p id="costoEnvio" class="col"></p>
          </div>
          <hr>
          <div class="row">
          <h6 class="card-title col">Total</h6>
          <p id="total" class="col"></p>
          </div>

`
}}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
  
          event.preventDefault();
          event.stopPropagation();
        
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  })();
let subTotal
function cuentaSubTotal() {
  for (let i = 0; i < array.articles.length; i++) {
    let carrito = array.articles[i]

  let num = document.getElementById("campoNumerico").value;
  let mult = carrito.unitCost;
  subTotal = num * mult;
  document.getElementById("subTotal").innerHTML = "UYU " + subTotal; 
  cuentaEnvio()
}}


function cuentaEnvio(){
  let tipoDeEnvio = document.getElementById("envios").value;
  
  if (tipoDeEnvio === "standard"){
     let stand = subTotal * 0.05;
     document.getElementById("costoEnvio").innerHTML ="UYU " + stand;
     document.getElementById("total").innerHTML = "UYU" + (parseInt(stand) + parseInt(subTotal));
  }else if (tipoDeEnvio === "express"){
    let expr =  Math.round(subTotal * 0.07);
    document.getElementById("costoEnvio").innerHTML ="UYU " + expr;
    document.getElementById("total").innerHTML = "UYU" + (parseInt(expr) + parseInt(subTotal));
  }else if (tipoDeEnvio === "premium"){
    let prem = subTotal * 0.15;
    document.getElementById("costoEnvio").innerHTML ="UYU " + prem;
    document.getElementById("total").innerHTML = "UYU" + (parseInt(prem) + parseInt(subTotal));
  }

}





        
        
        function formFuncion(){
            let alert = document.getElementById("alert")
            let cardName = document.getElementById("cardName")
            let cardNum = document.getElementById("cardNum")
            let vto = document.getElementById("vto")
            let cvv = document.getElementById("cvv")
        if (cardName.value && cardNum.value && vto.value && cvv.value != "" ){
                alert.innerHTML = ` <br> <hr>   <div class="alert alert-success" role="alert">
                Procesaste el pago correctamente, Gracias crack ;)
        </div>`
        
        
            }
        
        }
         
        function tBancaria(){ 
            if (document.getElementById("select1").value != 0){
                document.getElementById("alert2").innerHTML = 
                ` <br> <hr>   <div class="alert alert-success" role="alert">
                Procesaste el pago correctamente, Gracias crack ;)
        </div>`
        
            }
        
        }


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            array = resultObj.data;

            showCartInfo(array);
          




}})});
