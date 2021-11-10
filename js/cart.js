
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
              <input id="campoNumerico" onchange="cuentaSubTotal()" type="number">
              <a href="#" class="btn btn-primary">Comprar</a>
              <hr>
              <p class="card-text"><small class="text-muted">quedan ${carrito.count} unidades</small></p>
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
          
          <select id="Envios" class="col">
            <option value="Zona1">Standard (12 a 15 días) - Costo del 5% sobre el subtotal.</option>
            <option value="Zona2">Express (5-8 días) - Costo del 7% sobre el subtotal.</option>
            <option value="Zona3">Premium (2-5 días) - Costo del 15% sobre el subtotal.</option>
          </select>
  
        </div>
      </div> </div>
  
  
      <div id="col3" class="  col-12"> <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Subtotal:</h5>
          <h6 class="card-subtitle mb-2 text-muted">Costo producto</h6>
          <p id="total"></p>
          <h6 class="card-subtitle mb-2 text-muted">Costo envío</h6>
          <hr>
          <h6 class=""card-title>Total</h6>
  
      </div> </div>
    </div>
</div>
</div>`
}}


function cuentaSubTotal() {
  for (let i = 0; i < array.articles.length; i++) {
    let carrito = array.articles[i]

  let num = document.getElementById("campoNumerico").value;
  let mult = carrito.unitCost;
  let total = num * mult;
  console.log(total)
  document.getElementById("total").innerHTML = total; 
}}





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            array = resultObj.data;

            showCartInfo(array);
          




}})});