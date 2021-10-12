
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
              <input type="number">
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
          
          <select id="Envios">
            <option value="Zona1">Zona 1</option>
            <option value="Zona2">Zona 2</option>
            <option value="Zona3">Zona 3</option>
          </select>
  
        </div>
      </div> </div>
  
  
      <div id="col3" class="  col-12"> <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Subtotal:</h5>
          <h6 class="card-subtitle mb-2 text-muted">Costo producto</h6>
          <h6 class="card-subtitle mb-2 text-muted">Costo envío</h6>
          <hr>
          <h6 class=""card-title>Total</h6>
  
      </div> </div>
  
   
  
  
  
  
    </div>
  
  
  
    </div>
  
  
  
  </div>`










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
/// ESTO ES JESUCRISTO //// array.articles[0].name